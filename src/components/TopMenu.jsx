import React from 'react';
import {AcademicCapIcon} from '@heroicons/react/24/solid';
import {HomeModernIcon} from '@heroicons/react/20/solid';
import {ChartBarIcon} from '@heroicons/react/20/solid';
import {ArrowTrendingUpIcon} from '@heroicons/react/20/solid';
import {InformationCircleIcon} from '@heroicons/react/20/solid';
import { NavLink } from 'react-router-dom';

const TopMenu = () => {
  return (
    <header className='flex justify-between gap-3 p-4 pr-6 max-w-5xl bg-base-100
     rounded-lg shadow-lg w-full'>
    <AcademicCapIcon className='w-10 h-10' />
    <nav className='flex gap-4 text-lg'>
        <NavLink to="/" className='top-menu flex gap-2 items-center active active:text-primary  focus:outline-none transition duration-500 
        py-2 px-3 hover:text-info top-menu'>
            <HomeModernIcon className='h-[18px]' /> Menu
        </NavLink>
        <NavLink to='/expenses' className='flex gap-2 items-center active:text-info hover:text-info
         focus:outline-none transition duration-500 py-2 px-3'>
          <ChartBarIcon className='w-[18px]' />  Expenses
        </NavLink>
        <NavLink to='/invoice' className='flex gap-2 items-center active:text-info hover:text-info
         focus:outline-none transition duration-500 py-2 px-3'>
          <ArrowTrendingUpIcon className='w-[18px]' />  
          Invoices
        </NavLink>
        <NavLink to='/about' className='flex gap-2 items-center active:text-info hover:text-info 
         focus:outline-none transition duration-500 py-2 px-3'>
          <InformationCircleIcon className='w-[18px]' />  
          About
        </NavLink>
    </nav>
    </header>
  )
}

export default TopMenu