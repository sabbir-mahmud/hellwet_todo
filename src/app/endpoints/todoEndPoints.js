import { apiSlice } from "../baseEndPoints";

const taskSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: (email) => ({
        url: `api/task/?email=${email}`,
        method: "GET",
      }),
      providesTags: ["tasks"],
    }),
  }),
});

export const { useGetTasksQuery } = taskSlice;
