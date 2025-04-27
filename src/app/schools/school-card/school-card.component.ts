import { Component, inject, Input } from '@angular/core';
import { Record } from '../../models/school';
import { Router, RouterLink } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


@Component({
  selector: 'app-school-card',
  standalone: false,
  templateUrl: './school-card.component.html',
  styleUrl: './school-card.component.css'
})
export class SchoolCardComponent {
  @Input() school!: Record;
  private readonly router = inject(Router);
  private readonly sanitize = inject(DomSanitizer);

  navigateToSchoolDetails(centreId: string) {
    // this.router.navigate(['view-school-details', { 'code': centreId }]);
    this.router.navigate(['/view-school-details', centreId]);
  }

  renderVacancies(): SafeHtml {

    let status = '';
    status += this.getVacancyStatus(this.school.infant_vacancy_current_month, 'IC', 'Infant Care');
    status += this.getVacancyStatus(this.school.pg_vacancy_current_month, 'PG', 'Play Group');
    status += this.getVacancyStatus(this.school.n1_vacancy_current_month, 'N1', 'N1');
    status += this.getVacancyStatus(this.school.n2_vacancy_current_month, 'N2', 'N2');
    status += this.getVacancyStatus(this.school.k1_vacancy_current_month, 'K1', 'K1');
    status += this.getVacancyStatus(this.school.k2_vacancy_current_month, 'K2', 'K2');
    return this.sanitize.bypassSecurityTrustHtml(status);
  }

  getVacancyStatus(status: string, btnText: string, category: string) {
    const btn = document.createElement('button');
    btn.setAttribute('title', status == 'Available' ? `${category} slots available` : `${category} status: ${status}`);
    btn.className = 'inline-grid place-items-center px-1 mx-1 align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in text-sm min-w-[32px] min-h-[32px] rounded-md shadow-sm';
    btn.classList.add(status == 'Available' ? 'bg-green-300' : 'bg-red-300');
    btn.textContent = btnText;
    return btn.outerHTML;
  }
}
