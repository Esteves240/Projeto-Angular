import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

//Angular Material
import { MatIconModule } from '@angular/material/icon'; //o minino não gosta deste
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatIconModule, MatProgressSpinnerModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('project');
}
