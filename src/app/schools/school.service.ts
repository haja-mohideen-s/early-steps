import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { School } from '../models/school';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {
  private http = inject(HttpClient);

  constructor() {

  }

  baseUrl = environment.locationUrl;
  schools: School[] = [];

  getSchools(limit: number = 10): Observable<School> {
    let url = this.buildUrl(environment.locationUrl, environment.datasetId, environment.datasetValue);
    url = this.addParameterToUrl(url, 'limit', limit);
    return this.http.get<School>(url);
  }

  buildUrl(locationUrl: string, datasetId: string, datasetValue: string): string {
    return `${locationUrl}?${datasetId}=${datasetValue}`;
  }

  addParameterToUrl(url: string, parameter: string, value: any): string {
    const urlObj = new URL(url);
    urlObj.searchParams.set(parameter, value.toString());
    return urlObj.toString();
  }
}
