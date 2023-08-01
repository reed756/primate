import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SplashScreen } from '@capacitor/splash-screen';
import { MenuController } from '@ionic/angular';
import { register } from 'swiper/element/bundle';

register();
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home' },
    { title: 'Primate Info', url: '/primate-info' },
    { title: 'Primates Guide', url: '/primates-guide' },
    { title: 'My Sightings', url: '/my-sightings' },
    { title: 'My Account', url: '/my-account' },
    { title: 'Feedback', url: '/feedback' },
    { title: 'Language', url: '/language' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(private menu: MenuController, private router: Router) {
    this.initApp()
  }

  async initApp() {
    await SplashScreen.hide();
    await SplashScreen.show({
      autoHide: false,
    });
    await SplashScreen.show({
      showDuration: 2000,
      autoHide: true,
    });
  }

  isRouteActive(url: string): boolean {
    return this.router.isActive(url, true);
  }

  closeMenu() {
    this.menu.close();
  }
}
