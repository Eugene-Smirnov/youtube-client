import { Component } from '@angular/core';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isSearchSettingsOpened = false;

  constructor(private searchService: SearchService) {}

  onSearch(value: string): void {
    this.searchService.searchItems(!!value);
    // TODO: search with valid attributes
  }

  onToggleSettingsBar() {
    this.isSearchSettingsOpened = !this.isSearchSettingsOpened;
  }
}
