import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SurveyForm } from '../models/survey-form.model';
import { TakeSurveyService } from '../services/take-survey.service';

@Component({
  selector: 'app-take-survey',
  templateUrl: './take-survey.component.html',
  styleUrls: ['./take-survey.component.css'],
})
export class TakeSurveyComponent implements OnInit {
  token!: string;
  status: string;
  survey: SurveyForm;

  constructor(private route: ActivatedRoute, private service: TakeSurveyService) {}

  ngOnInit(): void {
    /*  takes in token from the url PATH ' survey?token=948n613x938nm384n2b'  */
    this.route.queryParams.subscribe((params) => {
      this.token = params.token;
    });

    this.setSurvey();
  }

  setSurvey(): any {
    const response = this.service.getSurveyForm(this.token);
    this.status = response[0];
    this.survey = response[1];
  }
}
