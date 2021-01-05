import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyFormComponent } from './survey-form/survey-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TakeSurveyRoutingModule } from './take-survey-routing.module';
import { TakeSurveyComponent } from './take-survey.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AssociateTokenInterceptor } from './associate-token.interceptor';
import { TakeSurveyService } from '../services/take-survey.service';



@NgModule({
  declarations: [
    TakeSurveyComponent,
    SurveyFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TakeSurveyRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS , useClass: AssociateTokenInterceptor, multi: true },
    TakeSurveyService,
  ],
})
export class TakeSurveyModule { }
