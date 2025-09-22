"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { TbMenu } from "react-icons/tb";
import { GiSplitCross } from "react-icons/gi";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub, FaWhatsapp, FaEnvelope, FaDiscord } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import Logo from "../../../public/assets/images/Logo.png";
import Image from "next/image";
import Link from "next/link";
import Button from "../shared/Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setIsMenuOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Center links
  const centerLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  // Social links
  const socialLinks = [
    { href: "https://www.facebook.com/eftajulislamshadi", icon: <FaFacebookF /> },
    { href: "https://linkedin.com/in/eftajulislamshadi", icon: <FaLinkedinIn /> },
    { href: "https://github.com/ei-shadi", icon: <FaGithub /> },
    { href: "https://wa.me/8801930242273", icon: <FaWhatsapp /> },
    { href: "https://discord.gg/PgBeJxnV", icon: <FaDiscord /> },
    { href: "mailto:eftajul.shadi@gmail.com", icon: <FaEnvelope /> },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50">
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
                  className={`tracking-wide text-lg xl:text-xl transition-transform duration-300 ${pathname === link.href
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
            <button aria-label="Open Menu" onClick={() => setIsMenuOpen(true)} className="p-2 rounded">
              <TbMenu className="w-7 h-7 text-gray-300 cursor-pointer hover:text-orange-500" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-50 ${isMenuOpen ? "pointer-events-auto" : "pointer-events-none"}`} aria-hidden={!isMenuOpen}>
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/50 backdrop-blur-xl transition-opacity duration-300 ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Mobile Panel */}
        <div
          className={`absolute inset-0 flex flex-col justify-between p-16 transform transition-transform duration-700 ease-in-out ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
        >
          {/* Top (Logo + Close) */}
          <div
            className="flex items-center justify-between"
            style={{
              transitionProperty: "opacity, transform",
              transitionDuration: "450ms",
              transitionDelay: isMenuOpen ? "80ms" : "0ms",
              transform: isMenuOpen ? "translateY(0)" : "translateY(8px)",
              opacity: isMenuOpen ? 1 : 0,
            }}
          >
            <div className="flex items-center gap-3">
              <Image src={Logo} alt="Logo" width={60} />
              <h5 className="text-4xl font-bold tracking-wide lowercase">
                E <span className="font-crimson-pro text-5xl text-cyan-400">i</span> S
              </h5>
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
              className="p-2 rounded"
              title="Close"
              style={{
                transitionProperty: "opacity, transform",
                transitionDuration: "1000ms",
                transitionDelay: isMenuOpen ? "120ms" : "0ms",
                transform: isMenuOpen ? "translateY(0)" : "translateY(8px)",
                opacity: isMenuOpen ? 1 : 0,
              }}
            >
              <GiSplitCross className="w-7 h-7 text-gray-100 hover:text-orange-400" />
            </button>
          </div>

          {/* Middle (Links + CTA) */}
          <nav className="flex flex-col items-center justify-center flex-1 gap-6">
            {centerLinks.map((link, idx) => {
              const base = 180;
              const per = 100;
              const delay = isMenuOpen ? `${base + idx * per}ms` : "0ms";

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`relative flex items-center justify-between text-2xl font-semibold transition-all duration-500 ease-out ${pathname === link.href ? "text-cyan-500" : "text-gray-500"
                    }`}
                  style={{
                    transitionProperty: "opacity, transform",
                    transitionDuration: "450ms",
                    transitionDelay: delay,
                    transform: isMenuOpen ? "translateY(0)" : "translateY(16px)",
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
              style={{
                transitionProperty: "opacity, transform",
                transitionDuration: "500ms",
                transitionDelay: isMenuOpen ? `${180 + centerLinks.length * 100}ms` : "0ms",
                transform: isMenuOpen ? "translateY(0)" : "translateY(18px)",
                opacity: isMenuOpen ? 1 : 0,
              }}
              className="mt-4"
            >
              <Button label="Hire Me" />
            </div>
          </nav>

          {/* Bottom: Social Links */}
          <div
            className="flex justify-center gap-4 pb-4"
            style={{
              transitionProperty: "opacity, transform",
              transitionDuration: "450ms",
              transitionDelay: isMenuOpen ? `${180 + (centerLinks.length + 1) * 100}ms` : "0ms",
              transform: isMenuOpen ? "translateY(0)" : "translateY(18px)",
              opacity: isMenuOpen ? 1 : 0,
            }}
          >
            {socialLinks.map((social, idx) => (
              <Link
                key={idx}
                href={social.href}
                className="p-2 rounded-full border border-gray-300/50 text-gray-200 hover:text-white hover:border-white hover:animate-bounceHover transition-all"
              >
                {social.icon}
              </Link>

            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
