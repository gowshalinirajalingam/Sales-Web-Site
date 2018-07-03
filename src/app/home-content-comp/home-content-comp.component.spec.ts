import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeContentCompComponent } from './home-content-comp.component';

describe('HomeContentCompComponent', () => {
  let component: HomeContentCompComponent;
  let fixture: ComponentFixture<HomeContentCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeContentCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeContentCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
