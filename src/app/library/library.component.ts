import { Component, OnInit } from '@angular/core';
import { BookListComponent } from '../book-list/book-list.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BookVolume } from '../interfaces/book-volume';
import { LibraryService } from '../services/library.service';

@Component({
  selector: 'app-library',
  standalone: true,
  imports: [BookListComponent, MatProgressSpinnerModule],
  templateUrl: './library.component.html',
  styleUrl: './library.component.css'
})
export class LibraryComponent implements OnInit {
  books: BookVolume[] = []

  constructor (private libraryService: LibraryService) { }

  ngOnInit(): void {
    this.libraryService.books$.subscribe((books) => {
      this.books = books
    })
  }
}
