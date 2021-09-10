import React, { memo } from 'react';

interface ProductProps {
  productImageUrl: string;
  productName: string;
}

const Product = memo(
  ({ productImageUrl, productName }: ProductProps): JSX.Element => {
    return (
      <div role="listitem" className="product">
        <div className="product__image">
          <img
            src={productImageUrl}
            loading="lazy"
            width="120"
            height="90"
            alt={productName}
          />
        </div>
        <p className="product__name">{productName}</p>
      </div>
    );
  },
);

export default Product;
