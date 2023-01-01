import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//Rutas
import { app_routing } from "./app.routes";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';
import { MenuComponent } from './home/menu/menu.component';
import { SearchComponent } from './home/header/search/search.component';
import { MicvComponent } from './home/micv/micv.component';
import { PrincipalComponent } from './home/principal/principal.component';
import { ProyectosComponent } from './home/proyectos/proyectos.component';
import { BlogspaceComponent } from './home/blogspace/blogspace.component';
import { LoginComponent } from './home/login/login.component';
import { SignupComponent } from './home/login/signup/signup.component';
import { SigninComponent } from './home/login/signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    SearchComponent,
    MicvComponent,
    PrincipalComponent,
    ProyectosComponent,
    BlogspaceComponent,
    LoginComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
