import React from 'react'

export default function Sidebar() {
    return (
        <>
            <div className='md:w-full w-fit bg-[#F2F3F4] ms-1 text-[#0512F5] rounded-lg md:mb-2'>
                <p className='p-2  ms-1 md:ms-2'>My Account </p>
            </div>

            <div className='md:w-full w-fit bg-[#F2F3F4] ms-1 text-[#0512F5] rounded-lg md:mb-2'>
                <p className='p-2  ms-1 md:ms-2'>My Units </p>
            </div>

            <div className='md:w-full w-fit bg-[#F2F3F4] ms-1 text-[#0512F5] rounded-lg md:mb-2'>
                <p className='p-2 ms-1 md:ms-2'>My Reservations </p>
            </div>



        </>
    )
}
