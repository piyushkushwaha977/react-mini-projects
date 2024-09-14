import { useState } from "react"
import toast from "react-hot-toast";


function ReactForm() {

  const [ isLoading, setIsLoading] = useState(false)
  const [ formData , setFormData] = useState({
    fullname:"",
    email:"",
    password:""
  })

  // console.log("Loading should be state " , isLoading)
  
   function handleFormSubmit(e){
      e.preventDefault();
  

      try {
        setIsLoading(true)
        // console.log("Loading should be true" , isLoading)
        if( !(formData.fullname && formData.email && formData.password)) return toast.error(" All Fields are Required Fields")
          setTimeout(() => {

            toast.success("Form Submitted")
            setIsLoading(false)
            // console.log("Loading should be false" , isLoading)
          }, 3000);

      } catch (error) {
        setIsLoading(false)
        console.log("Loading should be false" , isLoading)
        console.log("Error While form submitting ..")
        console.log(error)
      }
      
  
  }

  return (
    <div className=" w-full h-screen bg-black text-gray-300">
     
     <h2 className="text-5xl border-b-4 border-red-800 pb-3 text-center pt-10 w-fit mx-auto rounded-b-lg"
           > PERFOMANT REACT FORM  </h2>

    <div className=" w-[450px] mx-auto p-3 mt-16 rounded-lg border border-gray-700 ">

    <h2 className="text-3xl border-b-4 border-teal-400 pb-3 text-center pt-10 w-fit mx-auto rounded-b-lg"
           >  { isLoading && "Form Submitting ....."} </h2>
      <form onSubmit={handleFormSubmit} className=" w-[70%] mx-auto">
         <div className=" flex flex-col ">
           <label className=" py-2" htmlFor="fullname">Your Name</label>
            <input
             id="fullname"
             type="text"
             placeholder="Enter Your Name"
             value={(formData.name)}
             onChange={(e) => setFormData((prevData) => ({...prevData , fullname: e.target.value}))}
             className=" rounded-lg py-1.5 px-2 text-gray-900 font-semibold  "
            />
         </div>

         <div className=" flex flex-col ">
           <label className=" py-2" htmlFor="userEmail">Enter Email</label>
            <input
             id="userEmail"
             type="email"
             placeholder="Enter Your Email"
             value={(formData.name)}
             onChange={(e) => setFormData((prevData) => ({...prevData , email: e.target.value}))}
             className=" rounded-lg py-1.5 px-2 text-gray-900 font-semibold  "
            />
         </div>

         <div className=" flex flex-col ">
           <label className=" py-2" htmlFor="userPassword"> Password</label>
            <input
             id="userPassword"
             type="text"
             placeholder="Enter Your Password"
             value={(formData.name)}
             onChange={(e) => setFormData((prevData) => ({...prevData , password: e.target.value}))}
             className=" rounded-lg py-1.5 px-2 text-gray-900 font-semibold  "
            />
         </div>

        <div className=" w-fit mx-auto">
          <button type="submit" className=" bg-blue-500 rounded-md px-4 py-2 text-white font-semibold my-4 " >
           { isLoading ? "Processing..." : "Submit"}
         </button>
        </div>
      </form>
    </div>
    
    </div>
  )
}

export default ReactForm