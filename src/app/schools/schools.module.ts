import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewSchoolDetailsComponent } from './view-school-details/view-school-details.component';
import { SchoolListingsComponent } from './school-listings/school-listings.component';
import { SchoolCardComponent } from './school-card/school-card.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '../layout/layout.module';



@NgModule({
  declarations: [ViewSchoolDetailsComponent, SchoolListingsComponent, SchoolCardComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    LayoutModule
  ],
  exports: [ViewSchoolDetailsComponent, SchoolListingsComponent, SchoolCardComponent]
})
export class SchoolsModule {

}
