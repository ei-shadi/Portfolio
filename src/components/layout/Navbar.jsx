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

// Helper function to get social brand colors
const getSocialColor = (url) => {
  if (url.includes("facebook.com")) return "#1877F2";
  if (url.includes("linkedin.com")) return "#0A66C2";
  if (url.includes("github.com")) return "#ffffff";
  if (url.includes("wa.me")) return "#25D366";
  if (url.includes("discord.gg")) return "#5865F2";
  if (url.includes("mailto")) return "#f97316";
  return "currentColor";
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

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

  // Toggle body scroll when menu opens
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    if (isMenuOpen) {
      setTimeout(() => setAnimate(true), 50);
    } else {
      setAnimate(false);
    }
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

  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div>
      {/* Navbar */}
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/50 backdrop-blur-md" : "bg-transparent"
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
            <ul className="hidden lg:flex items-center space-x-6 xl:space-x-14">
              {centerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative tracking-wide text-lg xl:text-xl transition-transform duration-300
                    ${pathname === link.href
                        ? "border-b-4 border-orange-500 rounded pb-1 px-4 text-cyan-500 font-afogand"
                        : "text-gray-400 font-bold after:absolute after:bottom-0 after:left-0 after:h-[4px] after:w-full pb-2 px-4 hover:text-orange-500 after:origin-bottom-right after:scale-x-0 after:bg-cyan-500 after:rounded-2xl after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
                      }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Desktop Button */}
            <div className="hidden lg:flex items-center space-x-6 lg:space-x-10">
              <Button label="Let's Talk" />
            </div>

            {/* Hamburger for Mobile */}
            <button
              aria-label="Open Menu"
              onClick={handleMenuToggle}
              className="lg:hidden p-2 rounded text-gray-300 hover:text-orange-500 transition"
            >
              {isMenuOpen ? (
                <GiSplitCross className="w-7 h-7 text-red-500" />
              ) : (
                <TbMenu className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className={`fixed inset-0 z-40 transition-transform duration-500 ease-in-out ${animate ? "translate-x-0" : "-translate-x-full"
            }`}
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.04)",
            backdropFilter: "blur(15px)",
            WebkitBackdropFilter: "blur(15px)",
          }}
        >
          <div className="flex flex-col justify-between h-full p-8 text-white">
            {/* Links with staggered animation */}
            <nav className="flex flex-col items-center justify-center flex-1 space-y-8">
              {centerLinks.map((link, idx) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleMenuToggle}
                  className={`relative flex items-center text-2xl font-semibold transition-all duration-500 ${pathname === link.href ? "text-cyan-400" : "text-gray-500"
                    }`}
                  style={{
                    transitionDelay: `${animate ? idx * 150 + 200 : (centerLinks.length - idx) * 150}ms`,
                    transform: animate ? "translateY(0)" : "translateY(20px)",
                    opacity: animate ? 1 : 0,
                  }}
                >
                  {pathname === link.href && <GoDotFill className="text-orange-400 w-5" />}
                  <span className="mx-2 text-4xl">{link.label}</span>
                  {pathname === link.href && <GoDotFill className="text-orange-400 w-5" />}
                </Link>
              ))}

              {/* Button between links and social icons */}
              <div
                style={{
                  transitionDelay: `${animate ? centerLinks.length * 150 + 250 : 150}ms`,
                  transform: animate ? "translateY(0)" : "translateY(20px)",
                  opacity: animate ? 1 : 0,
                  transitionProperty: "opacity, transform",
                  transitionDuration: "500ms",
                }}
              >
                <Button label="Hire Me" />
              </div>
            </nav>

            {/* Social icons - actual brand colors and matching border */}
            <div
              className="flex justify-center space-x-6"
              style={{
                transitionDelay: `${animate ? centerLinks.length * 150 + 450 : 50}ms`,
                transform: animate ? "translateY(0)" : "translateY(20px)",
                opacity: animate ? 1 : 0,
                transitionProperty: "opacity, transform",
                transitionDuration: "500ms",
              }}
            >
              {socialLinks.map((social, idx) => {
                const color = getSocialColor(social.href);
                return (
                  <Link
                    key={idx}
                    href={social.href}
                    target="_blank"
                    className="p-2 rounded-full text-lg md:text-2xl transition"
                    style={{ color: color, border: `2px solid ${color}` }}
                  >
                    {social.icon}
                  </Link>
                );
              })}
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
