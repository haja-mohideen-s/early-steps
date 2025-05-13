import { Component, OnInit } from '@angular/core';
import { SchoolService } from '../services/school.service';
import { School } from '../../models/school';


@Component({
  selector: 'app-school-listings',
  standalone: false,
  templateUrl: './school-listings.component.html',
  styleUrl: './school-listings.component.css'
})
export class SchoolListingsComponent implements OnInit {

  schools: School | undefined;

  searchSchoolName: string = '';
  searchSchoolLocation: string = '';
  pageSize: number = 10;
  currentPage: number = 1;
  totalRecords: number = 0;
  totalPages: number = 0;
  showLoading: boolean = false;

  offset: number = 0;

  constructor(private schoolService: SchoolService) {

  }
  ngOnInit(): void {
    this.schoolService.getSchools().subscribe(data => {
      this.schools = data;
      this.totalRecords = this.schools.result.total;
      this.totalPages = Math.ceil(this.totalRecords / this.pageSize);
    });
  }

  refreshData() {
    this.currentPage = 1;
    this.showLoading = true;
    this.schoolService.getSchools(this.searchSchoolName, this.searchSchoolLocation, this.pageSize).subscribe(data => {
      this.schools = data;
      this.totalRecords = this.schools.result.total;
      this.totalPages = Math.ceil(this.totalRecords / this.pageSize);
      setTimeout(() => { this.showLoading = false; }, 500);
    });
  }

  reloadPageData() {
    this.showLoading = true;
    this.offset = (this.currentPage - 1) * this.pageSize;
    this.schoolService.getSchools(this.searchSchoolName, this.searchSchoolLocation, this.pageSize, this.offset).subscribe(data => {
      this.schools = data;
      setTimeout(() => { this.showLoading = false; }, 500);
    });
  }

  goToPreviousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.reloadPageData();
    }
  }
  goToNextPage() {
    if (this.totalRecords - this.offset > this.pageSize) {
      this.currentPage++;
      this.reloadPageData();
    }
  }

  goToMaps() {
    window.location.href = '/map-view';
  }
}
