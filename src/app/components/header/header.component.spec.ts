import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let mockStore: MockStore;
  let newComponent;
  let routerSpy;
  let storeSpy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: Router, useValue: routerSpy }
      ],
      declarations: [ HeaderComponent ]
    })
    .compileComponents();

    mockStore = TestBed.inject(MockStore);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    storeSpy = jasmine.createSpyObj('Store', ['select', 'dispatch']);
    newComponent = new HeaderComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a logo', () => {
    expect(fixture.nativeElement.querySelector('img')).toBeTruthy();
  });

  it('should have a logout button', () => {
    expect(fixture.nativeElement.querySelector('button')).toBeTruthy();
  });

  it('logout button should say logout or signout', () => {
    expect(fixture.nativeElement.querySelector('button').textContent.toLowerCase()).toEqual('sign out');
  });

  it('HeaderComponent ngOnInit should call state.select twice', () => {
    newComponent.ngOnInit();
    expect(storeSpy.select).toHaveBeenCalledTimes(2);
  });

});