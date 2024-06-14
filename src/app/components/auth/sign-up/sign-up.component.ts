import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AuthService } from '../../../services/auth/auth.service';
import { LanguageSelectorComponent } from '../../shared/language-selector/language-selector.component';
import { tap } from 'rxjs';
import { AuthRepository } from '../../../state/auth.repository';
import { AsyncPipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { LoadingComponent } from '../../shared/loading/loading.component';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    RouterModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatButtonModule,
    TranslateModule,
    LanguageSelectorComponent,
    AsyncPipe,
    MatIconModule,
    LoadingComponent,
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  authService = inject(AuthService);
  router = inject(Router);
  translateService = inject(TranslateService);
  authRepository = inject(AuthRepository);

  loading$ = this.authRepository.loading$;

  signUpForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  onSignUp() {
    const { email, password } = this.signUpForm.value;

    this.authService.signUp(email!, password!).subscribe();
  }
}
