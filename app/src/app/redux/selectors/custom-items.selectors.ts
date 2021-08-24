import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CustomItemsState } from '../models/state.models';
import { customItemsFeatureKey } from '../reducers/custom-items.reducer';

export const selectCustomItemsStateFeature =
  createFeatureSelector<CustomItemsState>(customItemsFeatureKey);

export const selectCustomItems = createSelector(
  selectCustomItemsStateFeature,
  (state) => state.items,
);
