/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommentsService } from 'src/app/services/comments.service';
import {
  onSnapshot,
  Firestore,
  query,
  collection,
  serverTimestamp,
  orderBy,
} from '@angular/fire/firestore';
import { Comments } from 'src/app/models/comments.model';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  formComment = new FormGroup<object>({
    nombre: new FormControl(''),
    textArea: new FormControl(''),
    time: new FormControl(),
  });

  @Input() nameProject = '';
  @Input() sectionShow  = false;
  @Output() sectionHide = new EventEmitter();

  alertActive = '';
  alertMessage = '';

  comments: Comments[] = [];
  unsubscribe: any;

  constructor(
    private commentsService: CommentsService,
    private firestore: Firestore
  ) {
    this.formComment = new FormGroup<object>({
      nombre: new FormControl(
        '',
        (Validators.required, Validators.minLength(3))
      ),
      textArea: new FormControl(
        '',
        (Validators.required, Validators.minLength(20))
      ),
      time: new FormControl(serverTimestamp()),
    });
  }

  ngOnInit(): void {
    const q = query(collection(this.firestore, 'comments', this.nameProject, 'comments'), orderBy('time', 'asc'));
    onSnapshot(q, (snapshot) => {
      snapshot.docChanges().forEach((change: any) => {
        if (change.type === 'modified') {
          this.comments.unshift(change.doc.data());
        }
      });
    });
    this.unsubscribe = onSnapshot(q, (snapshot) => {
      snapshot.docChanges().forEach((change: any) => {
          this.comments.unshift(change.doc.data());
      });
    });
  }

  onSubmit() {
    const formulario = this.formComment.value;
    const idcomment = `${this.formComment.get('nombre')?.value}${new Date()}`;
    this.unsubscribe();
    this.commentsService
      .newComment(this.nameProject, idcomment, formulario)
      .then(() => {
        this.formComment.markAsPristine();
        this.formComment.markAsUntouched();
      })
      .catch((error) => {
        this.alertActive = 'danger';
        this.alertMessage = error;
        this.hideAlert();
      });
  }
  hideSection(e: boolean) {
    this.sectionShow = e;
    this.sectionHide.emit();
  }
  hideAlert() {
    setTimeout(() => {
      this.alertActive = '';
      this.alertMessage = '';
    }, 5000);
  }
}
