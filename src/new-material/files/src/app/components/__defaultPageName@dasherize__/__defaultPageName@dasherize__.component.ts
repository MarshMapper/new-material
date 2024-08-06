import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-<%= dasherize(defaultPageName.toLowerCase()) %>',
  standalone: true,
  imports: [],
  templateUrl: './<%= dasherize(defaultPageName.toLowerCase()) %>.component.html',
  styleUrl: './<%= dasherize(defaultPageName.toLowerCase()) %>.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class <%= classify(defaultPageName) %>Component {
}
