import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SchoolService } from '../school.service';
import { Record, School } from '../../models/school';
import { SchoolFees } from '../../models/schoolFees';
import { FeesService } from '../fees.service';


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

  centreCode: string = '';
  schoolDetails: School | any;
  record: Record | any;
  schoolFees: SchoolFees | any;

  ngOnInit(): void {
    this.centreCode = this.route.snapshot.paramMap.get('code') || '';
    this.schoolService.getSchoolDetails(this.centreCode).subscribe(data => {
      this.schoolDetails = data;
      this.record = this.schoolDetails?.result?.records[0];
    });
    this.feeService.getSchoolFees(this.centreCode).subscribe(data => {
      this.schoolFees = data;
    });
    // this.loadMap();
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

  // loadMap() {
  //   const datasetId = "d_5d668e3f544335f8028f546827b773b4"
  //   const url = "https://api-open.data.gov.sg/v1/public/api/datasets/" + datasetId + "/poll-download";

  //   try {
  //     fetch(url).then(data => {
  //       if (data.ok) {
  //         data.json().then(res => {
  //           const jsonData = res;
  //           fetch(jsonData['data']['url']).then(pos => {
  //             console.log(pos);
  //           });
  //         });
  //       }
  //     });

  //   } catch (e) {
  //     console.error(e);
  //   }
  // }
}
