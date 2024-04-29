import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterOutlet, Router, Routes } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule, MatDrawer } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterOutlet, MatIconModule, MatButtonModule, MatToolbarModule, MatSidenavModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  routes: Routes = []
  @ViewChild('drawer', { static: true }) drawer!: MatDrawer;

  constructor(readonly router: Router, readonly title: Title) { }

  ngOnInit(): void {
    this.routes = this.router.config
  }

  navigateToRoute(routePath: string): void {
    this.router.navigate([routePath]).catch(error => {
      console.error('Error navigating to route:', error);
    });
  }

  toggleDrawer(): void {
    this.drawer.toggle();
  }

  getPageIcon(): string {
    let route = this.router.routerState.root;
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route.snapshot.data?.['icon']
  }

  getPageTitle(): string {
    return this.title.getTitle();
  }
}
