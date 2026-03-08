import { Component } from '@angular/core';
import { GlobalNavigationComponent } from './components/global-navigation/global-navigation';

@Component({
  selector: 'app-root',
  imports: [GlobalNavigationComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = '<%= projectName %>';
}
