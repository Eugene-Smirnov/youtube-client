import { Component } from '@angular/core';
import { searchResponse as response } from './search/search-results/search-response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  searchResponse = response.items;

  title = 'app';
}
