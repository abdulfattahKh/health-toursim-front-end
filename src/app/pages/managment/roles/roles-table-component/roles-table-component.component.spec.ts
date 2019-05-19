import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesTableComponentComponent } from './roles-table-component.component';

describe('RolesTableComponentComponent', () => {
  let component: RolesTableComponentComponent;
  let fixture: ComponentFixture<RolesTableComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RolesTableComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolesTableComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
