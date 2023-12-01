import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "@/types/user.types";

const initialState: User = {
   id: "",
   email: "",
   name: "",
   avatar: "",
   age: 20,
   gender: "",
   password: "",
   loading: false,
   isauth: false,
   error: "",
   token:"",
   siderCollapsed : false
};

export const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      loginStart : (state) => {
         state.loading = true;
      },
      logoutStart: (state) => {
         state.loading = true;
      },
      registerStart: (state) => {
         state.loading = true;
      },
      loginSuccess: (state, action: PayloadAction<Partial<User>>) => {
         return {...action.payload, loading:false};
      },
      registerSuccess: (state, action: PayloadAction<Partial<User>>) => {
         return {...action.payload, loading:false};
      },
      loginError: (state, action: PayloadAction<any>) => {
         state.loading = false;
         state.error = action.payload;
      },
      logoutError: (state, action:PayloadAction<any>) => {
         state.loading = false;
         state.error = action.payload;
      },
      registerError: (state, action: PayloadAction<any>) => {
         state.loading = false;
         state.error = action.payload;
      },
      logoutSuccess: (state) => {
         return {...initialState};
      },
      refreshToken: (state, action: PayloadAction<Partial<User>>) => {
         return {...state, ...action.payload};
      },
      updateUser: (state, action: PayloadAction<Partial<User>>)=>{
         return {...state, ...action.payload};
      },
   },
});

export const {
   loginStart,
   logoutStart,
   registerStart,
   loginSuccess,
   registerSuccess,
   loginError,
   logoutError,
   registerError,
   logoutSuccess,
   refreshToken,
   updateUser
} = authSlice.actions;

export default authSlice.reducer;