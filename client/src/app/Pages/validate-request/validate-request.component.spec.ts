import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateRequestComponent } from './validate-request.component';

describe('ValidateRequestComponent', () => {
  let component: ValidateRequestComponent;
  let fixture: ComponentFixture<ValidateRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidateRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
