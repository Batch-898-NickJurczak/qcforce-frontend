/*core imports*/
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

/*ngrx imports*/
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { StoreRouterConnectingModule, routerReducer } from "@ngrx/router-store";

/* Survey import */

/*application components*/
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { BatchesDetailsComponent } from "./components/batches/batches-details/batches-details.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { WeeklyReportsComponent } from "./components/reports/weekly-reports//weekly-reports.component";
import { BatchListComponent } from "./components/batches/batch-list/batch-list.component";
import { ReportsViewComponent } from "./components/reports/reports-view/reports-view.component";
import { FilterItemsComponent } from "./components/reports/filter-items/filter-items.component";
import { RatingGraphComponent } from "./components/reports/rating-graph/rating-graph.component";
import { PaceGraphComponent } from "./components/reports/pace-graph/pace-graph.component";
import { SurveyViewComponent } from "./components/survey-info/survey-view/survey-view.component";
import { SurveyQuestionsComponent } from "./components/survey-info/survey-questions/survey-questions.component";

/*styling imports*/
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ChartsModule } from "ng2-charts";

/*util imports*/
import { environment } from "../environments/environment";

/*store imports*/
import * as fromStore from "./store";
import { AssessmentGraphComponent } from "./components/reports/assessment-graph/assessment-graph.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { AdminModule } from "./admin/admin.module";
import { CommonModule } from "@angular/common";
import { TakeSurveyModule } from "./takeSurvey/take-survey.module";
import { AdminNavBarComponent } from "./admin/components/admin-nav-bar/admin-nav-bar.component";
import { ViewQuestionComponent } from "./admin/components/make-survey-view/view-question/view-question.component";
import { QuestionsPipe } from "./admin/admin-services/questions.pipe";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BatchListComponent,
    BatchesDetailsComponent,
    DashboardComponent,
    WeeklyReportsComponent,
    ReportsViewComponent,
    FilterItemsComponent,
    RatingGraphComponent,
    PaceGraphComponent,
    SurveyViewComponent,
    SurveyQuestionsComponent,
    AssessmentGraphComponent,
    NavbarComponent,
    AdminNavBarComponent,
    ViewQuestionComponent,
    QuestionsPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TakeSurveyModule,
    StoreModule.forRoot({
      router: routerReducer,
      reports: fromStore.reportsReducer,
      batches: fromStore.batchesReducer,
      associates: fromStore.associatesReducer,
      surveyForm: fromStore.surveyFormReducer,
      submission: fromStore.surveySubmissionReducer,
      associateSurvey: fromStore.associateSurveyReducer,
    }),
    EffectsModule.forRoot([
      fromStore.ReportsEffects,
      fromStore.BatchesEffects,
      fromStore.AssociatesEffects,
      fromStore.surveyFormEffects,
      fromStore.SurveySubmissionEffects,
      fromStore.AssociateSurveyEffects,
    ]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    StoreRouterConnectingModule.forRoot(),
    NgbModule,
    BrowserAnimationsModule,
    ChartsModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    TakeSurveyModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
