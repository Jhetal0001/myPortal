import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.scss']
})
export class HomeUserComponent {


  constructor(
    private userService: UserService,
    private router: Router,
  ) {}

  onClick() {
    this.userService.logout()
    .then(() => {
      this.router.navigate(['home'])
    })
    .catch(error => console.log(error))
  }

}
