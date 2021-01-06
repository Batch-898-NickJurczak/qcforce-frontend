import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchesDetailsComponent } from './batches-details.component';

describe('BatchesDetailsComponent', () => {
  let component: BatchesDetailsComponent;
  let fixture: ComponentFixture<BatchesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatchesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
