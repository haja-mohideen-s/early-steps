import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SchoolService } from '../school.service';
import { Record, School } from '../../models/school';


@Component({
  selector: 'app-view-school-details',
  standalone: false,
  templateUrl: './view-school-details.component.html',
  styleUrl: './view-school-details.component.css'
})
export class ViewSchoolDetailsComponent implements OnInit {

  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  private readonly schoolService = inject(SchoolService);

  centreCode: string = '';
  schoolDetails: School | any;
  record: Record | any;

  ngOnInit(): void {
    this.centreCode = this.route.snapshot.paramMap.get('code') || '';
    this.schoolService.getSchoolDetails(this.centreCode).subscribe(data => {
      this.schoolDetails = data;
      this.record = this.schoolDetails?.result?.records[0];
      console.log(this.record);
    });
  }

  getVacancyStatus(status: string, departmentName: string): string {
    let div = document.createElement('div');
    div.className = 'relative inline-flex w-max items-center border font-sans font-medium rounded-md text-sm p-0.5 shadow-sm';//bg-green-500 border-green-500 text-green-500

    let span = document.createElement('span');
    span.className = "font-sans text-current text-white leading-none my-1 mx-2.5";

    div.append(span)

    if (status == 'Available') {
      div.classList.add('bg-green-500', 'border-green-500', 'text-green-500');
      span.innerText = `${departmentName} is available`;
    }
    else {
      div.classList.add('bg-red-500', 'border-red-500', 'text-red-500');
      span.innerText = `${departmentName} status : ${status}`;
    }
    return div.outerHTML;
  }
}
