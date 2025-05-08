import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { SearchFilter } from '../../models/searchFilter';
import { Observable } from 'rxjs';
import { SchoolFees } from '../../models/schoolFees';


@Injectable({
  providedIn: 'root'
})
export class FeesService {
  private http = inject(HttpClient);

  constructor() {

  }

  comparator: string = 'ILIKE';

  getSchoolFees(centreCode: string): Observable<SchoolFees> {
    let url = this.buildUrl(environment.locationUrl, environment.datasetId, environment.feeDatasetValue);
    url = this.addFilterToUrl(url, centreCode);
    return this.http.get<SchoolFees>(url);
  }

  addFilterToUrl(url: string, centre_code: string = ''): string {
    const urlObj = new URL(url);

    const filter: SearchFilter = {
      centre_code: {
        type: this.comparator,
        value: centre_code
      }
    };
    urlObj.searchParams.set("filters", JSON.stringify(filter));
    return urlObj.toString();
  }

  buildUrl(locationUrl: string, datasetId: string, datasetValue: string): string {
    return `${locationUrl}?${datasetId}=${datasetValue}`;
  }


}
