import { Component, OnInit } from '@angular/core';
import { faTableList } from '@fortawesome/free-solid-svg-icons';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  faTableList = faTableList;
  faLayerGroup = faLayerGroup;
  faLocationArrow = faLocationArrow;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    console.log('clicked');
  }

}
