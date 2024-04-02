import React from 'react';
import Hero from '@/Components/UI/HomePage/Hero/Hero';
import { Container } from '@mui/material';
import TopCategoriesCard from '@/Components/UI/HomePage/TopCategoriesCard/TopCategoriesCard';
import ProductsPage from './products/products';
import ProductCard from '@/Components/UI/HomePage/ProductCard/ProductCard';


const HomePage = async () => {
  const res = await fetch('http://localhost:5000/flashsale', {
    next: {
      revalidate: 30
    }
  });
  const flashsaledata = await res.json();
  console.log(flashsaledata)
  return (
    <Container>
      <Hero />
      <ProductCard flashsaledata={flashsaledata}/>
      <TopCategoriesCard />
      <ProductsPage />
    </Container>
  );
}

export default HomePage; // Export Home as the default export