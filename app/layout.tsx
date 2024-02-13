import type { Metadata } from "next";
import Dropdowns from "./components/Dropdown";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/global/Footer";
import Header from "./components/header";
import "./globals.css";
export const metadata: Metadata = {
  title: "Runleatherbd-Best online leather products shop in Bangladesh",
  description: "Runleatherbd-Best online leather products shop in Bangladesh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Navbar />
        <Dropdowns />
        {children}
        <Footer />
      </body>
    </html>
  );
}
