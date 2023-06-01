import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { ModalsComponent } from 'src/app/shared/modals/modals.component';

@Component({
  selector: 'app-confirm-email',
  templateUrl: './confirm-email.component.html',
  styleUrls: ['./confirm-email.component.scss']
})
export class ConfirmEmailComponent implements OnInit {
  isLoading: boolean = false;
  confirmEmailForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.confirmEmailForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      verificationCode: ['', Validators.required]
    });
  }

  onSubmit(): void {
    this.isLoading = true;
    if (this.confirmEmailForm.valid) {
      const data = {
        email: this.confirmEmailForm.value.email,
        confirmationCode: this.confirmEmailForm.value.verificationCode
      };
      this.authService.confirmEmail(data).subscribe(
        (respuesta) => {
          this.startComfirmEmail();
        },
        (error) => {
          this.validateError(error);
        }
      );
    } else {
      this.validateForm();
    }

  }

  startComfirmEmail() {
    const data = {
      title: '¡Guau! ¡Ya eres parte de PupFinder!',
      imageSrc: 'assets/images/ok-dog.png',
      description: 'Ya puedes ingresar a tu cuenta'
    }
    this.isLoading = false;
    this.openModal(data);
    this.router.navigate(['login']);
  }

  validateError(error: any) {
    const data = {
      title: '¡Ups! Correo o código de confirmación incorrectos',
      imageSrc: 'assets/images/dog-alert.png',
      description: `Por favor, verifica y vuelve a intentar. Recuerda que el código de confirmación
      fue enviado a tu correo`
    }
    this.isLoading = false;
    this.openModal(data);
  }

  validateForm() {
    const data = {
      title: 'Debes llenar todo los campos correctamente',
      imageSrc: 'assets/images/dog-alert.png',
      description: 'Por favor, verifica y vuelve a intentar'
    }
    this.isLoading = false;
    this.openModal(data);
  }

  openModal(data: any) {
    const dialogRef = this.dialog.open(ModalsComponent, {
      data: data
    });
  }


}

