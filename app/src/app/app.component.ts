import { Component } from '@angular/core';
import { SearchItemModel } from './search/search-item.model';
import { SearchService } from './services/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public searchResponse: SearchItemModel[] = [];

  constructor(private searchService: SearchService) {
    this.searchService.items$.subscribe((items) => {
      this.searchResponse = [...items];
    });
  }

  title = 'app';
}
