import React, { useEffect, useState } from 'react';
import { fetchData, ResponseObject } from './api/fetchData';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Main from './layout/Main';

function App(): JSX.Element {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<ResponseObject>();

  const getData = async (cursor: number, limit: number) => {
    let newData;
    // setIsError(false);
    setIsLoading(true);
    try {
      newData = await fetchData(cursor, limit);
      setData(newData);
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getData(0, 10);
  }, []);

  const products = data?.data.data;
  const hasMoreProduct = data?.data.meta.hasMoreData;

  return (
    <div className="App">
      <Header />
      <Main products={products} />
      <Footer hasMoreProduct={hasMoreProduct} getData={getData} />
    </div>
  );
}

export default App;
