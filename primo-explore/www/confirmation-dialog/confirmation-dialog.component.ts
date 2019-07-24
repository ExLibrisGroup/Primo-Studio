import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'prm-confirmation-dialog-component',
  templateUrl: './confirmation-dialog.html',
  styleUrls: ['./confirmation-dialog.scss']
})
export class ConfirmationDialogComponent implements OnInit {

    public confirmationTitle: string;
    public confirmationMessage: string;
    public confirmButtonText: string;
    public cancelButtonText: string;

  constructor(public dialogRef: MatDialogRef<ConfirmationDialogComponent>) {
      this.confirmationTitle = "confirm";
      this.confirmButtonText = "confirm";
      this.cancelButtonText = "cancel";
  }

  ngOnInit() {
  }

}
