import { configureStore  } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { postApi } from '../services/post';  // Now import API service

export const store = configureStore({   // Any name you can keep here i used store
    reducer: {  //   // reducerPath and reducer are created for us, which we can pass straight into the reducer parameter of configureStore.
        [postApi.reducerPath]: postApi.reducer         // Here we mentioned reducer path and reducer, or jisko humne as a parameter pass kiya hua hai configure store ke
    },
    //  // middleware is also created for us, which will allow us to take advantage of caching, invalidation, polling, and the other features of RTK Query.
    middleware: (getDefaultMiddleware) =>     // yeh hume advantage provide karega, caching ka , invalidation ka polling ka or rtk query ke other features un sab ka
    getDefaultMiddleware().concat(postApi.middleware),
})
// // It will enable to refetch the data on certain events, such as refetchOnFocus and refetchOnReconnect.
setupListeners(store.dispatch)   // Help in re fetching when we enable this, kuch certain events ke liye

// Now wrap your application with provider