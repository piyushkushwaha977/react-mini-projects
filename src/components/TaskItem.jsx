/* eslint-disable react/prop-types */
import { useState } from "react"
import { MdModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { RiSaveFill } from "react-icons/ri";

function TaskItem({task , setAllTasks}) {

    const [ editText, setEditText] = useState(task.task)
    const [ isEditTask , setIsEditTask] = useState(false)
 
    // console.log(task)
    
    function updateTask(id){
     console.log("Taske Updated start")
     setAllTasks( (prevTasks) => (
        prevTasks.map( (task) => (
            task.id === id ? {...task , task : editText} : task
        ))
     ))
     setIsEditTask(false)
    }

    function handleDeleteTask(id){
        // console.log("id" , id)
       setAllTasks((prevTasks) => (
        prevTasks?.filter( (task) => task.id !== id )
       ))
    }

    function handleTaskCompletion(id){
        setAllTasks( (prevTasks) => (
            prevTasks.map( (task) => (
                task.id === id ? {...task , completed:!task.completed} : task
            ))
        ))
    }


  return (
  <div
    key={task.id}
    className={`w-full flex items-center rounded-md border-2 border-orange-400 my-2`}
    >
   {/* CheckBox for Task Completion */}
   <input
    type="checkBox"
    value={task.completed}
    onChange={ () => handleTaskCompletion(task.id)}
    className=" ml-2 size-5 "
   />
    <div className="w-full ">
     <input
      value={task.completed ? "Task was Completed " : editText }
      readOnly={!isEditTask}
      onChange={ (e) => setEditText(e.target.value)}
      className="py-2 px-4 bg-[#121212] w-full outline-none"
     />
    </div>
   
  {
    !task.completed  && (
      <div className=" flex items-center justify-center px-3 ">
     {
       !isEditTask ? 
          (<div 
            onClick={() => setIsEditTask(true)} 
            disabled={task.completed}
            className=" text-white  cursor-pointer flex items-center rounded-lg"
          ><MdModeEditOutline className=" text-green-500 text-xl"/> Edit</div>)
         : (<div
            onClick={() => updateTask(task.id)}
            className=" cursor-pointer flex items-center">
            <RiSaveFill className=" text-yellow-500 text-xl"/> Save</div>)
      }
    </div>
    )
  }

          <button 
           onClick={() => handleDeleteTask(task.id)}
           className=" bg-red-400 py-2 px-1 "
           >
            <MdDelete className=" text-red-800 text-3xl"/> 
          </button>
  </div>
  )
}

export default TaskItem