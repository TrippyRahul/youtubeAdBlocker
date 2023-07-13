import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Youtube Ad Blocker",
  description:
    "YouTube is a fun website where you can watch and share all kinds of videos. While watching videos, ads show up in between them, just like on TV. These ads are annoying and disturbing. But now, you can enjoy your YouTube experience using the extension. By using it, you can watch your favorite content on Youtube without ads.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.svg" />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
