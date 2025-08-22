import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/cards'
function App() {
  const [count, setCount] = useState(0)
  let myObj ={
    username: "Rishabh Rajput",
    age: 22
  }
  let newArr=[1,2,3,4,5,6,7,8,9,10]
  return (
    <>
      <h1 class="bg-green-600 text-black rounded-2xl text-3xl font-bold underline mb-4">
        Hello world!
      </h1>
      <Cards userName="Chai aur code" Title="very cute" />
      <Cards userName="Rishu Rajput" />
    </>
  );
}

export default App
