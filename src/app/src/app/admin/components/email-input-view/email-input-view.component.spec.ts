import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailInputViewComponent } from './email-input-view.component';

describe('EmailInputViewComponent', () => {
  let component: EmailInputViewComponent;
  let fixture: ComponentFixture<EmailInputViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailInputViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailInputViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
