import { Component, inject, Input } from '@angular/core';
import { Record } from '../../models/school';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-school-card',
  standalone: false,
  templateUrl: './school-card.component.html',
  styleUrl: './school-card.component.css'
})
export class SchoolCardComponent {
  @Input() school!: Record;
  private readonly router = inject(Router);

  navigateToSchoolDetails(centreId: string) {
    // this.router.navigate(['view-school-details', { 'code': centreId }]);
    this.router.navigate(['/view-school-details', centreId]);
  }
}
