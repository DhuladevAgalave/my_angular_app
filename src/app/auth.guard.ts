import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  // check login (simple example)
  const isLoggedIn = localStorage.getItem('login');

  if (isLoggedIn) {
    return true;   // allow access
  } else {
    router.navigate(['/login']);  // redirect
    return false;
  }
};
