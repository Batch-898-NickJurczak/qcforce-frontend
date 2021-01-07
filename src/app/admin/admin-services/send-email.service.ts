import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendEmailService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:8087';

  sendEmail(file: File, batchId: string, surveyId: number): Observable<HttpEvent<any>> {

    const formData: FormData = new FormData();

    formData.append('csv', file);
    formData.append('batchId', batchId);

    const req = new HttpRequest('POST', `${this.baseUrl}/distribute/` + surveyId, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  getBatchIds(): Observable<any> {

    return this.http.get((`https://caliber2-mock.revaturelabs.com/mock/training/batch/current`));
  }
}
