import { tokenize } from '@angular/compiler/src/ml_parser/lexer';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SurveyForm } from 'src/app/models/survey-form.model';
import { SurveySubmission } from 'src/app/models/survey-submission.model';
import { SurveyFormService } from 'src/app/services/survey-form.service';

@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.css'],
})
export class SurveyFormComponent implements OnInit {
  surveyForm: SurveyForm;

  mainSurveyForm: FormGroup;

  /* this list will change and be length of surveyForm.questions.length() */

  submittedAnswers = {
    shortAnswer: '',
    multipleChoice: '',
    pickRange: '',
  } as SurveySubmission;

  submitted = false;
  /* used in */
  token!: string;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private surveyFormService: SurveyFormService
  ) {}

  ngOnInit(): void {
    this.mainSurveyForm = this.fb.group({
      shortAnswer: ['', [Validators.required, Validators.maxLength(100)]],
      multipleChoice: ['', Validators.required],
      pickFromRange: ['', Validators.required],
    });

    /*  */
    this.mainSurveyForm.valueChanges.subscribe((newVal) => console.log(newVal));

    /*  takes in token from the url PATH ' survey?token=948n613x938nm384n2b'  */
    function getTokenFromUrl(): any {
      this.route.queryParams.subscribe((params) => {
        this.token = params.token;
        console.log(this.token);
        return this.token;
      });
    }

    /*  call surveyFormService.postSurveyForm(surveyForm) */
  }

  onSubmit(): void {
    this.submitted = true;
  }
}
