import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

//Angular Material
import { MatIconModule } from '@angular/material/icon'; //o minino não gosta deste
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Button } from './components/button/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatIconModule,
    MatProgressSpinnerModule,
    Button,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatDialogModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('project');
}
