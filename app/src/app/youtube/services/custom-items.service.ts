import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { parseVideoId } from 'src/app/shared/variables';
import { CustomItem, CustomItemModel } from '../models/custom-item.model';
import { DefaultSearchItem, SearchItemModel } from '../models/search-item.model';

@Injectable({
  providedIn: 'root',
})
export class CustomItemsService {
  constructor(private store: Store) {}

  createItem(
    title: string,
    description: string,
    imageLink: string,
    videoLink: string,
  ): CustomItemModel {
    const newItem = new CustomItem(title, description, imageLink, videoLink);
    return newItem;
  }

  static createSearchItem(customItem: CustomItemModel) {
    const id = parseVideoId(customItem.videoLink);
    const newCustomSearchItem: SearchItemModel = {
      ...DefaultSearchItem,
      id,
      snippet: {
        ...DefaultSearchItem.snippet,
        publishedAt: customItem.date,
        title: customItem.title,
        description: customItem.description,
        thumbnails: {
          ...DefaultSearchItem.snippet.thumbnails,
          medium: {
            ...DefaultSearchItem.snippet.thumbnails.medium,
            url: customItem.imageLink,
          },
          standard: {
            ...DefaultSearchItem.snippet.thumbnails.standard,
            url: customItem.imageLink,
          },
        },
      },
    };
    return newCustomSearchItem;
  }
}
