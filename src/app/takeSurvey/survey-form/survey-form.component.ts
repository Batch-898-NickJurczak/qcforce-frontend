import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { SurveyForm } from 'src/app/models/survey-form.model';
import { SurveySubmission } from 'src/app/models/survey-submission.model';
import { SurveyFormService } from 'src/app/services/survey-form.service';
import { AppState } from 'src/app/store';
import * as SurveyFormAction from 'src/app/store/actions/survey-form.action';

@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.css'],
})
export class SurveyFormComponent implements OnInit {

  surveyForm: SurveyForm;
  surveySubmissionForm: FormGroup;

  loading = false;
  success = false;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private surveyFormService: SurveyFormService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.surveySubmissionForm = this.fb.group({
      answers: this.fb.array([])
    });

    this.surveySubmissionForm.valueChanges.subscribe((newVal) => console.log(newVal));
  }

  get answers() {
    return this.surveySubmissionForm.get('answers') as FormArray;
  }

  addQuestion(type: string) {

    const answer = this.fb.group({
      response: ['', Validators.required]
    });

    this.answers.push(answer);
  }

  // This should submit a SurveySubmission object containing the parts of the
  // surveyForm needed as well as the responses.
  submitSurvey(surveyForm: SurveyForm) {
    this.loading = true;

    const formValue = this.surveySubmissionForm.value;

    try {
      // This function should eventually send to the backend as well as ngStore
      await this.store.dispatch(new SurveyFormAction.SubmitSurveyForm(surveyForm));
      this.success = true;

    } catch(err) {
      console.error(err);
    }

    this.loading = false;
  }
}
