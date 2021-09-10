import React, { createContext, useReducer, useEffect, Dispatch } from 'react';
import { fetchData, ResponseObject } from '../api/fetchData';
import { AppActions } from './action';
import {
  GET_API_DATA_FAILURE,
  GET_API_DATA_SUCCESS,
  LOADING_API_DATA,
  LOADING_API_DATA_DONE,
} from './constants';
import reducer from './reducer';
import { AppState, initialState } from './state';

interface AppContextProps {
  children: React.ReactNode;
}

export const AppContext = createContext<{
  state: AppState;
  dispatch: Dispatch<AppActions>;
}>({
  state: initialState,
  dispatch: () => undefined,
});

const AppContextProvider = ({ children }: AppContextProps): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    let mounted = true;
    (async () => {
      let newData: ResponseObject;
      dispatch({ type: LOADING_API_DATA });
      try {
        newData = await fetchData(0, 10);
        if (mounted) {
          dispatch({ type: GET_API_DATA_SUCCESS, payload: newData });
        }
      } catch (error) {
        dispatch({ type: GET_API_DATA_FAILURE });
      }
      dispatch({ type: LOADING_API_DATA_DONE });
    })();

    return function cleanup() {
      mounted = false;
    };
  }, []);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
