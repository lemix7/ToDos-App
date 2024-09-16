import { useState } from 'react'
import InputForm from './components/form'



function App() {

  return (
    <div className=" h-screen w-full bg-gray-900 flex justify-center flex-col gap-4 items-center  ">

      <h1 className='text-5xl uppercase font-bold text-white lg:text-7xl '>todo list</h1>

      <InputForm />


    </div>
    
  )
}

export default App
