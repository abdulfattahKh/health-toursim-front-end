import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicPicturesComponent } from './clinic-pictures.component';

describe('ClinicPicturesComponent', () => {
  let component: ClinicPicturesComponent;
  let fixture: ComponentFixture<ClinicPicturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicPicturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicPicturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
