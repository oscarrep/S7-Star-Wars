import { CanActivateFn, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { inject } from '@angular/core';
import { session } from '../../utils/session';


export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const router: Router = inject(Router);
  const isLogged = !!session;

  if (!isLogged && state.url.startsWith('/starships')) {
    router.navigate(['/login']);
    return false;
  }
  else return true;
};
