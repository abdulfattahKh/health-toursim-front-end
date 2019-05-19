import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRoleComponentComponent } from './create-role-component.component';

describe('CreateRoleComponentComponent', () => {
  let component: CreateRoleComponentComponent;
  let fixture: ComponentFixture<CreateRoleComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRoleComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRoleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
