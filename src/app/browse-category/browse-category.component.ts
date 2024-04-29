import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BookListComponent } from '../book-list/book-list.component';
import { BooksService } from '../services/books.service';
import { BookVolume } from '../interfaces/book-volume';

@Component({
  selector: 'app-browse-category',
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule, BookListComponent],
  templateUrl: './browse-category.component.html',
  styleUrl: './browse-category.component.css'
})
export class BrowseCategoryComponent implements OnInit {
  isLoading: boolean = true
  books: BookVolume[] = []

  constructor(private route: ActivatedRoute, private booksService: BooksService) {}

  ngOnInit(): void {
    const category = this.route.snapshot.paramMap.get('id')
    this.booksService.searchBooks(`subject:${category}`, { maxResults: 27 }).subscribe((response) => {
      this.books = response.items
      this.isLoading = false
    })
  }
}
