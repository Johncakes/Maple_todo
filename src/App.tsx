import React from 'react';
import menu from './Images/HamburgerMenu.svg';
function App() {
  return (
    <>
      <header>
        <div className='flex h-10 w-screen bg-orange-300 text-white p-1 items-center'>
        <img src={menu} alt='menu' className='h-4 w-8'/>   
        </div>
      </header>
      <div className="w-screen h-full">
        <div>

        </div>
      </div>
    </>
  );
}

export default App;
