import Comment from "./Comment";


const CommentsList  = (props) => {
  const data = props.data

    console.log("data From CommonetList :: " , data )

return( data?.map( (comment) => (
  <div key={ crypto.randomUUID()} className=" border-l rounded-sm pl-2 border-white">
     <Comment name={comment?.CommentObj.name} message={comment.CommentObj.message}/>
       
       <div className=" ml-10">
         <CommentsListSecond data={comment?.replies} />
       </div>
  </div>
))
   
)

}
export default CommentsList




export const CommentsListSecond  = (props) => {
  const data = props.data

    console.log("data From CommonetListSecond :: " , data )

return( data?.map( (comment) => (
  <div key={ crypto.randomUUID()} className=" border-l rounded-sm pl-4 border-white  ">
     <Comment name={comment?.name} message={comment?.message}/>
       
       <div className=" ml-10 ">
         <CommentsList data={comment?.replies} />
       </div>
  </div>
))
   
)}
