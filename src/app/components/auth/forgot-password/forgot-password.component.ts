import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageSelectorComponent } from '../../shared/language-selector/language-selector.component';
import { AuthService } from '../../../services/auth/auth.service';
import { AuthRepository } from '../../../state/auth.repository';
import { AsyncPipe } from '@angular/common';
import { LoadingComponent } from '../../shared/loading/loading.component';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [
    RouterLink,
    MatInputModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatButtonModule,
    TranslateModule,
    LanguageSelectorComponent,
    AsyncPipe,
    LoadingComponent,
  ],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss',
})
export class ForgotPasswordComponent {
  authService = inject(AuthService);
  authRepository = inject(AuthRepository);

  loading$ = this.authRepository.loading$;

  forgotPasswordForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
  });

  onForgotPassword() {
    const { email } = this.forgotPasswordForm.value;

    this.authService.sendPasswordResetEmail(email!).subscribe();
  }
}
