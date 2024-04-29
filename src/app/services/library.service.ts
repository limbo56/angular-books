import { Injectable } from '@angular/core';
import { BookVolume } from '../interfaces/book-volume';
import { BehaviorSubject, Observable } from 'rxjs';

interface LibraryState {
  items: BookVolume[]
}

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  private booksSubject: BehaviorSubject<BookVolume[]> = new BehaviorSubject<BookVolume[]>([]);
  public books$: Observable<BookVolume[]> = this.booksSubject.asObservable();

  constructor() {
    const libraryItems: string | null = localStorage.getItem('library');
    if (libraryItems !== null) {
      const { items }: LibraryState = JSON.parse(libraryItems);
      this.booksSubject.next(items);
    }
  }
  
  addToLibrary(book: BookVolume): void {
    if (!this.hasBook(book.id)) {
      const updatedBooks = [...this.booksSubject.value, book];
      this.booksSubject.next(updatedBooks);
      this.saveLibrary();
    }
  }

  removeFromLibrary(bookId: string): void {
    const updatedBooks = this.booksSubject.value.filter((book) => book.id !== bookId);
    this.booksSubject.next(updatedBooks);
    this.saveLibrary();
  }

  hasBook(id: string): boolean {
    return this.booksSubject.value.some((book) => book.id === id);
  }

  private saveLibrary() {
    localStorage.setItem('library', JSON.stringify({ items: this.booksSubject.value }));
  }
}
