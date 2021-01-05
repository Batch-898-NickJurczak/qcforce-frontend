import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { SurveyForm } from 'src/app/models/survey-form.model';
import { SurveySubmission } from 'src/app/models/survey-submission.model';
import { AppState, surveySubmit, surveyUpdate } from 'src/app/store';


@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.css'],
})
export class SurveyFormComponent implements OnInit {

  @Input()
  surveyForm: SurveyForm = null;

  surveySubmissionForm: FormGroup;
  submission: SurveySubmission;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private store: Store<AppState>
  ) {
    const initSubmission$ = this.store.select('submission');
    initSubmission$.subscribe((init) => {
      this.submission = {
        id: init.data.id,
        surveyId: init.data.surveyId,
        createdOn: init.data.createdOn,
        answers: [],
      };
    });
  }

  ngOnInit(): void {

    this.surveySubmissionForm = this.fb.group({
      answers: this.fb.array([]),
    });

    if (this.surveyForm !== null) {

      for (let {} of this.surveyForm.questions) {
        this.addQuestion();
      }

    }
    else {
      this.surveyForm = {
        id: 0,
        title: '',
        createdBy: '',
        createdOn: new Date(Date.now()),
        version: 0
      };
    }

    this.surveySubmissionForm.valueChanges.subscribe(() => this.updateSurvey());
    this.surveySubmissionForm.valueChanges.subscribe(newVal => console.log(newVal));
  }

  // Getter for the answers inside the form
  get answers() {
    return this.surveySubmissionForm.get('answers') as FormArray;
  }

  // Iterate through questions, adding answer fields
  addQuestion() {
    const answer = this.fb.group({
      response: ['', Validators.required],
    });

    this.answers.push(answer);
  }

  // Called before any NgStore operations to ensure local
  // Submission object reflects form data.
  updateLocalSurvey() {
    this.submission.surveyId = this.surveyForm.id;
    this.submission.createdOn = new Date(Date.now());

    this.answers.controls.forEach((answer) => {
      this.submission.answers.push(answer.value);
    });
  }

  // Called whenever a change is made to the form.
  // Should update the store with the new surveySubmission information
  updateSurvey() {
    this.updateLocalSurvey();
    const submission = this.submission;
    this.store.dispatch(surveyUpdate({ submission }));
  }

  // This should submit a SurveySubmission object containing the parts of the
  // surveyForm needed as well as the responses.
  submitSurvey() {
    this.updateLocalSurvey();
    const submission = this.submission;
    this.store.dispatch(surveySubmit({ submission }));
  }
}
