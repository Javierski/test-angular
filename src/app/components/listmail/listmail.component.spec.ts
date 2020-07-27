import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListmailComponent } from './listmail.component';

describe('ListmailComponent', () => {
  let component: ListmailComponent;
  let fixture: ComponentFixture<ListmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
