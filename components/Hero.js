import React from 'react'

const Hero = () => {
  return (
    <>
        <div className='bg-black h-screen flex flex-col gap-6 justify-center items-center'>
            <h1 className='text-white text-6xl font-black'>Log In</h1>
            <form className='w-10/12 flex items-center justify-center flex-col gap-6'>
                 <input type='email' required placeholder='Enter Your Email' className='text-gray-700  rounded-md text-2xl px-4 py-4 w-5/12 outline-none'   />
                 <br/>
                 <button className='border-2 border-white rounded-md hover:bg-white text-white hover:text-black text-3xl font-bold px-4 py-2'>Log In</button>
            </form> 
        </div>
    </>
  )
}

export default Hero