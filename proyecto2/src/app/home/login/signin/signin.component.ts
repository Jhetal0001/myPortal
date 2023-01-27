import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GoogleAuthProvider } from 'firebase/auth';
import { User } from 'src/app/models/user.model';

import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent  {

  datePesonal: FormGroup;
  dateContact: FormGroup;
  dateAddress: FormGroup;
  datePassword: FormGroup;
  section = 0;
  alertActive= '';
  alertMessage= '';

  public passwordValidator(): ValidatorFn {
    return (formGroup: AbstractControl) => {
      const password:string = formGroup.get('password')?.value;
      const confirmPassword:string = formGroup.get('confirmPassword')?.value;
      if(password!==confirmPassword) { return {isValid:true}; }
      return null;
    };
  }


  constructor(
    private userService: UserService,
    private router: Router,
  ) {
    this.datePesonal = new FormGroup({
      name: new FormControl(null, Validators.required),
      lastname: new FormControl(null, Validators.required),
      sex: new FormControl(null, Validators.required),
    });
    this.dateContact = new FormGroup({
      phone: new FormControl('',[Validators.required, Validators.minLength(7)]),
      email: new FormControl('',[Validators.required, Validators.email]),
    });
    this.dateAddress = new FormGroup({
      country: new FormControl(null, Validators.required),
      city: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
    });
    this.datePassword = new FormGroup({
      password: new FormControl('',  [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl(null, Validators.required),
    },
    {
      validators: this.passwordValidator()
    })
  }

  async getUser(id: string) {
    let validator;
    await this.userService.getUser(id)
    .then(data => {
      validator = data;
    }).catch(error => {
      this.alertActive = 'danger';
      this.alertMessage = error;
      this.hide()
    });
    return validator;
  }

  onSubmit() {
    const formulario = Object.assign(this.dateContact.value, this.datePesonal.value, this.dateAddress.value);
    const email = this.dateContact.get('email')?.value;
    const password = this.datePassword.get('password')?.value;
    this.userService.register(email, password)
    .then(response => {
      const userid = response.user.uid;
      formulario.id = userid;
      this.userService.createUser(userid, formulario);
      this.getUser(userid);
      this.userService.emailVerification().then(() => {
        this.alertActive = 'info';
        this.alertMessage = 'Se envio un codigo de verificacion a tu email';
        this.hide()
      });
      setTimeout(()=> {this.router.navigate(['homeSession'])}, 3000)
    })
    .catch(error => {
        this.alertActive = 'danger';
        this.alertMessage = error;
        this.hide()
    })
  }

  onClick() {
    this.userService.loginWithGoogle()
    .then(async (result) => {
      const userId = result.user.uid;
      const validator = await this.getUser(userId);
      GoogleAuthProvider.credentialFromResult(result);
       if (!validator) {
        const formulario: User = {email:''};
        formulario.name = result.user.displayName;
        formulario.email = result.user.email;
        formulario.emailVerified = result.user.emailVerified;
        formulario.phone = result.user.phoneNumber;
        formulario.imgurl = result.user.photoURL;
        formulario.id = result.user.uid;
        this.userService.createUser(userId, formulario);
        this.getUser(userId);
      }
      this.alertActive = 'success';
      this.alertMessage = 'Registro Exitoso';
      setTimeout(() => {
      this.router.navigate(['homeSession']);}, 1000)
    })
    .catch(error => {
      this.alertActive = 'danger';
      this.alertMessage = error
      this.hide()
    })

  }

  hide(){
    setTimeout(()=>{
    this.alertActive = '';
    this.alertMessage = '';
    }, 5000)
  }

  nextForm() {
    this.section++
  }
  backForm() {
    this.section--
  }
}
