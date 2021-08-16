import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { SearchSortPipe } from './pipes/search-sort.pipe';
import { DetailsPageComponent } from './pages/details-page/details-page.component';
import { YoutubeRoutingModule } from './youtube-routing.module';

@NgModule({
  declarations: [
    SearchResultsComponent,
    SearchItemComponent,
    SearchFilterPipe,
    SearchSortPipe,
    DetailsPageComponent,
  ],
  imports: [CommonModule, YoutubeRoutingModule],
})
export class YoutubeModule {}
