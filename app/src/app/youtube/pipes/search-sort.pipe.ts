import { Pipe, PipeTransform } from '@angular/core';
import { SearchParamsModel } from '../../core/models/search-params.model';
import { SearchItemModel } from '../models/search-item.model';

@Pipe({
  name: 'SearchSortPipe',
})
export class SearchSortPipe implements PipeTransform {
  transform(items: SearchItemModel[] | null, searchParams: SearchParamsModel): SearchItemModel[] {
    if (!items) return [];
    if (searchParams.sortBy === 'byDate') this.sortByDate(items, searchParams.isDesc);
    if (searchParams.sortBy === 'byViews') this.sortByViews(items, searchParams.isDesc);
    return items;
  }

  sortByDate(items: SearchItemModel[], isDesc: boolean): SearchItemModel[] {
    if (isDesc) {
      items.sort((a, b) => {
        const aTime = new Date(a.snippet.publishedAt).getTime();
        const bTime = new Date(b.snippet.publishedAt).getTime();
        return bTime - aTime;
      });
    } else {
      items.sort((a, b) => {
        const aTime = new Date(a.snippet.publishedAt).getTime();
        const bTime = new Date(b.snippet.publishedAt).getTime();
        return aTime - bTime;
      });
    }
    return items;
  }

  sortByViews(items: SearchItemModel[], isDesc: boolean): SearchItemModel[] {
    if (isDesc) {
      items.sort((a, b) => {
        return +b.statistics.viewCount - +a.statistics.viewCount;
      });
    } else {
      items.sort((a, b) => {
        return +a.statistics.viewCount - +b.statistics.viewCount;
      });
    }
    return items;
  }
}
