import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SearchSettingsModel } from '../models/search-settings.model';

@Injectable({
  providedIn: 'root',
})
export class SearchSettingsService {
  private settings: BehaviorSubject<SearchSettingsModel> = new BehaviorSubject<SearchSettingsModel>(
    {
      isOpened: false,
      filterValue: '',
      searchParams: {
        sortBy: '',
        isDesc: true,
      },
    },
  );

  settings$: Observable<SearchSettingsModel> = this.settings.pipe(map((settings) => settings));

  toggleIsOpened(): void {
    this.settings.next({ ...this.settings.value, isOpened: !this.settings.value.isOpened });
  }

  setFilterValue(value: string): void {
    this.settings.next({ ...this.settings.value, filterValue: value });
  }

  resetFilterValue(): void {
    this.setFilterValue('');
  }

  private setSortBy(value: '' | 'byDate' | 'byViews'): void {
    this.settings.next({
      ...this.settings.value,
      searchParams: { ...this.settings.value.searchParams, sortBy: value },
    });
  }

  setSortByDate(): void {
    this.setSortBy('byDate');
  }

  setSortByViews(): void {
    this.setSortBy('byViews');
  }

  resetSortBy(): void {
    this.setSortBy('');
  }

  toggleIsDesc(): void {
    this.settings.next({
      ...this.settings.value,
      searchParams: {
        ...this.settings.value.searchParams,
        isDesc: !this.settings.value.searchParams.isDesc,
      },
    });
  }

  resetIsDesc(): void {
    this.settings.next({
      ...this.settings.value,
      searchParams: {
        ...this.settings.value.searchParams,
        isDesc: true,
      },
    });
  }
}
