import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroLanderComponent } from './hero-lander.component';

describe('HeroLanderComponent', () => {
  let component: HeroLanderComponent;
  let fixture: ComponentFixture<HeroLanderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroLanderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroLanderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
