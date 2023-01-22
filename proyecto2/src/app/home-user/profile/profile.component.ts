import { Component,  OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

 userProfile: User | undefined = {};

 constructor(
   private userService: UserService
   ) {}

  ngOnInit() {
   // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
   this.userService.getUser(localStorage.getItem('id')!).then((data) => this.userProfile = data)
  }

}
