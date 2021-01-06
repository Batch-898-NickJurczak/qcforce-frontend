import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { QuestionService } from 'src/app/admin/admin-services/question.service';
import { Question } from 'src/app/models/question.model';


@Component({
  selector: 'app-question-response-radio',
  templateUrl: './question-response-radio.component.html',
  styleUrls: ['./question-response-radio.component.css']
})
export class QuestionResponseRadioComponent implements OnInit {

  radioForm: FormGroup;

  newQuestion: Question = {
    id: 1,
    createdOn: new Date(Date.now()),
    type: "PICK_FROM_RANGE",
    version: 1,
    question: [],
  };
  constructor(private fb: FormBuilder, private questionService: QuestionService) {}

  ngOnInit() {
    this.radioForm = this.fb.group({
      question: '',
      radios: this.fb.array([])
    })
  
  }
  
  get radioForms() {
    return this.radioForm.get('radios') as FormArray
  }
  
  addChoice() {
  
    const choice = this.fb.group({ 
      answers: [],
    })
  
    this.radioForms.push(choice);
  }
  
  deleteChoice(i) {
    this.radioForms.removeAt(i)
  }

  onSubmit() {

    this.questionService.sendQuestionPost(this.newQuestion).subscribe(
       questionResp => console.log(questionResp)
    );

  }

}
