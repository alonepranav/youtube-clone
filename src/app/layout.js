import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "YouTube",
  description: "YouTube home page clone by @PranavShilavane",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"
        ></link>
      </head>
      <body className={inter.className}>
        <div className="">
          <Navbar />
          <div className="h-screen pl-60 w-full">{children}</div>
        </div>
      </body>
    </html>
  );
}
