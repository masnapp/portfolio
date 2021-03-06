import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#1a1a1d]'>

        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-4 flex flex-col justify-center h-full'>
            <p className='text-pink-600'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Michael Snapp</h1>
            {/* <h2 className='text-gray-300'>I'm an IT Engineer</h2> */}
            <p className='text-gray-300 py-4 max-w-[700px]'>I'm an IT professional that loves to learn about and explore new technologies. I'm currently 
                leveraging my experience and passion to learn about Cloud Engineering and DevOps. While I am not a front-end developer, I created 
                this site with React.js as a demonstration to utilize cloud technologies and priciples. This site is hosted as a container in 
                Google Cloud Run and uses Google's CI/CD with Cloud Build for high availablility, elasticity, and scalability.
            </p>
            <div>
              <Link to='projects' smooth={true} duration={500}>
                <button className='text-[#66FCF1] hover:text-pink-600'>View Projects <HiArrowNarrowRight /></button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Home