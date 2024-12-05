import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Navbar from '../NavBar/Navbar'
import MyUnits from '../MyUnits/MyUnits'
import Footer from '../Footer/Footer'

export default function Home() {
    return (

        <>

            <Navbar />

            <div className='container mx-auto mt-28 '>
                <div className='md:flex  justify-around'>
                    <div className='md:w-[20%] flex justify-between gap-x-1  md:block '>
                        <Sidebar />
                    </div>
                    <div className='md:w-[65%] '>
                        <MyUnits />
                    </div>
                </div>
            </div>

            <Footer />
        </>

    )
}
