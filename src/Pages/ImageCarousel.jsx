import { useState } from "react"
import { CAROUSEL_IMAGES_ARRAY } from "../Data/ImageCarouselData"
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import { FaRegCircle } from "react-icons/fa";
import { IoIosRadioButtonOn } from "react-icons/io";
import { motion } from "framer-motion";

const ImageCarousel = () => {
 
    const [ imageIndex , setImageIndex] = useState(0)

    console.log("CAROUSEL_IMAGES_ARRAY", CAROUSEL_IMAGES_ARRAY.length)

    function handleShowPrevImage(){
      if( imageIndex === 0 ) return setImageIndex(CAROUSEL_IMAGES_ARRAY.length - 1 )
        setImageIndex(imageIndex - 1)
    }

    function handleShowNextImage(){
      if( imageIndex === CAROUSEL_IMAGES_ARRAY.length - 1 ) return setImageIndex(0)
      setImageIndex(imageIndex + 1)
  }
    

    return (
        <div className=" bg-[#0a0a0a] text-gray-100 w-full h-screen py-24 overflow-y-scroll  ">
    
           <h2 className=" mb-16 text-5xl text-center font-semibold bg-gradient-to-b from-slate-500 to-amber-200 text-transparent bg-clip-text
           border-b-4 border-b-teal-400 rounded-md pb-3 w-fit mx-auto "
           >Elegant Image Caraousel 
          </h2>
    
          <div className="rounded-xl relative w-[640px] h-[320px] mx-auto flex flex-row overflow-x-hidden shadow-2xl shadow-slate-600">
          {
            CAROUSEL_IMAGES_ARRAY.map( (image) => (
                <div key={crypto.randomUUID()}
                className="w-full aspect-square ">
                  <motion.img
                       initial={{opacity: 0 , x: -100}}
                       animate={{opacity:1 , x: 0}}
                       transition={{duration: 0.6}}                  
                   src={CAROUSEL_IMAGES_ARRAY[imageIndex].image} alt={image.image} 
                    className=" min-w-[640px] max-h-full object-cover"
                   />
                </div>
            ))
          }

          {/* Icons for Moving images */}
          {
            <div className=" px-1 absolute w-full h-full left-0 right-0 flex items-center justify-between">
                <div
                 onClick={handleShowPrevImage}
                 className="p-2 opacity-70 bg-gray-400 hover:bg-gray-500 w-10 hover:scale-110 hover:transition-all hover:duration-300 rounded-full flex justify-between items-center cursor-pointer">
                  <BsChevronLeft className=" text-black text-3xl "/>
                </div>

                <div
                 onClick={handleShowNextImage}
                 className="p-2 opacity-70 bg-gray-400 hover:bg-gray-500 w-10 hover:scale-110 hover:transition-all hover:duration-300 rounded-full flex justify-between items-center cursor-pointer">
                  <BsChevronRight className=" text-black text-3xl"/>
                </div>
            </div>
          }
 
           <div className=" absolute bottom-0  w-full mx-auto">
              <div className=" w-fit mx-auto flex items-center pb-2 gap-0.5">
               {
                CAROUSEL_IMAGES_ARRAY.map( (_,index) => (
                 <div 
                  onClick={() => setImageIndex(index)}
                  key={crypto.randomUUID()}
                   className=" cursor-pointer hover:scale-125 hover:transition-all hover:duration-200  ">
                    { imageIndex === index ? <IoIosRadioButtonOn className=" text-lg text-neutral-700"/> 
                                                  : 
                                             <FaRegCircle className=" text-xs text-neutral-700 " />}
                 </div>
                ))
               }
              </div>
           </div>

          </div>

        </div>
      )
}

export default ImageCarousel