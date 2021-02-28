import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistantDoneComponent } from './assistant-done.component';

describe('AssistantDoneComponent', () => {
  let component: AssistantDoneComponent;
  let fixture: ComponentFixture<AssistantDoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssistantDoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistantDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
