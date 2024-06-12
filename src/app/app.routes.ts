import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'landing',
  },
  {
    path: 'landing',
    loadComponent: () =>
      import('./components/landing/landing.component').then(
        (c) => c.LandingComponent
      ),
  },
  {
    path: 'auth',
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        loadComponent: () =>
          import('./components/auth/login/login.component').then(
            (c) => c.LoginComponent
          ),
      },
      {
        path: 'sign-up',
        loadComponent: () =>
          import('./components/auth/sign-up/sign-up.component').then(
            (c) => c.SignUpComponent
          ),
      },
      {
        path: 'reset-password',
        loadComponent: () =>
          import(
            './components/auth/reset-password/reset-password.component'
          ).then((c) => c.ResetPasswordComponent),
      },
      {
        path: 'forgot-password',
        loadComponent: () =>
          import(
            './components/auth/forgot-password/forgot-password.component'
          ).then((c) => c.ForgotPasswordComponent),
      },
      {
        path: 'confirmation-required',
        loadComponent: () =>
          import(
            './components/auth/confirmation-required/confirmation-required.component'
          ).then((c) => c.ConfirmationRequiredComponent),
      },
      {
        path: 'email-confirmed',
        loadComponent: () =>
          import(
            './components/auth/email-confirmed/email-confirmed.component'
          ).then((c) => c.EmailConfirmedComponent),
      },
    ],
  },
];
