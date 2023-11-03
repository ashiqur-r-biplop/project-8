import React from 'react'


const NewsLetter = () => {

 return (
   <div className="max-w-[1200px] mb-8 brand-bg opacity-80 px-6 py-8 md:py-12 md:px-10  mx-auto">
     <div className="w-full md:w-6/12 md:mx-auto">
       <h1 className="text-lg md:text-3xl  text-white pb-2">
         Subscribe To Our Newsletter
       </h1>

       <div className="flex flex-col md:flex-row   ">
         <div className='w-full md:w-8/12'>
           <input
             className="w-full  px-2 py-2 rounded  mb-2 md:mb-0"
             type="text"
             placeholder="Enter your Email"
           />
         </div>
         <div className='md:ml-2'>
           {" "}
           <button className='bg-black rounded text-white px-3 py-2'>Subscribe</button>
         </div>
       </div>
     </div>
   </div>
 );
}

export default NewsLetter