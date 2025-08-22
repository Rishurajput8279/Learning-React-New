import React, { useState } from 'react';
function App() {
  const [color, setColor] = useState('olive');
  const changeColor= (c)=>{
    setColor(c);
  }
  return (
    <>
      <div className="w-full h-screen duration-200" 
      style={{backgroundColor : color}}></div>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-30 shadow-lg bg-white px-3 py-2 rounded-xl'>
            <button onClick={() => setColor("red")} className='outline-none px-4 py-1 rounded-xl text-white shadow-lg' style={{backgroundColor: "red"}} >Red</button>
            <button onClick={() => setColor("green")} className='outline-none px-4 py-1 rounded-xl text-white shadow-lg' style={{backgroundColor: "green"}}>Pink</button>
            <button onClick={() => changeColor("blue")} className='outline-none px-4 py-1 rounded-xl text-white shadow-lg' style={{backgroundColor: "blue"}}>green</button>
            <button onClick={() => changeColor("pink")} className='outline-none px-4 py-1 rounded-xl text-white shadow-lg' style={{backgroundColor: "pink"}}>Pink</button>
            <button onClick={() => changeColor("orange")} className='outline-none px-4 py-1 rounded-xl text-white shadow-lg' style={{backgroundColor: "orange"}}>Orange</button>
            <button onClick={() => changeColor("yellow")} className='outline-none px-4 py-1 rounded-xl text-white shadow-lg' style={{backgroundColor: "yellow"}}>Yellow</button>
        </div>
      </div>
    </>
  )
}

export default App
