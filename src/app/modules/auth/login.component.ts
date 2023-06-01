import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { ModalsComponent } from 'src/app/shared/modals/modals.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoading: boolean = false;
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    this.isLoading = true;
    if (this.loginForm.valid) {
      const dataLogin = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      };
      this.authService.login(dataLogin).subscribe(
        (respuesta) => {
          this.router.navigate(['home']);
          this.isLoading = false;
        },
        (error) => {
          this.validateError(error);
        }
      );
    } else {
      this.validateForm();
    }
  }


  validateError(error: any) {
    const data = {
      title: '¡Ups! Parece que no es el correo o contraseña correcta',
      imageSrc: 'assets/images/dog-alert.png',
      description: 'Por favor, verifica y vuelve a intentar'
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
