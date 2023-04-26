/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

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
