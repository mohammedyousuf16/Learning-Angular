import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hobby-list',
  standalone: true,
  imports: [],
  templateUrl: './hobby-list.component.html',
  styleUrl: './hobby-list.component.css',
})
export class HobbyListComponent {
  @Input() hobbyName: string = '';
  @Output() clickedHobby = new EventEmitter<string>();

  onHobbyClicked() {
    this.clickedHobby.emit();
  }
}
