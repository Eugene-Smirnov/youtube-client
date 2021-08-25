import { createAction, props } from '@ngrx/store';
import { CustomItemModel } from 'src/app/youtube/models/custom-item.model';

export const addCustomItem = createAction(
  '[CUSTOM ITEMS] Add custom item',
  props<CustomItemModel>(),
);
