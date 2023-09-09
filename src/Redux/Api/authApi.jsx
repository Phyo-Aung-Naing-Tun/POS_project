import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://e.mmsdev.site/api/v1",
  }),
  tagTypes: ["authApi"],
  endpoints: (builder) => ({
    getLogIn: builder.mutation({
      query: (user) => ({
        url: "/login",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["authApi"],
    }),
  }),
});

export const { useGetLogInMutation } = authApi;
