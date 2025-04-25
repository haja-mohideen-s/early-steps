import { Routes } from '@angular/router';
import { ViewSchoolDetailsComponent } from './schools/view-school-details/view-school-details.component';
import { ListSchoolsComponent } from './schools/list-schools/list-schools.component';

export const routes: Routes = [
    { path: 'view-school-details/:code', component: ViewSchoolDetailsComponent },
    { path: '', component: ListSchoolsComponent }
];
