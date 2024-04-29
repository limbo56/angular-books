import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { BookCategoryComponent } from '../book-category/book-category.component';

type BookCategory = {
  type: string
  title: string
  source: string
}

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [MatGridListModule, BookCategoryComponent],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.css'
})
export class BrowseComponent {
  readonly BOOK_CATEGORIES: BookCategory[] = [
    {
      type: 'fiction',
      title: 'Fiction',
      source: 'https://upload.wikimedia.org/wikipedia/en/d/dc/A_Song_of_Ice_and_Fire_book_collection_box_set_cover.jpg'
    },
    {
      type: 'nonfiction',
      title: 'Non-fiction',
      source: 'https://rochizalani.com/wp-content/uploads/2021/03/Down-and-out-in-Paris-and-London.jpg'
    },
    {
      type: 'mystery+thriller',
      title: 'Mystery & Thriller',
      source: 'https://m.media-amazon.com/images/I/81meHRRFChL._AC_UF1000,1000_QL80_.jpg'
    },
    {
      type: 'science+fiction',
      title: 'Science Fiction',
      source: 'https://prodimage.images-bn.com/pimages/9789636203511_p0_v1_s1200x630.jpg'
    },
    {
      type: 'biography+memoir',
      title: 'Biography & Memoir', 
      source: 'https://images4.penguinrandomhouse.com/cover/9781101981009' 
    }
  ]
}
