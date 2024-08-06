import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HelpComponent } from './components/help/help.component';
import { <%= classify(defaultPageName) %>Component } from './components/<%= dasherize(defaultPageName.toLowerCase()) %>/<%= dasherize(defaultPageName.toLowerCase()) %>.component';

export const routes: Routes = [
    {
        path: '<%= dasherize(defaultPageName.toLowerCase()) %>',
        component: <%= classify(defaultPageName) %>Component,
        title: '<%= defaultPageName %>'
    },
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
        redirectTo: '<%= dasherize(defaultPageName.toLowerCase()) %>',
        pathMatch: 'full'
    }
];
