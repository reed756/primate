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

  map!: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 2.2180;
  lng = 115.6628;

  mapfilter: string = 'all'

  primateProjects: any = [
    {
      title: 'Primate Project 1',
      description: 'Primate Project 1 description',
      location: [121.7740, 12.8797],
      country: 'Indonesia',
      url: 'Primate Project 1 url',
      logo: '../../../assets/indonesia.svg',
      isFavourite: true,
      hasBeen: true
    },
    {
      title: 'Primate Project 2',
      description: 'Primate Project 1 description',
      location: [113.9213, 0.7893],
      country: 'Phillipines',
      url: 'Primate Project 1 url',
      logo: '../../../assets/phillipines.svg',
      isFavourite: false,
      hasBeen: false
    },
    {
      title: 'Primate Project 3',
      description: 'Primate Project 1 description',
      location: [100.9925, 15.8700],
      country: 'Papua New Guinea',
      url: 'Primate Project 1 url',
      logo: '../../../assets/papua-new-guinea.svg',
      isFavourite: false,
      hasBeen: true
    },
    {
      title: 'Primate Project 4',
      description: 'Primate Project 1 description',
      location: [114.7277, 4.5353],
      country: 'Indonesia',
      url: 'Primate Project 1 url',
      logo: '../../../assets/indonesia.svg',
      isFavourite: false,
      hasBeen: false
    },
    {
      title: 'Primate Project 5',
      description: 'Primate Project 1 description',
      location: [115.7277, 5.5353],
      country: 'Thailand',
      url: 'Primate Project 1 url',
      logo: '../../../assets/brunei.svg',
      isFavourite: false,
      hasBeen: true
    }
  ]

  results: any[] = [];

  markers: any[] = [];

  constructor() { }

  ngOnInit() {
    this.loadMap();

    this.primateProjects.forEach((project: any) => {
      const marker = new mapboxgl.Marker()
        .setLngLat(project.location)
        .addTo(this.map);

      this.markers.push({ marker, isFavourite: project.isFavourite, hasBeen: project.hasBeen });
    });
  }

  updateMapFilter(filter: string) {
    this.mapfilter = filter;
    this.markers.forEach((marker: any) => {
      if ((filter === 'favourites' && marker.isFavourite) || (filter === 'been' && marker.hasBeen)) {
        marker.marker.addTo(this.map);
      } else if (filter === 'all') {
        marker.marker.addTo(this.map);
      } else {
        marker.marker.remove();
      }
    });
  }

  onSearchChange(ev?: any) {
    console.log(ev);
  }

  handleInput(ev?: any) {
    if (ev.target.value.length === 0) {
      this.results = [];
    } else {
      const query = ev.target.value.toLowerCase();
      this.results = this.primateProjects.filter((d: any) => d.title.toLowerCase().indexOf(query) > -1);
    }
  }

  loadMap() {
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
  }

}
