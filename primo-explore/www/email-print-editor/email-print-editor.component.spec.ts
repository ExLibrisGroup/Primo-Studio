import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailPrintEditorComponent } from './email-print-editor.component';

describe('StaticHtmlEditorComponent', () => {
  let component: EmailPrintEditorComponent;
  let fixture: ComponentFixture<EmailPrintEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailPrintEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailPrintEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
