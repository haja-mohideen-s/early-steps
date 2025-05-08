import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolListingsComponent } from './school-listings.component';

describe('SchoolListingsComponent', () => {
  let component: SchoolListingsComponent;
  let fixture: ComponentFixture<SchoolListingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchoolListingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
