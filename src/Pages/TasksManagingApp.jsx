import { useRef, useState, useEffect } from "react"
import TaskItem from "../components/TaskItem";


function TasksManagingApp() {
    const [ task, setTask] = useState("")
    const [ allTasks , setAllTasks] = useState([
        // {
        //     id: crypto.randomUUID(),
        //     task:"To Make a Todo  application from scratch under 5 minutes",
        //     completed:false,
        //     category:""
        // }
    ])
    
    const inputRef = useRef();

      useEffect( () => {
        // console.log("useEffect Called ...")
        // const allNotes =  JSON.parse(localStorage.getItem("allTasks"))
        // if(allTasks && allTasks.length > 0 ){
        //     setAllTasks(allNotes)
        // // getAllTasks()
        // console.log("useEffect  Done ...")
        // }
        getAllTasks();
      },[])

      useEffect( () => {
        localStorage.setItem("allTasks", JSON.stringify(allTasks))
      },[allTasks])

    async function getAllTasks() {
        const allNotes = await JSON.parse(localStorage.getItem("allTasks"))
        if(allTasks && allTasks.length > 0 ){
            setAllTasks(allNotes)
            // Just For Fun
            console.log("useEffect  all Tasks ..." , [...allNotes , ...allTasks])
        }
    }



    function handleFormSubmit(e){
        e.preventDefault();
        // let task = inputRef.current?.value
        // console.log("form Submitted" , task)
        setAllTasks( (prevTasks) => [{
            id:crypto.randomUUID(),
            task:`${task}`,
            completed:false,
            category:"initial"
        }, ...prevTasks ])
        setTask("")
        // inputRef.current.value("")
        // console.log(inputRef.current.value = "piyush")
        console.log(inputRef.current.value )
    }

  return (
    <div className=" w-full h-screen bg-black text-gray-300 pt-16">
        <h2 className=" mb-16 text-5xl text-center font-semibold bg-gradient-to-b from-slate-500 to-amber-200 text-transparent bg-clip-text
           border-b-4 border-b-teal-400 rounded-md pb-3 w-fit mx-auto "
           >Notes Taking App  
          </h2>
          {/* Main Container with input form and TaskLists */}
          <div className=" max-w-7xl mx-auto my-6 ">
            {/* Input form Container for add Task */}
            <form onSubmit={handleFormSubmit} className=" w-full flex items-center justify-center relative">
             <div className=" w-[70%] flex flex-col">
              <label htmlFor="addTasks" className=" text-3xl text-center"
               >Add Tasks</label>
                <input 
                 id="addTasks"
                 ref={inputRef}
                 value={task}
                 onChange={(e) => setTask(e.target.value)}
                 type="text"
                 placeholder=" Add your Tasks"
                 className="mt-1 block w-full mx-auto px-3 py-2.5 text-black font-bold rounded-lg"   
                />
              </div>

                <button
                 type="submit"
                 className=" absolute right-36 bg-orange-600 rounded-lg px-6 py-2 mt-10 border-2 border-white "
                 > Add </button>
            </form>

            {/*  TaskLists for displaying task*/}

            <div className=" p-6 rounded-lg border border-gray-400 my-4 w-8/12 mx-auto">
             {
              allTasks?.length > 0 && (
                allTasks.map( (task) => (
                  <TaskItem key={task.id} task={task} allTasks={allTasks} setAllTasks={setAllTasks}/>
                ))
             )
           }
            </div>

          </div>
    </div>
  )
}

export default TasksManagingApp