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
});
