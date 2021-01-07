import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from 'src/app/models/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constUrl: string = "http://localhost:8080/question"

  constructor(private httpClient: HttpClient) { }

  sendQuestionPost(question: Question): Observable<Question> {
    return this.httpClient.post<Question>(this.constUrl, question);
  }

  public readAllQuestions(): Observable<Question[]> {
  
    return this.httpClient.get<Question[]>(this.constUrl);
  }

}
