import { useState,useCallback,useEffect,useRef } from 'react'


function App() {
  const [length,setlength]= useState(8)
  const [numallow,setnum]= useState(false)
  const [character,setcharacter]= useState(false)
  const [password,setpassword]=useState("")

  //ref hook
  const passwordRef= useRef(null)

  const passwordGenerator= useCallback(()=>{
    let pass= ""
    let str= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numallow) str+= "01234546789"
    if(character) str+= "!@#%&*%{}()+-~?"

    for (let i = 1; i <=length; i++) {
      let char= Math.floor(Math.random() *str.length +1)
      pass+= str.charAt(char)
      
    }
    setpassword(pass)


  },[length,numallow,character,setpassword])

  const copyPasswordToClipboard= useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])
  useEffect(()=>{
    passwordGenerator()
  },[length,numallow,character,passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='Password' ref={passwordRef} readOnly/>
          <button onClick={copyPasswordToClipboard} className='text-white outline-none bg-blue-700 px-3 py-0.5 shrink-0'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className="flex items-center gap-x-1">
            <input type="range" min={8} max={50} value={length} className='cursor-pointer' onChange={(e)=>{setlength(e.target.value)}} />
            <label> Length: {length}</label>
          </div>
          <div className=' className="flex items-center gap-x-1"'>
            <input type="checkbox" defaultChecked={numallow} id='numinput' onChange={(e)=>{setnum((prev)=> !prev)}} />
            <label htmlFor='numinput'> Numbers</label>
          </div>
          <div className=' className="flex items-center gap-x-1"'>
            <input type="checkbox" defaultChecked={character} id='charinput' onChange={(e)=>{setcharacter((prev)=> !prev)}} />
            <label htmlFor='charinput'> Characters</label>
          </div>
        </div>
      </div>
      
      
    </>
  )
}

export default App
