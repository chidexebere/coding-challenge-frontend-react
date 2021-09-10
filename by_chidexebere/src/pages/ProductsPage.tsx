import React from 'react';
import { ResponseData } from '../api/fetchData';
import Pagination from '../components/Pagination';
import Product from '../components/Product';

interface ProductsPageProps {
  currentPage: number;
  pages: number;
  goToPreviousPage: () => void;
  goToNextPage: () => void;
  getPaginationGroup: () => number[];
  getPaginatedData: () => ResponseData[];
  changePage: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const ProductsPage = ({
  currentPage,
  pages,
  goToPreviousPage,
  goToNextPage,
  getPaginationGroup,
  getPaginatedData,
  changePage,
}: ProductsPageProps): JSX.Element => {
  return (
    <>
      <section role="list" className="products__cover">
        {getPaginatedData().map((product) => (
          <Product
            key={product.id}
            productName={product.product_name}
            productImageUrl={product.images[0].object_url}
          />
        ))}
      </section>
      {pages > 1 && (
        <Pagination
          currentPage={currentPage}
          pages={pages}
          goToPreviousPage={goToPreviousPage}
          goToNextPage={goToNextPage}
          getPaginationGroup={getPaginationGroup}
          changePage={changePage}
        />
      )}
    </>
  );
};

export default ProductsPage;
