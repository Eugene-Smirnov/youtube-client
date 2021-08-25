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

export const DefaultSearchItem: SearchItemModel = {
  kind: 'youtube#video',
  etag: '',
  id: '',
  snippet: {
    publishedAt: '',
    channelId: '',
    title: '',
    description: '',
    thumbnails: {
      default: {
        url: '',
        width: 120,
        height: 90,
      },
      medium: {
        url: '',
        width: 320,
        height: 180,
      },
      high: {
        url: '',
        width: 480,
        height: 360,
      },
      standard: {
        url: '',
        width: 640,
        height: 480,
      },
      maxres: {
        url: '',
        width: 1280,
        height: 720,
      },
    },
    channelTitle: '',
    tags: [],
    categoryId: '',
    liveBroadcastContent: '',
    localized: {
      title: '',
      description: '',
    },
    defaultAudioLanguage: '',
  },
  statistics: {
    viewCount: '',
    likeCount: '',
    dislikeCount: '',
    favoriteCount: '',
    commentCount: '',
  },
};
