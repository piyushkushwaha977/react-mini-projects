/* eslint-disable react/prop-types */
// import { FaUserCircle } from "react-icons/fa";
import { FcBusinessman } from "react-icons/fc";
import { motion } from "framer-motion";

const Comment = ({name , message}) => {
    // console.log("Props :: " , props)
  return (
    <motion.div
      //  initial={{opacity: 0 , x: 100}}
      //  animate={{opacity:1 , x: 0}}
      //  transition={{duration: 1.2}} 
       className=" text-black rounded-lg bg-gray-50 flex gap-4 py-2 px-3 my-2  border border-red-500 "
       >
        <div className=" flex gap-2 items-center" >
            {/* <FaUserCircle className=" h-8 w-8 rounded-full "/> */}
            <FcBusinessman className=" h-8 w-8 rounded-full "/>
            <span className=" font-bold">{name}</span>
        </div>

        <div className=" h-8 font-semibold flex items-center">
            {message}
        </div>
    </motion.div>
  )
}

export default Comment