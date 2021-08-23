import { createFeatureSelector, createSelector } from '@ngrx/store';
import { YoutubeApiState } from '../models/state.models';
import { youtubeApiFeatureKey } from '../reducers/youtube-api.reducer';

export const selectYoutubeApiStateFeature =
  createFeatureSelector<YoutubeApiState>(youtubeApiFeatureKey);

export const selectYoutubeApiItems = createSelector(
  selectYoutubeApiStateFeature,
  (state) => state.items,
);
