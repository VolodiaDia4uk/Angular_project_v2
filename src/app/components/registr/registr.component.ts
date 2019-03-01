import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import { Router, Params } from '@angular/router';
import { MustMatch} from "./must-match.validator";

@Component({
  selector: 'app-registr',
  templateUrl: './registr.component.html',
  styleUrls: ['./registr.component.css']
})
export class RegistrComponent  {
  constructor(public fb: FormBuilder, public auth: AuthService,     private router: Router) { }
  public registrForm: FormGroup = this.fb.group({
    firstName: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
    lastName: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
    email: ['', [ Validators.required,  Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmpassword: ['', [Validators.required, Validators.minLength(3)]],
  },
{
  validator: MustMatch('password', 'confirmpassword')
}
);

  get email() { return this.registrForm.get('email'); }
  get password() { return this.registrForm.get('password');}
  tryRegistr() {
    return this.auth.doRegistr(this.email.value, this.password.value)
       .then(res => {
         this.router.navigate(['/login']);
         alert('your account has been created');
       }, err => {
         this.router.navigate(['/registr']);
         alert(err);
       });
  }
}
