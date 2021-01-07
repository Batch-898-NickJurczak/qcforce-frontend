import { SendEmailService } from './../../admin-services/send-email.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subject, merge } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
import { Batch } from 'src/app/models/batch.model';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../store';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})

export class EmailComponent implements OnInit {

  receivedFile: File;
  receivedBatchId: String;
  receivedSurveyId: number;

  emailReactiveForm: FormGroup;
  display: string;

  selectedFiles?: FileList;
  currentFile?: File;
  message = '';

  batches$: Observable<any>;

  constructor(private fb: FormBuilder,
    private sendEmailService: SendEmailService, private cd: ChangeDetectorRef, private store: Store<fromStore.AppState>) { }

  ngOnInit(): void {

    this.emailReactiveForm = new FormGroup({
      batchIdName: new FormControl('',
        Validators.required),

      surveyIdName: new FormControl('',
        Validators.required),

      fileName: new FormControl(null,
        Validators.required)
    });

    // this.batches$ = this.store.select(fromStore.selectAllBatches);
    // this.store.dispatch(new fromStore.LoadBatches());
    // this.batches$ = this.sendEmailService.getBatchIds();
    // this.batches$.subscribe((batchsName) => console.log(batchsName[0]));

  }

  isSubmitted = false;

  batchId = ['TR-1806', 'TR-1788', 'TR-1796', 'TR-1803', 'TR-1805', 'TR-1789', 'TR-1787', 'TR-1790', 'TR-1797', 'TR-1801']

  surveyId = ['123', '125', '135', '248', '375', '376', '404'];

  @ViewChild('instance', { static: true }) instance: NgbTypeahead;
  focus$ = new Subject<string>();
  click$ = new Subject<string>();

  searchbatch = (text$: Observable<string>) => {
    const debouncedText$ = text$.pipe(debounceTime(200), distinctUntilChanged());
    const clicksWithClosedPopup$ = this.click$.pipe(filter(() => !this.instance.isPopupOpen()));
    const inputFocus$ = this.focus$;

    return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
      map(term => (term === '' ? this.batchId
        : this.batchId.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10))
    );

  }

  @ViewChild('instance2', { static: true }) instance2: NgbTypeahead;
  focus2$ = new Subject<string>();
  click2$ = new Subject<string>();

  searchsurvey = (text$: Observable<string>) => {
    const debouncedText$ = text$.pipe(debounceTime(200), distinctUntilChanged());
    const clicksWithClosedPopup$ = this.click2$.pipe(filter(() => !this.instance.isPopupOpen()));
    const inputFocus$ = this.focus2$;

    return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
      map(term => (term === '' ? this.surveyId
        : this.surveyId.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10))
    );
  }

  selectFile(event) {

    if (event.target.files && event.target.files.length) {
      const [fileN] = event.target.files;

      this.emailReactiveForm.patchValue({
        fileName: fileN

      });
    }

  }

  onSubmit() {

    this.receivedFile = this.emailReactiveForm.controls.fileName.value;
    this.receivedBatchId = this.emailReactiveForm.controls.batchIdName.value;
    this.receivedSurveyId = parseInt(this.emailReactiveForm.controls.surveyIdName.value);

    console.log(this.emailReactiveForm.controls.batchIdName.value);
    console.log(this.emailReactiveForm.controls.surveyIdName.value);
    console.log(this.emailReactiveForm.controls.fileName.value);
    console.log(this.emailReactiveForm);
    console.log(this.receivedBatchId);

    this.sendEmailService.sendEmail(this.emailReactiveForm.controls.fileName.value,
      this.emailReactiveForm.controls.batchIdName.value,
      this.emailReactiveForm.controls.surveyIdName.value).subscribe(
        (event: any) => {
          if (event.type === HttpEventType.UploadProgress) {
          } else if (event instanceof HttpResponse) {
            this.message = event.body.statusMessage;
          }
        },
        (err: any) => {
          console.log(err);


          if (err.error && err.error.message) {
            this.message = err.error.message;
          } else {
            this.message = 'Could not send the email!';
          }

          this.currentFile = undefined;
        });

    this.emailReactiveForm.reset();
  }
}
