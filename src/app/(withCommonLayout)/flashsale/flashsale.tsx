
import ProductCard from '@/Components/UI/HomePage/ProductCard/ProductCard'
import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const FlashSalePage = () => {
  return (
    <Container>
      <div className="mt-20">
        <Box
          display="flex"
          justifyContent="space-between"
        >
          <Typography variant='h4'
            fontWeight={600}
          >Flash Sale</Typography>
          
           <button className='btn rounded-3xl text-lg'>View All<MdOutlineKeyboardArrowRight className='size-6' /></button>
          
        </Box>
        <div className="grid grid-cols-1 gy-4 md:grid-cols-2 lg:grid-cols-4">
          <ProductCard
            image="https://images.unsplash.com/photo-1572357176061-7c96fd2af22f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Salad"
            prevPrice="110"
            newPrice="150"
          />
          <ProductCard
            image="https://images.unsplash.com/photo-1572357176061-7c96fd2af22f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Salad"
            prevPrice="110"
            newPrice="150"
          />
          <ProductCard
            image="https://images.unsplash.com/photo-1572357176061-7c96fd2af22f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Salad"
            prevPrice="110"
            newPrice="150"
          />
          <ProductCard
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

export default FlashSalePage