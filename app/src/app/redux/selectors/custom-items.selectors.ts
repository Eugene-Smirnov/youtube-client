import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CustomItemsService } from 'src/app/youtube/services/custom-items.service';
import { CustomItemsState } from '../models/state.models';
import { customItemsFeatureKey } from '../reducers/custom-items.reducer';

export const selectCustomItemsStateFeature =
  createFeatureSelector<CustomItemsState>(customItemsFeatureKey);

export const selectCustomItems = createSelector(
  selectCustomItemsStateFeature,
  (state) => state.items,
);

export const selectCustomToSearchItems = createSelector(selectCustomItems, (items) =>
  items.map((item) => CustomItemsService.createSearchItem(item)),
);
