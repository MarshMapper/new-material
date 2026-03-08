import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about';
import { HelpComponent } from './components/help/help';
import { <%= classify(defaultPageName) %>Component } from './components/<%= dasherize(defaultPageName.toLowerCase()) %>/<%= dasherize(defaultPageName.toLowerCase()) %>';

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
