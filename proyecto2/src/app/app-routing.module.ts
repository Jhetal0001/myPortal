import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminModule } from './admin/admin.module';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
  { path: 'admin-login', component: AdminLoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), AdminModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
