import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSchoolDetailsComponent } from './view-school-details.component';

describe('ViewSchoolDetailsComponent', () => {
  let component: ViewSchoolDetailsComponent;
  let fixture: ComponentFixture<ViewSchoolDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewSchoolDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewSchoolDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
