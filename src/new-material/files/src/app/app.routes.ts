import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HelpComponent } from './components/help/help.component';

export const routes: Routes = [
/*    {
        path: 'albums',
        component: PhotoAlbumsComponent,
        title: 'Photo Albums'
    }, */
    {
        path: 'about',
        component: AboutComponent,
        title: 'About'
    },
    {
        path: 'help',
        component: HelpComponent,
        title: 'Help'
    },
    {
        path: '**',
        redirectTo: 'help',
        pathMatch: 'full'
    }
];
