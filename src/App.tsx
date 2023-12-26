import Sheet1 from './components/Sheet1';
import Sheet2 from './components/Sheet2';
import Sheet3_4 from './components/Sheet3_4';
import Sheet5 from './components/Sheet5';
import Sheet6 from './components/Sheet6';
import Logo from './components/Logo';
import { useEffect, useState } from 'react';



function App() {



  return (
    <div className="w-screen h-screen p-4 flex gap-2 items-end bg-[url('/src/assets/pageBg.jpg')]">
      <div className='w-2/5 h-full flex flex-col gap-2'>
        <div className='flex-1'>
          <Sheet1 />
        </div>
        <div className='flex-[2]'>
          <Sheet2 />
        </div>
      </div>
      <div className='w-2/5 h-full flex flex-col gap-2'>
        <div className='flex-1'>
          <Logo />
        </div>
        <div className='flex-1'>
          <Sheet5 />
        </div>
      </div>
      <div className='w-2/5 h-full flex flex-col gap-2'>
        <Sheet3_4 />
        <Sheet6 />
      </div>
    </div>
  );
}

export default App;
