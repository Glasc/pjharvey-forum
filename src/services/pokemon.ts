// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http//:localhost:3000/api',
  }),
  tagTypes: ['Pokemon'],
  endpoints: (builder) => ({
    getPersonsData: builder.query<any, void>({
      query: () => `/info`,
      providesTags: [{ type: 'Pokemon', id: 'LIST' }],
    }),
    addPerson: builder.mutation<
      { name: string; number: string },
      { name: string; number: string }
    >({
      query(pokemon) {
        return {
          url: `/info`,
          method: 'POST',
          body: pokemon,
        }
      },
      invalidatesTags: [{ type: 'Pokemon', id: 'LIST' }],
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPersonsDataQuery, useAddPersonMutation } = pokemonApi
