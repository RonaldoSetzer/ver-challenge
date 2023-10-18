import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import api from "./api";
import userAccountSlice, { deleteProfileById, setUserAccount } from "./user-account-slice";

const customMiddleware = (store: any) => (next: any) => (action: any) => {
  if (action.type === "api/executeQuery/fulfilled" && action.meta.arg.endpointName === "getUserAccount") {
    store.dispatch(setUserAccount(action.payload));
  }
  if (action.type === "api/executeMutation/fulfilled" && action.meta.arg.endpointName === "deleteProfile") {
    store.dispatch(deleteProfileById(action.payload.id));
  }
  console.log(action);
  return next(action);
};

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    userAccount: userAccountSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
    .concat(api.middleware)
    .concat(customMiddleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


