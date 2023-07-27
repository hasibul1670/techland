import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://cow-hut-ten.vercel.app/api/v1/cows",
  }),

  endpoints: () => ({}),
});
