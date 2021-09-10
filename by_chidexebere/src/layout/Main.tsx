import React, { useContext, useState } from 'react';
import { AppContext } from '../state/context';

import ErrorPage from '../pages/ErrorPage';
import LoadingPage from '../pages/LoadingPage';
import NoSearchResultPage from '../pages/NoSearchResultPage';
import ProductsPage from '../pages/ProductsPage';

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
    <main className="main">
      {/* shows placeholders as data is being fetched */}
      {isLoading && <LoadingPage />}

      {/* shows errors on error page */}
      {isError && <ErrorPage />}

      {/* show the pages, 10 posts at a time */}
      {!isLoading && !isError && (
        <ProductsPage
          currentPage={currentPage}
          pages={pages}
          goToPreviousPage={goToPreviousPage}
          goToNextPage={goToNextPage}
          getPaginationGroup={getPaginationGroup}
          getPaginatedData={getPaginatedData}
          changePage={changePage}
        />
      )}

      {/* show this if there is no search result */}
      {!isLoading && !isError && noSearchResult && (
        <NoSearchResultPage searchValue={searchValue} />
      )}
    </main>
  );
};

export default Main;
