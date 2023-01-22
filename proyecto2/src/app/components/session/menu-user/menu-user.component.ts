import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-menu-user',
  templateUrl: './menu-user.component.html',
  styleUrls: ['./menu-user.component.scss']
})
export class MenuUserComponent {

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
