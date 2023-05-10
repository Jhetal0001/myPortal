/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@angular/core';
import { mapToCanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, Route } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  uidAdmin = '9ZhCxIXQSbciCUzKHBftg48adKA3';
  constructor(private authService: UserService, private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean | UrlTree> {
    return new Promise<boolean | UrlTree>((resolve) => {
      this.authService.validatorUser().subscribe(async (uid) => {
        const isValid = this.uidAdmin === uid;
        if (isValid) {
          resolve(true);
        } else {
          resolve(this.router.parseUrl('admin-login'));
        }
      });
    });
  }
}

const route: Route = {
  path: 'admin',
  canActivate: mapToCanActivate([AuthGuard]),
};
