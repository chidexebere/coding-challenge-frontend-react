import { ResponseObject } from '../api/fetchData';

export interface DataLoading {
  type: `LOADING_API_DATA`;
}

export interface DataLoadingDone {
  type: `LOADING_API_DATA_DONE`;
}

export interface GetData {
  type: `GET_API_DATA_SUCCESS`;
  payload: ResponseObject;
}

export interface DataError {
  type: `GET_API_DATA_FAILURE`;
}

export interface HandleSearch {
  type: `HANDLE_SEARCH`;
  payload: string;
}

export interface ClearSearch {
  type: `CLEAR_SEARCH`;
}

export type AppActions =
  | DataLoading
  | DataLoadingDone
  | GetData
  | DataError
  | HandleSearch
  | ClearSearch;
