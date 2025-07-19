import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactoService } from '../services/contacto.service';

@Component({
  selector: 'app-ind-about',
  standalone: false,
  templateUrl: './ind-about.component.html',
  styleUrl: './ind-about.component.scss'
})
export class IndAboutComponent implements OnInit {
  contactoForm!: FormGroup;
  mensajeEnviado = false;
  errorEnvio = false;

  constructor(private fb: FormBuilder, private contactoService: ContactoService) {}

  ngOnInit(): void {
    this.contactoForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  enviar(): void {
    if (this.contactoForm.valid) {
      this.contactoService.enviarMensaje(this.contactoForm.value).subscribe({
        next: () => {
          this.mensajeEnviado = true;
          this.errorEnvio = false;
          this.contactoForm.reset();
        },
        error: () => {
          this.errorEnvio = true;
          this.mensajeEnviado = false;
        }
      });
    }
  }
}
