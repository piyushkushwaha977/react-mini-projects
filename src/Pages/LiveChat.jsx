import { useEffect, useRef, useState } from "react"
import Comment from "../components/Comment";
import { CreateRandomLiveMessages } from "../utils/CreateRandomComment";
import toast from "react-hot-toast";


const LiveChat = () => {

  const [ comments , setComments] = useState([]);
  const inputRef = useRef(null);

  comments.splice(20, 1)

//   console.log("commentsArray From StateVariable : " , comments)
//   console.log(  "commentsLength -- ",comments?.length)

   useEffect( () => {

      const id =  setInterval( () => {

        const comment = CreateRandomLiveMessages();
        // console.log("comment from useeffect : " , comment)
        setComments( (prevComments) =>   [  comment , ...prevComments ] )

      }, 1000)

    return () => clearInterval(id); 

  },[])

  function handleSubmit(e){
       e.preventDefault();
       const Value = inputRef.current.value
       const commentObj = {
        id:crypto.randomUUID(),
        name:"User",
        message:Value
       }
    //    console.log("handleSubmit Data :: " , commentObj)
       setComments( (prevComments) => [commentObj , ...prevComments] )
       toast.success("Message Sent")
       inputRef.current.value = ""

  }

//   const copyPasswordToClipboard = useCallback(() => {
//     passwordRef.current?.select();
//     passwordRef.current?.setSelectionRange(0, 999);
//     window.navigator.clipboard.writeText(password)
//   }, [password])

  function handleCopyClick(){
    inputRef.current?.select()
    inputRef.current?.setSelectionRange(0,50)
    window.navigator.clipboard.writeText(inputRef.current?.value)
    toast.success("Text-Copied")
  }

  
  if(comments.length == 0 ) {
    return <h1 className=" text-black text-6xl border-b-4 border-red-800 pb-3 text-center mt-10 w-fit mx-auto rounded-b-lg"
    >Wait For a Second ...  </h1>
  }


  return (
    (comments.length !== 0) 
        &&
        (
        <div className=" flex flex-col gap-10 mt-6 ">
            <h2 className=" pb-2  text-6xl border-b-4 border-red-500 rounded-b-xl w-fit mx-auto text-center"
            > LiveChat With ME ... </h2>
        
           {/* Chat Container  */}
            <div className="overflow-y-scroll flex flex-col-reverse w-6/12 h-[40rem] mx-auto border-2 border-black rounded-xl  px-3 ">
              {
                comments?.map( comment => (
                    <Comment key={comment.id} name={comment.name}  message={comment.message}/>
                ))
              }
            </div>

            {/* container for add User Comments  */}
            <div className=" w-[40rem] mx-auto">
                <form onSubmit={handleSubmit}  className=" w-full">
                 
                   <input
                     ref={inputRef}
                     type="text"
                     placeholder="Send Messages"
                     className=" border border-black px-2 py-1.5  text-orange-950 font-semibold rounded-lg w-[80%] mx-auto"
                    />
                  
                  {/* Button for Copying written text to clipboard 
                      Not a Good Way to Use That's why its HIDDEN  */}
                    <button
                     onClick={ () => handleCopyClick}
                     className=" hidden absolute bg-red-950 text-white font-bold  mr-32 p-2 rounded-xl ">
                        copy
                    </button>
                  

                    <button 
                     className=" bg-blue-600 hover:bg-red-500 mt-2 text-white font-bold w-64 mx-auto px-4 py-2 rounded-lg">
                        Send
                    </button>
                </form>
            </div>


          </div>
        )
        

  )
}

export default LiveChat