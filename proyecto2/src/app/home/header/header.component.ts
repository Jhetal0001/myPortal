import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  //mostrar menu
  menuView() {
     $("#menu").animate({right: '20%'});
     $(".app-menu").fadeIn('slow');
  }

  eventClickOut(){
    $("#menu").animate({right: '100%'});
    $(".app-menu").fadeOut('slow');
  }
}
