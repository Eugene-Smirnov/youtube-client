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
