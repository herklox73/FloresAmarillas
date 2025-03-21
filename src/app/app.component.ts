import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlorComponent } from './flor/flor.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [FlorComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'FloresAmarillas';
}
