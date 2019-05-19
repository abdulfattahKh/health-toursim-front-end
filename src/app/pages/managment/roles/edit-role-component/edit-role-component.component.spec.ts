import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRoleComponentComponent } from './edit-role-component.component';

describe('EditRoleComponentComponent', () => {
  let component: EditRoleComponentComponent;
  let fixture: ComponentFixture<EditRoleComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRoleComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRoleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
