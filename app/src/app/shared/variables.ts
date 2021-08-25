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

export const LOCALSTORAGE_AUTH_TOKEN_KEY = 'eugene-smirnov-youtube-client-auth';

export const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/';
export const SEARCH_REQ_URL = `${YOUTUBE_API_URL}search`;
export const VIDEOS_REQ_URL = `${YOUTUBE_API_URL}videos`;

export function parseVideoId(videoLink: string): string {
  let index = 0;
  if (videoLink.includes('https://youtu.be/')) {
    index = 'https://youtu.be/'.length;
  }
  if (videoLink.includes('v=')) {
    index = videoLink.indexOf('v=') + 2;
  }
  const id = videoLink.slice(index, index + 11);
  return id;
}
