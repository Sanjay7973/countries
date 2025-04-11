import React from 'react'

const Home = () => {
  return (
    <div className=' w-full h-auto flex justify-around p-4 sm:p-10  '>
      <div className='w-full lg:p-7 sm:w-[98%] md:w-[50%] mb-4 sm:mb-0 '>
        <p className='text-blue-700'>WELCOME TO</p>
        <h1 className='text-3xl font-bold text-blue-700 '>Best Experience</h1>
        <p className='text-gray-600 mt-4 dark:text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ipsa cumque in voluptates, eum inventore asperiores dolores velit animi quo, </p>
        <div className=" cursor-pointer mt-5 rounded w-28 p-2 text-center text-white bg-slate-500 hover:bg-blue-900">
          Check Now
        </div>
      </div>
      <div className='w-[35%] h-[35%]  rounded-full hidden md:block md:w-[40%] lg:w-[35%] xl:w-[29%] lg:mt-2 md:ml-10'>
        <img className="w-full h-full object-cover rounded-full" src='https://external-preview.redd.it/aDvK9Q8DANnhPfK20Uk5IMy4cjsSAZ2_y-AWMSQbXQk.jpg?auto=webp&s=96193e42614cacbb8525284143e64ca661ae1585' alt="Profile" />
      </div>
      {/* <div class="bg-[url(/img/mountains.jpg)] ..."></div> */}
    </div>
    
  )
}

export default Home
