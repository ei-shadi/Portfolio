"use client";

import styled from "styled-components";
import Link from "next/link";
import { 
  FaFacebookF, 
  FaLinkedinIn, 
  FaGithub, 
  FaWhatsapp, 
  FaEnvelope
} from "react-icons/fa";

const SocialButton = () => {
  const socialLinks = [
    { href: "https://www.facebook.com/eftajulislamshadi", icon: <FaFacebookF />, color: "#1877F2" },     
    { href: "https://linkedin.com/in/eftajulislamshadi", icon: <FaLinkedinIn />, color: "#0077B5" },
    { href: "https://github.com/ei-shadi", icon: <FaGithub />, color: "#333" },                      
    { href: "https://wa.me/8801930242273", icon: <FaWhatsapp />, color: "#25D366" },              
    { href: "mailto:eftajul.shadi@gmail.com", icon: <FaEnvelope />, color: "#f97316" },             
  ];

  return (
    <StyledWrapper>
      <div className="button-row">
        {socialLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="button flex-center"
            style={{ "--brand-color": link.color }}
          >
            <span className="btn-svg">{link.icon}</span>
          </Link>
        ))}
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .button-row {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }

  .button {
    cursor: pointer;
    text-decoration: none;
    width: 43px;
    height: 43px;
    border-radius: 50%;
    border: 2px solid var(--brand-color);
    background-color: transparent; 
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.4s ease;
  }

  /* Default icon size and color */
  .btn-svg {
    font-size: 16px;
    color: white;
    transition: transform 0.4s ease;
  }

  /* Hover: background fills brand color, icon scales and spins */
  .button:hover {
    background-color: var(--brand-color);
  }

  .button:hover .btn-svg {
    transform: rotate(720deg) scale(1.6); 
    color: white;
  }

  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default SocialButton;
