import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDemandsComponent } from './admin-demands.component';

describe('AdminDemandsComponent', () => {
  let component: AdminDemandsComponent;
  let fixture: ComponentFixture<AdminDemandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDemandsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDemandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
