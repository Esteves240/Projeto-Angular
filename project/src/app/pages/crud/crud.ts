import { Component } from '@angular/core';
import { Menu } from '../../components/menu/menu';
import { Button } from '../../components/button/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [Menu, Button, MatFormFieldModule, MatInputModule],
  templateUrl: './crud.html',
  styleUrl: './crud.css',
})
export class Crud {
  dataSource: any;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
