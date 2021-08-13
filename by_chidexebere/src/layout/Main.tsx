import React, { useState } from 'react';
import { ResponseData } from '../api/fetchData';
import Pagination from '../components/Pagination';
import Product from '../components/Product';

interface MainProps {
  products: ResponseData[];
  hasMoreProduct: boolean;
  pages: number;
  dataLimit: number;
}

const Main = ({ products, pages, dataLimit }: MainProps): JSX.Element => {
  const pageLimit = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const goToNextPage = () => {
    setCurrentPage((page) => page + 1);
  };

  const goToPreviousPage = () => {
    setCurrentPage((page) => page - 1);
  };

  const changePage = (e: React.MouseEvent) => {
    const { textContent } = e.target as HTMLElement;
    const pageNumber = Number(textContent);
    setCurrentPage(pageNumber);
  };

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return products.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    const start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    let pageGroup;
    if (pageLimit > pages) {
      pageGroup = new Array(pages).fill(0).map((_, idx) => start + idx + 1);
    } else {
      pageGroup = new Array(pageLimit).fill(0).map((_, idx) => start + idx + 1);
    }
    return pageGroup;
  };

  return (
    <>
      {/* shows 10 posts on initial render */}
      {pages === 1 && (
        <main className="">
          {products.map((product) => (
            <Product
              key={product.id}
              productName={product.product_name}
              productImageUrl={product.images[0].object_url}
            />
          ))}
        </main>
      )}

      {/* show the pages, 10 posts at a time */}
      {pages > 1 && (
        <div>
          <div className="">
            {getPaginatedData().map((product) => (
              <Product
                key={product.id}
                productName={product.product_name}
                productImageUrl={product.images[0].object_url}
              />
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            pages={pages}
            goToPreviousPage={goToPreviousPage}
            goToNextPage={goToNextPage}
            getPaginationGroup={getPaginationGroup}
            changePage={changePage}
          />
        </div>
      )}
    </>
  );
};

export default Main;
