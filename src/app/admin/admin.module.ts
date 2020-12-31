import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SurveyListViewComponent } from './components/survey-list-view/survey-list-view.component';
import { QuestionListViewComponent } from './components/question-list-view/question-list-view.component';
import { MakeQuestionViewComponent } from './components/make-question-view/make-question-view.component';
import { MakeSurveyViewComponent } from './components/make-survey-view/make-survey-view.component';
import { SurveyDetailViewComponent } from './components/survey-detail-view/survey-detail-view.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdminComponent } from './admin.component';
import { QuestionListItemComponent } from './components/question-list-item/question-list-item.component';

@NgModule({
  declarations: [
    SurveyListViewComponent,
    QuestionListViewComponent,
    MakeQuestionViewComponent,
    MakeSurveyViewComponent,
    SurveyDetailViewComponent,
    NavbarComponent,
    AdminComponent,
    QuestionListItemComponent,
  ],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
