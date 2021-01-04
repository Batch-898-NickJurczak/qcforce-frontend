import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { Question } from 'src/app/models/question.model';

@Component({
  selector: 'app-short-answer',
  templateUrl: './short-answer.component.html',
  styleUrls: ['./short-answer.component.css']
})
export class ShortAnswerComponent implements OnInit {
  @Input()
  surveySubmissionForm: FormGroup;

  @Input()
  question!: Question;

  @Input()
  answers: FormArray;

  constructor() {
  }
  ngOnInit(): void {

  }

}
