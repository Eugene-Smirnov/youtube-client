export interface SearchItemModel {
  kind: string;
  etag: string;
  id: string;
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: ThumbnailModel;
      medium: ThumbnailModel;
      high: ThumbnailModel;
      standard: ThumbnailModel;
      maxres: ThumbnailModel;
    };
    channelTitle: string;
    tags: string[];
    categoryId: number;
    liveBroadcastContent: string;
    localized: {
      title: string;
      description: string;
    };
    defaultAudioLanguage: string;
  };
  statistics: {
    viewCount: number;
    likeCount: number;
    dislikeCount: number;
    favoriteCount: number;
    commentCount: number;
  };
}

interface ThumbnailModel {
  url: string;
  width: number;
  height: number;
}
