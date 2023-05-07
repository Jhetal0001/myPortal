/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { UserService } from './user.service';
import { Auth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  private isAdmin = new BehaviorSubject<boolean>(false);
  private uid = '9ZhCxIXQSbciCUzKHBftg48adKA3'
  constructor(private userService: UserService, private auth : Auth) {
    auth.onAuthStateChanged((data) => {
      if (data && data.uid === this.uid) {
        this.isAdmin.next(true);
      } else {
        this.isAdmin.next(false);
      }
    })
  }

  private alertSubject = new Subject<any>();
  alert$ = this.alertSubject.asObservable();

  private loadingSubject = new Subject<any>();
  loadind$ = this.loadingSubject.asObservable();

  showAlert(message: string, type: string) {
    this.alertSubject.next({ message, type });
  }
  clearAlert() {
    this.alertSubject.next(null);
  }

  showLoad() {
    this.loadingSubject.next(true);
  }
  hideLoad() {
    this.loadingSubject.next(false);
  }

  role(){
    return this.isAdmin.asObservable();
  }
}
