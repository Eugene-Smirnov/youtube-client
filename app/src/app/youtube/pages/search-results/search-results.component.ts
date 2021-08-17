import { Component } from '@angular/core';
import { SearchParamsModel } from 'src/app/core/models/search-params.model';
import { SearchSettingsService } from 'src/app/core/services/search-settings.service';
import { SearchItemModel } from '../../models/search-item.model';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent {
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
}
