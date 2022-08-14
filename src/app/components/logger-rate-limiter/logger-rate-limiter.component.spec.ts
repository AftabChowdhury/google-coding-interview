import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggerRateLimiterComponent } from './logger-rate-limiter.component';

describe('LoggerRateLimiterComponent', () => {
  let component: LoggerRateLimiterComponent;
  let fixture: ComponentFixture<LoggerRateLimiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoggerRateLimiterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggerRateLimiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
