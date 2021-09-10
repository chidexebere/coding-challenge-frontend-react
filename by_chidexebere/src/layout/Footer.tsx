import React, { useContext } from 'react';
import { fetchData, ResponseObject } from '../api/fetchData';
import Button from '../components/Button';
import {
  GET_API_DATA_FAILURE,
  GET_API_DATA_SUCCESS,
  LOADING_API_DATA,
  LOADING_API_DATA_DONE,
} from '../state/constants';
import { AppContext } from '../state/context';

const Footer = (): JSX.Element => {
  const { state, dispatch } = useContext(AppContext);
  const { data, products, searchValue } = state;

  const getData = async (cursor: number, limit: number) => {
    let newData: ResponseObject;
    dispatch({ type: LOADING_API_DATA });
    try {
      newData = await fetchData(cursor, limit);
      dispatch({ type: GET_API_DATA_SUCCESS, payload: newData });
    } catch (error) {
      dispatch({ type: GET_API_DATA_FAILURE });
    }
    dispatch({ type: LOADING_API_DATA_DONE });
  };

  const hasMoreProduct = data.data.meta.hasMoreData;
  const noSearchResult =
    products.length === 0 && searchValue !== '' ? true : false;

  const canShowLoadButton = hasMoreProduct && !noSearchResult;

  const loadMoreProducts = () => {
    getData(0, products.length + 10);
  };

  return (
    <footer className="footer">
      {canShowLoadButton && (
        <Button handleClick={loadMoreProducts} variant={`primary`}>
          Load More
        </Button>
      )}
    </footer>
  );
};

export default Footer;
