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

  
  constructor(private fb: FormBuilder, private surveyService: SurveyFormService) { }

  ngOnInit(): void {
  }

  getQuestions(): void {
   
   let multipleChoice: Question = {
      id: 1,
      createdOn: new Date(Date.now()),
      type: "MULTIPLE_CHOICE",
      version: 1,
      question: ['How are you?', 'not bad', 'really bad', 'not great'],
    }
    let  shortAnswer: Question = {
      id: 1,
      createdOn: new Date(Date.now()),
      type: "SHORT_ANSWER",
      version: 1,
      question: ['Where are we'],
    }
   let  pickFromRange: Question = {
      id: 1,
      createdOn: new Date(Date.now()),
      type: "PICK_FROM_RANGE",
      version: 1,
      question: ['whats up', 'strongly disagree', 'strongly agree'],
    }
   
    let questionList: Array<Question> = [
      multipleChoice,
      pickFromRange,
      shortAnswer
    ]
    this.questions = questionList;
  }

}
