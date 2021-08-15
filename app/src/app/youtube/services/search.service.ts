import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SearchItemModel } from '../models/search-item.model';
import { searchResponse as response } from '../search-response';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private items: BehaviorSubject<SearchItemModel[]> = new BehaviorSubject<SearchItemModel[]>([]);

  items$: Observable<SearchItemModel[]> = this.items.pipe(map((items) => items));

  searchItems(): void {
    this.items.next(response.items);
  }
}
