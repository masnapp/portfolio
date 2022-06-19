import React from 'react'

import Docker from '../assets/docker.png'
import GitHub from '../assets/github.png'
import GoogleCloud from '../assets/googlecloud.png'
import Linux from '../assets/linux.png'
import Mongo from '../assets/mongo.png'
import Node from '../assets/node.png'
import Tailwind from '../assets/tailwind.png'
import Windows from '../assets/windows.png'


const Skills = () => {
  return (
    <div name='skills' className='bg-[#1a1a1d] text-gray-300'>
    
        {/* Container */}
        {/* <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'> */}
        <div className='w-full h-screen p-4 flex flex-col justify-center'>

            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Experience</p>
                <p className='pt-4 pb-2'>These are some of the technologies I've worked with </p>
            </div>

            <div className='w-full grid grid-cols-2 md:grid-cols-3 gap-4 text-center py-8 px-16'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto mt-4' src={Windows} alt="Windows icon" />
                    <p className='my-4'>Windows</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto mt-4' src={Linux} alt="Linux icon" />
                    <p className='my-4'>Linux</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto mt-4' src={Docker} alt="Docker icon" />
                    <p className='my-4'>Docker</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto mt-4' src={GitHub} alt="GitHub icon" />
                    <p className='my-4'>GitHub</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto mt-4' src={GoogleCloud} alt="Google Cloud icon" />
                    <p className='my-4'>Google Cloud</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto mt-4' src={Mongo} alt="Mongo icon" />
                    <p className='my-4'>Mongo</p>
                </div>
                {/* <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Node} alt="Node icon" />
                    <p className='my-4'>Node</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Tailwind} alt="Tailwind icon" />
                    <p className='my-4'>Tailwind</p>
                </div> */}

                
            </div>
            
        </div>
        
    </div>
  )
}

export default Skills