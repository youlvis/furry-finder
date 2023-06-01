import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-dog',
  templateUrl: './modal-dog.component.html',
  styleUrls: ['./modal-dog.component.scss']
})
export class ModalDogComponent implements OnInit {
  imagen: string;
  ubicacion: string;
  fecha: string;
  nota: string;
  dialogWidth: string;

  constructor(public dialogRef: MatDialogRef<ModalDogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.imagen = data.imagen;
    this.ubicacion = data.ubicacion;
    this.fecha = data.fecha;
    this.nota = data.nota;
    this.dialogWidth = data.width || '90%';
  }

  ngOnInit(): void {
  }

  esMiMascota(): void {
    // Lógica cuando se hace clic en "Es mi mascota"
    this.dialogRef.close(true);
  }
  closeModal() {
    this.dialogRef.close();
  }
}
