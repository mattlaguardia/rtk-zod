import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import ISource from '../models/source';

interface JSONAPIResponse {
  // NOTE should also have better type any is bad
  data: any;
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.imgix.com/v4/',
    prepareHeaders: (headers) => {
      headers.set('authorization', `Bearer ${import.meta.env.VITE_BEARER_TOKEN}`)
      headers.set('content-type', 'application/vdn.api+json')

      return headers
    },
  }),
  endpoints: (builder) => ({
    sources: builder.query<ISource[], { include?: string } | void>({
      query: (config: { include?: string }) => {
        /*
         * NOTE: this would need to be some helper utility function to return the JSON API configured route
         * example: Include, Page, Page[size] etc.
         */
        return `/sources${ config?.include ? '?include=' + config.include : '' }`
      },
      providesTags: [{ type: 'Sources', id: 'LIST' }],
    }),
    getSource: builder.query<ISource, string>({
      query: (id) => `/sources/${id}`,
      transformResponse: ({ data }: JSONAPIResponse) => {
        // NOTE would need to make a transformer function to help with relationships

        data.attributes.account_id = data.relationships.account.data.id;
        data.attributes.id = data.id;
        data.attributes.type = data.type;

        return data.attributes;
      }
    })
  }),
  reducerPath: 'api',
  tagTypes: ['Sources']
});

export default api;
