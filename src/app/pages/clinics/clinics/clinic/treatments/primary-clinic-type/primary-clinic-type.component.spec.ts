import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryClinicTypeComponent } from './primary-clinic-type.component';

describe('PrimaryClinicTypeComponent', () => {
  let component: PrimaryClinicTypeComponent;
  let fixture: ComponentFixture<PrimaryClinicTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimaryClinicTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimaryClinicTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
