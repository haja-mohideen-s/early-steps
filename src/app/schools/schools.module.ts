import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewSchoolDetailsComponent } from './view-school-details/view-school-details.component';
import { ListSchoolsComponent } from './list-schools/list-schools.component';
import { SchoolCardComponent } from './school-card/school-card.component';
import { FormsModule } from '@angular/forms';
import { HeroLanderComponent } from './hero-lander/hero-lander.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ViewSchoolDetailsComponent, ListSchoolsComponent, SchoolCardComponent, HeroLanderComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [ViewSchoolDetailsComponent, ListSchoolsComponent, SchoolCardComponent, HeroLanderComponent]
})
export class SchoolsModule {

}
