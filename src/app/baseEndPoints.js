import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const URL = "https://hellwetserver.sabbirmahmud.com/";

const baseQuery = fetchBaseQuery({
  baseUrl: URL,
  prepareHeaders: (headers, { getState }) => {
    const token = localStorage.getItem("accessToken");
    console.log(token);
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const apiSlice = createApi({
  baseQuery: baseQuery,
  tagTypes: ["tasks"],
  endpoints: (builder) => ({}),
});
