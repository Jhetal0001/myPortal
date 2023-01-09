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

  searchView() {
    $(".search").fadeIn('slow');
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if (sessionStorage.getItem('tema') == 'Oscuro'){
      $(":root").css({"--color-primary": "#303436", "--color-claro": "#ffffff",
      "--color-sucundary":"#03839F", "--color-medio":"#383D3F"});
      $(".modo").html('<i class="fa fa-sun-o" aria-hidden="true"></i>')
    }else {
      $(":root").css({"--color-primary": "#d4eaff", "--color-claro": "#00172d",
      "--color-sucundary":"#2696ff", "--color-medio":"#74bcff"});
      $(".modo").html('<i class="fa fa-moon-o" aria-hidden="true"></i>')
    }

    $(".modo").on('click', function() {
      if (sessionStorage.getItem('tema') == 'Claro'){
        $(":root").css({"--color-primary": "#303436", "--color-claro": "#ffffff",
        "--color-sucundary":"#03839F", "--color-medio":"#383D3F"});
        $(".modo").html('<i class="fa fa-sun-o" aria-hidden="true"></i>')
        sessionStorage.setItem('tema', 'Oscuro')
      }else {
        $(":root").css({"--color-primary": "#d4eaff", "--color-claro": "#00172d",
        "--color-sucundary":"#2696ff", "--color-medio":"#74bcff"});
        $(".modo").html('<i class="fa fa-moon-o" aria-hidden="true"></i>')
        sessionStorage.setItem('tema', 'Claro')
      }
      console.log('funciona');
    });
  }
}
