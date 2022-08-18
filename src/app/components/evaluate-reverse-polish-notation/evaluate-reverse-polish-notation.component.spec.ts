import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluateReversePolishNotationComponent } from './evaluate-reverse-polish-notation.component';

describe('EvaluateReversePolishNotationComponent', () => {
  let component: EvaluateReversePolishNotationComponent;
  let fixture: ComponentFixture<EvaluateReversePolishNotationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluateReversePolishNotationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluateReversePolishNotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
