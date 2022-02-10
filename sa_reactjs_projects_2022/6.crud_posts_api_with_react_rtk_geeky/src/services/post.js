// First Import these two methods
import { createApi, fetchBaseQuery }  from '@reduxjs/toolkit/query/react';

//Second create our Api slice
// It is used to define our endpoints and allow to create the API slice
export const postApi = createApi({
    // The unique key that defines where the Redux store will store our cache.
    reducerPath: 'postApi',    // reducer path mein string dete hai hum jo ki unqiue key hoti hai, wo define krta hai isliye redux store cache ko kaha per store kargea
   
    // The base query to request data.
 // RTK Query ships with fetchBaseQuery, which is a lightweight fetch wrapper that automatically handles request headers and response parsing in a manner similar to common libraries like axios.

    baseQuery: fetchBaseQuery({    // fetchBaseQuery yeh ek wrapper hai jo ki automatically handle krta hai response hedaer or response parsing ko like axios karta hai waise hi
        baseUrl: 'https://jsonplaceholder.typicode.com/',   // wo url likhte hai jisper humko reqt bhejni ho means kis api per jayega
    }),

     // The set of operations that we want to perform against the server.

    endpoints: (builder) => ({ // Now we will tell ki ki hum kya action perform krne wale hai operation wo hume isme define krna rhta hai , argument mein nam kuch bhi de skte hai per generallly builder likhte hai
        getAllPost: builder.query({                // yahan hum operation ka nam likte hai ki kya krna hai, builder humara query type ka ho means hum data fetch/read/query krna chahte hai mutate nhi means update add delete nahi       
            query: () => ({
                url: 'posts',      // endpoint yeh bandya humara base ul iske ange append hio jayega, by default Get method rhta hai likhna chahe toh likhe
                method: 'GET'  
            })     // jaise hi hum endpoint define krte hai toh kuch hooks automatically create hti hai jisko apko export krna hoga taki components mein use kr pao
        }),
        getPostById: builder.query({                // yahan hum operation ka nam likte hai ki kya krna hai, builder humara query type ka ho means hum data fetch/read/query krna chahte hai mutate nhi means update add delete nahi       
            query: (id) => ({
                url: `posts/${id}`,      
                method: 'GET'  
            }) 
            // with console
            // query: (id) => {
            //     console.log("Endpoint ID: ", id);
            //     return {
            //         // url: `post/${id}`,      
            //         method: 'GET'  
            //     }
            // }  
        }),
        // With Limit
        getPostByLimit: builder.query({               
            // with console
            query: (num) => {
                console.log("Endpoint Num: ", num);
                return {
                    url: `posts?_limit=${num}`,     //posts?_limit=2  
                    method: 'GET'  
                }
            }  
        }),
        // Delete
        deletePostById: builder.mutation({               
            query: (id) => {
                return {
                    url: `posts/${id}`,     //posts?_limit=2  
                    method: 'DELETE'  
                }
            }  
        }),
        // Create Data
        createPost: builder.mutation({          
            query: (body) => {
                console.log(`body`, body);
                return {
                    url: `posts`,    
                    method: 'POST',
                    // body: {
                    //         title: 'This2 is new Title',
                    //         body: 'This2 is New Body',
                    //         userId: 
                    // },
                    body,
                    headers: {  // Pass Header at here if want, or jitni marji property isme de skte hai
                      'Content-type': 'application/json; charset=UTF-8',
                    }           
                }
            }  
        }),
        // Update Post Data
        updatePost: builder.mutation({          
            query: (updatePost) => {
                console.log(`updatePost`, updatePost);
                const { id, ...data } = updatePost; // need to destructure, Id alag krdo or baki data aise hi rhne do
                console.log(`After destructuring`, data);
                return {
                    url: `posts/${id}`,    
                    method: 'PUT',  // PUT use for complete update
                    body: data,
                    headers: {  // Pass Header at here if want, or jitni marji property isme de skte hai
                      'Content-type': 'application/json; charset=UTF-8',
                    }           
                }
            }  
        }),
    })
})

// Export hooks for usage in functional components, which are auto-generated based on the defined endpoints
// humare getAllPost iska endpoint ka hook banega yeh, useGetAllPostQuery
export const { useGetAllPostQuery, useGetPostByIdQuery, useGetPostByLimitQuery, useDeletePostByIdMutation, useCreatePostMutation, useUpdatePostMutation } = postApi;

// Now we can use this hook jahan hume use krna ho iska

// Now next before that add this service to our store, toh store create krege ab hum