import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent  {

loginForm = false;

showLogin(){
  return (this.loginForm = true);
}

formLogin: FormGroup;
errorLogin: boolean | null = null;

constructor(
  private userService: UserService,
  private router: Router
) {
  this.formLogin = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  })
}

onSubmit() {
  const email = this.formLogin.get('email')?.value;
  const password = this.formLogin.get('password')?.value;
  this.userService.login(email, password)
  .then(response => {
    console.log(response)
    this.router.navigate(['homeSession']);
  })
  .catch(error => {
    return this.errorLogin = error;
  })
}

onClick() {
  this.userService.loginWithGoogle()
  .then(() => {
    this.router.navigate(['homeSession']);
  })
  .catch(error => console.log(error))
}

}
