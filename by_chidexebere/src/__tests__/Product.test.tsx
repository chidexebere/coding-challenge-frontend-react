import React from 'react';
import { render, screen } from '@testing-library/react';
import Product from '../components/Product';

describe('<Product />', () => {
  it('should display a product image, title or name for each product', () => {
    render(
      <Product
        productImageUrl="https://asterix-dev-material-assets-folder.s3.eu-central-1.amazonaws.com/78be8ca8-acdd-4373-84aa-0566eea71b02/2e8fb6f4-bfff-4110-8ecd-f8df22252d6d_1627985157947/material_images/country_house_door_pine_wood_jpeg_deff26e8-0b1a-42e7-a6d4-7258b9cf4a94.jpeg"
        productName="Product 1"
      />,
    );
    const productImage = screen.getByRole('img');
    expect(productImage).toHaveAttribute(
      'src',
      'https://asterix-dev-material-assets-folder.s3.eu-central-1.amazonaws.com/78be8ca8-acdd-4373-84aa-0566eea71b02/2e8fb6f4-bfff-4110-8ecd-f8df22252d6d_1627985157947/material_images/country_house_door_pine_wood_jpeg_deff26e8-0b1a-42e7-a6d4-7258b9cf4a94.jpeg',
    );
    const productName = screen.getByText(/Product 1/);
    expect(productName).toBeInTheDocument();
  });
});
