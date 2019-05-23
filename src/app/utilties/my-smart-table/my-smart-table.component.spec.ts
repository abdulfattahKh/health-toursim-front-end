import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySmartTableComponent } from './my-smart-table.component';

describe('MySmartTableComponent', () => {
  let component: MySmartTableComponent;
  let fixture: ComponentFixture<MySmartTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySmartTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySmartTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
