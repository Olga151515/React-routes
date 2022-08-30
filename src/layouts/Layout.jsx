import React from 'react'
import TopMenu from '../components/TopMenu';

const Layout = ({ children }) => {
  return (
    <div data-theme="dracula" className='h-screen bg-blue-300 py-3 flex
    flex-col gap-4 items-center'> 
    <TopMenu />
    <main className='w-full max-w-5xl bg-info-content p-6 rounded-xl shadow-lg'>
    {children}
    </main>
    </div>
  );
};

export default Layout