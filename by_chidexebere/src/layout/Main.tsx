import React, { useState } from 'react';
import { ResponseData } from '../api/fetchData';
import Pagination from '../components/Pagination';
import Product from '../components/Product';

interface MainProps {
  products: ResponseData[];
  hasMoreProduct: boolean;
  pages: number;
  dataLimit: number;
  searchValue?: string | number;
  isLoading: boolean;
  isError: boolean;
}

const Main = ({
  products,
  pages,
  dataLimit,
  searchValue,
  isLoading,
  isError,
}: MainProps): JSX.Element => {
  const pageLimit = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const goToNextPage = () => {
    setCurrentPage((page) => page + 1);
  };

  const goToPreviousPage = () => {
    setCurrentPage((page) => page - 1);
  };

  const changePage = (event: React.MouseEvent) => {
    const { textContent } = event.target as HTMLElement;
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

  console.log(products);
  console.log(searchValue);
  console.log(isError);
  console.log(isLoading);

  return (
    <main>
      {isLoading && (
        <div className="">
          <p className="">Loading ...</p>
        </div>
      )}

      {isError && (
        <div className="">
          <p className="">Something went wrong, can not get product list</p>
          <p className="">Please check your internet connection</p>
        </div>
      )}

      {/* shows 10 posts on initial render */}
      {!isLoading && !isError && pages === 1 && (
        <>
          {products.map((product) => (
            <Product
              key={product.id}
              productName={product.product_name}
              productImageUrl={product.images[0].object_url}
            />
          ))}
        </>
      )}

      {/* show the pages, 10 posts at a time */}
      {!isLoading && !isError && pages > 1 && (
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

      {!isLoading && !isError && searchValue !== '' && products === [] && (
        <div>
          <div>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <p>No result found for {searchValue} product</p>
        </div>
      )}
    </main>
  );
};

export default Main;
