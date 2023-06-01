import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PetService } from 'src/app/core/services/pet.service';
import { ModalsComponent } from 'src/app/shared/modals/modals.component';

@Component({
  selector: 'app-pet-search',
  templateUrl: './pet-search.component.html',
  styleUrls: ['./pet-search.component.scss']
})
export class PetSearchComponent implements OnInit {
  isButtonDisabled = true;
  image: File | null;
  imagesPet: any;
  buttonDisabledStyle = {
    'display': 'block',
    'width': '350px',
    'height': '50px',
    'margin': '0 auto',
    'border': 'none',
    'outline': 'none',
    'border-radius': '25px',
    'color': '#fff',
    'font-size': '18px',
    'font-weight': '500',
    'letter-spacing': '1px',
    'text-transform': 'uppercase',
    'background-color': '#ccc',
    'cursor': 'default'
  };

  buttonEnabledStyle = {
    'display': 'block',
    'width': '350px',
    'height': '50px',
    'margin': '0 auto',
    'border': 'none',
    'outline': 'none',
    'border-radius': '25px',
    'color': '#fff',
    'font-size': '18px',
    'font-weight': '500',
    'letter-spacing': '1px',
    'text-transform': 'uppercase',
    'cursor': 'pointer',
    'background': 'linear-gradient(135deg, #3a8ffe 0%, #9658fe 100%)'
  };

  getButtonStyle() {
    return this.isButtonDisabled ? this.buttonDisabledStyle : this.buttonEnabledStyle;
  }


  isLoading: boolean = false;

  constructor(private petService: PetService, private dialog: MatDialog) { }
  ngOnInit(): void {
  }

  onImageSelected(image: File) {
    if (image != null) {
      this.image = image;
      this.isButtonDisabled = false;
    } else {
      this.isButtonDisabled = true;
    }
  }

  searchPetlost() {
    this.isLoading = true;
    this.petService.sendImage(this.image).subscribe((res) => {
      this.validateResponse(res);
    }, (error) => {
      this.imagesPet = [];
      this.validateErrors(error);
    });
  }

  openModal(data: any) {
    const dialogRef = this.dialog.open(ModalsComponent, {
      data: data
    });
  }

  validateErrors(error: any) {
    const data = {
      title: '¡Ups! Ocurrió un error',
      imageSrc: 'assets/images/dog-alert.png',
      description: 'Por favor vuelve a intentar.'
    }
    if (error.status == 400) {
      data.title = 'Servicio en mantenimiento';
      data.imageSrc = 'assets/images/dog-no-server.png';
      data.description = 'Por favor vuelve a intentarlo mas tarde .';
    } else if (error.status == 404) {
      data.title = '¡Ups! No logro reconocer una mascota en la imagen';
      data.imageSrc = 'assets/images/dog-alert.png';
      data.description = `Verifica que la imagen que subiste sea de un perro.
      Trata de que solo aparezca la mascota en la foto.`;
    }
    this.isLoading = false;
    this.openModal(data);
  }

  validateResponse(res: any) {
    if (res) {
      this.imagesPet = res;
    } else {
      this.imagesPet = [];
    }
    this.isLoading = false;
  }

}
