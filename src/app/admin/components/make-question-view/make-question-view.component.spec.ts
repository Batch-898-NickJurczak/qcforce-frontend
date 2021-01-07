import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeQuestionViewComponent } from './make-question-view.component';

describe('MakeQuestionViewComponent', () => {
  let component: MakeQuestionViewComponent;
  let fixture: ComponentFixture<MakeQuestionViewComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeQuestionViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeQuestionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Tests that the buttons should create their appopriate types based on what the user selects
  
  it('should make a button to create a new multiple choice type', () =>{
    expect(fixture.nativeElement.querySelector('#multiChoice')).toBeTruthy();
  });

  it('should make a button to create a new short answer type', () =>{
    expect(fixture.nativeElement.querySelector('#shortAnswer')).toBeTruthy();
  });

  it('should make a button to create a new range type', () =>{
    expect(fixture.nativeElement.querySelector('#rangeOption')).toBeTruthy();
  });


});
