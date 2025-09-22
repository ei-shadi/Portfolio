"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { TbMenu } from "react-icons/tb";
import { GiSplitCross } from "react-icons/gi";
import { FaFacebookF, FaLinkedinIn, FaGithub, FaWhatsapp, FaEnvelope, FaDiscord } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import Logo from "../../../public/assets/images/Logo.png";
import Image from "next/image";
import Link from "next/link";
import Button from "../shared/Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Toggle body scroll when menu opens
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  // Close menu on Escape key
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setIsMenuOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Handle scroll for navbar bg blur
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const centerLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  const socialLinks = [
    { href: "https://www.facebook.com/eftajulislamshadi", icon: <FaFacebookF /> },
    { href: "https://linkedin.com/in/eftajulislamshadi", icon: <FaLinkedinIn /> },
    { href: "https://github.com/ei-shadi", icon: <FaGithub /> },
    { href: "https://wa.me/8801930242273", icon: <FaWhatsapp /> },
    { href: "https://discord.gg/PgBeJxnV", icon: <FaDiscord /> },
    { href: "mailto:eftajul.shadi@gmail.com", icon: <FaEnvelope /> },
  ];

  return (
    <div>
      {/* Navbar */}
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-black/50 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="px-4 py-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-[90%] md:px-24 lg:px-0 text-white">
          <div className="flex items-center justify-between w-full">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-1">
              <Image src={Logo} alt="Logo" width={60} />
              <h5 className="ml-2 text-4xl font-bold tracking-wide lowercase">
                E <span className="font-crimson-pro text-5xl text-cyan-500">i</span> S
              </h5>
            </Link>

            {/* Desktop Links */}
            <ul className="hidden lg:flex items-center space-x-6 xl:space-x-10">
              {centerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`tracking-wide text-lg xl:text-xl transition-transform duration-300 ${
                      pathname === link.href
                        ? "border-b-4 border-orange-500 rounded pb-1 px-4 text-cyan-500 font-afogand"
                        : "text-gray-400 hover:bg-white px-6 py-2 rounded-3xl font-bold hover:text-orange-500 hover:animate-bounceHover"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Desktop Button */}
            <div className="hidden lg:flex items-center space-x-6 lg:space-x-10">
              <Button label="Hire Me" />
            </div>

            {/* Mobile Hamburger */}
            <div className="lg:hidden flex justify-end">
              <button
                aria-label="Open Menu"
                onClick={() => setIsMenuOpen(true)}
                className="p-2 rounded"
              >
                <TbMenu className="w-7 h-7 text-gray-300 cursor-pointer hover:text-orange-500" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 pointer-events-auto flex flex-col justify-between bg-black/50 backdrop-blur-xl transition-transform duration-500 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Top: Logo + Close */}
        <div className="flex items-center justify-between p-6">
          <Link href="/" className="flex items-center gap-3" onClick={() => setIsMenuOpen(false)}>
            <Image src={Logo} alt="Logo" width={60} />
            <h5 className="text-4xl font-bold tracking-wide lowercase">
              E <span className="font-crimson-pro text-5xl text-cyan-400">i</span> S
            </h5>
          </Link>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 rounded"
            aria-label="Close menu"
          >
            <GiSplitCross className="w-7 h-7 text-gray-100 hover:text-orange-400" />
          </button>
        </div>

        {/* Middle Links */}
        <nav className="flex flex-col items-center justify-center flex-1 gap-6">
          {centerLinks.map((link, idx) => {
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`relative flex items-center justify-between text-2xl font-semibold transition-all duration-500 ${
                  pathname === link.href ? "text-cyan-500" : "text-gray-300"
                }`}
                style={{
                  transitionDelay: `${idx * 150}ms`,
                  transform: isMenuOpen ? "translateY(0)" : "translateY(20px)",
                  opacity: isMenuOpen ? 1 : 0,
                }}
              >
                {pathname === link.href && <GoDotFill className="text-orange-400 w-5" />}
                <span className="mx-2 text-3xl">{link.label}</span>
                {pathname === link.href && <GoDotFill className="text-orange-400 w-5" />}
              </Link>
            );
          })}

          {/* CTA Button */}
          <div
            className="mt-4"
            style={{
              transitionDelay: `${centerLinks.length * 150}ms`,
              transform: isMenuOpen ? "translateY(0)" : "translateY(20px)",
              opacity: isMenuOpen ? 1 : 0,
              transitionProperty: "opacity, transform",
              transitionDuration: "500ms",
            }}
          >
            <Button label="Hire Me" />
          </div>
        </nav>

        {/* Bottom Social Links */}
        <div
          className="flex justify-center gap-4 p-6"
          style={{
            transitionDelay: `${(centerLinks.length + 1) * 150}ms`,
            transform: isMenuOpen ? "translateY(0)" : "translateY(20px)",
            opacity: isMenuOpen ? 1 : 0,
            transitionProperty: "opacity, transform",
            transitionDuration: "500ms",
          }}
        >
          {socialLinks.map((social, idx) => (
            <Link
              key={idx}
              href={social.href}
              className="p-2 rounded-full border border-gray-300/50 text-gray-200 hover:text-white hover:border-white transition-all"
            >
              {social.icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
