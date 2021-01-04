import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { SurveyForm } from 'src/app/models/survey-form.model';
import { SurveySubmission } from 'src/app/models/survey-submission.model';
import { AppState } from 'src/app/store';


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
    private store: Store<AppState>
  ) {
    // TODO: initialize submission object from store. 
  }

  ngOnInit(): void {

    // TODO: init surveySubmissionForm with an answers array

    // TODO: Add each question to array

    // TODO: call updateSurvey on each form update
  }

  // Getter for the answers inside the form
  get answers() {
    // TODO: Implement getter
    return null;
  }

  // Iterate through questions, adding answer fields
  addQuestion() {
    // TODO: set a question object within form

    // TODO: add object to answer array
  }

  // Called before any NgStore operations to ensure local
  // Submission object reflects form data.
  updateLocalSurvey() {
    // TODO: Set initial surveyId and createdOn values

    // TODO: read answers from form into submission
  }

  // Called whenever a change is made to the form.
  // Should update the store with the new surveySubmission information
  updateSurvey(changes: any) {
    // Call updateLocalSurvey

    // Dispatch surveyUpdate action, pass it our submission to update the store
  }

  // This should submit a SurveySubmission object containing the parts of the
  // surveyForm needed as well as the responses.
  submitSurvey() {
    // Call updateLocalSurvey

    // Dispatch surveySubmit action, pass it our submission to update the store
    // and then the action will handle the submission process.
  }
}
