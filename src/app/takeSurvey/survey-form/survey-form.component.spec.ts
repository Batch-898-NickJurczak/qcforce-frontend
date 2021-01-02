import { HttpClient } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

import { SurveyFormComponent } from './survey-form.component';

class MockRoute {}

class MockHttp {}

describe('SurveyFormComponent', () => {
  let component: SurveyFormComponent;
  let fixture: ComponentFixture<SurveyFormComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: ActivatedRoute, useClass: MockRoute },
        { provide: HttpClient, useClass: MockHttp },
        { provide: FormBuilder, useClass: FormBuilder },
      ],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(SurveyFormComponent);
        component = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('form'));
        el = de.nativeElement;
      });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should set submitted value to true', async(() => {
    component.onSubmit();
    expect(component.submitted).toBeTruthy();
  }));

  it('should call the onSubmit method', () => {
    fixture.detectChanges();
    spyOn(component, 'onSubmit');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.onSubmit).toHaveBeenCalledTimes(0);
  });

  it('form should be invalid', () => {
    component.mainSurveyForm.controls.shortAnswer.setValue('');
    expect(component.mainSurveyForm.valid).toBeFalsy();
  });

  it('form should be invalid', () => {
    component.mainSurveyForm.controls.multipleChoice.setValue('');
    expect(component.mainSurveyForm.valid).toBeFalsy();
  });

  it('form should be invalid', () => {
    component.mainSurveyForm.controls.pickFromRange.setValue('');
    expect(component.mainSurveyForm.valid).toBeFalsy();
  });

  it('form should be valid', () => {
    component.mainSurveyForm.controls.shortAnswer.setValue('I love coding!');
    component.mainSurveyForm.controls.multipleChoice.setValue('Yes');
    component.mainSurveyForm.controls.pickFromRange.setValue('1');
    expect(component.mainSurveyForm.valid).toBeTruthy();
  });
});
