import React from 'react';

interface NoSearchResultProps {
  searchValue: string;
}

const NoSearchResultPage = ({
  searchValue,
}: NoSearchResultProps): JSX.Element => {
  return (
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
  );
};

export default NoSearchResultPage;
