import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Question } from 'src/app/models/question.model';
import { SurveyForm } from 'src/app/models/survey-form.model';
import { SurveyFormService } from 'src/app/services/survey-form.service';
import { MultipleChoiceComponent } from 'src/app/takeSurvey/survey-form/question/multiple-choice/multiple-choice.component';

@Component({
  selector: 'app-make-survey-view',
  templateUrl: './make-survey-view.component.html',
  styleUrls: ['./make-survey-view.component.css']
})
export class MakeSurveyViewComponent implements OnInit {
  newSurveyForm: SurveyForm;

  questions: Question[];

  adminInfo: FormGroup;

  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  getQuestions(): void {
   
   let multipleChoice: Question = {
      id: 1,
      createdOn: new Date(Date.now()),
      type: "MULTIPLE_CHOICE",
      version: 1,
      question: ['What number am I thinking of?', 'One', 'Two', 'Three'],
    }
    let  shortAnswer: Question = {
      id: 1,
      createdOn: new Date(Date.now()),
      type: "SHORT_ANSWER",
      version: 1,
      question: ['Please provide feedback.'],
    }
   let  pickFromRange: Question = {
      id: 1,
      createdOn: new Date(Date.now()),
      type: "PICK_FROM_RANGE",
      version: 1,
      question: ['How was the pace of training this week?', 'Too slow', 'Too fast'],
    }
   
    let questionList: Array<Question> = [
      multipleChoice,
      pickFromRange,
      shortAnswer
    ]
    this.questions = questionList;
  }

}
