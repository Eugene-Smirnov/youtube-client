import { Component, Input, OnInit } from '@angular/core';
import { SearchItemModel } from '../search-item.model';

const PUB_LESS_WEEK_CLASS = 'search-item__time-bar_week';
const PUB_LESS_MONTH_CLASS = 'search-item__time-bar_month';
const PUB_MORE_HALF_YEAR_CLASS = 'search-item__time-bar_half-year';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent implements OnInit {
  @Input() searchItem?: SearchItemModel;

  publicationClass = '';

  ngOnInit(): void {
    if (!this.searchItem?.snippet.publishedAt) return;
    const publicationDate = new Date(this.searchItem.snippet.publishedAt).getTime();
    const daysFromPublication = (new Date().getTime() - publicationDate) / 1000 / 60 / 60 / 24;
    if (daysFromPublication < 7) {
      this.publicationClass = PUB_LESS_WEEK_CLASS;
    } else if (daysFromPublication < 31) {
      this.publicationClass = PUB_LESS_MONTH_CLASS;
    } else if (daysFromPublication > 182) {
      this.publicationClass = PUB_MORE_HALF_YEAR_CLASS;
    }
  }
}
