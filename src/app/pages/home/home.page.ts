import { Component, OnInit } from '@angular/core';
import { faTableList } from '@fortawesome/free-solid-svg-icons';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { ModalController } from '@ionic/angular';
import * as mapboxgl from 'mapbox-gl';
import { ProjectModalComponent } from 'src/app/modals/project-modal/project-modal.component';
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
      url: '../../../assets/project-img/project-img-1.svg',
      logo: '../../../assets/flags/indonesia.svg',
      isFavourite: true,
      hasBeen: true
    },
    {
      title: 'Primate Project 2',
      description: 'Primate Project 1 description',
      location: [113.9213, 0.7893],
      country: 'Phillipines',
      url: '../../../assets/project-img/project-img-2.svg',
      logo: '../../../assets/flags/phillipines.svg',
      isFavourite: false,
      hasBeen: false
    },
    {
      title: 'Primate Project 3',
      description: 'Primate Project 1 description',
      location: [100.9925, 15.8700],
      country: 'Papua New Guinea',
      url: '../../../assets/project-img/project-img-3.svg',
      logo: '../../../assets/flags/papua-new-guinea.svg',
      isFavourite: false,
      hasBeen: true
    },
    {
      title: 'Primate Project 4',
      description: 'Primate Project 1 description',
      location: [114.7277, 4.5353],
      country: 'Indonesia',
      url: '../../../assets/project-img/project-img-4.svg',
      logo: '../../../assets/flags/indonesia.svg',
      isFavourite: false,
      hasBeen: false
    },
    {
      title: 'Primate Project 5',
      description: 'Primate Project 1 description',
      location: [115.7277, 5.5353],
      country: 'Thailand',
      url: '../../../assets/project-img/project-img-1.svg',
      logo: '../../../assets/flags/brunei.svg',
      isFavourite: false,
      hasBeen: true
    }
  ]

  results: any[] = [];

  markers: any[] = [];

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    this.loadMap();

    this.primateProjects.forEach(async (project: any) => {
      const marker = new mapboxgl.Marker()
        .setLngLat(project.location)
        .addTo(this.map)

      marker.getElement().addEventListener("click", async () => {
        console.log("function");
        const modal = await this.modalCtrl.create({
          component: ProjectModalComponent,
          initialBreakpoint: 0.5,
          breakpoints: [0, 0.5, 0.7, 0.9],
          componentProps: {
            project: project
          }
        });
        modal.present();
      });

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
