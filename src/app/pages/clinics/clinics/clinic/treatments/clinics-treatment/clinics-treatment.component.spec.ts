import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicsTreatmentComponent } from './clinics-treatment.component';

describe('ClinicsTreatmentComponent', () => {
  let component: ClinicsTreatmentComponent;
  let fixture: ComponentFixture<ClinicsTreatmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicsTreatmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicsTreatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
