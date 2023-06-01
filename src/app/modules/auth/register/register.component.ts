import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { ModalsComponent } from 'src/app/shared/modals/modals.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  isLoading: boolean = false;
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private dialog: MatDialog, private router: Router) {
    this.registerForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.isLoading = true;
    if (this.registerForm.valid) {
      const formData = this.registerForm.value;
      this.authService.register(formData).subscribe(
        response => {
          this.startComfirmEmail();
        },
        error => {
          this.validateError(error);
        }
      );
    } else {
      this.validateForm();
    }

  }

  validateError(error: any) {
    const data = {
      title: '¡Ups! Este correo ya se encuentra registrado',
      imageSrc: 'assets/images/dog-alert.png',
      description: 'Por favor, verifica y vuelve a intentar'
    }
    this.isLoading = false;
    this.openModal(data);
  }

  startComfirmEmail() {
    const data = {
      title: '¡Guau!! Solo un paso más',
      imageSrc: 'assets/images/ok-dog.png',
      description: 'Por favor, entra a tu correo y digita el codigo de confirmación en esta página'
    }
    this.isLoading = false;
    this.openModal(data);
    this.router.navigate(['confirm-email']);
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
