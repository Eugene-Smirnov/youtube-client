import { Pipe, PipeTransform } from '@angular/core';
import { SearchItemModel } from '../models/search-item.model';

@Pipe({
  name: 'SearchFilterPipe',
})
export class SearchFilterPipe implements PipeTransform {
  transform(items: SearchItemModel[] | null, filterValue: string): SearchItemModel[] {
    if (!items) return [];
    if (!filterValue) return items;
    return items.filter((item) =>
      item.snippet.title.toLowerCase().includes(filterValue.toLowerCase()),
    );
  }
}
