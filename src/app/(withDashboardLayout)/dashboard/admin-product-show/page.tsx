import ShowProductsTable from '@/Components/UI/ShowProductsTable/ShowProductsTable'
import React from 'react'
import { ToastContainer } from 'react-toastify';

const productShowPage = async () => {
    const res = await fetch('https://grocery-store-backend-olive.vercel.app/top-products');
    const TableProducts  = await res.json();
    return (
        <div className='mt-12'> 
            {
                TableProducts.map((tablep : any) =>
                    <ShowProductsTable
                        key={tablep?._id}
                        tablep={tablep} />)
            }

        </div>
    )
}

export default productShowPage