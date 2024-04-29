import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { BookVolume } from '../interfaces/book-volume';
import { MatButtonModule } from '@angular/material/button';
import { LibraryService } from '../services/library.service';

@Component({
  selector: 'app-book-list-item',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './book-list-item.component.html',
  styleUrl: './book-list-item.component.css'
})
export class BookListItemComponent {
  @Input({ required: true }) book!: BookVolume
  
  constructor (private libraryService: LibraryService) { }

  addToLibrary() {
    this.libraryService.addToLibrary(this.book)
  }

  removeFromLibrary() {
    this.libraryService.removeFromLibrary(this.book.id)
  }

  isInLibrary(): boolean {
    return this.libraryService.hasBook(this.book.id)
  }
}
