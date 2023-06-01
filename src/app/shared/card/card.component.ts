import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalDogComponent } from './modal-dog/modal-dog.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() imagesPet: any;
  @Input() estado: any = 'se busca';

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  // openDetail() {
  //   if (screen.width < 900) {
  //     this.dialog.open(ModalPetComponent, {
  //       width: '100vw',
  //       height: '80vh',
  //       data: { name: "" },
  //     });
  //   } else {
  //     this.dialog.open(ModalPetComponent, {
  //       width: '800px',
  //       height: '500px',
  //       data: { name: "" },
  //     });
  //   }
  // }

  openDetail(detailDog: any) {
    const dialogRef = this.dialog.open(ModalDogComponent, {

      data: {
        imagen: detailDog.PetImage,
        ubicacion: 'Barrio tricentenario, cra63a #94-339',
        fecha: detailDog.fecha,
        nota: `Fue encontrado con su collar, pero llamo al número y no contestan`
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Lógica cuando se confirma que es la mascota del usuario
      }
    });
  }

}
