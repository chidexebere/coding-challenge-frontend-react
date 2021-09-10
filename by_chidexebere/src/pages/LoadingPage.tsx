import React from 'react';
import Placeholder from '../components/Placeholder';

const LoadingPage = (): JSX.Element => {
  return (
    <section className="products__cover" role="alert" aria-label="loading">
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
        <Placeholder key={index} />
      ))}
    </section>
  );
};

export default LoadingPage;
