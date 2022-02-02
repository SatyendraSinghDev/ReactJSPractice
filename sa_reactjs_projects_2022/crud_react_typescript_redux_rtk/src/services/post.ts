import { createApi } from "@reduxjs/toolkit/query/react";
import axios from "axios";

const baseUrl = `https://jsonplaceholder.typicode.com/posts`;

const getPostData = async () => {
  const response = await axios.get(baseUrl);
  return response;
};

const addPostData = async (payload: IPost) => {
  const response = await axios.post(baseUrl, JSON.stringify(payload));
  return response;
};

// What type of data should be
export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const postApi = createApi({
  reducerPath: "postApi",                      // any name you can pass here but should be unique 
  baseQuery: getPostData,                      // call API
  tagTypes: ["Post", "Users"],                 // Used For caching, so that we can invalidate re-fetching.
  endpoints: (builder) => ({
    getPost: builder.query<IPost[], void>({    // When we do fetch, we need to use query
      query: () => "/",                        // path
      transformResponse: (response: IPost[]) => response.slice(0, 5),   // We can change our response at there
      providesTags: ["Post"],                  // This is only for Post not for User, if we want to get for User need to pass User here
    }),
    addPost: builder.mutation({                // When we do update/Add, we need to use mutation
      query: addPostData,
      invalidatesTags: ["Post"],               // If we have invalidate Post means it will going to invalidate Posts
    }),
  }),
});

// create custom hooks for above APIs Methods
export const { useGetPostQuery, useAddPostMutation } = postApi;
