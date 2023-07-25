import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

  showPassword: boolean = false;

  password = '';

  signInForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email, Validators.minLength(5), Validators.maxLength(50)]],
      password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]]
    })
  }

  ngOnInit() {

  }

  onClick() {

  }

  signIn() {
    // TODO: Use EventEmitter with form value
    console.log(this.signInForm);
    console.log(this.signInForm?.value);
  }

  togglePassword() {
    console.log('hello');
    this.showPassword = !this.showPassword;
  }
}
