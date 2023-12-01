"use client";
// Modules
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { toggleSider } from "@/redux/slices/appstate.slice";

// Components
import PrimaryButton from "@/components/button/PrimaryButton";
import { FaGear } from "react-icons/fa6";
import { RiMenuFoldFill, RiMenuUnfoldLine } from "react-icons/ri";
import { BiMessageDetail } from "react-icons/bi";
import { IoNotifications } from "react-icons/io5";

// Styles
import styles from "./Layout.module.scss";

interface HeaderProps {
   children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = (
   props: HeaderProps
): React.ReactElement => {
   const appState = useSelector((state: RootState) => state.appSlice);
   const dispatch = useDispatch();

   const handleToggleSider = () => {
      dispatch(toggleSider());
   };

   return (
      <div className={styles.header}>
         <div className="w-full grid grid-cols-12 gap-1">
            <PrimaryButton onClick={handleToggleSider} className={"px-2 py-[6px]"}>
               {appState.siderCollapsed ? (
                  <RiMenuUnfoldLine />
               ) : (
                  <RiMenuFoldFill />
               )}
            </PrimaryButton>
            <div className="col-span-9 flex flex-col items-center justify-center">
               <input
                  className={styles.navSearch}
                  placeholder="Type the keyword, please"
               />
            </div>
            <div className="flex flex-row items-center justify-end col-span-2 mr-8 ">
               <div className="flex flex-row gap-2 max-w-[200px]">
                  <PrimaryButton>
                     <BiMessageDetail />
                  </PrimaryButton>
                  <PrimaryButton>
                     <IoNotifications />
                  </PrimaryButton>
                  <PrimaryButton>
                     <RiMenuUnfoldLine />
                  </PrimaryButton>
               </div>
            </div>
         </div>

         {props.children}
      </div>
   );
};

export default Header;
