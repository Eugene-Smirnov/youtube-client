import { CustomItemModel } from 'src/app/youtube/models/custom-item.model';
import { SearchItemModel } from 'src/app/youtube/models/search-item.model';

export interface AppState {
  youtubeApiState: YoutubeApiState;
  customItemsState: CustomItemsState;
}

export interface YoutubeApiState {
  items: SearchItemModel[];
}

export interface CustomItemsState {
  items: CustomItemModel[];
}
