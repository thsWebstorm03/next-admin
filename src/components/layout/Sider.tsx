"use client";

import React, { useState, MouseEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";

import { toggleSider, unfoldSider, collapseSider } from "@/redux/slices/appstate.slice";

import styles from "./Layout.module.scss";

const Sider: React.FC = (props: any): React.ReactElement => {
   const appState = useSelector((state: RootState) => state.appSlice);
   const dispatch = useDispatch();

   return (
      <div
         className={
            appState.siderCollapsed
               ? `${styles.sider} ${styles.collapsed}`
               : `${styles.sider}`
         }
         
      ></div>
   );
};

export default Sider;
