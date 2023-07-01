import { apiSlice } from "../baseEndPoints";

const profileSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: (email) => ({
        url: `api/profile/?email=${email}`,
      }),
    }),
    updateProfile: builder.mutation({
      query: (data) => {
        const id = data.id;
        const body = data.body;
        return {
          url: `api/profile/${id}`,
          method: "PATCH",
          body,
        };
      },
    }),
  }),
});

export const { useGetProfileQuery, useUpdateProfileMutation } = profileSlice;
