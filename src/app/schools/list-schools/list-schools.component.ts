import { Component, OnInit } from '@angular/core';
import { SchoolService } from '../school.service';
import { School } from '../../models/school';


@Component({
  selector: 'app-list-schools',
  standalone: false,
  templateUrl: './list-schools.component.html',
  styleUrl: './list-schools.component.css'
})
export class ListSchoolsComponent implements OnInit {

  schools: School | undefined;

  searchSchoolName: string = '';
  searchSchoolLocation: string = '';
  pageSize: number = 10;

  constructor(private schoolService: SchoolService) {

  }
  ngOnInit(): void {
    this.schoolService.getSchools().subscribe(data => {
      this.schools = data;
    });
  }

  refreshData() {
    this.schoolService.getSchools(this.searchSchoolName, this.searchSchoolLocation, this.pageSize).subscribe(data => {
      this.schools = data;
    });
  }
}
