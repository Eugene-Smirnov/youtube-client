import { createReducer, on } from '@ngrx/store';
import { addCustomItem } from '../actions/custom-items.actions';
import { CustomItemsState } from '../models/state.models';

export const customItemsFeatureKey = 'customItemsState';

export const initialState: CustomItemsState = { items: [] };

export const customItemsReducer = createReducer(
  initialState,
  on(addCustomItem, (state, item): CustomItemsState => {
    return { items: [...state.items, item] };
  }),
);
