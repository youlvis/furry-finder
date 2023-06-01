import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.scss']
})
export class AlertModalComponent {
  constructor(
    public dialogRef: MatDialogRef<AlertModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router
  ) { }

  closeModal() {
    this.dialogRef.close();
  }

  goToLogin() {
    this.router.navigate(['/login']);
    this.closeModal();
  }
}
