import { Component } from '@angular/core';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  loginForm = false;
  alertActive = '';
  alertMessage = '';

  showLogin() {
    return (this.loginForm = true);
  }

  formLogin: FormGroup;
  errorLogin: boolean | null = null;

  constructor(private userService: UserService, private router: Router) {
    this.formLogin = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  async getUser(id: string) {
    let validator;
    await this.userService
      .getUser(id)
      .then((data) => {
        validator = data;
      })
      .catch((error) => {
        this.alertActive = 'danger';
        this.alertMessage = error.message;
        this.hide();
      });
    return validator;
  }

  onSubmit() {
    const email = this.formLogin.get('email')?.value;
    const password = this.formLogin.get('password')?.value;
    this.userService
      .login(email, password)
      .then((response) => {
        const userId = response.user.uid;
        console.log(response.user.uid);
        this.getUser(userId);
        this.router.navigate(['homeSession']);
      })
      .catch((error) => {
        this.alertActive = 'danger';
        this.alertMessage = error.message;
        this.hide();
      });
  }

  onClick() {
    this.userService
      .loginWithGoogle()
      .then(async (result) => {
        const userId = result.user.uid;
        const validator = await this.getUser(userId);
        GoogleAuthProvider.credentialFromResult(result);
        if (!validator) {
          const formulario: User = { email: '' };
          formulario.name = result.user.displayName;
          formulario.email = result.user.email;
          formulario.emailVerified = result.user.emailVerified;
          formulario.phone = result.user.phoneNumber;
          formulario.imgurl = result.user.photoURL;
          formulario.id = result.user.uid;
          this.userService.createUser(userId, formulario);
          this.getUser(userId);
        }
        this.router.navigate(['homeSession']);
      })
      .catch((error) => {
        this.alertActive = 'danger';
        this.alertMessage = error.message;
        this.hide();
      });
  }
  resetPassword() {
    const email = this.formLogin.get('email')?.value;
    if (email !== '') {
      this.userService
        .resetPassword(email)
        .then(() => {
          this.alertActive = 'info';
          this.alertMessage = `Se ha enviado el link al email: '${email}' para restrablecer la contrase??a`;
          this.hide();
        })
        .catch((error) => {
          this.alertActive = 'danger';
          this.alertMessage = error.message;
          this.hide();
        });
    } else {
      this.alertActive = 'danger';
      this.alertMessage = 'Debe digitar un email';
      this.hide();
    }
  }

  hide() {
    setTimeout(() => {
      this.alertActive = '';
      this.alertMessage = '';
    }, 5000);
  }
}
