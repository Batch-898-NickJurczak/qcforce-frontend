import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { Question } from 'src/app/models/question.model';

@Component({
  selector: 'app-pick-from-range',
  templateUrl: './pick-from-range.component.html',
  styleUrls: ['./pick-from-range.component.css']
})
export class PickFromRangeComponent implements OnInit {
  @Input()
  surveySubmissionForm: FormGroup;
  @Input()
  question: Question;
  @Input()
  answers: FormArray;

  constructor() { }

  ngOnInit(): void {
  }

}
