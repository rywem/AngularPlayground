import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssTransitionComponent } from './css-transition.component';

describe('CssTransitionComponent', () => {
  let component: CssTransitionComponent;
  let fixture: ComponentFixture<CssTransitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssTransitionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CssTransitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
