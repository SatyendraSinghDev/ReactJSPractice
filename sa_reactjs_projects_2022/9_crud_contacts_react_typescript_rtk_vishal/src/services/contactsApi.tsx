import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Contact } from "../models/contact.model";

export const contactsApi = createApi({
  reducerPath: "contactsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }),
  tagTypes: ["Contact"],  // For do re-fetching whenever changes any change occur entire contacts
  endpoints: (builder) => ({ 
    contacts: builder.query<Contact[], void>({ // // Here we are recieveing our all query in the form of array of object so we need to specify array here, adn second will be the argument which we were passing but here we are passing nothing
      query: () => "/contacts",
      providesTags: ["Contact"],  // In case of query we have providesTags
    }),
    contact: builder.query<Contact, string>({  // get single Contact, and pass id in the string
      query: (id) => `/contacts/${id}`,
      providesTags: ["Contact"], 
    }),
    addContact: builder.mutation<{}, Contact>({
      query: (contact) => ({  // Here we are recieve contacts from our component
        url: "/contacts",
        method: "POST",
        body: contact,
      }),
      invalidatesTags: ["Contact"], // In case of mutation we have invalidatesTags
    }),
    deleteContact: builder.mutation<void, string>({
      query: (id) => ({
        url: `/contacts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Contact"],
    }),
    updateContact: builder.mutation<void, Contact>({
      query: ({ id, ...rest }) => ({
        url: `/contacts/${id}`,
        method: "PUT",
        body: rest,
      }),
      invalidatesTags: ["Contact"],
    }),
  }),
});

export const {
  useContactsQuery,
  useContactQuery,
  useAddContactMutation,
  useDeleteContactMutation,
  useUpdateContactMutation
} = contactsApi;