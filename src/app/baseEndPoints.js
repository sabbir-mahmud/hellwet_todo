import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";
import auth from "../firebase.init";
// const URL = "https://hellwetserver.sabbirmahmud.com/";
const URL = "http://localhost:5000/";

const baseQuery = fetchBaseQuery({
  baseUrl: URL,
  prepareHeaders: (headers, { getState }) => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithRefresh = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 403) {
    // send refresh token to get new access token
    const token = localStorage.getItem("refreshToken");
    const data = { refreshToken: token };
    const refreshResult = await axios.post(`${URL}api/auth/refresh`, data);
    console.log(refreshResult);

    if (!refreshResult) {
      auth.signOut();
    }
  }
  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithRefresh,
  tagTypes: ["tasks"],
  endpoints: (builder) => ({}),
});
