"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/assets/images/Logo.png";
import SocialButton from "../shared/SocialButton";

const Footer = () => {
  return (
    <footer className="text-white w-full">
      <section className="max-w-[90%] mx-auto px-4 py-6 flex flex-col lg:flex-row items-center justify-between gap-6">
        
        {/* Logo Section */}
        <div className="flex items-center justify-center md:justify-start w-full md:w-auto">
          <Link href="/" className="flex items-center gap-2">
            <Image src={Logo} alt="Logo" width={60} priority />
            <h5 className="text-3xl md:text-4xl font-bold tracking-wide lowercase">
              E <span className="font-crimson-pro text-4xl md:text-5xl text-cyan-500">i</span> S
            </h5>
          </Link>
        </div>

        {/* Middle Text */}
        <div className="text-center text-sm md:text-lg text-gray-400 w-full md:w-auto font-afogand">
          <span className="font-crimson-pro">©</span> {new Date().getFullYear()} All rights reserved by{" "}
          <span className="font-medium text-cyan-500">Eftajul Islam <span className="text-orange-500">Shadi</span></span>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-end w-full md:w-auto ">
          <SocialButton />
        </div>

      </section>
    </footer>
  );
};

export default Footer;
