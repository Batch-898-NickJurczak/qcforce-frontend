import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-short-answer',
  templateUrl: './short-answer.component.html',
  styleUrls: ['./short-answer.component.css']
})
export class ShortAnswerComponent implements OnInit {
  @Input()  surveySubmissionForm: FormGroup;

  constructor() {
  }
  ngOnInit(): void {

  }
  

}
