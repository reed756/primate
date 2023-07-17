import { Component } from '@angular/core';
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
    { title: 'Primate Info', url: '/home' },
    { title: 'Primates Guide', url: '/home' },
    { title: 'My Sightings', url: '/home' },
    { title: 'My Account', url: '/home' },
    { title: 'Feedback', url: '/home' },
    { title: 'Language', url: '/home' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(private menu: MenuController) { }

  closeMenu() {
    this.menu.close();
  }
}
