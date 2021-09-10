import React from 'react';

const ErrorPage = (): JSX.Element => {
  return (
    <section className="offline" role="alert" aria-label="error">
      <p className="offline__text">
        Something went wrong, we could not get product list
      </p>
      <p className="offline__text">Please check your internet connection ...</p>
    </section>
  );
};

export default ErrorPage;
