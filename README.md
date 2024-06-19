# NG Zero Effort 🚀

NG Zero Effort is an Angular starter template that accelerates your web app development process by eliminating the need to write authentication code from scratch. With NG Zero Effort, you get a robust foundation integrated with Firebase for seamless authentication workflows and prebuilt pages for essential user management tasks.

![GitHub last commit](https://img.shields.io/github/last-commit/yourusername/NG-Zero-Effort)
![GitHub stars](https://img.shields.io/github/stars/yourusername/NG-Zero-Effort?style=social)

## Features 🛠️

### Authentication & User Management
- **Ready-to-use authentication** workflows including login, signup, email confirmation, forgot password, and password reset.
- Secure user data management powered by Firebase authentication backend.

### Pages
- **Public Pages:**
  - Login
  - Signup
  - Confirmation Required
  - Forgot Password
  - Password Reset Link Sent
- **Authenticated Pages:**
  - Dashboard

### Technologies Used

- **[Angular](https://angular.io/)** version 18 as the framework.
- **[Firebase](https://firebase.google.com/)** for seamless authentication and backend services.
- **[Elf](https://github.com/yourusername/elf)** as a state manager.
- **[Tailwind CSS](https://tailwindcss.com/)** for rapid and utility-first CSS.
- **[Angular Material](https://material.angular.io/)** for UI components.
- **[ngx-translate](https://github.com/ngx-translate/core)** for multilingual support (English and Italian included).

## Getting Started 🛫

1. **Clone the repository:**

```bash 
git clone https://github.com/yourusername/ng-zero-effort.git  

cd ng-zero-effort
```
2. **Install dependencies:**
```bash
npm install
```
3. **Configure Firebase:**
- Replace the Firebase configuration in `app.config.ts` with your own Firebase credentials.
```typescript
provideFirebaseApp(() =>
   initializeApp({
     projectId: 'your-project-id',
     appId: 'your-app-id',
     storageBucket: 'your-storage-bucket',
     apiKey: 'your-api-key',
     authDomain: 'your-auth-domain',
     messagingSenderId: 'your-sender-id',
   })
);
```
4. **Start the development server:**
```bash
npm start
```
5. **Enjoy:**
Your app should now be running locally. Navigate to http://localhost:4200 to see it in action.

## Contributing 🤝
If you have suggestions or improvements, feel free to contact me at gianluca.paris@outlook.com or open a pull request. Contributions are welcomed!