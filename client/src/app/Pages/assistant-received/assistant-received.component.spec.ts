import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistantReceivedComponent } from './assistant-received.component';

describe('AssistantReceivedComponent', () => {
  let component: AssistantReceivedComponent;
  let fixture: ComponentFixture<AssistantReceivedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssistantReceivedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistantReceivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
