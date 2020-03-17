import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventReferenceHolderComponent } from './event-reference-holder.component';

describe('EventReferenceHolderComponent', () => {
  let component: EventReferenceHolderComponent;
  let fixture: ComponentFixture<EventReferenceHolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventReferenceHolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventReferenceHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
