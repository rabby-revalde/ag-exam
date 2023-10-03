import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
const notoSans = Noto_Sans({
   weight: ["300", "400", "700"],
   subsets: ["latin"],
   display: "swap",
   variable: "--font-noto-sans",
});

export const metadata: Metadata = {
   title: "AGDP IT Solutions introductory examination",
   description:
      "This exam is designed to test your ability to convert a Figma design into a functional Next.js template.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html lang="en">
         <body className={`${notoSans.variable}`}>
            <Header />
            {children}
            <Footer />
         </body>
      </html>
   );
}
