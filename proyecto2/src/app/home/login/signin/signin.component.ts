import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
    private router: Router
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


  onSubmit() {
    const email = this.dateContact.get('email')?.value;
    const password = this.datePassword.get('password')?.value;
    this.userService.register(email, password)
    .then(response => {
      console.log(response)
      this.router.navigate(['homeSession'])
    })
    .catch(error => {console.log(error)})
  }

  nextForm() {
    this.section++
  }
  backForm() {
    this.section--
  }
}
