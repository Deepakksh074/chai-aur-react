import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react';

import App from './App.jsx'

function MyApp(){
  return (
    <div>
      <h1>custom app</h1>
    </div>
  )
};
// const reactElement = {
//     type:'a',
//     props:{
//         href:'https:/google.com',
//         target:'_blank'
//     },
//     children:'click me to visit google'
     
// }

const username = 'deepak@username';
const reactElement = React.createElement(
  'a',
  {href:"https://www.google.com",
    target:"_blank"
  },
  "click me to take to google",
  username
)

const anotherElement = (
  <a href="https://www.google.com" target="_blank">Visit google</a>
)
createRoot(document.getElementById('root')).render(reactElement);