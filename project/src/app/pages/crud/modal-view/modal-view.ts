import { Component, inject } from '@angular/core';
import { Album } from '../../../interfaces/album.interface';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-modal-view',
  imports: [MatIcon, DatePipe],
  templateUrl: './modal-view.html',
  styleUrl: './modal-view.css',
})
export class ModalView {
  dialogRef = inject<MatDialogRef<ModalView>>(MatDialogRef);
  data = inject<Album>(MAT_DIALOG_DATA);

  albumData: Album;

  constructor() {
    const data = this.data;

    this.albumData = data;
  }

  closeModal() {
    this.dialogRef.close();
  }
}
