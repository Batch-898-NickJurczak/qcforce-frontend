import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyFormComponent } from './survey-form/survey-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TakeSurveyRoutingModule } from './take-survey-routing.module';
import { TakeSurveyComponent } from './take-survey.component';



@NgModule({
  declarations: [
    TakeSurveyComponent,
    SurveyFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TakeSurveyRoutingModule,
    ReactiveFormsModule
  ]
})
export class TakeSurveyModule { }
