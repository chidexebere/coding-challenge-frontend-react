import { ResponseData } from '../api/fetchData';

export interface AppState {
  isError: boolean;
  isLoading: boolean;
  data: {
    statusCode: number;
    requestId: string;
    status: string;
    logStreamName: string;
    data: {
      data: ResponseData[];
      meta: {
        hasMoreData: boolean;
        cursor: number;
      };
    };
  };
  searchValue: string;
  products: ResponseData[];
  productData: ResponseData[];
}

export const initialState: AppState = {
  isError: false,
  isLoading: false,
  data: {
    statusCode: 0,
    requestId: '',
    status: '',
    logStreamName: '',
    data: {
      data: [],
      meta: {
        hasMoreData: true,
        cursor: 0,
      },
    },
  },
  searchValue: '',
  products: [],
  productData: [],
};
