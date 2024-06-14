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
        path: 'password-link-sent',
        loadComponent: () =>
          import(
            './components/auth/password-link-sent/password-link-sent.component'
          ).then((c) => c.PasswordLinkSentComponent),
      },
    ],
  },
  {
    path: 'private',
    loadComponent: () =>
      import('./components/private/layout/layout.component').then(
        (c) => c.LayoutComponent
      ),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./components/private/dashboard/dashboard.component').then(
            (c) => c.DashboardComponent
          ),
      },
    ],
  },
];
