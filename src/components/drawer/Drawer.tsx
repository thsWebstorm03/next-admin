"use client";

// Import Modules
import React, {
   useState,
   useRef,
   ReactNode,
   FC,
   ReactElement,
   MouseEvent,
   MouseEventHandler,
} from "react";
import { IoCloseSharp } from "react-icons/io5";

// Import Styles
import styles from "./Drawer.module.scss";
import PrimaryButton from "../button";

// Define Drawer Props
interface DrawerProps {
   key?: string | number;
   title?: ReactNode;
   body?: ReactNode;
   className?: string;
   closeIcon?: boolean;
   placement?: string;
   open?: Boolean;
   width?: string | number;
   height?: string | number;
   onClose?: () => void;
}

const initialData = {
   title: "Title",
   closeIcon: false,
   placement: "right",
   open: false,
   width: "250px",
   height: "100vh",
};

// Define Drawer
const Drawer: FC<DrawerProps> = (
   props: DrawerProps = initialData
): ReactElement => {
   const drawerRef = useRef<HTMLDivElement>(null);

   let width: DrawerProps["width"] = "250px",
      height: DrawerProps["height"] = "100vh";
   let disappear: string = `${styles.hideRight}`;
   let appear: string = `${styles.showRight}`;
   switch (props.placement) {
      case "left":
         (width = props.width ?? "250px"),
            (height = props.height ?? "100vh"),
            (disappear = `${styles.hideLeft}`),
            (appear = `${styles.showLeft}`);
         break;
      case "top":
         (width = props.width ?? "100vw"),
            (height = props.height ?? "250px"),
            (disappear = styles.hideTop),
            (appear = styles.showTop);
         break;
      case "bottom":
         (width = props.width ?? "100vw"),
            (height = props.height ?? "250px"),
            (disappear = styles.hideBottom),
            (appear = styles.showBottom);
         break;
      default:
         break;
   }

   const hideWrapper: MouseEventHandler<HTMLElement> = (
      e: MouseEvent<HTMLElement>
   ): void => {
      if (
         drawerRef.current &&
         drawerRef.current.contains(e.target as Node)
      ) {
         console.log("1");
         return;
      }
      if (
         drawerRef.current &&
         !drawerRef.current.contains(e.target as Node)
      ) {
         console.log("2");
         props.onClose && props.onClose();
      }
   };

   const handleClose = () => {
      props.onClose && props.onClose();
   }

   return (
      <div
         className={`${styles.drawerWrapper} ${
            props.open ? styles.show : "z-[-1]"
         }`}
         onClick={hideWrapper}
      >
         <div
            ref={drawerRef}
            className={`${styles.drawer} ${props.open ? appear : disappear} `}
            style={{ minWidth: width, minHeight: height }}
         >
            <div className="relative pt-1">
               <p className="text-2xl text-white pl-3">{props.title}</p>
               {props.closeIcon && <PrimaryButton className={'absolute right-0 top-1'} onClick={handleClose}>
                  <IoCloseSharp />
               </PrimaryButton>}
            </div>
            <div className="w-full flex flex-col justify-center items-start mt-1 border-t-[1px] border-neutral-500 pt-1">
               {props.body}
            </div>
         </div>
      </div>
   );
};

export default Drawer;
