import React from 'react';
import Button from '../components/Button';

interface FooterProps {
  hasMoreProduct: boolean | undefined;
  getData: (cursor: number, limit: number) => void;
}

const Footer = ({ hasMoreProduct, getData }: FooterProps): JSX.Element => {
  const loadMoreProducts = () => {
    getData(0, 20);
  };

  return (
    <footer className="">
      {hasMoreProduct && (
        <Button handleClick={loadMoreProducts}>Load More</Button>
      )}
    </footer>
  );
};

export default Footer;
