import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GalleryModule } from '@ngx-gallery/core';
import { LightboxModule } from '@ngx-gallery/lightbox';

//Rutas
import { app_routing } from "./app.routes";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { SearchComponent } from './components/search/search.component';
import { MicvComponent } from './home/micv/micv.component';
import { PrincipalComponent } from './home/principal/principal.component';
import { ProyectosComponent } from './home/proyectos/proyectos.component';
import { BlogspaceComponent } from './home/blogspace/blogspace.component';
import { LoginComponent } from './home/login/login.component';
import { SignupComponent } from './home/login/signup/signup.component';
import { SigninComponent } from './home/login/signin/signin.component';
import { SafePipe } from './safe.pipe';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { HomeUserComponent } from './home-user/home-user.component';
import { ProfileHeaderComponent } from './components/session/profile-header/profile-header.component';
import { MenuUserComponent } from './components/session/menu-user/menu-user.component';
import { DarkModeComponent } from './components/header/dark-mode/dark-mode.component';

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
    SigninComponent,
    SafePipe,
    HomeUserComponent,
    ProfileHeaderComponent,
    MenuUserComponent,
    DarkModeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    app_routing,
    BrowserAnimationsModule,
    GalleryModule,
    LightboxModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
