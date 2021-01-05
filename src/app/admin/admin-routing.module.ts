import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EmailComponent } from "./components/email/email.component";
import { MakeQuestionViewComponent } from "./components/make-question-view/make-question-view.component";
import { QuestionResponseMultipleChoiceComponent } from "./components/make-question-view/question-response-multiple-choice/question-response-multiple-choice.component";
import { QuestionResponseRadioComponent } from "./components/make-question-view/question-response-radio/question-response-radio.component";
import { QuestionResponseShortAnswerComponent } from "./components/make-question-view/question-response-short-answer/question-response-short-answer.component";
import { SurveyListViewComponent } from "./components/survey-list-view/survey-list-view.component";

export const routes: Routes = [
  { path: "", component: SurveyListViewComponent },
  {
    path: "question",
    component: MakeQuestionViewComponent,
    children: [
      {
        path: "multi-choice",
        component: QuestionResponseMultipleChoiceComponent,
      },
      { path: "short-answer", component: QuestionResponseShortAnswerComponent },
      { path: "range", component: QuestionResponseRadioComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
