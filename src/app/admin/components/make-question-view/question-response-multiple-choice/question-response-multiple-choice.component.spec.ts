import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionResponseMultipleChoiceComponent } from './question-response-multiple-choice.component';

describe('QuestionResponseMultipleChoiceComponent', () => {
  let component: QuestionResponseMultipleChoiceComponent;
  let fixture: ComponentFixture<QuestionResponseMultipleChoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionResponseMultipleChoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionResponseMultipleChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
