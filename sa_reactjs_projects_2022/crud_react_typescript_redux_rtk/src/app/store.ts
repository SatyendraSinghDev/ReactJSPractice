import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { pokemonApi } from "../services/pokemon";
import { postApi } from "../services/post";
import { setupListeners } from "@reduxjs/toolkit/query/react";

export const store = configureStore({
  reducer: {
    [postApi.reducerPath]: postApi.reducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([postApi.middleware, pokemonApi.middleware]),
});  // We did in middleware too becuase for pooling to make cacheing

setupListeners(store.dispatch);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
