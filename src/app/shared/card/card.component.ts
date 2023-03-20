import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalPetComponent } from './modal-pet/modal-pet.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDetail() {
    if (screen.width < 900) {
      this.dialog.open(ModalPetComponent, {
        width: '100vw',
        height: '80vh',
        data: { name: "" },
      });
    } else {
      this.dialog.open(ModalPetComponent, {
        width: '800px',
        height: '500px',
        data: { name: "" },
      });
    }

  }
}
