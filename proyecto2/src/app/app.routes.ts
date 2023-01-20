import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PrincipalComponent } from "./home/principal/principal.component";
import { MicvComponent } from "./home/micv/micv.component";
import { ProyectosComponent } from "./home/proyectos/proyectos.component";
import { BlogspaceComponent } from "./home/blogspace/blogspace.component";
import { LoginComponent } from "./home/login/login.component";
import { SignupComponent } from "./home/login/signup/signup.component";
import { SigninComponent } from "./home/login/signin/signin.component";
import { HomeUserComponent } from "./home-user/home-user.component";
import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo } from "@angular/fire/auth-guard";

const app_routes: Routes = [
  {
    path: 'home', component: HomeComponent, ...canActivate(() => redirectLoggedInTo(['homeSession'])),
    children: [
      { path: '', component: PrincipalComponent },
      { path: 'micv', component: MicvComponent },
      { path: 'proyectos', component: ProyectosComponent },
      { path: 'blogspace', component: BlogspaceComponent },
      {
        path: 'login', component: LoginComponent,
        children: [
          { path: '', component: SignupComponent },
          { path: 'signin', component: SigninComponent },
        ]
      }
    ]
  },
  { path: 'homeSession', component: HomeUserComponent, ...canActivate(() => redirectUnauthorizedTo(['home/login']))},

  { path: '**', pathMatch: 'full', redirectTo: 'home'},

];


export const app_routing = RouterModule.forRoot(app_routes, {useHash: true});
