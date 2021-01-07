import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-question-response-radio',
  templateUrl: './question-response-radio.component.html',
  styleUrls: ['./question-response-radio.component.css']
})
export class QuestionResponseRadioComponent implements OnInit {

  radioForm: FormGroup;

  constructor(private fb: FormBuilder) { }

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

}
