import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';
const Header = () => {
  return (
    <div className='flex justify-center flex-col items-center gap-3 mt-10'>
      <img className='w-[350px]' src={logo} alt="" />
      <p className='text-accent'>journalism without fear or favour</p>
      <p className='text-semibold text-accent'>{format(new Date(), "EEEE , MMMM MM , yyyy")}</p>
    </div>
  );
};

export default Header;