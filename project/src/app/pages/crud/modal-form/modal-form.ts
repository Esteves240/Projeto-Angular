import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MatDialogContent, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { MatFormField, MatLabel, MatError, MatHint } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelect, MatOption } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { Albums } from '../../../core/services/album';
import { Album } from '../../../interfaces/album.interface';

@Component({
  selector: 'app-modal-form',
  imports: [
    MatIcon,
    MatFormField,
    MatLabel,
    ReactiveFormsModule,
    MatError,
    MatHint,
    MatSelect,
    MatOption,
    CommonModule,
    MatDialogContent,
    MatInputModule,
  ],
  templateUrl: './modal-form.html',
  styleUrl: './modal-form.css',
})
export class ModalForm {
  genero = [
    { id: 1, name: 'rock' },
    { id: 2, name: 'pop' },
    { id: 3, name: 'hip-hop' },
    { id: 4, name: 'jazz' },
    { id: 5, name: 'classical' },
    { id: 6, name: 'electronic' },
    { id: 7, name: 'country' },
    { id: 8, name: 'reggae' },
    { id: 9, name: 'blues' },
    { id: 10, name: 'folk' },
    { id: 11, name: 'metal' },
    { id: 12, name: 'punk' },
    { id: 13, name: 'funk' },
    { id: 14, name: 'soul' },
    { id: 15, name: 'disco' },
    { id: 16, name: 'indie' },
    { id: 17, name: 'other' },
  ];

  formAlbum!: FormGroup;
  editAlbum = false;

  constructor(
    public dialogRef: MatDialogRef<ModalForm>,
    private formBuilder: FormBuilder,
    private albumsService: Albums,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  ngOnInit() {
    this.buildForm();
    if (this.data && this.data.id) {
      this.editAlbum = true;
    }
  }

  saveAlbum() {
    const objAlbumForm: Album = this.formAlbum.getRawValue();
    if (this.data?.id) {
      const updatedAlbum: Album = {
        ...objAlbumForm,
        id: this.data.id,
        dateAdded: this.data.dateAdded,
      };
      this.albumsService.update(updatedAlbum);
      window.alert('Álbum editado com sucesso!');
      this.closeModal();
    } else {
      this.albumsService.add(objAlbumForm);
      window.alert('Álbum adicionado com sucesso:');
      this.closeModal();
    }
  }

  buildForm() {
    this.formAlbum = this.formBuilder.group({
      title: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      band: [null, [Validators.required]],
      genre: ['', [Validators.required]],
      year: [null, [Validators.required]],
      isListened: [false],
      classification: [''],
      cover: [''],
      notes: [''],
    });

    //verificar se é para editar ou criar novo
    if (this.data && this.data.title) {
      this.fillForm();
    }
  }

  //preencher formulário para edição
  fillForm() {
    this.formAlbum.patchValue({
      title: this.data.title,
      band: this.data.band,
      genre: this.data.genre,
      year: this.data.year,
      isListened: this.data.isListened,
      classification: this.data.classification,
      cover: this.data.cover,
      notes: this.data.notes,
    });
  }

  closeModal() {
    this.dialogRef.close();
  }
}
