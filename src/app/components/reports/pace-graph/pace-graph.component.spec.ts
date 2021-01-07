import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaceGraphComponent } from './pace-graph.component';

describe('PaceGraphComponent', () => {
  let component: PaceGraphComponent;
  let fixture: ComponentFixture<PaceGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaceGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaceGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
