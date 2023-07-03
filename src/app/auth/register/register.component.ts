import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { CreateUserModelDto } from 'src/app/entities/user.model';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  signupForm!: FormGroup; // Agrega el signo de exclamación para indicar que será inicializado posteriormente
  passwordconfirm: string = '';
  users: CreateUserModelDto = {
    name: '',
    lastname: '',
    photo: '',
    email: '',
    password: '',
    rol: 'e1cb30fa-cd90-4758-9ef1-f4ad5953ea8a'
  };

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private clientsService: ClientService
  ) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z\s]+')]],
      lastname: ['', [Validators.required, Validators.pattern('[a-zA-Z\s]+')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, this.passwordStrengthValidator]],
      confirm_password: ['', Validators.required]
    }, {
      validators: this.passwordMatchValidator.bind(this) // Agrega .bind(this) para asegurar el contexto correcto
    });
  }

  passwordStrengthValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.value;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*()]/.test(password);
    const valid = hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar && password.length >= 8;
    return valid ? null : { pattern: true };
  }

  passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('password')?.value; // Agrega el operador de navegación segura para evitar el error
    const confirmPassword = control.get('confirm_password')?.value; // Agrega el operador de navegación segura para evitar el error
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  navigateToLogin() {
    this.router.navigateByUrl('/login');
  }

  createUser() {
    try {
      if (this.signupForm.valid && this.users.password === this.passwordconfirm) {
        this.clientsService.createUsers(this.users).subscribe(
          response => {
            console.log(response);
            this.router.navigateByUrl('/login');
          }
        );
      } else {
        throw new Error('Las contraseñas deben coincidir y el formulario debe ser válido');
      }
    } catch (error) {
      console.log(error);
    }
  }
}
