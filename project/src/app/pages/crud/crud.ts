import { Component, OnInit, ViewChild, AfterViewInit, inject } from '@angular/core';
import { Menu } from '../../components/menu/menu';
import { Button } from '../../components/button/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { Album } from '../../interfaces/album.interface';
import { Albums } from '../../core/services/album';
import { MatDialog } from '@angular/material/dialog';
import { ModalView } from './modal-view/modal-view';
import { ModalForm } from './modal-form/modal-form';
import { NgClass } from '@angular/common';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [
    Menu,
    Button,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    NgClass,
    Footer,
  ],
  templateUrl: './crud.html',
  styleUrl: './crud.css',
})
export class Crud implements OnInit, AfterViewInit {
  private albumsService = inject(Albums);
  dialog = inject(MatDialog);

  displayedColumns: string[] = ['id', 'title', 'band', 'hasVinyl', 'action'];

  dataSource = new MatTableDataSource<Album>([]);

  listAlbums: Album[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit() {
    this.dataSource.data = this.albumsService.getAll();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  //not sure
  getAlbums() {
    const albums = JSON.parse(localStorage.getItem('albums') || '[]');
    this.dataSource.data = albums;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  //logicas do modal
  openModalView(album: Album) {
    this.dialog.open(ModalView, {
      width: '700px',
      height: '330px',
      data: album,
    });
  }

  openModalAdd() {
    this.dialog
      .open(ModalForm, {
        width: '700px',
        height: '400px',
      })
      //refresh da tabela quando fechar o modal
      .afterClosed()
      .subscribe(() => {
        this.getAlbums();
      });
  }

  openModalEdit(album: Album) {
    this.dialog
      .open(ModalForm, {
        width: '700px',
        height: '400px',
        data: album,
      })
      //refresh da tabela quando fechar o modal
      .afterClosed()
      .subscribe(() => {
        this.getAlbums();
      });
  }

  deleteAlbum(album: Album) {
    const confirmDelete = confirm(`Apagar o álbum "${album.title}"?`);

    if (confirmDelete) {
      this.albumsService.delete(album.id);
      this.getAlbums();
    }
  }
}
