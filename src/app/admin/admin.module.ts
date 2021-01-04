import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AdminRoutingModule } from "./admin-routing.module";
import { SurveyListViewComponent } from "./components/survey-list-view/survey-list-view.component";
import { QuestionListViewComponent } from "./components/question-list-view/question-list-view.component";
import { MakeQuestionViewComponent } from "./components/make-question-view/make-question-view.component";
import { MakeSurveyViewComponent } from "./components/make-survey-view/make-survey-view.component";
import { SurveyDetailViewComponent } from "./components/survey-detail-view/survey-detail-view.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { AdminComponent } from "./admin.component";
import { QuestionListItemComponent } from "./components/question-list-item/question-list-item.component";
import { QuestionResponseShortAnswerComponent } from "./components/make-question-view/question-response-short-answer/question-response-short-answer.component";
import { QuestionResponseMultipleChoiceComponent } from "./components/make-question-view/question-response-multiple-choice/question-response-multiple-choice.component";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
import { QuestionResponseRadioComponent } from "./components/make-question-view/question-response-radio/question-response-radio.component";
import { EmailInputViewComponent } from './components/email-input-view/email-input-view.component';


@NgModule({
  declarations: [
    MakeQuestionViewComponent,
    SurveyListViewComponent,
    QuestionListViewComponent,
    MakeSurveyViewComponent,
    SurveyDetailViewComponent,
    NavbarComponent,
    AdminComponent,
    QuestionListItemComponent,
    QuestionResponseShortAnswerComponent,
    QuestionResponseMultipleChoiceComponent,
    QuestionResponseRadioComponent,
    EmailInputViewComponent
  ],
  imports: [CommonModule, AdminRoutingModule, FormsModule,ReactiveFormsModule],
  bootstrap: [AdminComponent]

})
export class AdminModule {}
