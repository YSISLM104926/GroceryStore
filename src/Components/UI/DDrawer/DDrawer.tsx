
import Link from 'next/link'
import React from 'react'

const DDrawer = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center absolute bottom-2 left-5">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn bg-gray-500 text-gray-900 drawer-button lg:hidden">dashboard</label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">

                    <Link href={`/dashboard/add-products`}><li><a>Add Products</a></li></Link>
                    <Link href={`/dashboard/admin-product-show`}><li className=''><a>Show Products</a></li></Link>
                    <Link href={`/`}><li><a>Home</a></li></Link>
                </ul>

            </div>
        </div>
    )
}

export default DDrawer