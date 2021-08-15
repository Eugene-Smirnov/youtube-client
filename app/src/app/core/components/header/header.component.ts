import { Component } from '@angular/core';
import { SearchSettingsService } from '../../services/search-settings.service';
import { SearchService } from '../../../youtube/services/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isSearchSettingsOpened = false;

  filterValue = '';

  searchByDate = false;

  searchByViews = false;

  isDesc = false;

  constructor(
    private searchService: SearchService,
    private searchSettingsService: SearchSettingsService,
  ) {
    this.searchSettingsService.settings$.subscribe((settings) => {
      this.isSearchSettingsOpened = settings.isOpened;
      this.filterValue = settings.filterValue;
      this.searchByDate = settings.searchParams.sortBy === 'byDate';
      this.searchByViews = settings.searchParams.sortBy === 'byViews';
      this.isDesc = settings.searchParams.isDesc;
    });
  }

  onSearch(): void {
    this.searchService.searchItems();
  }

  onToggleSettingsBar() {
    this.searchSettingsService.toggleIsOpened();
  }

  onSearchFilterChange(inputValue: string) {
    this.searchSettingsService.setFilterValue(inputValue);
  }

  onByDateClick() {
    if (this.searchByDate) {
      this.searchSettingsService.toggleIsDesc();
    } else {
      this.searchSettingsService.resetIsDesc();
      this.searchSettingsService.setSortByDate();
    }
  }

  onByViewsClick() {
    if (this.searchByViews) {
      this.searchSettingsService.toggleIsDesc();
    } else {
      this.searchSettingsService.resetIsDesc();
      this.searchSettingsService.setSortByViews();
    }
  }
}
