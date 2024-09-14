
import { useEffect, useRef } from 'react'
import { useState } from 'react';
import toast from 'react-hot-toast';


function FormRef(){
    const [query, setQuery] = useState("")
    const inputRef = useRef(null);
    const QueryValue = inputRef?.current?.value
  
    useEffect( () => {
       console.log("Initial Rendering by UseEffect ")
    },[])
  
    useEffect( () => {
      console.log(" Rendering on every Change in query state :: " , QueryValue)
   },[QueryValue])
  
   
    function handleSubmit(e){
       e.preventDefault()
       const Value  = inputRef.current.value
      //  console.log("QueryTyped From InputRef :: " , inputRef)
       console.log("QueryTyped From InputRef :: " , inputRef.current.value)
       console.log("QueryTyped :: " , query)
      //  console.log("QueryTypedValue :: " , Value)
      toast.success(`form Submitted with Value ${Value} `)
    }
  
    return (
      <>
        <div className=' my-32'>
          <h2 className=' text-center font-bold text-orange-950 text-3xl '>Testing Input Reference</h2>
  
          <form onSubmit={handleSubmit} className=' flex flex-col w-fit mx-auto  mt-14'>
            <input  
              onChange={(e) => setQuery(e.target.value)}
              ref={inputRef}
              type='text'
              className=' w-60 mx-auto border-2 pl-2 py-1 rounded-lg border-orange-500'
            />
  
            <button  
            onSubmit={handleSubmit}
            className=' mt-4 bg-blue-500 text-white rounded-lg px-3 py-2'>
              Submit
            </button>
          </form>        
        </div>
  
        <div className=' text-center text-2xl font-semibold mt-10'>
          <h2>Hello Into the World of Live Chat</h2>
        </div>
      </>
    )
  
}

export default FormRef;