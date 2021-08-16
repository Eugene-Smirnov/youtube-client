import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { validate } from 'src/app/shared/variables';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  private login: string = '';

  private password: string = '';

  public isLoginValid = false;

  public isPasswordValid = false;

  constructor(private router: Router, private authService: AuthService) {}

  loginInput(value: string) {
    this.login = value;
    this.isLoginValid = validate(this.login);
  }

  passwordInput(value: string) {
    this.password = value;
    this.isPasswordValid = validate(this.password);
  }

  loginSubmit() {
    if (!this.isLoginValid || !this.isPasswordValid) return;
    this.authService.login(this.login);
    this.router.navigate(['/search']);
  }
}
