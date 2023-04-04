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
    createTask: builder.mutation({
      query: (body) => ({
        url: `api/task/`,
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["tasks"],
    }),
    updateTask: builder.mutation({
      query: (data) => {
        const id = data.id;
        const body = data.body;
        return {
          url: `api/task/${id}`,
          method: "PUT",
          body: body,
        };
      },
      invalidatesTags: ["tasks"],
    }),
    deleteTask: builder.mutation({
      query: (id) => ({
        url: `api/task/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["tasks"],
    }),
  }),
});

export const {
  useCreateTaskMutation,
  useDeleteTaskMutation,
  useGetTasksQuery,
  useUpdateTaskMutation,
} = taskSlice;
