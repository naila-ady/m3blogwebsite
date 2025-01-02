import { title } from "process";

export default {
     name:"blog",
     type:"document",
     title:"Blog",
     fields:[
        {
            name:"title",
            type:"string",
            title:"Title of Blog Article",
        },
        { name:"slug",
            type:"slug",
            title:"Slug of Our Blog Article",
            options:{
                source:"title"
            }
        },
        {
          name:"titleimage",
          type:"image",
          title:"Title Image"
        },
        {
            name:"description",
            type:"text",
            title:"Samll Description",
        },
        {
            name:"content",
            type:"array",
            title:"Content",
            of:[
                {
                    type:"block"

                }
            ]
        },

     ]
}