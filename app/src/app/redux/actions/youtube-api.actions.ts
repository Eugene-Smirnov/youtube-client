import { createAction, props } from '@ngrx/store';
import { SearchItemModel } from 'src/app/youtube/models/search-item.model';

export const youtubeSearchItems = createAction(
  '[YOUTUBE_API] Update search result',
  props<{ searchItems: SearchItemModel[] }>(),
);
