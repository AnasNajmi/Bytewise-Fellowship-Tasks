# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

```
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'

function App() {
  let [counter , setCounter] = useState(1)
  const Addvalue=() =>{  
    if(counter === 20){

      alert("Max value reached");

    }else{
      setCounter(counter+1);
      setCounter(preCounter => preCounter + 1);
    }

    
    
  }
  const Removevalue=() =>{
    if(counter <= 0){

      alert("Min value reached");

    }
    else(
      setCounter(counter- 1));

  
  }
  const Resetvalue=() =>{
    setCounter(0);
    
  }
  

  return (
    <>
    <h1>My first counter-app in react </h1>
    <h3>Counter value = {counter}</h3>
    <button onClick= {Addvalue} >Add value</button>
    <button onClick={Removevalue}>Remove value</button>
    <button onClick={Resetvalue}>Reset</button>


        
    
     
    </>
  )
}

export default App
```
* Hello
