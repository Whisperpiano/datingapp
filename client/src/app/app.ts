import { Router, RouterOutlet } from '@angular/router';
import { Component, inject } from '@angular/core';
import { Nav } from '../layout/nav/nav';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [Nav, RouterOutlet],
  styleUrl: './app.css',
})
export class App {
  protected router = inject(Router);
}
