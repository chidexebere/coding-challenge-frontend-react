import React from 'react';
import Button from '../components/Button';

interface FooterProps {
  hasMoreProduct: boolean;
  loadMoreProducts: () => void;
  noSearchResult: boolean;
}

const Footer = ({
  hasMoreProduct,
  loadMoreProducts,
  noSearchResult,
}: FooterProps): JSX.Element => {
  const canShowLoadButton = hasMoreProduct && !noSearchResult;

  return (
    <footer className="footer">
      {canShowLoadButton && (
        <Button handleClick={loadMoreProducts} variant={`primary`}>
          Load More
        </Button>
      )}
    </footer>
  );
};

export default Footer;
