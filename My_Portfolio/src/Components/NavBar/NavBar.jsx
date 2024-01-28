import React, { useState } from 'react';
import { IoIosMenu } from 'react-icons/io';
import { IoIosClose } from "react-icons/io";

const NavBar = () => {
  const [isSideOpen,setMenu] = useState(false);
  return (
    <main>
      <nav className='flex justify-between px-8 items-center py-6'>
      <section className='flex items-center gap-4'>
        <a href="/" className='text-3xl font-mono'>
          logo
        </a>
      </section>
      <div className='fixed h-full w-screen lg:hidden 
        bg-black/50 backdrop-blur-sm top-0 right-0
      '>
        <section className='text-black bg-white flex-col 
          absolute left-0 top-0 h-screen p-0 gap-8 z-50 flex w-56
        '>
            <IoIosClose className='mt-0 mb-8 text-3xl cursor-pointer'/>

            <a href="/" className='font-bold ml-7'>Collections</a>
            <a href="/" className='font-bold ml-7'>Men</a>
            <a href="/" className='font-bold ml-7'></a>
            <a href="/" className='font-bold ml-7'>Collections</a>



        </section>

      </div>
      <section className='flex items-center gap-4'>
        <IoIosMenu size={30} />
      </section>
    </nav>
    <hr />
    </main>
  );
};

export default NavBar;
