import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn, 
  FaGithub, 
  FaWhatsapp, 
  FaEnvelope,
  FaDiscord 
} from 'react-icons/fa';

const SocialButton = () => {
  const socialLinks = [
    { href: "https://www.facebook.com/eftajulislamshadi", icon: <FaFacebookF />, color: "#1877F2" },     
    { href: "https://linkedin.com/in/eftajulislamshadi", icon: <FaLinkedinIn />, color: "#0077B5" },
    { href: "https://github.com/ei-shadi", icon: <FaGithub />, color: "" },                      
    { href: "https://discord.com/users/YOUR_DISCORD_ID", icon: <FaDiscord />, color: "#5865F2" },  
    { href: "https://wa.me/8801930242273", icon: <FaWhatsapp />, color: "#25D366" },              
    { href: "mailto:eftajul.shadi@gmail.com", icon: <FaEnvelope />, color: "#EA4335" },             
  ];

  return (
    <StyledWrapper>
      <div className="button-grid">
        {socialLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="button flex-center"
            style={{ '--hover-color': link.color }}
          >
            <span className="btn-svg">{link.icon}</span>
          </Link>
        ))}
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .button-grid {
    display: grid;
    gap: 1.2rem;
    justify-content: center;
    /* Small to medium screens: all 6 icons in 1 row */
    grid-template-columns: repeat(6, 1fr);
  }

  /* Large screens: 3 icons per row */
  @media (min-width: 1024px) {
    .button-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .button {
    cursor: pointer;
    text-decoration: none;
    color: #ffffff;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    border: 2px solid #98a0b0;
    background-color: transparent; 
    transition: all 0.5s ease;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* Hover effect: border color + spin */
  .button:hover {
    border-color: var(--hover-color);
    color: var(--hover-color);
    transform: scale(1.3) rotate(720deg);
  }

  .btn-svg {
    font-size: 16px;
    transition: color 0.3s ease;
  }

  /* Icon color changes on hover */
  .button:hover .btn-svg {
    color: var(--hover-color);
  }

  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default SocialButton;
