import { Component } from '@angular/core';
import { SearchParamsModel } from './models/search-params.model';
import { SearchItemModel } from './search/search-item.model';
import { SearchSettingsService } from './services/search-settings.service';
import { SearchService } from './services/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public searchResponse: SearchItemModel[] = [];

  searchParams: SearchParamsModel = {
    sortBy: '',
    isDesc: true,
  };

  filterValue = '';

  constructor(
    private searchService: SearchService,
    private searchSettingsService: SearchSettingsService,
  ) {
    this.searchService.items$.subscribe((items) => {
      this.searchResponse = [...items];
    });
    this.searchSettingsService.settings$.subscribe((settings) => {
      this.searchParams = settings.searchParams;
      this.filterValue = settings.filterValue;
    });
  }

  title = 'app';
}
