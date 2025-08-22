import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'
// import {jsx as _jsx} from 'react/jsx-runtime.js'
const AnotherUsers= "Reshu Jayant";
function MyApp(){
  return(
    <div>
      <h1>Custom App</h1>
    </div>
  )
}
// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://www.google.com',
//         target: '_blank'
//     },
//     children : 'Click here to visit Google'
// } 
const AnotherElement= (
    <a href="https://google.com" target='_blank'>Visit google</a> 
)

const reactElement = React.createElement(
  'a',
  { href:"https://google.com", target: '_blank' },
  'Click Me to visit Google',
  AnotherUsers
)


createRoot(document.getElementById('root')).render(
    // <MyApp />
    //  <App />
    // AnotherElement
    reactElement

)
