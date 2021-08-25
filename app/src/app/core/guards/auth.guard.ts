import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { LOCALSTORAGE_AUTH_TOKEN_KEY } from 'src/app/shared/variables';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): true | UrlTree {
    return this.checkLogin();
  }

  checkLogin(): true | UrlTree {
    if (localStorage.getItem(LOCALSTORAGE_AUTH_TOKEN_KEY)) {
      return true;
    }

    return this.router.parseUrl('/login');
  }
}
