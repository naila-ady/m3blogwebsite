"use client"
 import {useState} from "react";
 import React from "react";

 const Vipcomment = () =>{
    const [comment ,setComment]=useState('');
    const [comments ,setComments] =useState<string[]>([]);

    
const addComment =()=>{
    if (comment.trim() !== ""){
        setComments([...comments,comment]);
        setComment("");
    }
}
// removing comments
 const deletebutton =()=>{
    setComments([])
 }
 return(
    <div className="bg-[#ffffff] p-6 max-w-md mx-auto rounded-lg shadow-md ">
        <h1 className="text-primary text-2xl font-bold mb-4">Comment Box </h1> 
  <input 
  type="text"
  value={comment}
  onChange={(e) =>setComment(e.target.value)}
  placeholder="Write Your Comment..."
  className="border border-primary bg-transparent text-[#333333] rounded-md w-full h-16 mb-4 focus:outline-none focus:ring-2 focus:ring-primary"/>
        

   <button 
   onClick={addComment}
   className="bg-transparent border border-primary rounded-full w-full mb-4 h-12 text-lg hover:bg-primary text-[#333333] transition duration-300">
    Add Comment</button>

    <button onClick={deletebutton} className="bg-transparent border border-primary rounded-full w-full h-12 mb-4 focus:outline-none focus:ring-2 focus:ring-primary
      text-lg text-[#333333] hover:bg-primary transition duration-300">
    Delete Comments</button>

 

    <div className="mt-6">
        <h1 className="text-gray-500 text-2xl font-semibold  mb-2">All Comments:</h1>
        {comments.length === 0 ?(<p className="text-gray-500 text-center">No Comments Yet!</p>):
        (
            <ul className="list-disc pl-5 space-y-2">
                {comments.map((cmt ,index)=>(
                    <li key={index} className="text-gray-500">{cmt}</li>
                ))}
            </ul>
        )}
    </div>

    </div>
 )
 }
 export default Vipcomment