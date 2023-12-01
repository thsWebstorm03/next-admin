import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import localforage from "localforage";

import authReducer from "@/redux/slices/auth.slice";
import appSlice from "./slices/appstate.slice";

const rootReducer = combineReducers({
   authReducer,
   appSlice
});

// const persistConfig = {
//    key: "root",
//    storage: localforage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
   reducer: rootReducer,
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: false,
      }).concat(/* any other middleware you need */),
});

export const persistedStore = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
