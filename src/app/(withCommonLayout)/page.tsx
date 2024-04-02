import React from 'react';
import Hero from '@/Components/UI/HomePage/Hero/Hero';
import { Container } from '@mui/material';
import FlashSalePage from './flashsale/flashsale';
import TopCategoriesCard from '@/Components/UI/HomePage/TopCategoriesCard/TopCategoriesCard';
import PopularProductsCard from '@/Components/UI/HomePage/PopularProductsCard/PopularProductsCard';
import ProductsPage from './products/products';

const HomePage = () => {
  return (
    <Container>
      <Hero />
      <FlashSalePage/>
      <TopCategoriesCard/>
      <ProductsPage/>
    </Container>
  );
}

export default HomePage; // Export Home as the default export