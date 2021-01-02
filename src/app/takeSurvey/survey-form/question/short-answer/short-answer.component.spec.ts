import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { ShortAnswerComponent } from './short-answer.component';

import { fromPairs } from 'lodash';

describe('AnswersComponent', () => {
  let component: ShortAnswerComponent;
  let fixture: ComponentFixture<ShortAnswerComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortAnswerComponent ],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(ShortAnswerComponent);

      component = fixture.componentInstance;

      de = fixture.debugElement.query(By.css('form'));
      el = de.nativeElement;
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it ('form should be invalid', async (() => {
    component.mainSurveyForm.controls['shortAnswer'].setValue('');
    expect(component.mainSurveyForm.valid).toBeFalsy();
  }));

  it ('form should be invalid', async (() => {
    component.mainSurveyForm.controls['shortAnswer'].
    setValue('I attended bootcamp starting in December of 2019 and graduating at the end of February 2020. I was a part of a batch that was taught skills in Machine Learning. Revature at this point had not had a Machine Learning course so my batch acted as a guinea pig of sorts. Training felt very disorganized and poorly put together. Most of the learning that was done was independent or with other classmates and not from the instructor. Keep in mind that I did not get to choose what course I would be taught but rather was elected based on where Revature thought I would best fit.');
    expect(component.mainSurveyForm.valid).toBeFalsy();
  }));
  it ('form should be valid', async (() => {
    component.mainSurveyForm.controls['shortAnswer'].
    setValue('I attended bootcamp starting in December');
    expect(component.mainSurveyForm.valid).toBeTruthy();
  }));
});
