import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#1a1a1d] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                        About
                    </p>
                </div>
                <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'> 
                <div>
                    <p className='sm:text-right text-4xl font-bold'>Hi. I'm Mike, nice to meet you. Plesae take a look around.</p>
                </div>
                <div>
                    <p> I am passionate about leveraging technology to increase 
                        productivity, solve problems, and create interesting projects. I 
                        am an IT Support Engineer that has a wide breadth of knowledge in systems and 
                        network administration. I'm looking to break into the world of cloud technologies and 
                        am using this as a learning platform. 

                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
