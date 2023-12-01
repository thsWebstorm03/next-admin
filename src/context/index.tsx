"use client";

import { useRouter } from "next/navigation";
import { useEffect, createContext, useContext } from "react";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export type ContextProps = {
   theme: string;
};

const AppContext = createContext<ContextProps>({} as ContextProps);

export const useAppContext = (): ContextProps => useContext(AppContext);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
   const router = useRouter();
   const dispatch = useAppDispatch();

   const user = useAppSelector((state) => state.authReducer);

   const contextValue: ContextProps = {
      theme: "dark",
   };

   // useEffect(() => {
   //    // if (!user?.token) router.push("/login");
   // }, [user]);

   return (
      <AppContext.Provider value = {contextValue}>
         {children}
      </AppContext.Provider>
   )
};
