import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SurveyForm } from '../models/survey-form.model';
import { AppState } from '../store';

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
    // TODO: read token from path

    // TODO: Call setSurvey

    // TODO: dispatch surveyLoad with token
  }

  setSurvey(): any {

    // TODO: Grab survey object from store
  }
}
