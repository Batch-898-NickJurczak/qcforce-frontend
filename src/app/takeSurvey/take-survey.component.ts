import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { exhaustMap, map } from 'rxjs/operators';
import { SurveyForm } from '../models/survey-form.model';
import { AppState, surveyLoad } from '../store';

@Component({
  selector: 'app-take-survey',
  templateUrl: './take-survey.component.html',
  styleUrls: ['./take-survey.component.css'],
})
export class TakeSurveyComponent implements OnInit {
  token!: string;
  status: string;
  survey: Observable<SurveyForm>;

  constructor(
    private userRoute: ActivatedRoute,
    private store: Store<AppState>
    ) {}

  ngOnInit(): void {
    /*  takes in token from the url PATH ' survey?token=948n613x938nm384n2b'  */
    this.userRoute.queryParams.subscribe((params) => {
      this.token = params.token;
    });
    const inputToken = this.token;
    this.setSurvey();
    this.store.dispatch(surveyLoad({inputToken}));
  }

  setSurvey(): any {
    this.survey = this.store.select(`associateSurvey`).pipe(
      exhaustMap(state => of(state.survey))
    );
  }
}
