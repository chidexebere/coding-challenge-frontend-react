import React, { useContext, useState } from 'react';
import Pagination from '../components/Pagination';
import Placeholder from '../components/Placeholder';
import Product from '../components/Product';
import { AppContext } from '../state/context';

const Main = (): JSX.Element => {
  const { state } = useContext(AppContext);
  const { isLoading, isError, products, searchValue } = state;

  const pageLimit = 5;
  const dataLimit = 10;
  const pages = Math.ceil(products.length / dataLimit);
  const [currentPage, setCurrentPage] = useState(1);

  const noSearchResult =
    products.length === 0 && searchValue !== '' ? true : false;

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

  return (
    <main className="main" data-testid="main">
      {/* shows placeholders as data is being fetched */}
      {isLoading && (
        <section className="products__cover" role="alert" aria-label="loading">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
            <Placeholder key={index} />
          ))}
        </section>
      )}

      {isError && (
        <section className="offline" role="alert" aria-label="error">
          <p className="offline__text">
            Something went wrong, we could not get product list
          </p>
          <p className="offline__text">
            Please check your internet connection ...
          </p>
        </section>
      )}

      {/* show the pages, 10 posts at a time */}
      {!isLoading && !isError && (
        <>
          <section role="list" className="products__cover">
            {getPaginatedData().map((product) => (
              <Product
                data-testid="product"
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
      )}

      {/* show this if there is no search result */}
      {!isLoading && !isError && noSearchResult && (
        <section className="no-result" role="alert" aria-label="no-result">
          <div className="no-result__icon">
            <svg
              className="icon large"
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
          <p className="no-result__text">
            {`No result found for '${searchValue}' Product`}
          </p>
        </section>
      )}
    </main>
  );
};

export default Main;
