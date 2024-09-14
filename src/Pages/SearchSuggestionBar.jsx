import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { YOUTUBE_SEARCH_SUGGESTION_API_URL } from "../utils/Constants";
import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";

const SearchSuggestionBar = () => {
 
  const [ focused , setFocused ] = useState(false);
  const [ searchQuery , setSearchQuery ] = useState("Search");
  const [ searchedResults , setSearchedResults ] = useState([]);
  // const [ memoizedResult , setMemoizedResults ] = useState([]);
  const [ results , setResults  ] = useState();
  // const navigate = useNavigate();
  console.log( results)

  async function fetchQueryResults() {
    const response = await fetch(YOUTUBE_SEARCH_SUGGESTION_API_URL + searchQuery);
    const queryResults = await response.json();
    setSearchedResults(queryResults[1])
    console.log("Result Fetched .... " , queryResults)
  }

  useEffect( () => {

    const i = setTimeout( () => {
      fetchQueryResults()
    } , 200)

    return () => clearTimeout(i);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[searchQuery])

  function searchTheResults(res){
    // setFocused(false)
    setResults(res)
    toast.success("Query Searched")
  }

  function handleSubmit(e){
         e.preventDefault();
         toast.success("Submitted")
         console.log("Query : " , searchQuery)
  }

  return (
    <div className=" bg-[#0d0d0d] text-gray-400  w-full h-screen ">
           <h2 className="text-5xl border-b-4 border-red-800 pb-3 text-center pt-10 w-fit mx-auto rounded-b-lg"
           > PERFOMANT SEARCH BAR LIKE YOUTUBE </h2>

      {/* {results?.length !== 0 && <h2 className="text-[26px] border-b-4 border-purple-800 pb-1.5 text-white text-center pt-10 w-fit mx-auto rounded-b-lg"
           > <span className=" text-2xl text-yellow-400">Nothing Found for : {searchQuery} </span>  </h2>  } */}

    <form onSubmit={handleSubmit} className= {`w-4/12 mx-auto flex items-center mt-6 bg-[#141414] rounded-full 
       ${focused && "border border-blue-900"} `}>
      { focused && <CiSearch   className="text-3xl w-16"/>}
       <input
        onFocus={() => setFocused(true)}
        onBlur={ () => setFocused(false)} 
        // onMouseEnter={ () => setFocused(true)}
        onMouseLeave={ () => setFocused(false)}
        onChange={ (e) => setSearchQuery(e.target.value)}
        type="text"
        placeholder="Search"
        className= {`${focused && "pl-1"} ${ !focused && "pl-6"} py-2 w-full mx-auto border-none focus:outline-none bg-[#141414] focus:border-r focus:border-blue-900
         rounded-lg font-semibold rounded-l-full  text-white`}
        />

        <div 
         onClick={handleSubmit}
         className={`${focused && "border-l-2 border-blue-900"} cursor-pointer`}>
          <CiSearch   className="text-3xl w-16"/>
        </div>
   </form>

    
      { searchedResults.length !== 0 && (
      <div className=" bg-[#141414] w-4/12 mx-auto rounded-xl pl-2 pr-3 py-2 mt-1">
        {searchedResults.map( res => (
          <div 
            key={crypto.randomUUID()} 
            onClick={() => searchTheResults(res)}
            className=" py-1 cursor-pointer hover:bg-gray-800" 
            > 
              <CiSearch  className=" inline text-xl text-white mx-2"/>{res}
          </div>
        ))}
        </div>
         )}  
     </div>
  
  )
}

export default SearchSuggestionBar