import { SearchItemModel } from 'src/app/youtube/models/search-item.model';

export interface AppState {
  youtubeApiState: YoutubeApiState;
}

export interface YoutubeApiState {
  items: SearchItemModel[];
}
