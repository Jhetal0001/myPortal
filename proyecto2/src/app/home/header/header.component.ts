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

  temaOscuro() {
    $(":root").css({"--color-primary": "#303436", "--color-claro": "#ffffff",
    "--color-sucundary":"#03839F", "--color-medio":"#383D3F", "--color-shadow": "#888888"});
    $(".modo").html('<i class="fa fa-sun-o" aria-hidden="true"></i>')
  }
  temaClaro() {
    $(":root").css({"--color-primary": "#DFE8FF", "--color-claro": "#000000",
      "--color-sucundary":"#57bbd1  ", "--color-medio":"#b0e6f1", "--color-shadow": "#03839F"});
      $(".modo").html('<i class="fa fa-moon-o" aria-hidden="true"></i>')
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if (sessionStorage.getItem('tema') == 'Oscuro'||sessionStorage.getItem('tema') == ''){
      this.temaOscuro();
    }else if (sessionStorage.getItem('tema') == 'Claro') {
      this.temaClaro();
    }

    $(".modo").on('click', function() {
      if (sessionStorage.getItem('tema') == 'Claro'){
        sessionStorage.setItem('tema', 'Oscuro')
        location.reload();
      }else {
        sessionStorage.setItem('tema', 'Claro')
        location.reload();
      }
      console.log('funciona');
    });
  }
}
