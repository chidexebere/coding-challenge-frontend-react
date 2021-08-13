import React from 'react';
import Button from '../components/Button';

interface FooterProps {
  hasMoreProduct: boolean;
  loadMoreProducts: () => void;
}

const Footer = ({
  hasMoreProduct,
  loadMoreProducts,
}: FooterProps): JSX.Element => {
  return (
    <footer className="">
      {hasMoreProduct && (
        <Button handleClick={loadMoreProducts}>Load More</Button>
      )}
    </footer>
  );
};

export default Footer;
