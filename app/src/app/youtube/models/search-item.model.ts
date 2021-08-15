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
    categoryId: number | string;
    liveBroadcastContent: string;
    defaultLanguage?: string;
    localized: {
      title: string;
      description: string;
    };
    defaultAudioLanguage: string;
  };
  statistics: {
    viewCount: number | string;
    likeCount: number | string;
    dislikeCount: number | string;
    favoriteCount: number | string;
    commentCount: number | string;
  };
}

interface ThumbnailModel {
  url: string;
  width: number | string;
  height: number | string;
}
