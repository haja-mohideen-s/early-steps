import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { School } from '../models/school';
import { SearchFilter } from '../models/searchFilter';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {
  private http = inject(HttpClient);
  constructor() {

  }

  comparator: string = 'ILIKE';

  getSchools(schoolName: string = '', schoolLocation: string = "", limit: number = 10, offset: number = 0): Observable<School> {
    let url = this.buildUrl(environment.locationUrl, environment.datasetId, environment.schoolDatasetValue);
    url = this.addFilterToUrl(url, '', schoolName, schoolLocation);
    url = this.addParameterToUrl(url, 'limit', limit);
    url = this.addParameterToUrl(url, 'offset', offset);
    return this.http.get<School>(url);
  }

  getSchoolDetails(centreCode: string): Observable<School> {
    let url = this.buildUrl(environment.locationUrl, environment.datasetId, environment.schoolDatasetValue);
    url = this.addFilterToUrl(url, centreCode);
    return this.http.get<School>(url);
  }

  addFilterToUrl(url: string, centre_code: string = '', centre_name: string = '', centre_address: string = ''): string {
    const urlObj = new URL(url);

    const filter: SearchFilter = {
      centre_code: {
        type: this.comparator,
        value: centre_code
      },
      centre_name: {
        type: this.comparator,
        value: centre_name
      },
      centre_address: {
        type: this.comparator,
        value: centre_address
      }
    };
    urlObj.searchParams.set("filters", JSON.stringify(filter));
    return urlObj.toString();
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
