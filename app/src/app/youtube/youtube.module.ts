import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { SearchItemComponent } from './components/search/search-item/search-item.component';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { SearchSortPipe } from './pipes/search-sort.pipe';

@NgModule({
  declarations: [SearchResultsComponent, SearchItemComponent, SearchFilterPipe, SearchSortPipe],
  imports: [CommonModule],
  exports: [SearchResultsComponent, SearchFilterPipe, SearchSortPipe],
})
export class YoutubeModule {}
