import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent {

  loginForm!: FormGroup;

    constructor(private user: UserService, private router: Router, private fb: FormBuilder, private UTIL: UtilsService) {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(){
    this.UTIL.showLoad();
    this.user.login(this.loginForm.get('email')?.value, this.loginForm.get('password')?.value)
    .then(() => {
      this.router.navigate(['admin']);
    })
    .catch(error => {this.UTIL.showAlert(error.message, 'danger'); this.UTIL.hideLoad();});
  }

}
