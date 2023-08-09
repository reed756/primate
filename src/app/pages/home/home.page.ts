import { Component, OnInit } from '@angular/core';
import { faTableList } from '@fortawesome/free-solid-svg-icons';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  faTableList = faTableList;
  faLayerGroup = faLayerGroup;
  faLocationArrow = faLocationArrow;

  map: mapboxgl.Map | undefined;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 2.2180;
  lng = 115.6628;


  constructor() { }

  ngOnInit() {
    this.map = new mapboxgl.Map({
      accessToken: environment.mapbox.accessToken,
      container: 'map',
      style: this.style,
      zoom: 2,
      center: [this.lng, this.lat]
    });
    this.map.on('load', () => {
      if (this.map) {
        this.map.resize();
      }
    });

    const marker1 = new mapboxgl.Marker()
      .setLngLat([121.7740, 12.8797])
      .addTo(this.map);
    const marker2 = new mapboxgl.Marker()
      .setLngLat([113.9213, 0.7893])
      .addTo(this.map);
    const marker3 = new mapboxgl.Marker()
      .setLngLat([100.9925, 15.8700])
      .addTo(this.map);
    const marker4 = new mapboxgl.Marker()
      .setLngLat([114.7277, 4.5353])
      .addTo(this.map);

  }

  onClick() {
    console.log('clicked');
  }

  onSearchChange(ev?: any) {
    console.log(ev);
  }

  handleInput(ev?: any) {
    console.log(ev);
  }

}
