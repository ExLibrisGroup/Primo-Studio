import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationDialogComponent } from './confirmation-dialog.component';
import {MockPipe} from 'ng-mocks';
import {TextFormatPipe} from '../utils/text-format.pipe';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';

describe('ConfirmationDialogComponentComponent', () => {
  let component: ConfirmationDialogComponent;
  let fixture: ComponentFixture<ConfirmationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [
            MatDialogModule
        ],
      declarations: [
          ConfirmationDialogComponent,
          MockPipe(TextFormatPipe)
      ],
        providers: [
            {provide: MatDialogRef, useValue: {}}
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
