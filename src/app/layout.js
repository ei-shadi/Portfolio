import { Crimson_Pro } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

const afogand = localFont({
  src: "../../public/assets/fonts/Afogand-ALMqL.ttf",
  variable: "--font-geist-sans",
});

const crimsonPro = Crimson_Pro({
  variable: "--font-crimson-pro",
  subsets: ["latin"],
});

export const metadata = {
  title: "Eftajul Islam Shadi",
  description: "Welcome To Eftajul Islam Shadi's Dark_Side",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${afogand.variable} ${crimsonPro.variable}`}>
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
