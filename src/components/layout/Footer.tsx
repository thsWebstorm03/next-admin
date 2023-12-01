"use client";
// Modules
import React, { useState } from "react";

// Styles
import styles from "./Layout.module.scss";

interface FooterProps {
   children?: React.ReactNode,
}

const Footer:React.FC<FooterProps> = (props: FooterProps):React.ReactElement => {
   return <div className={styles.footer}></div>;
};

export default Footer;
