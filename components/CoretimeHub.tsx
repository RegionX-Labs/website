import React from 'react'

function CoretimeHub() {
    return (
        <div data-aos="fade-up" data-aos-duration="2000" id='coretimeHub' className='bg-[#000811] pt-10'>
            <div className='max-w-7xl mx-auto px-7 2xl:px-0'>


                <div className="flex flex-col lg:flex-row border border-sky-500 border-opacity-20 bg-opacity-5 rounded-lg p-10 lg:p-20">
                    <div data-aos="fade-up" data-aos-duration="3000" className='w-full lg:w-[40%]'>
                        <img src="/CoretimeHub.png" alt="" className=' scale-75' />
                    </div>
                    <div data-aos="fade-up" data-aos-duration="3000" className='w-full lg:w-[60%] flex flex-col justify-center gap-5'>
                        <h1 className='text-sky-500 text-2xl font-semibold pb-10'>
                            Coretime Hub
                        </h1>
                        <p className='text-gray-200 lg:text-lg'>
                            A central hub where users are able to perform operations on their Coretime and easily access the marketplace.
                        </p>

                        <a href="https://app.regionx.tech" target='_blank' className='mt-2'>
                            <button className='border-2 border-sky-500 hover:bg-sky-500 text-white transition duration-300  px-5 py-2 rounded-md w-[150px] text-sm'>
                                Open App
                            </button>
                        </a>

                    </div>

                </div>


            </div>
        </div>
    )
}

export default CoretimeHub