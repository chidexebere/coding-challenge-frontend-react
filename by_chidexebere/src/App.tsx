import React, { useEffect, useState } from 'react';
import { fetchData, ResponseData, ResponseObject } from './api/fetchData';
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

  const [searchValue, setSearchValue] = useState('');
  const [products, setProducts] = useState<ResponseData[]>([]);
  const [productData, setProductData] = useState<ResponseData[]>([]);

  const getData = async (cursor: number, limit: number) => {
    let newData: ResponseObject;
    // setIsError(false);
    setIsLoading(true);
    try {
      newData = await fetchData(cursor, limit);
      setData(newData);
      // setData((prevData) => Object.assign({}, prevData, newData));
      setProducts(newData.data.data);
      setProductData(newData.data.data);
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

  const handleSearch = (event: React.SyntheticEvent) => {
    const { value } = event.target as HTMLInputElement;
    setSearchValue(value);
    setProducts(
      productData.filter((product) =>
        new RegExp(value, 'i').exec(product.product_name),
      ),
    );
  };

  // console.log(productData);

  // const products = data.data.data;
  const hasMoreProduct = data.data.meta.hasMoreData;
  const dataLimit = 10;
  const pages = Math.ceil(products.length / dataLimit);

  return (
    <div className="App">
      <Header searchValue={searchValue} handleSearch={handleSearch} />
      <Main
        products={products}
        hasMoreProduct={hasMoreProduct}
        pages={pages}
        dataLimit={dataLimit}
        searchValue={searchValue}
        isError={isError}
        isLoading={isLoading}
      />
      <Footer
        hasMoreProduct={hasMoreProduct}
        loadMoreProducts={loadMoreProducts}
      />
    </div>
  );
}

export default App;
