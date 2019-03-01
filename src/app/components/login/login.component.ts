import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { AuthService} from '../../services/auth.service';
import { Router, Params } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide = true;
  constructor(public fb: FormBuilder, public auth: AuthService, private router: Router) { }
  public loginForm: FormGroup = this.fb.group({
    email: ['', [ Validators.required,  Validators.email]],
    password: ['', [
      Validators.required,
      Validators.minLength(6)
    ]],
  });
  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }
  tryLogin() {
    this.auth.doLogin(this.email.value, this.password.value)
      .then(res => {
        this.router.navigate(['/home']);
      }, err => {
        console.log(err);
      });
  }
  get info() { return this.loginForm.controls}
}
