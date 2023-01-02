import { RouterModule, Routes } from "@angular/router";
import { PrincipalComponent } from "./principal/principal.component";
import { MicvComponent } from "./micv/micv.component";


const home_routes: Routes = [
  { path: 'home-principal', component: PrincipalComponent},
  { path: 'micv', component: MicvComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home-principal'}
];

export const home_routing = RouterModule.forRoot(home_routes, {useHash: true});

