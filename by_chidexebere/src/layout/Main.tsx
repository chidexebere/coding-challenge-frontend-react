import React from 'react';
import { ResponseData } from '../api/fetchData';
import Product from '../components/Product';

interface MainProps {
  products: ResponseData[] | undefined;
}

const Main = ({ products }: MainProps): JSX.Element => {
  return (
    <main className="">
      {products?.map((product) => (
        <Product
          key={product.id}
          productName={product.product_name}
          productImageUrl={product.images[0].object_url}
        />
      ))}
    </main>
  );
};

export default Main;
