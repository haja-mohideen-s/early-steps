import { Routes } from '@angular/router';
import { ViewSchoolDetailsComponent } from './schools/view-school-details/view-school-details.component';
import { SchoolListingsComponent } from './schools/school-listings/school-listings.component';
import { MapviewComponent } from './mapview/mapview/mapview.component';

export const routes: Routes = [
    { path: 'view-school-details/:code', component: ViewSchoolDetailsComponent },
    { path: 'map-view', component: MapviewComponent },
    { path: '', component: SchoolListingsComponent }
];
