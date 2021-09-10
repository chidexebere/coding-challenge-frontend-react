import { AppActions } from './action';
import {
  CLEAR_SEARCH,
  GET_API_DATA_FAILURE,
  GET_API_DATA_SUCCESS,
  HANDLE_SEARCH,
  LOADING_API_DATA,
  LOADING_API_DATA_DONE,
} from './constants';
import { AppState, initialState } from './state';

const reducer = (state = initialState, action: AppActions): AppState => {
  switch (action.type) {
    case LOADING_API_DATA:
      return {
        ...state,
        isLoading: true,
      };
    case GET_API_DATA_FAILURE:
      return {
        ...state,
        isError: true,
      };
    case GET_API_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        products: action.payload.data.data,
        productData: action.payload.data.data,
      };
    case LOADING_API_DATA_DONE:
      return {
        ...state,
        isLoading: false,
      };
    case HANDLE_SEARCH:
      return {
        ...state,
        searchValue: action.payload,
        products: state.productData.filter((product) =>
          new RegExp(action.payload, 'i').exec(product.product_name),
        ),
      };
    case CLEAR_SEARCH:
      return {
        ...state,
        searchValue: '',
        products: state.productData,
      };
    default:
      return state;
  }
};

export default reducer;
