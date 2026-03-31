import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  function callFun()
  {
    alert("function Called")
  }
   function Apple()
  {
    alert("YOU ARE CLICKING ON APPLE BUTTON")
  }
   function Banana()
  {
    alert("YOU ARE CLICKING ON BANANA BUTTON")
  }
  return(
  <>
   <button onClick={callFun}>ok</button>
   <button onClick={Apple}>APPLE</button>
   <button onClick={Banana}>BANANA</button>
   <h1>WELCOME TO EVENT HANDLING</h1>

  </>
  )

  



    
        
  
}
  

export default App
  

  
  
     


