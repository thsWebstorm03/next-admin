"use client";
// Modules
import React, { useState, Fragment } from "react";

// Components

import Header from "./Header";
import Sider from "./Sider";
import Footer from "./Footer";
import SettingPanel from "../setting/SettingPanel";


// Styles
import styles from "./Layout.module.scss";

interface LayoutProps {
   children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = (
   props: LayoutProps
): React.ReactElement => {
   return (
      <Fragment>
         <div className={styles.layout}>
            <Sider />
            <div className={styles.content}>
               <Header></Header>
               <div className={styles.main}>{props.children}</div>
               <Footer></Footer>
            </div>
         </div>
         <SettingPanel />
      </Fragment>
   );
};

export default Layout;
