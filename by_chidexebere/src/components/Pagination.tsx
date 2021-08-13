import React from 'react';
import Button from './Button';

interface PaginationProps {
  currentPage: number;
  pages: number;
  goToPreviousPage: () => void;
  goToNextPage: () => void;
  getPaginationGroup: () => number[];
  changePage: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Pagination = ({
  currentPage,
  pages,
  goToPreviousPage,
  goToNextPage,
  getPaginationGroup,
  changePage,
}: PaginationProps): JSX.Element => {
  return (
    <div className="pagination">
      {/* previous button */}
      <Button
        handleClick={goToPreviousPage}
        isDisabled={currentPage === 1 ? true : false}
      >
        prev
      </Button>

      {/* show page numbers */}
      {getPaginationGroup().map((item, index) => (
        <Button
          key={index}
          handleClick={changePage}
          variant={currentPage === item ? 'active' : ''}
        >
          <span>{item}</span>
        </Button>
      ))}

      {/* next button */}
      <Button
        handleClick={goToNextPage}
        isDisabled={currentPage === pages ? true : false}
      >
        next
      </Button>
    </div>
  );
};

export default Pagination;
