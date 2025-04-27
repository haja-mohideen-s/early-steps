import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewSchoolDetailsComponent } from './view-school-details/view-school-details.component';
import { ListSchoolsComponent } from './list-schools/list-schools.component';
import { SchoolCardComponent } from './school-card/school-card.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ViewSchoolDetailsComponent, ListSchoolsComponent, SchoolCardComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ViewSchoolDetailsComponent, ListSchoolsComponent, SchoolCardComponent]
})
export class SchoolsModule {

}
