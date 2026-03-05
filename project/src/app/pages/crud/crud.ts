import { Component, OnInit } from '@angular/core';
import { Menu } from '../../components/menu/menu';
import { Button } from '../../components/button/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';

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
  ],
  templateUrl: './crud.html',
  styleUrl: './crud.css',
})
export class Crud implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'band', 'genre', 'action'];

  dataSource = new MatTableDataSource<any>([]);

  ngOnInit() {
    const albums = JSON.parse(localStorage.getItem('albums') || '[]');
    this.dataSource.data = albums;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
