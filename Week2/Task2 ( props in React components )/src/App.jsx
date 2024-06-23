import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card.jsx'

function App() {

    

  return (
    <>
   <h1 className='text-3xl font-bold text-white p-5 rounded-md bg-black mb-5'>Bytewise-Week2(Props)</h1>
   <Card Laptopname="Dell" Btntext="Buy Now"/>
   <Card Laptopname="HP" Btntext="View Now"/>
   <Card Laptopname="Macbook" Btntext="10% Discount"/>

  



    </>
  )
}

export default App
