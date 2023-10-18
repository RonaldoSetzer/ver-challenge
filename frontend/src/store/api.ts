import { UserAccountDto } from "@/domain/entities/user-account";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  endpoints: (builder) => ({
    getUserAccount: builder.query<UserAccountDto, void>({
      query: () => "/",
    }),
  }),
});

export const { useGetUserAccountQuery } = api;
export default api;

