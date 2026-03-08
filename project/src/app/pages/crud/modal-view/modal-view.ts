import { Component, Inject } from '@angular/core';
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
  albumData: Album;

  constructor(
    public dialogRef: MatDialogRef<ModalView>,
    @Inject(MAT_DIALOG_DATA) public data: Album,
  ) {
    this.albumData = data;
  }

  closeModal() {
    this.dialogRef.close();
  }
}
