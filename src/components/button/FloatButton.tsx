"use client";

// Import Modules
import React from "react";

// Import Styles
import styles from "./Button.module.scss";

// Define FloatButton Props
interface FloatButtonProps {
   key?: String | number;
   className?: String;
   children?: React.ReactNode;
   onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

// Define FloatButton
const FloatButton: React.FC<FloatButtonProps> = ({
   onClick,
   children,
   className,
}: FloatButtonProps): React.ReactElement => {
   return (
      <button
         className={`${styles.float_button} ${className}`}
         onClick={onClick}
      >
         {children}
      </button>
   );
};

export default FloatButton;
