import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {MessagesComponent} from './messages.component';
import {Message} from '../classes/message';
import {MessageClass} from '../classes/message-class.enum';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {browser} from 'protractor';
import {Animations} from '../utils/animations';

describe('MessagesComponent', () => {
  let component: MessagesComponent;
  let fixture: ComponentFixture<MessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [
            BrowserAnimationsModule
        ],
      declarations: [ MessagesComponent ],
        providers: [
            {provide: Animations.fadeOutAnimation, useValue: {}},
            {provide: Animations.fadeInAnimation, useValue: {}}
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show message', fakeAsync(() => {
      let messageText = "new message";
      let message = new Message(messageText, [MessageClass.success]);
      component.durationInMilliseconds = 1000;
      component.setMessage(message);
      fixture.detectChanges();

      let componentElement: HTMLElement = fixture.debugElement.nativeElement;
      let messageElement: HTMLElement = componentElement.querySelector("." + MessageClass.success);
      expect(messageElement).toBeDefined();
      expect(messageElement.innerText).toEqual(messageText);

      tick(2000);
      fixture.detectChanges();

      expect(component.messages.length).toEqual(0);
  }));
});
