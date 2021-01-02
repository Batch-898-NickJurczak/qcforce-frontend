import { tokenize } from '@angular/compiler/src/ml_parser/lexer';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SurveyForm } from 'src/app/models/survey-form.model';
import { SurveySubmission } from 'src/app/models/survey-submission.model';
import { TakeSurveyService } from 'src/app/services/take-survey.service';

@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.css'],
})
export class SurveyFormComponent implements OnInit {
  @Input()
  surveyForm: SurveyForm;

  mainSurveyForm: FormGroup;

  /* this list will change and be length of surveyForm.questions.length() */

  submittedAnswers = {
    shortAnswer: '',
    multipleChoice: '',
    pickRange: '',
  } as SurveySubmission;

  submitted = false;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private surveyFormService: TakeSurveyService
  ) {}

  ngOnInit(): void {
    this.mainSurveyForm = this.fb.group({
      shortAnswer: ['', [Validators.required, Validators.maxLength(100)]],
      multipleChoice: ['', Validators.required],
      pickFromRange: ['', Validators.required],
    });

    /*  */
    this.mainSurveyForm.valueChanges.subscribe((newVal) => console.log(newVal));

    /*  call surveyFormService.postSurveyForm(surveySubmission) */
  }

  onSubmit(): void {
    this.submitted = true;
  }
}
