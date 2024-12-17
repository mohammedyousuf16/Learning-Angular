import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HobbyListComponent } from '../hobby-list/hobby-list.component';

@Component({
  selector: 'app-hobby',
  standalone: true,
  imports: [FormsModule, CommonModule, HobbyListComponent],
  templateUrl: './hobby.component.html',
  styleUrl: './hobby.component.css',
})
export class HobbyComponent {
  hobbyArr: string[] = [];
  hobbie: string = '';
  h1Class: string = '';
  addHobby() {
    if (this.hobbie.trim()) {
      this.hobbyArr.push(this.hobbie.trim());
      this.hobbie = '';

      this.hobbyArr.length > 3
        ? (this.h1Class = 'danger')
        : (this.h1Class = 'success');
    }
  }

  removeHobby(index: number) {
    this.hobbyArr.splice(index, 1);
    this.hobbyArr.length > 3
      ? (this.h1Class = 'danger')
      : (this.h1Class = 'success');
  }
}
