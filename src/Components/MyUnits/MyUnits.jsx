import React from 'react'
import house1 from '../../assets/image1.png'
import house2 from '../../assets/image2.png'
import house3 from '../../assets/image3.png'
import house4 from '../../assets/image4.png'

export default function MyUnits() {
    return (
        <>

            <div className=''>
                <div className='flex items-center justify-between mb-4'>
                    <div>
                        <h2 className='text-[#494949] text-[32px] font-semibold'>My Units</h2>
                    </div>

                    <div>
                        <i className="fa-solid fa-filter text-white p-1 bg-[#6666FF] ms-2"></i>
                        <i className="fa-solid fa-list text-white p-1 bg-[#6666FF] ms-2"></i>
                        <button className='bg-[#6666FF] text-white py-2 px-10 md:px-14 rounded-md mx-2'> + Add Unit</button>
                    </div>
                </div>




                <div className=" flex flex-col justify-between mb-10  rounded-lg bg-white border border-gray-200  shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <div className='flex flex-col md:flex-row'>
                        <img className=" w-full  h-96 md:h-auto md:w-48 " src={house1} alt='house' />
                        <div className="flex flex-col pt-8  leading-normal ps-2">
                            <div className='flex flex-col md:flex-row w-[100%] items-center justify-between font-semibold text-[28px]'>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Grand House Real Estate</h5>
                                <span className="bg-[#02AE36] text-white text-sm font-medium me-2 px-2.5 mx-3 py-0.5 rounded dark:bg-green-900 dark:text-green-300 h-fit ">Approved</span>
                                <p className='text-[#F20000]'>13.500.000 EGP</p>
                            </div>
                            <p className="mb-3 font-medium text-[16px] text-[#494949] dark:text-gray-400">New Cairo, Egypt</p>

                            <div className='flex gap-x-3'>

                                <div className='flex my-2'>
                                    <i className="fa-solid fa-bed text-[#6666FF] border-[#6666FF] border-2 p-1 rounded-md"></i>
                                    <p className='ms-1'>3 Rooms</p>
                                </div>


                                <div className='flex my-2'>
                                    <i className="fa-solid fa-bath text-[#6666FF] border-[#6666FF] border-2 p-1 rounded-md"></i>
                                    <p className='ms-1'>3 Bathroom</p>
                                </div>


                                <div className='flex my-2'>
                                    <i className="fa-solid fa-ruler-combined text-[#6666FF] border-[#6666FF] border-2 p-1 rounded-md"></i>
                                    <p className='ms-1'>250 m</p>
                                </div>


                            </div>


                            <div className='flex justify-between items-center pb-8'>
                                <button className='border-[#6666FF] border-2  text-[#6666FF] my-1 px-10 md:px-16 py-2 rounded-md  font-semibold'>Asign a Broker</button>
                                <div className='text-[#494949] font-medium text-[16px] px-1'>
                                    <p>Added</p>
                                    <p>31/8/2022</p>
                                </div>
                            </div>


                        </div>
                    </div>



                    <button className='bg-red-400 rounded-md px-7 py-2 md:py-0'><i className="fa-solid fa-trash fa-2x text-white"></i></button>
                </div>




                <div className=" flex flex-col justify-between mb-10  rounded-lg bg-white border border-gray-200  shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <div className='flex flex-col md:flex-row'>
                        <img className=" w-full  h-96 md:h-auto md:w-48 " src={house2} alt='house' />
                        <div className="flex flex-col pt-8  leading-normal ps-2">
                            <div className='flex flex-col md:flex-row w-[100%] items-center justify-between font-semibold text-[28px]'>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Grand House Real Estate</h5>
                                <span className="bg-[#6666FF] text-white text-sm font-medium me-2 px-2.5 mx-3 py-0.5 rounded dark:bg-green-900 dark:text-green-300 h-fit ">Pending</span>
                                <p className='text-[#F20000]'>13.500.000 EGP</p>
                            </div>
                            <p className="mb-3 font-medium text-[16px] text-[#494949] dark:text-gray-400">New Cairo, Egypt</p>

                            <div className='flex gap-x-3'>

                                <div className='flex my-2'>
                                    <i className="fa-solid fa-bed text-[#6666FF] border-[#6666FF] border-2 p-1 rounded-md"></i>
                                    <p className='ms-1'>3 Rooms</p>
                                </div>


                                <div className='flex my-2'>
                                    <i className="fa-solid fa-bath text-[#6666FF] border-[#6666FF] border-2 p-1 rounded-md"></i>
                                    <p className='ms-1'>3 Bathroom</p>
                                </div>


                                <div className='flex my-2'>
                                    <i className="fa-solid fa-ruler-combined text-[#6666FF] border-[#6666FF] border-2 p-1 rounded-md"></i>
                                    <p className='ms-1'>250 m</p>
                                </div>


                            </div>


                            <div className='flex justify-between items-center pb-8'>
                                <div className='text-[#494949] font-medium text-[16px] ms-auto px-1'>
                                    <p>Added</p>
                                    <p>31/8/2022</p>
                                </div>
                            </div>


                        </div>
                    </div>



                    <button className='bg-red-400 rounded-md px-7 py-2 md:py-0'><i className="fa-solid fa-trash fa-2x text-white"></i></button>
                </div>




                <div className=" flex flex-col justify-between mb-10  rounded-lg bg-white border border-gray-200  shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <div className='flex flex-col md:flex-row'>
                        <div className='relative h-full overflow-hidden rounded-md'>
                            <img className=" w-full  h-96 md:h-full md:w-48 " src={house3} alt='house' />
                            <span className="bg-[#0512F5] absolute top-0 left-[-10%] px-5 py-1 text-white text-sm font-medium me-2  mx-3  rounded dark:bg-green-900 dark:text-green-300 h-fit ">Reserved</span>

                        </div>
                        <div className="flex flex-col pt-8  leading-normal ps-2">
                            <div className='flex flex-col md:flex-row w-[100%] items-center justify-between font-semibold text-[28px]'>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Grand House Real Estate</h5>
                                <span className="bg-[#02AE36] text-white text-sm font-medium me-2 px-2.5 mx-3 py-0.5 rounded dark:bg-green-900 dark:text-green-300 h-fit ">Approved</span>
                                <p className='text-[#F20000]'>13.500.000 EGP</p>
                            </div>
                            <p className="mb-3 font-medium text-[16px] text-[#494949] dark:text-gray-400">New Cairo, Egypt</p>

                            <div className='flex gap-x-3'>

                                <div className='flex my-2'>
                                    <i className="fa-solid fa-bed text-[#6666FF] border-[#6666FF] border-2 p-1 rounded-md"></i>
                                    <p className='ms-1'>3 Rooms</p>
                                </div>


                                <div className='flex my-2'>
                                    <i className="fa-solid fa-bath text-[#6666FF] border-[#6666FF] border-2 p-1 rounded-md"></i>
                                    <p className='ms-1'>3 Bathroom</p>
                                </div>


                                <div className='flex my-2'>
                                    <i className="fa-solid fa-ruler-combined text-[#6666FF] border-[#6666FF] border-2 p-1 rounded-md"></i>
                                    <p className='ms-1'>250 m</p>
                                </div>


                            </div>


                            <div className='flex justify-between items-center pb-8'>
                                <div className='flex'>
                                    <i className="fa-solid fa-user  text-[#6666FF] border-[#6666FF] border-2 p-1 rounded-md"></i>
                                    <p className='ms-1'>Mohamed Sami</p>
                                </div>
                                <div className='text-[#494949] font-medium text-[16px] px-1'>
                                    <p>Added</p>
                                    <p>31/8/2022</p>
                                </div>
                            </div>


                        </div>
                    </div>



                </div>




                <div className=" flex flex-col justify-between mb-10  rounded-lg bg-white border border-gray-200  shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <div className='flex flex-col md:flex-row'>
                        <img className=" w-full  h-96 md:h-auto md:w-48 " src={house4} alt='house' />
                        <div className="flex flex-col pt-8  leading-normal ps-2">
                            <div className='flex flex-col md:flex-row w-[100%] items-center justify-between font-semibold text-[28px]'>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Grand House Real Estate</h5>
                                <span className="bg-[#F20000] text-white text-sm font-medium me-2 px-2.5 mx-3 py-0.5 rounded dark:bg-green-900 dark:text-green-300 h-fit ">Rejected</span>
                                <p className='text-[#F20000]'>13.500.000 EGP</p>
                            </div>
                            <p className="mb-3 font-medium text-[16px] text-[#494949] dark:text-gray-400">New Cairo, Egypt</p>

                            <div className='flex gap-x-3'>

                                <div className='flex my-2'>
                                    <i className="fa-solid fa-bed text-[#6666FF] border-[#6666FF] border-2 p-1 rounded-md"></i>
                                    <p className='ms-1'>3 Rooms</p>
                                </div>


                                <div className='flex my-2'>
                                    <i className="fa-solid fa-bath text-[#6666FF] border-[#6666FF] border-2 p-1 rounded-md"></i>
                                    <p className='ms-1'>3 Bathroom</p>
                                </div>


                                <div className='flex my-2'>
                                    <i className="fa-solid fa-ruler-combined text-[#6666FF] border-[#6666FF] border-2 p-1 rounded-md"></i>
                                    <p className='ms-1'>250 m</p>
                                </div>


                            </div>


                            <div className='flex justify-between items-center pb-8'>
                                <button className='border-[#6666FF] border-2  text-[#6666FF] my-1 px-10 md:px-16 py-2 rounded-md  font-semibold'>Edit</button>
                                <div className='text-[#494949] font-medium text-[16px] px-1'>
                                    <p>Added</p>
                                    <p>31/8/2022</p>
                                </div>
                            </div>


                        </div>
                    </div>



                    <button className='bg-red-400 rounded-md px-7 py-2 md:py-0'><i className="fa-solid fa-trash fa-2x text-white"></i></button>
                </div>






                <div className='flex justify-between my-5'>
                    <p className='text-[#A2A7AF]'>Showing 5 Units</p>
                    <div class="flex space-x-1">
                        <button class="rounded-full border border-[#0512F5] py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-[#0512F5] hover:border-[#0512F5] focus:text-white focus:bg-[#0512F5] focus:border-[#0512F5] active:border-[#0512F5] active:text-white active:bg-[#0512F5] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
                            <i className="fa-solid fa-angle-left"></i>

                        </button>
                        <button class="min-w-9 rounded-full border-[#0512F5] bg-[#0512F5] py-2 px-3.5 border  text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-[#0512F5] hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
                            1
                        </button>
                        <button class="min-w-9 rounded-full border border-[#0512F5] py-2 px-3.5 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-[#0512F5] hover:border-[#0512F5] focus:text-white focus:bg-[#0512F5] focus:border-[#0512F5] active:border-[#0512F5] active:text-white active:bg-[#0512F5] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
                            2
                        </button>
                        <button class="min-w-9 rounded-full border border-[#0512F5] py-2 px-3.5 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-[#0512F5] hover:border-[#0512F5] focus:text-white focus:bg-[#0512F5] focus:border-[#0512F5] active:border-[#0512F5] active:text-white active:bg-[#0512F5] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
                            3
                        </button>
                        <button class="min-w-9 rounded-full border border-[#0512F5] py-2 px-3.5 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-[#0512F5] hover:border-[#0512F5] focus:text-white focus:bg-[#0512F5] focus:border-[#0512F5] active:border-[#0512F5] active:text-white active:bg-[#0512F5] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
                            4
                        </button>
                        <button class="min-w-9 rounded-full border border-[#0512F5] py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-[#0512F5] hover:border-[#0512F5] focus:text-white focus:bg-[#0512F5] focus:border-[#0512F5] active:border-[#0512F5] active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">

                            <i className="fa-solid fa-chevron-right"></i>
                        </button>
                    </div>
                </div>


            </div>

        </>
    )
}
