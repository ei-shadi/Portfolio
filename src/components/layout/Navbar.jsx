"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { MdOutlineMenuOpen, MdOutlineRestaurantMenu } from "react-icons/md";
import Logo from "../../../public/assets/images/Logo.png";
import Image from "next/image";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Button from "../shared/Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const centerLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  const allLinks = [...centerLinks];

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/20 backdrop-blur-lg shadow-md" : "bg-transparent"
        }`}
    >
      <div className="px-4 py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-[90%] md:px-24 lg:px-0 text-white">
        <div className="flex items-center justify-between w-full">
          {/* Logo (Left) */}
          <div>
            <Link href="/" className="flex items-center gap-1">
              <Image src={Logo} alt="Logo" className="w-16" />
              <h5 className="ml-2 text-4xl font-bold tracking-wide  lowercase">
                E {" "} <span className="font-crimson-pro text-5xl text-cyan-500">i</span>{" "} S
              </h5>
            </Link>
          </div>

          {/* Center Links */}
          <div className="flex justify-center">
            <ul className="hidden lg:flex items-center space-x-6 xl:space-x-10">
              {centerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`tracking-wide text-lg xl:text-xl ${pathname.startsWith(link.href)
                        ? "border-b-4 border-orange-500 rounded pb-1 px-4 text-cyan-500 font-afogand"
                        : "text-gray-300 hover:bg-white px-6 py-2 rounded-3xl font-bold hover:text-orange-500"
                      }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Buttons  */}
          <div className="hidden lg:flex items-center space-x-6 lg:space-x-10">
            <Button />
          </div>

          {/* Hamburger (Mobile) */}
          <div className="lg:hidden flex justify-end">
            <button
              aria-label="Open Menu"
              onClick={() => setIsMenuOpen(true)}
              className="p-2 rounded"
            >
              <MdOutlineMenuOpen className="w-7 h-7 text-gray-300 cursor-pointer hover:text-orange-500" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <Dialog open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <DialogContent
          showCloseButton={false}
          className="sm:max-w-sm rounded-xl data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:slide-in-from-left data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-right duration-300 bg-[#afe029]/10 backdrop-blur-lg"
        >
          <DialogHeader>
            <DialogTitle className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Image src={Logo} alt="Logo" width={50} />
                <h5 className="ml-2 text-3xl font-bold tracking-wide  lowercase">
                  E {" "} <span className="font-crimson-pro text-4xl text-cyan-500">i</span>{" "} S
                </h5>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded"
              >
                <MdOutlineRestaurantMenu className="w-7 h-7 text-red-700 hover:text-orange-500 cursor-pointer" />
              </button>
            </DialogTitle>
          </DialogHeader>

          <nav className="mt-4">
            <ul className="space-y-4 text-center">
              {allLinks.map((link) => (
                <li key={link.href}>
                  {link.label === "Sign in" ? (
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <button className="w-full px-5 py-3 rounded-lg text-black font-medium bg-[#afe029] hover:bg-[#26415E] transition-colors">
                        {link.label}
                      </button>
                    </Link>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block text-lg px-10 py-2 rounded-full transition-colors w-fit mx-auto duration-200 ${pathname.startsWith(link.href)
                          ? "bg-red-700 text-gray-200 font-bold"
                          : "text-gray-300 hover:text-purple-600"
                        }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Navbar;
