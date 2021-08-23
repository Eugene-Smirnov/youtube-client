import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SearchParamsModel } from 'src/app/core/models/search-params.model';
import { SearchSettingsService } from 'src/app/core/services/search-settings.service';
import { selectYoutubeApiItems } from 'src/app/redux/selectors/youtube-api.selectors';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  public searchResponse$ = this.store.select(selectYoutubeApiItems);

  searchParams: SearchParamsModel = {
    sortBy: '',
    isDesc: true,
  };

  filterValue = '';

  constructor(private searchSettingsService: SearchSettingsService, private store: Store) {}

  ngOnInit() {
    this.searchSettingsService.settings$.subscribe((settings) => {
      this.searchParams = settings.searchParams;
      this.filterValue = settings.filterValue;
    });
  }
}
