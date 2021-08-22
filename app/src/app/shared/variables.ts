export const PUB_LESS_WEEK_CLASS = 'time-bar_week';
export const PUB_LESS_MONTH_CLASS = 'time-bar_month';
export const PUB_MORE_HALF_YEAR_CLASS = 'time-bar_half-year';

export const validationRegExp = /^[0-9A-Za-z_-]{3,20}$/gim;
export const validate = (value: string): boolean => {
  const result = validationRegExp.test(value);
  validationRegExp.lastIndex = 0;
  return result;
};

export const DEFAULT_USER = {
  login: 'Your Name',
  isAuthorized: false,
};
// 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyDd5ivcNnIbI6u7F9NcjVwP1vsmc3H_9J4&part=snippet&maxResults=10&q=';
// const VIDEOLIST_REQ_URL =
//   'https://www.googleapis.com/youtube/v3/videos?key=AIzaSyDd5ivcNnIbI6u7F9NcjVwP1vsmc3H_9J4&part=snippet,statistics&id=';

export const LOCALSTORAGE_AUTH_TOKEN_KEY = 'eugene-smirnov-youtube-client-auth';

export const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/';
export const SEARCH_REQ_URL = `${YOUTUBE_API_URL}search`;
export const VIDEOS_REQ_URL = `${YOUTUBE_API_URL}videos`;
