import React from 'react'
import { FaUserCircle } from 'react-icons/fa'

const DrawerNavbar = () => {
    return (
        <div className="navbar bg-base-200">
            <div className="navbar-start">
                <h1 className='text-xl font-bold ms-12 hidden lg:block'>Dashboard Panel</h1>
            </div>
            <div className="navbar-center">

            </div>
            <div className="navbar-end items-center">
                <div className='me-2'>
                    <h1 className='text-sm'>Zahid Hasan</h1>
                    <h1 className='text-sm  text-end'>Admin</h1>
                </div>
                
                    <button className="me-6">
                        <div className="">
                            <FaUserCircle className='size-10' />
                        </div>
                    </button>
            </div>
        </div>
    )
}

export default DrawerNavbar