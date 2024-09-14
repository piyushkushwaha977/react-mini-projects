// import Comment from "../components/Comment"
import CommentsList from "../components/CommentsList";
import { CreateRandomComment } from "../utils/CreateRandomComment"


  let  CommentObj = CreateRandomComment();

 {
  /*
    PLEASE IGONRE THIS FILE THIS IS MESSED UP OKK..
      YOU CAN CHECK MultiLevelNestedComments.jsx for
      N level Nested Comment Code
  */
 }
   
  // console.log("commentObj from nested comment :-  " , CommentObj) 

 {/* I Seriously Messed Up with data in this time so ignore it  */}

//   const UniqueCommentObj = {
//        CommentObj,
//        replies:[
//         CommentObj
//        ]
//   }

const data = [

    {
        CommentObj,
        replies:[
            CommentObj,
            CommentObj
        ]
    },
    {
      CommentObj,
      replies:[
          CommentObj,
          CommentObj
      ]
  },
  {
    CommentObj,
    replies:[
        CommentObj,
        CommentObj
    ]
},


]

// console.log("data :: " , data)


const NestedComments = () => {
  return (
    <div className="py-10 bg-[#121212] text-white w-full h-screen overflow-y-scroll">
      <h2 className="my-10 text-5xl text-center font-semibold border-b-2 border-red-600 rounded-md pb-3 w-fit mx-auto "
      >NestedComments</h2>
        <div className=" w-8/12 mx-auto ">
          <CommentsList data={data}/>
        </div>
    </div>
  )
}

export default NestedComments;