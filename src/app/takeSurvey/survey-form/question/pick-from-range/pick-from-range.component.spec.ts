import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, Validators } from '@angular/forms';

import { PickFromRangeComponent } from './pick-from-range.component';

describe('PickFromRangeComponent', () => {
  let component: PickFromRangeComponent;
  let fixture: ComponentFixture<PickFromRangeComponent>;

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
        fixture = TestBed.createComponent(PickFromRangeComponent);
        component = fixture.componentInstance;
      });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickFromRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should be invalid', () => {
    component.mainSurveyForm = mockForm;
    component.mainSurveyForm.controls.pickFromRange.setValue('');
    expect(component.mainSurveyForm.valid).toBeFalsy();
  });
});
