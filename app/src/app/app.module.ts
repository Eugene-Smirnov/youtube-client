import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchResultsComponent } from './search/search-results/search-results.component';
import { SearchItemComponent } from './search/search-item/search-item.component';
import { HeaderSearchBarComponent } from './header/header-search-bar/header-search-bar.component';
import { HeaderProfileComponent } from './header/header-profile/header-profile.component';
import { HeaderSearchParamsComponent } from './header/header-search-params/header-search-params.component';

import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { SearchSortPipe } from './pipes/search-sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchResultsComponent,
    SearchItemComponent,
    HeaderSearchBarComponent,
    HeaderProfileComponent,
    HeaderSearchParamsComponent,
    SearchFilterPipe,
    SearchSortPipe,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
