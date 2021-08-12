import React from 'react';

interface ProductProps {
  productImageUrl: string;
  productName: string;
}

const Product = ({
  productImageUrl,
  productName,
}: ProductProps): JSX.Element => {
  return (
    <div className="">
      <img
        src={productImageUrl}
        loading="lazy"
        width="64"
        height="64"
        alt={productName}
      />
      <p className="">{productName}</p>
    </div>
  );
};

export default Product;
