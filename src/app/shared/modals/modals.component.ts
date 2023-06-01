import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.scss']
})
export class ModalsComponent implements OnInit {
  title: string;
  imageSrc: string;
  description: string;

  constructor(
    public dialogRef: MatDialogRef<ModalsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData
  ) {}

  ngOnInit(): void {
    this.title = this.data.title;
    this.imageSrc = this.data.imageSrc;
    this.description = this.data.description;
  }

  closeModal() {
    this.dialogRef.close();
  }
}

interface ModalData {
  title: string;
  imageSrc: string;
  description: string;
}
