import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, Validators } from '@angular/forms';

import { MultipleChoiceComponent } from './multiple-choice.component';

describe('MultipleChoiceComponent', () => {
  let component: MultipleChoiceComponent;
  let fixture: ComponentFixture<MultipleChoiceComponent>;

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
        fixture = TestBed.createComponent(MultipleChoiceComponent);
        component = fixture.componentInstance;
      });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should be invalid', () => {
    component.mainSurveyForm = mockForm;
    component.mainSurveyForm.controls.multipleChoice.setValue('');
    expect(component.mainSurveyForm.valid).toBeFalsy();
  });
});
