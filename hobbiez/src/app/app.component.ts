import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HobbyComponent } from './hobby/hobby.component';
import { HobbyListComponent } from './hobby-list/hobby-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HobbyComponent, HobbyListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'hobbiez';
}
