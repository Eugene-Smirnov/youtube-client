import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SearchItemModel } from '../search/search-item.model';
import { searchResponse as response } from '../search/search-results/search-response';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private items: BehaviorSubject<{
    items: SearchItemModel[];
    sortByDate: boolean;
  }> = new BehaviorSubject<{
    items: SearchItemModel[];
    sortByDate: boolean;
  }>({ items: [], sortByDate: false });

  items$: Observable<SearchItemModel[]> = this.items.pipe(
    map(({ items, sortByDate }) => {
      return sortByDate ? this.sortByDate(items) : items;
    }),
  );

  searchItems(sortByDate: boolean): void {
    this.items.next({ items: response.items, sortByDate });
  }

  private sortByDate(items: SearchItemModel[]): SearchItemModel[] {
    return [...items].sort(); // TODO: sorting
  }
}
