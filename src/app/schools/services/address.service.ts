import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { Address, GeoCoordinates } from '../../models/address';
import { SchoolLocation } from '../../models/schoolLocation';


@Injectable({
  providedIn: 'root'
})
export class AddressService {
  private http = inject(HttpClient);

  constructor() {

  }

  getLocation(postalCode: string): Observable<GeoCoordinates> {
    const url = `${environment.onemapUrl}${postalCode}`;
    return this.http.get<GeoCoordinates>(url);
  }

  getAllLocations(): Observable<SchoolLocation[]> {
    const url = `${environment.onemapUrl}`;
    return this.http.get<SchoolLocation[]>(url);
  }
}
