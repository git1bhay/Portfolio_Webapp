import React, { useState } from 'react';
import { IoIosMenu, IoIosClose } from 'react-icons/io';

const NavBar = () => {
  const [isSideOpen, setMenu] = useState(false);

  const alink = [
    {
      label: 'Collections',
      link: '#',
    },
    {
      label: 'Men',
      link: '#',
    },
    {
      label: 'About',
      link: '#',
    },
    {
      label: 'Contact',
      link: '#',
    },
  ];

  const handleMenuToggle = () => {
    setMenu(!isSideOpen);
  };

  const handleCloseClick = () => {
    setMenu(false);
  };

  return (
    <main>
      <nav className='flex justify-between px-8 items-center py-6 lg:mx-24'>
        
        <section className='flex items-center gap-4 lg:hidden'>
          <IoIosMenu size={30} onClick={handleMenuToggle} />
        </section>
        <div
          className={`fixed h-full w-screen lg:hidden 
            bg-black/50 backdrop-blur-sm top-0 right-0 transition-all duration-200 ${
              isSideOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
        >
          <section
            className={`text-black bg-white flex-col 
              absolute left-0 top-0 h-screen p-0 gap-8 z-50 flex w-56`}
          >
            <IoIosClose
              className='mt-8 mb-8 ml-5 text-3xl cursor-pointer'
              onClick={handleCloseClick}
            />
            {alink.map((d, i) => (
              <a key={i} href={d.link} className='font-bold ml-7'>
                {d.label}
              </a>
            ))}
          </section>
        </div>
        <div className='flex items-center gap-10'>
          <section className='flex items-center gap-4'>
          <a href="/" className='text-3xl font-mono'>
            logo
          </a>
        </section>
        {alink.map((d, i) => (
              <a key={i} href={d.link} className='hidden lg:block text-gray-400 hover:text-black'>
                {d.label}
              </a>
            ))}
        
        </div>
      </nav>
      <hr className='lg:mx-24'/>
    </main>
  );
};

export default NavBar;
