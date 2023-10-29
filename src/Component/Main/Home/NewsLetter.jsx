import React from 'react'


const NewsLetter = () => {
 return (
   <div className="max-w-[1200px]  py-6  mx-auto">
     <section className="brand-bg opacity-90">
       <div className="p-8 md:p-10 lg:px-12 lg:py-20">
         <div className="mx-auto max-w-lg text-center">
           <h2 className="text-2xl font-bold  text-white md:text-3xl">
             We are Experts in Bus Charter Service company Since 1995
           </h2>

           <p className="hidden text-white sm:mt-4 sm:block">
             In this edition of our newsletter, we want to shine a spotlight on
             you, our valued customer. Your trust in our Company  means
             the world to us, and we want to take a moment to celebrate your
             loyalty and support.
           </p>
         </div>

         <div className="mx-auto mt-8 max-w-xl">
           <form action="#" className="sm:flex sm:gap-4">
             <div className="sm:flex-1">
               <label htmlFor="email" className="sr-only">
                 Email
               </label>

               <input
                 type="email"
                 placeholder="Email address"
                 className="w-full rounded-md border-gray-200 bg-white p-3 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-black  dark:border-gray-700 dark:bg-gray-800 dark:text-white"
               />
             </div>

             <button
               type="submit"
               className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-black px-5 py-3 text-white  focus:outline-none focus:ring focus:ring-black sm:mt-0 sm:w-auto"
             >
               <span className="text-sm font-medium"> Send Email </span>


             </button>
           </form>
         </div>
       </div>
     </section>
   </div>
 );
}

export default NewsLetter