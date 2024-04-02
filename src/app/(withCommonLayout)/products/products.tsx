"use client"
import PopularProductsCard from '@/Components/UI/HomePage/PopularProductsCard/PopularProductsCard';
import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const ProductsPage = () => {
  return (
    <Container>
      <div className="mt-[100px]">
        <Box
          display="flex"
          justifyContent="space-between"
        >
          <Typography variant='h4'
            fontWeight={600}
          >Most Popular Products <br />
          <p
          className='text-sm font-thin w-3/4'
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat. Nunc auctor consectetur elit, quis pulvina.</p>
          </Typography>
          
           <button className='btn rounded-3xl text-lg'>View All<MdOutlineKeyboardArrowRight className='size-6' /></button>
          
        </Box>
        <div className="grid grid-cols-1 gy-4 md:grid-cols-2 lg:grid-cols-4">
          <PopularProductsCard
            image="https://images.unsplash.com/photo-1572357176061-7c96fd2af22f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Salad"
            prevPrice="110"
            newPrice="150"
          />
          <PopularProductsCard
            image="https://images.unsplash.com/photo-1572357176061-7c96fd2af22f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Salad"
            prevPrice="110"
            newPrice="150"
          />
          <PopularProductsCard
            image="https://images.unsplash.com/photo-1572357176061-7c96fd2af22f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Salad"
            prevPrice="110"
            newPrice="150"
          />
          <PopularProductsCard
            image="https://images.unsplash.com/photo-1572357176061-7c96fd2af22f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Salad"
            prevPrice="110"
            newPrice="150"
          />
          <PopularProductsCard
            image="https://images.unsplash.com/photo-1572357176061-7c96fd2af22f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Salad"
            prevPrice="110"
            newPrice="150"
          />
          <PopularProductsCard
            image="https://images.unsplash.com/photo-1572357176061-7c96fd2af22f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Salad"
            prevPrice="110"
            newPrice="150"
          />
          <PopularProductsCard
            image="https://images.unsplash.com/photo-1572357176061-7c96fd2af22f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Salad"
            prevPrice="110"
            newPrice="150"
          />
          <PopularProductsCard
            image="https://images.unsplash.com/photo-1572357176061-7c96fd2af22f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Salad"
            prevPrice="110"
            newPrice="150"
          />
          {/* Add more ProductCard components as needed */}
        </div>
      </div>
    </Container>
  )
}

export default ProductsPage