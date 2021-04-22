import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingFocusComponent } from './tracking-focus.component';

describe('TrackingFocusComponent', () => {
  let component: TrackingFocusComponent;
  let fixture: ComponentFixture<TrackingFocusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackingFocusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackingFocusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
