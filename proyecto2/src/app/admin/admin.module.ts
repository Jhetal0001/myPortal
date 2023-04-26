import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './components/nav/nav.component';
import { FooterAdminComponent} from './components/footerAdmin/footerAdmin.component';
import { SidebarAdminComponent } from './components/sidebar-admin/sidebar-admin.component';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../../environments/environment';



@NgModule({
  declarations: [
    AdminComponent,
    AdminLoginComponent,
    NavComponent,
    FooterAdminComponent,
    SidebarAdminComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    provideFirestore(() => getFirestore()),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideMessaging(() => getMessaging()),
    provideStorage(() => getStorage()),
  ]
})
export class AdminModule { }
