/* eslint-disable react/prop-types */
import Comment from "../components/Comment";
import { motion } from "framer-motion";



const CommentsData = [
    {
        name:"Piyush Broo",
        message:"A Professional Full Stack Developer",
        replies:[
            {
                name:"Piyush Broo",
                message:"A Professional Full Stack Developer",
                replies:[{
                name:"Piyush Broo",
                message:"A Professional Full Stack Developer",
                replies:[]
            },
            {
                name:"Piyush Broo",
                message:"A Professional Full Stack Developer",
                replies:[]
            }]
            },
            {
                name:"Piyush Broo",
                message:"A Professional Full Stack Developer",
                replies:[]
            },
            {
                name:"Piyush Broo",
                message:"A Professional Full Stack Developer",
                replies:[
                    {
                        name:"Piyush Broo",
                        message:"A Professional Full Stack Developer",
                        replies:[]
                    },
                    {
                        name:"Piyush Broo",
                        message:"A Professional Full Stack Developer",
                        replies:[
                            {
                                name:"Piyush Broo",
                                message:"A Professional Full Stack Developer",
                                replies:[]
                            },
                            {
                                name:"Piyush Broo",
                                message:"A Professional Full Stack Developer",
                                replies:[]
                            }]
                    },
                    {
                        name:"Piyush Broo",
                        message:"A Professional Full Stack Developer",
                        replies:[]
                    },
                    {
                        name:"Piyush Broo",
                        message:"A Professional Full Stack Developer",
                        replies:[]
                    }]
            }
        ]
    },
    {
        name:"Piyush Broo",
        message:"A Professional Full Stack Developer",
        replies:[]
    },
    {
        name:"Piyush Broo",
        message:"A Professional Full Stack Developer",
        replies:[
            {
                name:"Piyush Broo",
                message:"A Professional Full Stack Developer",
                replies:[]
            },
            {
                name:"Piyush Broo",
                message:"A Professional Full Stack Developer",
                replies:[
                    {
                        name:"Piyush Broo",
                        message:"A Professional Full Stack Developer",
                        replies:[ {
                            name:"Piyush Broo",
                            message:"A Professional Full Stack Developer",
                            replies:[]
                        },
                        {
                            name:"Piyush Broo",
                            message:"A Professional Full Stack Developer",
                            replies:[ {
                                name:"Piyush Broo",
                                message:"A Professional Full Stack Developer",
                                replies:[]
                            },
                            {
                                name:"Piyush Broo",
                                message:"A Professional Full Stack Developer",
                                replies:[ {
                                    name:"Piyush Broo",
                                    message:"A Professional Full Stack Developer",
                                    replies:[]
                                },
                                {
                                    name:"Piyush Broo",
                                    message:"A Professional Full Stack Developer",
                                    replies:[ {
                                        name:"Piyush Broo",
                                        message:"A Professional Full Stack Developer",
                                        replies:[ {
                                            name:"Piyush Broo",
                                            message:"A Professional Full Stack Developer",
                                            replies:[ {
                                                name:"Piyush Broo",
                                                message:"A Professional Full Stack Developer",
                                                replies:[]
                                            },
                                            {
                                                name:"Piyush Broo",
                                                message:"A Professional Full Stack Developer",
                                                replies:[]
                                            }]
                                        },
                                        {
                                            name:"Piyush Broo",
                                            message:"A Professional Full Stack Developer",
                                            replies:[]
                                        }]
                                    },
                                    {
                                        name:"Piyush Broo",
                                        message:"A Professional Full Stack Developer",
                                        replies:[]
                                    }]
                                }]
                            }]
                        }]
                    },
                    {
                        name:"Piyush Broo",
                        message:"A Professional Full Stack Developer",
                        replies:[]
                    }
                ]
            }]
    }
]


const MultiLevelNestedComments = () => {
  return (
   <div className=" w-full bg-[#121212] h-screen  text-white overflow-y-scroll">
    <div className=" w-11/12 mx-auto py-10   ">
      <h2 className="my-10 text-5xl text-center font-semibold border-b-2 border-red-600 rounded-md pb-3 w-fit mx-auto "
      >NestedComments</h2>
        <div className=" w-6/12 mx-auto ">
                <CommentList key={crypto.randomUUID()} Comments={CommentsData}/>
         
        </div>
    </div>        
</div>)
}
export default MultiLevelNestedComments;


const CommentList = (props) => {
    const Comments = props.Comments
    console.log("Comment from CommentList : " , Comments)
     return(
        <div> 
        {
           Comments?.length !== 0 
                 &&
            (Comments?.map( (comment) => (
              <div key={crypto.randomUUID()} className=" ml-3 pl-4 border-l-[3px] rounded-tl-md rounded-bl-md border-purple-700">
                 <Comment key={crypto.randomUUID()} message={comment?.message} name={comment?.name}/>

                   <motion.div
                       initial={{opacity: 0 , x: -100}}
                       animate={{opacity:1 , x: 0}}
                       transition={{duration: 1.8}}
                   >
                      <CommentList  Comments={comment?.replies}/>
                   </motion.div>
              </div>
            )))
        }
        </div>)
}