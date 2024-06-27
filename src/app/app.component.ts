import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    RouterOutlet,
    MatCardModule
  ]
})
export class AppComponent {
  title = 'Platform-Development-Angular-5-Assessment';
}
