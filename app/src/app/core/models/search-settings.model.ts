import { SearchParamsModel } from './search-params.model';

export interface SearchSettingsModel {
  isOpened: boolean;
  filterValue: string;
  searchParams: SearchParamsModel;
}
