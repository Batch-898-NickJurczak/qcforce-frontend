import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Batch } from '../models/batch.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BatchesService {

  batchName: string;

  constructor(private http: HttpClient) { }

  getBatches(): Observable<Batch[]> {
    return this.http.get<Batch[]>(
      environment.getBatchListUrl,
    );
  }
  getSurveysByBatchId(batchId: string): Observable<any> {
    const url = environment.getSurveysByBatchIdUrl + '?batchId=' + batchId;
    return this.http.get<any>(url);
  }

  getAssociateByBatchName(batchName: string): Observable<any> {
    const url = environment.getAssociateByBatchName + batchName;
    return this.http.get<any>(url);
  }
}
