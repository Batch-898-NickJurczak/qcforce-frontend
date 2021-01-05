import { SendEmailService } from './../../admin-services/send-email.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subject, merge } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';



@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})

export class EmailComponent implements OnInit {

  emailReactiveForm: FormGroup;
  display: string;

  selectedFiles?: FileList;
  currentFile?: File;
  message = '';

  fileInfos?: Observable<any>;

  constructor(private fb: FormBuilder,
    private sendEmailService: SendEmailService) { }

  ngOnInit(): void {

    this.emailReactiveForm = new FormGroup({
      batchIdName: new FormControl('',
        Validators.required),

      surveyIdName: new FormControl('',
      Validators.required)
    });

  }

  selectFile(event:any) {
    this.selectedFiles = event.target.files;
  }

  isSubmitted = false;

  batchId = ['Batch 1', 'Batch 12', 'batch 3'];

  surveyId = ['Survey 1', 'Survey 10', 'Survey 20'];

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
  
  searchsurvey = (text$: Observable<string>) => {
    const debouncedText$ = text$.pipe(debounceTime(200), distinctUntilChanged());
    const clicksWithClosedPopup$ = this.click$.pipe(filter(() => !this.instance.isPopupOpen()));
    const inputFocus$ = this.focus$;
    
  return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
    map(term => (term === '' ? this.surveyId
      : this.surveyId.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10))
  );
  }


  upload(): void {
  
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      console.log(file);

      if (file) {
        this.currentFile = file;
        console.log(this.currentFile);

        this.sendEmailService.sendEmail( this.currentFile, null, null).subscribe(
          (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
            } else if (event instanceof HttpResponse) {
              this.message = event.body.message;
              this.fileInfos = this.sendEmailService.getFiles();
            }
          },
          (err: any) => {
            console.log(err);
   

            if (err.error && err.error.message) {
              this.message = err.error.message;
            } else {
              this.message = 'Could not upload the file!';
            }

            this.currentFile = undefined;
          });
      }

      this.selectedFiles = undefined;
    }
  }


  
  onSubmit() {

    console.log(this.emailReactiveForm.controls.batchIdName.value)
    console.log(this.emailReactiveForm.controls.surveyIdName.value)
    console.log(this.emailReactiveForm);

  }
}