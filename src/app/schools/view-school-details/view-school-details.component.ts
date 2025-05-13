import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SchoolService } from '../services/school.service';
import { Record, School } from '../../models/school';
import { SchoolFees } from '../../models/schoolFees';
import { FeesService } from '../services/fees.service';
import * as L from 'leaflet';
import { AddressService } from '../services/address.service';


@Component({
  selector: 'app-view-school-details',
  standalone: false,
  templateUrl: './view-school-details.component.html',
  styleUrl: './view-school-details.component.css'
})
export class ViewSchoolDetailsComponent implements OnInit {

  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  private readonly schoolService = inject(SchoolService);
  private readonly feeService = inject(FeesService);
  private readonly addressService = inject(AddressService);

  centreCode: string = '';
  schoolDetails: School | any;
  record: Record | any;
  schoolFees: SchoolFees | any;

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.centreCode = this.route.snapshot.paramMap.get('code') || '';
    this.schoolService.getSchoolDetails(this.centreCode).subscribe(data => {
      this.schoolDetails = data;
      this.record = this.schoolDetails?.result?.records[0];
      this.initMap(this.record);

    });
    this.feeService.getSchoolFees(this.centreCode).subscribe(data => {
      this.schoolFees = data;
    });
  }

  getVacancyStatus(status: string, departmentName: string): string {
    let div = document.createElement('div');
    div.className = 'relative inline-flex w-max items-center border font-sans font-medium rounded-md text-sm p-0.5 shadow-sm';//bg-green-500 border-green-500 text-green-500

    let span = document.createElement('span');
    span.className = "font-sans text-current text-white leading-none my-1 mx-2.5";

    div.append(span)

    if (status == 'Available') {
      div.classList.add('bg-green-400', 'border-green-400', 'text-green-400');
      span.innerText = `${departmentName} is available`;
    }
    else {
      div.classList.add('bg-red-400', 'border-red-400', 'text-red-400');
      span.innerText = `${departmentName} status : ${status}`;
    }
    return div.outerHTML;
  }

  private initMap(data: Record): void {
    const map = L.map('map', {
      center: L.latLng(1.2868108, 103.8545349),
      zoom: 16
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    const addressSearchResults = new L.LayerGroup().addTo(map);
    this.showMap(data, map);
    tiles.addTo(map);
  }

  private showMap(data: Record, map: L.Map) {
    this.addressService.getLocation(data.centre_code).subscribe(item => {
      const addresses = item;
      if (addresses.latitude != 0) {
        map.setView([addresses.latitude, addresses.longitude], 16);
        L.marker([addresses.latitude, addresses.longitude]).addTo(map)
          .bindPopup(`<b>${data.centre_name}</b>`).openPopup();
      }
    });
  }

  normaliseUrl(url: string): string {
    if (url && url.startsWith('www.')) {
      return url = 'https://' + url;
    }
    return url;
  }
}
