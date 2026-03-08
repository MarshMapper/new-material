import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-<%= dasherize(defaultPageName.toLowerCase()) %>',
  imports: [],
  templateUrl: './<%= dasherize(defaultPageName.toLowerCase()) %>.html',
  styleUrl: './<%= dasherize(defaultPageName.toLowerCase()) %>.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class <%= classify(defaultPageName) %>Component {
}
