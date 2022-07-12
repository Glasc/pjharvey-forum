// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface Post {
  id: string
  userId: string
  date: string
  title: string
  content: string
  upvotes: number
  downvotes: number
}

// Define a service using a base URL and expected endpoints
export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `api/posts`,
  }),
  tagTypes: ['Post'],
  endpoints: (builder) => ({
    getPostsData: builder.query<Post[], void>({
      query: () => ``,
      providesTags: [{ type: 'Post', id: 'LIST' }],
    }),
    addPost: builder.mutation<Post, Post>({
      query(Post) {
        return {
          url: `/`,
          method: 'POST',
          body: Post,
        }
      },
      invalidatesTags: [{ type: 'Post', id: 'LIST' }],
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPostsDataQuery, useAddPostMutation } = postsApi
