import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-question-response-short-answer',
  templateUrl: './question-response-short-answer.component.html',
  styleUrls: ['./question-response-short-answer.component.css']
})
export class QuestionResponseShortAnswerComponent implements OnInit {
  shortAnswerForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.shortAnswerForm = this.fb.group({
      question: "",
    });
  }

}
