import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
    MatSelect,
    MatOption,
    CommonModule,
    MatInputModule,
  ],
  templateUrl: './modal-form.html',
  styleUrl: './modal-form.css',
})
export class ModalForm {
  genero = [
    { id: 1, name: 'Rock' },
    { id: 2, name: 'Pop' },
    { id: 3, name: 'Hip-hop' },
    { id: 4, name: 'Jazz' },
    { id: 5, name: 'Clássica' },
    { id: 6, name: 'Electronica' },
    { id: 7, name: 'Country' },
    { id: 8, name: 'Reggae' },
    { id: 9, name: 'Blues' },
    { id: 10, name: 'Folk' },
    { id: 11, name: 'Metal' },
    { id: 12, name: 'Punk' },
    { id: 13, name: 'Funk' },
    { id: 14, name: 'Soul' },
    { id: 15, name: 'Disco' },
    { id: 16, name: 'Indie' },
    { id: 17, name: 'Outro' },
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
