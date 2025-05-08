import { Routes } from '@angular/router';
import { ViewSchoolDetailsComponent } from './schools/view-school-details/view-school-details.component';
import { SchoolListingsComponent } from './schools/school-listings/school-listings.component';

export const routes: Routes = [
    { path: 'view-school-details/:code', component: ViewSchoolDetailsComponent },
    { path: '', component: SchoolListingsComponent }
];
