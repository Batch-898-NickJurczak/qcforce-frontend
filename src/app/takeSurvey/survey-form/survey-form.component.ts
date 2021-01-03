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
  surveyForm: SurveyForm = {
    id: 0,
    title: 'Test Survey',
    createdBy: 'Conner',
    createdOn: new Date(Date.now()),
    version: 0,
    questions: [
      {
        id: 0,
        createdOn: new Date(Date.now()),
        type: 'MULTIPLE_CHOICE',
        version: 0,
        question: ['A multiple choice question', 'Choice One', 'Choice Two']
      },
      {
        id: 1,
        createdOn: new Date(Date.now()),
        type: 'PICK_FROM_RANGE',
        version: 0,
        question: ['A pick from range question', '1', '2', '3']
      },
      {
        id: 2,
        createdOn: new Date(Date.now()),
        type: 'SHORT_ANSWER',
        version: 0,
        question: ['A short response question']
      }
    ],
    week: 0
  };
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
      answers: this.fb.array([]),
    });

    for (let {} of this.surveyForm.questions){
        this.addQuestion();
    }

    this.surveySubmissionForm.valueChanges.subscribe((newVal) => console.log(newVal));
  }

  get answers() {
    return this.surveySubmissionForm.get('answers') as FormArray;
  }

  addQuestion() {
    const answer = this.fb.group({
      response: ['', Validators.required],
    });

    this.answers.push(answer);
  }

  // This should submit a SurveySubmission object containing the parts of the
  // surveyForm needed as well as the responses.
  submitSurvey() {
    this.loading = true;

    const formValue = this.surveySubmissionForm.value;

    try {
      // This function should eventually send to the backend as well as ngStore
      this.store.dispatch(new SurveyFormAction.SubmitSurveyForm(this.surveyForm));
      this.success = true;
    } catch (err) {
      console.error(err);
    }

    this.loading = false;
  }
}
