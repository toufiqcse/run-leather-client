import Dropdowns from "./components/Dropdown";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/global/Footer";
import Header from "./components/header";
import "./globals.css";
export const metadata = {
  title: "Runleatherbd-Best online leather products shop in Bangladesh",
  description: "Runleatherbd-Best online leather products shop in Bangladesh",
};

export default function RootLayout({ children }) {
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
