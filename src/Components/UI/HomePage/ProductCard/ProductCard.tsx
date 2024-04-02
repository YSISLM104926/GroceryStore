import { Box, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import FlashSaleHomeCards from '../../Messycomponents/FlashSaleHomeCards'

const ProductCard = ({ flashsaledata }: { flashsaledata: any }) => {

    return (
        <>

            <div className="mt-20">
                <Box
                    display="flex"
                    justifyContent="space-between"
                >
                    <Typography variant='h4'
                        fontWeight={600}
                    >Flash Sale</Typography>
                    <Link href={`/flashsale`}><button className='btn rounded-3xl text-lg'>View All<MdOutlineKeyboardArrowRight className='size-6' /></button></Link>
                </Box>
                <div className="grid grid-cols-1 gy-4 md:grid-cols-2 lg:grid-cols-4">
                    {
                        flashsaledata.map((fdata: any) =>
                            fdata?.flashsale &&
                            <FlashSaleHomeCards
                                key={fdata._id}
                                fdata={fdata}
                            />
                        )
                    }
                </div>

            </div>
        </>
    )
}

export default ProductCard