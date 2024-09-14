import { Link } from "react-router-dom"
import {LINKS_FOR_PAGE_NAVIGATION }from "../Data/NavigationPagesLink"
// import { useState } from "react"

const HomePage = () => {

    // const [ page , setPage] = useState(1)
    console.log("LINKS FOR Pages -- " , LINKS_FOR_PAGE_NAVIGATION)
  return (
    <div className=" w-full h-screen overflow-y-scroll bg-black text-gray-100 py-10">
     <h2 className=" text-5xl text-center font-semibold border-b-2 border-red-600 rounded-md pb-3 w-fit mx-auto "
       >HomePage
     </h2>

    {/* ORIGINAL */}
      <div className=" w-10/12 mx-auto flex flex-wrap">
        {
            LINKS_FOR_PAGE_NAVIGATION.map( (card) => (
                <Link 
                  to={card.link} 
                  key={crypto.randomUUID()}
                  className="bg-[#080808] w-[20rem] m-4 py-6 border border-gray-800 rounded-xl">

                   <img src={card.image} className=" w-10/12 mx-auto object-cover"/>
                     <div className=" w-10/12 mx-auto py-2  ">
                        <h3 className=" border-b  pb-3">{card.title}</h3>
                        <h2 className=" pt-1 text-sm">{card.description}</h2>
                     </div>

                </Link>
            ))
        }
      </div>
         
    {/* For Pagination Testing */}
      {/* <div className=" w-10/12 mx-auto flex flex-wrap">
        {
            LINKS_FOR_PAGE_NAVIGATION.splice(page * 8 - 8 , page * 8 
            ).map( (card,index) => (
                <Link 
                  to={card.link} 
                  key={crypto.randomUUID()}
                  className="bg-[#080808] w-[20rem] m-4 py-6 border border-gray-800 rounded-xl">

                   <img src={card?.image} className=" w-10/12 mx-auto object-cover"/>
                     <div className=" w-10/12 mx-auto py-2  ">
                        <h3 className=" border-b  pb-3">{card.title}</h3>
                        <h2 className=" pt-1 text-sm">{card.description}</h2>
                        
                        <div className=" font-bold border rounded-full py-2 px-4 w-fit">{index + 1}</div>
                     </div>

                </Link>
            ))
        }
      </div>
      <button onClick={() => setPage(page+1)}
      className=" border px-4 py-2 font-bold text-center"
      >NextPage</button>
    </div> */}
  </div>  
  )
}

export default HomePage