"use client"
import React from 'react'
import { toast } from 'react-toastify'

const ShowProductsTable = ({ tablep }: { tablep: any }) => {
    const handleDelete = async(id : any) => {
        const res = await fetch(`http://localhost:5000/top-products/${id}`,{
        method : 'DELETE'
       })
    }
    return (
        <div className="">
            
            <table className="table table-lg">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Category</th>
                        <th>New Price</th>
                        <th>Previous Price</th>
                        <th>Rating</th>
                        <th>Flash Sale</th>
                        <th>Delete</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='bg-base-200'>
                        <td>{tablep.title}</td>
                        <td>{tablep.category}</td>
                        <td>{tablep.newPrice}</td>
                        <td>{tablep.prevPrice}</td>
                        <td>{tablep.rating}</td>
                        <td>{tablep.flashsale ? "Yes" : "No"}</td>
                        <td><button className='btn btn-xs bg-red-400' onClick={() => handleDelete(tablep._id)}>Delete</button></td>
                        <td><button className='btn btn-xs bg-emerald-500' disabled>Update</button></td>
                    </tr>
                </tbody>

            </table>
        </div>
    )
}

export default ShowProductsTable