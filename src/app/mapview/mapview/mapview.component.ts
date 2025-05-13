import { Component, inject, OnInit } from '@angular/core';
import { SchoolLocation } from '../../models/schoolLocation';
import { AddressService } from '../../schools/services/address.service';
import * as L from 'leaflet';
import * as M from 'leaflet-control-geocoder';
import { count } from 'rxjs';


@Component({
  selector: 'app-mapview',
  imports: [],
  templateUrl: './mapview.component.html',
  styleUrl: './mapview.component.css'
})
export class MapviewComponent implements OnInit {

  SchoolLocations: SchoolLocation[] = [];


  constructor(private addressService: AddressService) {

  }
  ngOnInit(): void {
    this.addressService.getAllLocations().subscribe(data => {
      this.SchoolLocations = data;
      const map = this.initMap(this.SchoolLocations);
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          map.setView([lat, lng], 16);
        });
      }
    });
  }

  goToListing() {
    window.location.href = '/';
  }

  private initMap(data: SchoolLocation[]): L.Map {
    const map = L.map('map', {
      center: L.latLng(1.2868108, 103.8545349),
      zoom: 16
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    tiles.addTo(map);

    const geocoder = M.geocoder({
      defaultMarkGeocode: false,
      position: 'topleft',
      placeholder: 'Search for address or postal code',
      geocoder: new M.geocoders.Nominatim({
        geocodingQueryParams: {
          countrycodes: 'sg'
        }
      })
    })
      .on('markgeocode', (e: any) => {
        const latlng = e.geocode.center;
        L.marker(latlng).addTo(map).bindPopup(e.geocode.name).openPopup();
        const bbox = e.geocode.bbox;
        const poly = L.polygon([
          [bbox.getSouthWest().lat, bbox.getSouthWest().lng],
          [bbox.getNorthWest().lat, bbox.getNorthWest().lng],
          [bbox.getNorthEast().lat, bbox.getNorthEast().lng],
          [bbox.getSouthEast().lat, bbox.getSouthEast().lng]
        ]);
        map.fitBounds(poly.getBounds());
      })
      .addTo(map);

    const addressSearchResults = new L.LayerGroup().addTo(map);
    this.showMap(data, map);

    return map;
  }

  private showMap(data: SchoolLocation[], map: L.Map) {

    interface MarkerMetaData {
      marker: L.Marker;
      name: string;
      code: string;
    };
    const markers: MarkerMetaData[] = [];
    console.log('starting main loop');
    data.forEach(element => {

      if (element.coordinates.latitude == 0)
        return;

      const marker = L.marker([element.coordinates.latitude, element.coordinates.longitude]);
      markers.push({
        marker: marker,
        name: element.centreName,
        code: element.centreCode
      });
      marker.addTo(map);

    });

    markers.forEach(marker => {
      marker.marker.bindPopup(`<b>${marker.name}</b><br><a target="_blank" href="/view-school-details/${marker.code}">View Details</a>`);
    });
  }
}