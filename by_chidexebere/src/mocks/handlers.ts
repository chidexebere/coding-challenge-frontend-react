import { rest } from 'msw';
import sampleResponse from '../api/sample-response.json';

const products = sampleResponse.data.data;
const product2 = products.find(
  (product) => product.product_name === 'Product 2',
);
const emptyResult = products.find((product) => product.product_name === 'wxy');

const handlers = [
  rest.post(
    `https://asterix-dev.concular.com/material-service/marketplace/mp`,
    (req, res, ctx) => {
      if (req.body === null) throw new Error('Missing request body');

      if (req.url.searchParams.get('product_name') === 'Product 2') {
        return res(ctx.json({ product2 }));
      }

      if (req.url.searchParams.get('product_name') === 'wxy') {
        return res(ctx.json({ emptyResult }));
      }

      // Emulate our real API's behaviour by responding with the new full task object
      return res(ctx.json(sampleResponse));
    },
  ),
];

export { handlers };
