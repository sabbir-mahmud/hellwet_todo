import { apiSlice } from "../baseEndPoints";

const profileSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: (email) => ({
        url: `api/profile/?email=${email}`,
      }),
    }),
  }),
});

export const { useGetProfileQuery } = profileSlice;
