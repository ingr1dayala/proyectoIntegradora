import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl,ValidationErrors } from '@angular/forms'; // Importamos el FormGroup y FormBuilder
import { Router } from '@angular/router';
import {AvailableResult,BiometryType,NativeBiometric } from 'capacitor-native-biometric';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  
})

export class LoginPage implements OnInit {
  

  formularioLogin: FormGroup; // Definimos el FormGroup

  constructor(public fb: FormBuilder, private router: Router) {
    this.formularioLogin = this.fb.group({
      'correo': new FormControl('', [Validators.required,
          Validators.pattern(/^[0-9]{7}@utrivieramaya.edu.mx$/),
          Validators.email]),
      'password': new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).+$')])
    });
  }

  buttonClick(): void { 
    console.log('form valid',this.formularioLogin.valid);
    if (this.formularioLogin.valid) {
      this.router.navigateByUrl('/inicio');
    }
  }
  
  ngOnInit() {
  }

  loginWithFingerprint() {
    NativeBiometric.isAvailable().then((result: AvailableResult) => {
      const isAvailable = result.isAvailable;

      if (isAvailable) {
        NativeBiometric.verifyIdentity({
          reason: 'For easy log in',
          title: 'Log in',
          subtitle: 'Maybe add subtitle here?',
          description: 'Maybe a description too?',
        })
          .then(() => {
            // Autenticación exitosa con huella dactilar
            console.log('Autenticación exitosa con huella dactilar');
            // Aquí puedes realizar el proceso de inicio de sesión
            //this.authService.loginWithFingerprint();
          })
          .catch((error: any) => {
            // Error en la autenticación con huella dactilar
            console.error('Error en la autenticación con huella dactilar', error);
          });
      }
    });
  }
}

