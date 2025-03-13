import { CanActivateFn, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { inject } from '@angular/core';
import { session } from '../../utils/session';


export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const router: Router = inject(Router);
  const protectedRoutes: string[] = ['/starships'];
  return protectedRoutes.includes(state.url) && !session ? router.navigate(['/login']) : true;
};
