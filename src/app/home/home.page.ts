import { Component } from '@angular/core';
import { Map, latLng, tileLayer, Layer, marker } from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  map: Map;
  lat: any = 3.4535815;
  lng: any = -76.5207699;
  constructor() {
    this.loadmap();
  }
  loadmap() {
    setTimeout(() => {
      this.map = new Map('map').setView([this.lat, this.lng], 10);

      tileLayer('assets/mapa/{z}/{x}/{y}.png', {
         // tslint:disable-next-line
        attribution: 'Mapa offline',
        maxZoom: 15,
        minZoom: 10
      }).addTo(this.map);

    }, 50);
  }
}
