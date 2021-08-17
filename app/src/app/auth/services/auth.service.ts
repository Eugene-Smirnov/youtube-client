import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DEFAULT_USER, LOCALSTORAGE_AUTH_TOKEN_KEY } from 'src/app/shared/variables';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user: BehaviorSubject<UserModel> = new BehaviorSubject<UserModel>(DEFAULT_USER);

  items$: Observable<UserModel> = this.user.pipe();

  constructor() {
    this.getLogin();
  }

  getLogin(): void {
    const login = localStorage.getItem(LOCALSTORAGE_AUTH_TOKEN_KEY);
    if (login) this.user.next({ login, isAuthorized: true });
    else this.user.next(DEFAULT_USER);
  }

  login(login: string) {
    this.user.next({ login, isAuthorized: true });
    localStorage.setItem(LOCALSTORAGE_AUTH_TOKEN_KEY, login);
  }

  logout() {
    this.user.next(DEFAULT_USER);
    localStorage.removeItem(LOCALSTORAGE_AUTH_TOKEN_KEY);
  }
}
