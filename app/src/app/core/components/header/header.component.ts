import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { youtubeSearchItems } from 'src/app/redux/actions/youtube-api.actions';
import { AuthService } from 'src/app/auth/services/auth.service';
import { SearchSettingsService } from '../../services/search-settings.service';
import { SearchService } from '../../../youtube/services/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  profileName = 'Your Name';

  isAuthorized = false;

  isSearchSettingsOpened = false;

  isSearchNewOpened = false;

  filterValue = '';

  searchByDate = false;

  searchByViews = false;

  isDesc = false;

  constructor(
    private router: Router,
    private store: Store,
    private location: Location,
    private searchService: SearchService,
    private searchSettingsService: SearchSettingsService,
    private authService: AuthService,
  ) {}

  ngOnInit() {
    this.searchSettingsService.settings$.subscribe((settings) => {
      this.isSearchSettingsOpened = settings.isOpened;
      this.filterValue = settings.filterValue;
      this.searchByDate = settings.searchParams.sortBy === 'byDate';
      this.searchByViews = settings.searchParams.sortBy === 'byViews';
      this.isDesc = settings.searchParams.isDesc;
    });

    this.authService.user$.subscribe((user) => {
      this.profileName = user.login;
      this.isAuthorized = user.isAuthorized;
    });

    this.location.onUrlChange((url) => {
      this.isSearchNewOpened = url.includes('search/admin');
    });

    // this.route.url.subscribe((url) => {
    //   const isAdminPage = url;
    //   console.log(isAdminPage);
    //   if (isAdminPage) this.isSearchNewOpened = true;
    //   else this.isSearchNewOpened = false;
    // });
  }

  onSearch(value: string): void {
    if (value.length < 3) return;
    this.searchService.searchItems(value).subscribe((res) => {
      this.store.dispatch(youtubeSearchItems({ searchItems: res }));
    });
  }

  onToggleSettingsBar() {
    this.searchSettingsService.toggleIsOpened();
  }

  onToggleNew() {
    this.router.navigate(['/search/admin']);
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

  onLogoutClick() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
