import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { CustomItem, CustomItemModel } from '../models/custom-item.model';

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
}
