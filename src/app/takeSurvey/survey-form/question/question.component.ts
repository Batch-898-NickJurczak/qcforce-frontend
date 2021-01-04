import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { Question } from 'src/app/models/question.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent implements OnInit {
  @Input()
  surveySubmissionForm: FormGroup;

  @Input()
  question!: Question;
  @Input()
  answers: FormArray;

  constructor() {}

  ngOnInit(): void {}
}
