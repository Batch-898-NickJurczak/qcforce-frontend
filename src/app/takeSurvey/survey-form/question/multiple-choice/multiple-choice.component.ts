import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { Question } from 'src/app/models/question.model';

@Component({
  selector: 'app-multiple-choice',
  templateUrl: './multiple-choice.component.html',
  styleUrls: ['./multiple-choice.component.css']
})
export class MultipleChoiceComponent implements OnInit {
  @Input()
  surveySubmissionForm: FormGroup;

  @Input()
  question!: Question;

  @Input()
  answers: FormArray;

  constructor() { }

  ngOnInit(): void {
  }

}
