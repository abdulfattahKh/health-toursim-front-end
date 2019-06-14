import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicInformationComponent } from './clinic-information.component';

describe('ClinicInformationComponent', () => {
  let component: ClinicInformationComponent;
  let fixture: ComponentFixture<ClinicInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
