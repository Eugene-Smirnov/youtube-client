import { Component } from '@angular/core';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private searchService: SearchService) {}

  onSearch(value: string): void {
    this.searchService.searchItems(!!value);
    // TODO: search with valid attributes
  }
}
