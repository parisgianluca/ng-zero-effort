import { Dialog } from '@angular/cdk/dialog';
import { Injectable, inject } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { catchError, from, of, switchMap, tap } from 'rxjs';
import { NotificationSeverity } from '../../app.const';
import { NotificationRepository } from '../../state/notifications.repository';
import { AuthRepository } from '../../state/auth.repository';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  auth = inject(Auth);
  dialog = inject(Dialog);
  router = inject(Router);
  notificationRepository = inject(NotificationRepository);
  translateService = inject(TranslateService);
  authRepository = inject(AuthRepository);

  signUp(email: string, password: string) {
    this.authRepository.setLoading(true);

    return from(
      createUserWithEmailAndPassword(this.auth, email.trim(), password.trim())
    ).pipe(
      switchMap((userCredential) => {
        return from(sendEmailVerification(userCredential.user)).pipe(
          tap(() => {
            this.authRepository.setLoading(false);

            this.router.navigateByUrl('/auth/confirmation-required');
          }),
          catchError((err) => this.handleFirebaseAuthError(err))
        );
      }),
      catchError((err) => this.handleFirebaseAuthError(err))
    );
  }

  login(email: string, password: string) {
    this.authRepository.setLoading(true);

    return from(signInWithEmailAndPassword(this.auth, email, password)).pipe(
      tap(() => {
        this.authRepository.setLoading(false);

        this.router.navigateByUrl('/private');
      }),
      catchError((err) => this.handleFirebaseAuthError(err))
    );
  }

  logout() {
    this.authRepository.setLoading(true);

    return from(signOut(this.auth)).pipe(
      tap(() => {
        this.authRepository.setLoading(false);

        this.router.navigateByUrl('/auth/login');
      }),
      catchError((err) => this.handleFirebaseAuthError(err))
    );
  }

  sendPasswordResetEmail(email: string) {
    this.authRepository.setLoading(true);

    return from(sendPasswordResetEmail(this.auth, email)).pipe(
      tap(() => {
        this.authRepository.setLoading(false);

        this.router.navigateByUrl('/auth/password-link-sent');
      }),
      catchError((err) => this.handleFirebaseAuthError(err))
    );
  }

  private handleFirebaseAuthError({ code }: { code: string }) {
    this.authRepository.setLoading(false);

    this.notificationRepository.addNotification({
      message: this.translateService.instant(`errorMessages.${code}`),
      severity: NotificationSeverity.ERROR,
    });
    return of();
  }
}
