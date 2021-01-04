import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { SurveyForm } from 'src/app/models/survey-form.model';
import { SurveySubmission } from 'src/app/models/survey-submission.model';
import { SurveyFormService } from 'src/app/services/survey-form.service';
import { AppState, surveySubmit, surveyUpdate } from 'src/app/store';

@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.css'],
})
export class SurveyFormComponent implements OnInit {
  @Input()
  surveyForm: SurveyForm ;

  surveySubmissionForm: FormGroup;
  submission: SurveySubmission;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private surveyFormService: SurveyFormService,
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

    for (let {} of this.surveyForm.questions) {
      this.addQuestion();
    }

    this.surveySubmissionForm.valueChanges.subscribe((changes) => this.updateSurvey(changes));
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
  updateSurvey(changes: any) {
    this.updateLocalSurvey();
    const submission = this.submission;
    this.store.dispatch(surveyUpdate({ submission }));
    this.store.select((state) => (this.submission = state.submission.data));
  }

  // This should submit a SurveySubmission object containing the parts of the
  // surveyForm needed as well as the responses.
  submitSurvey() {
    this.updateLocalSurvey();
    const submission = this.submission;
    this.store.dispatch(surveySubmit({ submission }));
    this.store.select((state) => (this.submission = state.submission.data));
  }
}
