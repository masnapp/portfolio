import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#1a1a1d]'>

        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-4 flex flex-col justify-center h-full'>
            <p className='text-pink-600'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Michael Snapp</h1>
            {/* <h2 className='text-gray-300'>I'm an IT Engineer</h2> */}
            <p className='text-gray-300 py-4 max-w-[700px]'>I'm an IT professional that loves to explore technology. I'm currently 
                learning cloud technologies and cloud engineer principles. This site was 
                developed with React, HTML5, Tailwind CSS, Docker and Google Cloud. 
            </p>
            <div>
                <button className='text-[#66FCF1] hover:text-pink-600'>View Projects <HiArrowNarrowRight /></button>
            </div>
        </div>
    </div>
  )
}

export default Home