import React, { useEffect, useState } from 'react';
import { fetchData, ResponseObject } from './api/fetchData';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Main from './layout/Main';

function App(): JSX.Element {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<ResponseObject>({
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
  });

  const getData = async (cursor: number, limit: number) => {
    let newData: ResponseObject;
    // setIsError(false);
    setIsLoading(true);
    try {
      newData = await fetchData(cursor, limit);
      // setData(...data, ...newData);
      setData((prevData) => Object.assign({}, prevData, newData));
      // setData(Object.assign({}, data, newData));
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getData(0, 10);
  }, []);

  const loadMoreProducts = () => {
    getData(0, products.length + 10);
  };

  const products = data.data.data;
  const hasMoreProduct = data.data.meta.hasMoreData;
  const dataLimit = 10;
  const pages = Math.ceil(products.length / dataLimit);

  return (
    <div className="App">
      <Header />
      <Main
        products={products}
        hasMoreProduct={hasMoreProduct}
        pages={pages}
        dataLimit={dataLimit}
      />
      <Footer
        hasMoreProduct={hasMoreProduct}
        loadMoreProducts={loadMoreProducts}
      />
    </div>
  );
}

export default App;
