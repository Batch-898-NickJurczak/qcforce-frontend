import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, Validators } from '@angular/forms';

import { ShortAnswerComponent } from './short-answer.component';

describe('AnswersComponent', () => {
  let component: ShortAnswerComponent;
  let fixture: ComponentFixture<ShortAnswerComponent>;

  const formBuilder = new FormBuilder();
  const mockForm = formBuilder.group({
    shortAnswer: ['', [Validators.required, Validators.maxLength(100)]],
    multipleChoice: ['', Validators.required],
    pickFromRange: ['', Validators.required],
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({})
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(ShortAnswerComponent);
        component = fixture.componentInstance;
      });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.mainSurveyForm = mockForm;
  });

  it('form should be invalid', () => {
    component.mainSurveyForm.controls.shortAnswer.setValue('');
    expect(component.mainSurveyForm.valid).toBeFalsy();
  });

  it('form should be invalid', () => {
    component.mainSurveyForm.controls.shortAnswer.setValue(
      'I attended bootcamp starting in December of 2019 and graduating at the end of February 2020. I was a part of a batch that was taught skills in Machine Learning. Revature at this point had not had a Machine Learning course so my batch acted as a guinea pig of sorts. Training felt very disorganized and poorly put together. Most of the learning that was done was independent or with other classmates and not from the instructor. Keep in mind that I did not get to choose what course I would be taught but rather was elected based on where Revature thought I would best fit.'
    );
    expect(component.mainSurveyForm.valid).toBeFalsy();
  });

  it('form should be valid', () => {
    component.mainSurveyForm.controls.shortAnswer.setValue('I attended bootcamp starting in December');
    component.mainSurveyForm.controls.multipleChoice.setValue('I attended bootcamp starting in December');
    component.mainSurveyForm.controls.pickFromRange.setValue('I attended bootcamp starting in December');
    expect(component.mainSurveyForm.valid).toBeTruthy();
  });
});
