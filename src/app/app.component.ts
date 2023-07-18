import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
    { title: 'Primate Info', url: '/' },
    { title: 'Primates Guide', url: '/' },
    { title: 'My Sightings', url: '/' },
    { title: 'My Account', url: '/' },
    { title: 'Feedback', url: '/' },
    { title: 'Language', url: '/' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(private menu: MenuController, private router: Router,) { }

  isRouteActive(url: string): boolean {
    return this.router.isActive(url, true);
  }

  closeMenu() {
    this.menu.close();
  }
}
