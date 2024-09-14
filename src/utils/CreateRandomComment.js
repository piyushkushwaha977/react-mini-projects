import { GetRandomMessage } from "./GetRandomMessage";
import { GetRandomName } from "./GetRandomName";

// const  CommentObj = CreateRandomComment();
// console.log("commentObj from nested comment :-  " , CommentObj) 

export function CreateRandomComment(){
    return {
        id:crypto.randomUUID(),
        name:GetRandomName(),
        message: GetRandomMessage(38),
        replies:[
          {CommentObj:{
            name:GetRandomName(),
            message: GetRandomMessage(38),
          }},
          {CommentObj:{
            name:GetRandomName(),
            message: GetRandomMessage(38),
          }},

         ]
    }
}

export function CreateRandomLiveMessages(){
    return {
        id:crypto.randomUUID(),
        name:GetRandomName(),
        message: GetRandomMessage(38),
    }
}







