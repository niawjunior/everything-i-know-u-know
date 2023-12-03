import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

interface IUsersResponse {
  users: {
    id: number
    name: string
    username: string
    email: string
  }[]
}
export const userApi = createApi({
  reducerPath: "userApi",
  refetchOnFocus: false,
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/",
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<IUsersResponse, void>({
      query: () => "users",
    }),
  }),
})

export const { useGetUsersQuery } = userApi
