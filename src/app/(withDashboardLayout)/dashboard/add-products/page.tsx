import React from 'react'

const addProductPage = () => {
    return (
        <>
            <div className='rounded-lg mt-12'>
                <h1 className='text-xl font-bold'>Add Product</h1>
                <div className='grid grid-cols-4'>
                    <form action="">
                        <label htmlFor="">Title</label>
                        <br />
                        <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                        <br /><br />
                        <label htmlFor="">Category</label>
                        <br />
                        <input type="text" placeholder="Type here" className="input input-bordered w-full " />
                        <br /><br />
                        <label htmlFor="">Previous Price</label>
                        <br />
                        <input type="text" placeholder="Type here" className="input input-bordered w-full " />
                        <br /><br />
                        <label htmlFor="">New Price</label>
                        <br />
                        <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                        <br />
                        <br />
                        <button className='btn btn-primary w-full' type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default addProductPage