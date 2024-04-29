import { Routes } from '@angular/router';
import { LibraryComponent } from './library/library.component';
import { BrowseComponent } from './browse/browse.component';
import { BrowseCategoryComponent } from './browse-category/browse-category.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/library',
        pathMatch: 'full'
    },
    {
        path: 'browse',
        title: 'Browse',
        data: {
            icon: 'explore',
            display: true
        },
        children: [
            {
                path: '',
                component: BrowseComponent,
            },
            {
                path: 'category/:id',
                component: BrowseCategoryComponent
            }
        ]
    },
    {
        path: 'library',
        component: LibraryComponent,
        title: 'Library',
        data: {
            icon: 'library_books',
            display: true
        }
    }
];
