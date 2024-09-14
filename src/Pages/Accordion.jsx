/* eslint-disable react/prop-types */
import { useState } from "react"
import { AccordionData } from "../Data/AccordionData"
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { motion } from "framer-motion";

const Accordion = () => {
   
    const [showIndex, setShowIndex] = useState(0);
    // const [index, setIndex] = useState(false);
    // console.log("index: " ,showIndex)
    // function handleClick(index){
    //     if(index === showIndex){
    //        return setShowIndex(null);
    //     }
    //     setShowIndex(index)
    // }


  return (
    <div className=" bg-[#0a0a0a] text-gray-100 w-full h-screen py-24  ">

       <h2 className=" mb-16 text-5xl text-center font-semibold border-b-4 border-purple-600 rounded-md pb-3 w-fit mx-auto "
       >Shadcn Like Accordion
      </h2>

        {
            AccordionData?.map( (data,index) => (
                <div key={crypto.randomUUID()} 
                 className=" w-6/12 mx-auto my-4 ">

                 <ItemList 
                  data={data} 
                  index={index} 
                  showOneIndex={showIndex} 
                  setShowOneIndex={setShowIndex}
                  />
                </div>
            ))
        }
    </div>
  )
}

export default Accordion



export const ItemList = ({data,index,showOneIndex,setShowOneIndex}) => {
    // const [showIndex, setShowIndex] = useState(false);
    // console.log("index: " ,data)

        function handleClick(index){
        if(index === showOneIndex){
           return setShowOneIndex(null);
        }
        setShowOneIndex(index)
    }

  return (
  <div className=" border-b pb-3 border-gray-300">
    <h2 
    onClick={() => handleClick(index)}
    className=" px-4 py-2 cursor-pointer rounded-md flex justify-between items-center hover:underline "
   >
    {data.title}
      { showOneIndex === index ? <IoIosArrowUp/> : <IoIosArrowDown/>}
   </h2>
     {
        showOneIndex === index && (
            <motion.div
                       initial={{opacity: 0 , y: 20}}
                       animate={{opacity:1 , y: 0}}
                       transition={{duration: 1}}             
                       className="px-4 py-2 mx-3 border  border-gray-800 rounded-lg  ">
              <p className=" text-sm">{data.description}</p>
            </motion.div>
        )
     }
    </div>
  )
}

