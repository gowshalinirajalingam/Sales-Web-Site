import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesCompComponent } from './sales-comp.component';

describe('SalesCompComponent', () => {
  let component: SalesCompComponent;
  let fixture: ComponentFixture<SalesCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
