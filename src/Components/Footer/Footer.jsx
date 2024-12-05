import React from 'react'
import logo from '../../assets/logofooter.png'

export default function Footer() {
    return (
        <>

            <div className='bg-[#0512F5]  '>


                <div className='container mx-auto w-[75%] flex flex-col md:flex-row gap-x-10 justify-center items-center'>

                    <img src={logo} className='h-[208px] w-[208px] md:mb-0 md:border-b-0 mb-3 border-b-2' alt="Madmon logo" />


                    <div className='md:border-s-2 px-10 md:mb-0 mb-3 md:border-e-2 border-b-2 md:border-b-0'>
                        <p className='text-[#F2DB00] font-semibold mb-5'>Contact Us</p>

                        <div className='flex items-center text-white mb-5'>
                            <i className="fa-solid fa-location-dot "></i>
                            <p className='ms-2 text-[14px]'>42 Fareek Awal Ali Ame</p>
                        </div>

                        <div className='flex items-center text-white mb-5'>
                            <i className="fa-solid fa-phone "></i>
                            <p className='ms-2 text-[14px]'>01234568910</p>
                        </div>

                        <div className='flex items-center text-white mb-5'>
                            <i className="fa-solid fa-envelope "></i>
                            <p className='ms-2 text-[14px]'>hr@Madmon.ai</p>
                        </div>
                    </div>

                    <div className=' px-5 md:border-e-2 md:mb-0 mb-3 border-b-2 md:border-b-0'>
                        <p className='text-[#F2DB00] font-semibold mb-5'>Useful Links</p>

                        <div className='flex items-center text-white mb-3'>
                            <p className='ms-2 text-[14px]'>About Us</p>
                        </div>

                        <div className='flex items-center text-white mb-3'>
                            <p className='ms-2 text-[14px]'>Privacy Policy</p>
                        </div>

                        <div className='flex items-center text-white mb-3'>
                            <p className='ms-2 text-[14px]'>Support</p>
                        </div>

                        <div className='flex items-center text-white mb-3'>
                            <p className='ms-2 text-[14px]'>Terms & Conditions</p>
                        </div>
                    </div>



                    <div className='text-white md:mb-0 mb-3'>
                        <i className="fa-brands fa-linkedin cursor-pointer me-3 fa-2x border-2 border-white p-1"></i>
                        <i className="fa-brands fa-instagram cursor-pointer me-3 fa-2x border-2 border-white p-1"></i>
                        <i className="fa-brands fa-facebook cursor-pointer me-3 fa-2x border-2 border-white p-1"></i>
                    </div>

                </div>




            </div>








        </>
    )
}
