
import './App.css';
import { useState } from 'react';


function App() {
  const [color, setColor] = useState('back');

  
  
  return (
    <> 
      <div className="w-screen h-screen flex justify-center space-x-5 items-center flex-wrap" style={{backgroundColor:`${color}`}}>
        
        <button className="bg-violet-900  text-white rounded-3xl w-20 p-5 m-5" onClick={() => {setColor('violet')}}>violet</button>
        <button className="bg-indigo-900  text-white rounded-9xl w-20 p-5 m-5" onClick={() => {setColor('indigo')}}>Indigo</button>
        <button className="bg-blue-900  text-white rounded-9xl w-20 p-5 m-5" onClick={() => {setColor('blue')}}>Blue</button>
        <button className="bg-green-900 text-white  rounded-9xl w-20 p-5 m-5" onClick={() => {setColor('green')}}>Green</button>
        <button className="bg-yellow-900 text-white  rounded-9xl w-20 p-5 m-5" onClick={() => {setColor('yellow')}}>Yellow</button>
        <button className="bg-orange-900  text-white rounded-9xl w-20 p-5 m-5" onClick={() => {setColor('orange')}}>Orange</button>
        <button className="bg-red-900  text-white rounded-3xl w-20 p-5 m-5" onClick={() => {setColor('red')}}>Red</button>


      </div>

    </>
  )
}



export default App;


