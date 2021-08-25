import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SearchParamsModel } from 'src/app/core/models/search-params.model';
import { SearchSettingsService } from 'src/app/core/services/search-settings.service';
import { selectCustomToSearchItems } from 'src/app/redux/selectors/custom-items.selectors';
import { selectYoutubeApiItems } from 'src/app/redux/selectors/youtube-api.selectors';
import { SearchItemModel } from '../../models/search-item.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  private youtubeApiItems$ = this.store.select(selectYoutubeApiItems);

  private customItems$ = this.store.select(selectCustomToSearchItems);

  public customItems: SearchItemModel[] = [];

  public searchResponse: SearchItemModel[] = [];

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

    this.customItems$.subscribe((items) => {
      this.customItems = [...items];
    });
    this.youtubeApiItems$.subscribe((items) => {
      this.searchResponse = [...this.customItems, ...items];
    });
  }
}
