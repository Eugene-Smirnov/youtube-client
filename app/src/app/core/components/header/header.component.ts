import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Router } from '@angular/router';
import { SearchSettingsService } from '../../services/search-settings.service';
import { SearchService } from '../../../youtube/services/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  profileName = 'Your Name';

  isAuthorized = false;

  isSearchSettingsOpened = false;

  filterValue = '';

  searchByDate = false;

  searchByViews = false;

  isDesc = false;

  constructor(
    private searchService: SearchService,
    private searchSettingsService: SearchSettingsService,
    private authService: AuthService,
    private router: Router,
  ) {
    this.searchSettingsService.settings$.subscribe((settings) => {
      this.isSearchSettingsOpened = settings.isOpened;
      this.filterValue = settings.filterValue;
      this.searchByDate = settings.searchParams.sortBy === 'byDate';
      this.searchByViews = settings.searchParams.sortBy === 'byViews';
      this.isDesc = settings.searchParams.isDesc;
    });

    authService.items$.subscribe((user) => {
      this.profileName = user.login;
      this.isAuthorized = user.isAuthorized;
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

  onLogoutClick() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
