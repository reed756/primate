import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

  showPassword: boolean = false;

  password = '';

  signInForm: FormGroup;

  constructor(private fb: FormBuilder, private alertCtrl: AlertController, private loadingCtrl: LoadingController, private authService: AuthService, private router: Router) {
    this.signInForm = this.fb.group({
      email: ['reedandj1@gmail.com', [Validators.required, Validators.email, Validators.minLength(5), Validators.maxLength(50)]],
      password: ['123456', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]]
    })
  }

  ngOnInit() {

  }

  forgotPassword() {
    this.router.navigateByUrl('/forgotten-password', { replaceUrl: true })
  }

  signUp() {
    this.router.navigateByUrl('/sign-up', { replaceUrl: true })
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alertCtrl.create({
      header,
      message,
      buttons: ['OK']
    })
    await alert.present();
  }

  async signIn() {
    const loading = await this.loadingCtrl.create();
    await loading.present();

    const user = await this.authService.login(
      this.signInForm.getRawValue()
    )
    console.log("rocket ~ login.page.ts:60 ~ LoginPage ~ login ~ user", user);
    await loading.dismiss();

    if (user) {
      this.router.navigateByUrl('/home', { replaceUrl: true })
    } else {
      this.showAlert('Login failed', 'Please try again');
    }
  }

  togglePassword() {
    console.log('hello');
    this.showPassword = !this.showPassword;
  }
}
