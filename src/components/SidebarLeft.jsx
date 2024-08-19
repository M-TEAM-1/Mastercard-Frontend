import React from 'react';
import '../index.css';

const SidebarLeft = () => (
  <aside className="w-1/5 h-screen p-5 overflow-y-auto scrollbar-hidden">
    <div className='w-full flex flex-col items-center bg-[#A594F9] p-3 rounded-lg text-black'>
      <div className="flex justify-center w-full mb-3">
        <img src="/src/assets/react.svg" alt="Profile" className='w-40 h-40 rounded-full ring ring-white p-2' />
      </div>
      <h2 className="text-lg font-bold mb-2">Name</h2>
      <hr className='bg-black'/>
      <p className="text-center mb-2">About: Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus delectus saepe, sed architecto odio, corrupti ratione non dolorum excepturi ad, quae laborum consequuntur doloribus nemo nesciunt deserunt esse perspiciatis libero?</p>
      <p className="text-center">College details</p>
    </div>
  </aside>
);

export default SidebarLeft;
