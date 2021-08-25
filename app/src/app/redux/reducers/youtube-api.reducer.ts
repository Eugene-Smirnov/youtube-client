import { createReducer, on } from '@ngrx/store';
import { youtubeSearchItems } from '../actions/youtube-api.actions';
import { YoutubeApiState } from '../models/state.models';

export const youtubeApiFeatureKey = 'youtubeApiState';

export const initialState: YoutubeApiState = { items: [] };

export const youtubeApiReducer = createReducer(
  initialState,
  on(youtubeSearchItems, (state, { searchItems }): YoutubeApiState => {
    return { items: [...searchItems] };
  }),
);
