import { Component, OnInit } from '@angular/core';
import { SchoolService } from '../school.service';
import { School } from '../../models/school';
import { SchoolCardComponent } from '../school-card/school-card.component';


@Component({
  selector: 'app-list-schools',
  standalone: false,
  templateUrl: './list-schools.component.html',
  styleUrl: './list-schools.component.css'
})
export class ListSchoolsComponent implements OnInit {

  schools: School | undefined;
  constructor(private schoolService: SchoolService) {

  }
  ngOnInit(): void {
    this.schoolService.getSchools().subscribe(data => {
      this.schools = data;
      console.log(this.schools);
    });
  }
}
