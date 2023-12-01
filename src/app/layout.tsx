import type { Metadata } from "next";
import { Inter } from "next/font/google";

// Redux
import { Providers } from "@/redux/providers";

// Components
import Layout from "@/components/layout";

// context
import { AppProvider } from "@/context";

// import styles
import "../../node_modules/animate.css/animate.css";
import "@/styles/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "My Admin",
   description: "Generated by create next app",
   icons: "/favicon.png",
};

export default function APP({ children }: { children: React.ReactNode }) {
   return (
      <html lang="en">
         <body className={`bg-dark-primary ${inter.className}`}>
            <Providers>
               <AppProvider>
                  <Layout>{children}</Layout>
               </AppProvider>
            </Providers>
         </body>
      </html>
   );
}
