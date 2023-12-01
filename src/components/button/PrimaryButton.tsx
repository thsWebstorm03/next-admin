"use client";

// Import Modules
import React from "react";

// Import Styles
import styles from "./Button.module.scss";

// Define PrimaryButton Props
interface PrimaryButtonProps {
   key?: String | number;
   className?: String;
   children?: React.ReactNode;
   onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

// Define PrimaryButton
const PrimaryButton: React.FC<PrimaryButtonProps> = ({
   onClick,
   children,
   className,
}: PrimaryButtonProps): React.ReactElement => {
   return (
      <button
         className={`${styles.primary_button} ${className}`}
         onClick={onClick}
      >
         {children}
      </button>
   );
};

export default PrimaryButton;
