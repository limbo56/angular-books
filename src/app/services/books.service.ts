import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { BookVolumesResponse } from '../interfaces/book-volume';
import { SearchOptions } from '../interfaces/search';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  booksApiUrl = 'https://www.googleapis.com/books/v1'

  constructor(private http: HttpClient) { }

  searchBooks(query: String, options: SearchOptions) {
    const { startIndex = 0, maxResults = 10 } = options
    return this.http.get<BookVolumesResponse>(
      `${this.booksApiUrl}/volumes?q=${query}&startIndex=${startIndex}&maxResults=${maxResults}`
    ).pipe(catchError(this.handleError))
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
