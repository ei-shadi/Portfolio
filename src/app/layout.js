import { Crimson_Pro } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { BeamsUpstream } from "@/components/ui/beams-upstream";

const afogand = localFont({
  src: "../../public/assets/fonts/Afogand-ALMqL.ttf",
  variable: "--font-afogand",
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
        <BeamsUpstream className="z-0" />

        {/* Navbar */}
        <header className="h-[108px]">
          <Navbar />
        </header>

        {/* Main Content */}
        <main className="min-h-[calc(100vh-100px)]"
        >{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
