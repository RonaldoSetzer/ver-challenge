import { UserAccountDto } from "@/domain/entities/user-account";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  endpoints: (builder) => ({
    getUserAccount: builder.query<UserAccountDto, void>({
      query: () => "/",
    }),
    deleteProfile: builder.mutation<void, string>({
      query: (profileId) => ({
        url: `/profiles/${profileId}`,
        method: "DELETE",
      }),
    }),
  })
})

export const {
  useGetUserAccountQuery,
  useDeleteProfileMutation,
} = api;
export default api;

