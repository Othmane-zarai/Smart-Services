import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistantheaderComponent } from './assistantheader.component';

describe('AssistantheaderComponent', () => {
  let component: AssistantheaderComponent;
  let fixture: ComponentFixture<AssistantheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssistantheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistantheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
