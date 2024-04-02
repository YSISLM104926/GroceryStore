
import { Container } from '@mui/material'
import Image from 'next/image';
import React from 'react'
import { IoMdAddCircleOutline } from 'react-icons/io';

const FlashSaleHomeCards = async ({ fdata }: { fdata: any }) => {

    return (
        <Container>
            <div className='rounded-2xl m-4 p-4 transition-all duration-300 hover:scale-105'>
                <div className='overflow-hidden relative'>
                    <span className='bg-gray-800 absolute text-gray-100 px-1.5 py-0.5 rounded-2xl top-2 left-2'>-13%</span>
                    <Image src={fdata.image}
                        width={1200}
                        height={200}
                        className='rounded-2xl'
                        alt="flashsaleimages" />
                </div>
                <div className="w-76 mt-4">
                    <h1>{fdata.title}</h1>
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-2'>
                            <div><s>${fdata.prevPrice}</s></div>
                            <div>${fdata.newPrice}</div>
                        </div>
                        <IoMdAddCircleOutline className='size-5 mr-4' />
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default FlashSaleHomeCards