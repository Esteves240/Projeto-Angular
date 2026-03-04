import { Component } from '@angular/core';
import { Menu } from '../../components/menu/menu';

@Component({
  selector: 'app-crud',
  imports: [Menu],
  templateUrl: './crud.html',
  styleUrl: './crud.css',
})
export class Crud {}
