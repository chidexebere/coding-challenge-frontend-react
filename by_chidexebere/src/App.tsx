import React, { useEffect, useState } from 'react';
import { fetchData, ResponseData, ResponseObject } from './api/fetchData';
import './styles/App.scss';
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
    setIsLoading(true);
    try {
      newData = await fetchData(cursor, limit);
      setData(newData);
      setProducts(newData.data.data);
      setProductData(newData.data.data);
    } catch (error) {
      setIsError(true);
      // console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    // getData(0, 10);
    let mounted = true;
    (async () => {
      let newData: ResponseObject;
      setIsLoading(true);
      try {
        newData = await fetchData(0, 10);
        if (mounted) {
          setData(newData);
          setProducts(newData.data.data);
          setProductData(newData.data.data);
        }
      } catch (error) {
        setIsError(true);
        console.log(error);
      }
      setIsLoading(false);
    })();

    return function cleanup() {
      mounted = false;
    };
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

  const clearSearchInput = () => {
    setSearchValue('');
    setProducts(productData);
  };

  const noSearchResult =
    products.length === 0 && searchValue !== '' ? true : false;

  const hasMoreProduct = data.data.meta.hasMoreData;
  const dataLimit = 10;
  const pages = Math.ceil(products.length / dataLimit);

  return (
    <div className="App">
      <Header
        searchValue={searchValue}
        handleSearch={handleSearch}
        clearSearchInput={clearSearchInput}
      />
      <Main
        products={products}
        hasMoreProduct={hasMoreProduct}
        pages={pages}
        dataLimit={dataLimit}
        searchValue={searchValue}
        isError={isError}
        isLoading={isLoading}
        noSearchResult={noSearchResult}
      />
      <Footer
        hasMoreProduct={hasMoreProduct}
        loadMoreProducts={loadMoreProducts}
        noSearchResult={noSearchResult}
      />
    </div>
  );
}

export default App;
