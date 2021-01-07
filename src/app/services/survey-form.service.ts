import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SurveyForm } from '../models/survey-form.model';

@Injectable({
  providedIn: 'root'
})
export class SurveyFormService {
  //TODO this is a temporary URL. Needs to be changed for deployment
  baseURL: string = "";

  constructor(private http: HttpClient) { }


getSurveyForm(): Observable<SurveyForm> {
  return this.http.get<SurveyForm>(this.baseURL+"survey")
}

postSurveyForm(surveyForm:SurveyForm): Observable<any>{
  /* validation pending */ 
  return this.http.post<boolean>(this.baseURL,surveyForm);
}

}
