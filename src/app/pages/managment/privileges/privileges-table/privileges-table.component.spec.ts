import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivilegesTableComponent } from './privileges-table.component';

describe('PrivilegesTableComponent', () => {
  let component: PrivilegesTableComponent;
  let fixture: ComponentFixture<PrivilegesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivilegesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivilegesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
