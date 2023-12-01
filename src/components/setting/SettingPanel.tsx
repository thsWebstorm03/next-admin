"use client";
// Modules
import React, { useState, Fragment } from "react";

// Components
import PrimaryButton from "../button/FloatButton";
import Drawer from "../drawer/Drawer";

// Icons
import { FaGear } from "react-icons/fa6";
import { SlGraph } from "react-icons/sl";

// Styles
import styles from "./SettingPanel.module.scss";

const SettingPanel: React.FC = (): React.ReactElement => {
   const [isOpen, setIsOpen] = useState(false);

   const showPanel = () => {
      setIsOpen(true);
   };

   const hidePanel = () => {
      setIsOpen(false);
   };

   return (
      <Fragment>
         <div className={styles.floatSetting}>
            <PrimaryButton onClick={showPanel}>
               <FaGear
                  className={
                     "animate__animated animate__infinite animate__delay-2s animate__rotateIn"
                  }
               />
            </PrimaryButton>
            <PrimaryButton onClick={showPanel}>
               <SlGraph
                  className={
                     "animate__animated animate__infinite animate__delay-2s animate__zoomIn"
                  }
               />
            </PrimaryButton>
         </div>
         <Drawer
            open={isOpen}
            placement="right"
            title="Setting1"
            closeIcon
            onClose={hidePanel}
         ></Drawer>
      </Fragment>
   );
};

export default SettingPanel;
