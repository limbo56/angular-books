import { Component, Input } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { BookVolume } from '../../interfaces/book-volume';
import { BookListItemComponent } from '../book-list-item/book-list-item.component';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [MatGridListModule, BookListItemComponent],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {
  @Input({ required: true }) books!: BookVolume[]
}
