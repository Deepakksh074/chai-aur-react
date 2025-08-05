import { useCallback, useEffect, useState, useRef } from 'react'

import './App.css'

function App() {
  const [lengthAllowed, setLengthAllowed] = useState(8);
  const [numbersAllowed, setNumbers] = useState(false);
  const [charactersAllowed, setCharacters] = useState(false);
  const [password, setPassword] = useState('');
  

  //useRef hook
  let passwordRef = useRef(null)
  

  const generatePassword = useCallback(() => {
      let pass = "";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      if(numbersAllowed) str+= '1234567890'
      if(charactersAllowed) str += '!@#$%^&*(){}[]/\|-_~`,.?';
      for(let i = 1; i<=lengthAllowed; i++){
        let char = str.charAt(Math.floor(Math.random()*str.length));
        pass+=char
      }
      setPassword(pass);

  },[lengthAllowed, numbersAllowed, charactersAllowed, setPassword])
  useEffect(() => {generatePassword()}, [lengthAllowed, numbersAllowed, charactersAllowed, generatePassword])
  
  

  return (
    <>
      
    <div className='w-full max-w-md mx-auto shadom-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4 py-3'>
        
        <input
         type="text" 
         className="outline-none bg-white rounded mx-2 text-gray-700 w-full py-1 px-3"
         placeholder='password' 
         value={password} 
         ref={passwordRef}
         readOnly
        />
        <button 
         className='bg-blue-400 text-white rounded p-1' onClick={()=>{
          passwordRef.current?.select();
          window.navigator.clipboard.writeText(password);
         }}>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2 '>
        <div className=' flex items-center gap-x-1'>
          <input 
              id="rangeElement" 
              className='cursor-pointer'
              value={lengthAllowed} 
              max={20} type="range"  
              onChange={(e)=> {
                setLengthAllowed(e.target.value); 
                generatePassword()}}
          />
          <label htmlFor="rangeElement">Length({lengthAllowed})</label>
        </div>
      
        <div className='flex items-center gap-x-1'>
          <input 
            id="numbers" 
            type="checkbox" 
            checked={numbersAllowed} 
            onChange={(e) => {
              setNumbers(e.target.checked);
            }}
          />
          <label htmlFor="numbers">numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
            id="chars" 
            type="checkbox" 
            checked={charactersAllowed} 
            onChange={(e) => {
              setCharacters(e.target.checked);
            }} 
          />
          <label htmlFor="chars">Characters</label>
        </div>
        
        {/* <div>
          <button className='bg-green-400 text-white rounded p-x-1 text-sm' onClick={() => {generatePassword()}}>Generate New Password</button>
        </div> */}
      </div> 
    </div>
      
    </>
  )
}

export default App
