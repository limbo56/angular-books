import { Component, Input } from '@angular/core';
import { Router } from '@angular/router'
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-book-category',
  standalone: true,
  imports: [MatGridListModule, MatButtonModule],
  templateUrl: './book-category.component.html',
  styleUrl: './book-category.component.css'
})
export class BookCategoryComponent {
  @Input() type = "unknown"
  @Input() title = "Unknown"
  @Input() source = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJwYR089AoULZqxaMRSIpJe2QDi2ipraXAqQxH__aJpA&s"

  constructor(private router: Router) { }

  navigateToCategory() {
    this.router.navigate(['browse', 'category', this.type]).catch(error => {
      console.error('Error navigating to route:', error);
    });
  }
}
