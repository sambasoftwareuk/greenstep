import React from "react";
import { LogoImage } from "../_atoms/images";

const socialIcons = [
  { src: "/facebook.png", alt: "Facebook", href: "https://facebook.com/ctpmuhendislik" },
  { src: "/instagram.png", alt: "Instagram", href: "https://instagram.com/ctpmuhendislik" },
  { src: "/youtube.png", alt: "YouTube", href: "https://www.youtube.com/@ctpmuhendisliksusogutmakul5225" },
  { src: "/twitter.png", alt: "Twitter", href: "https://twitter.com/ctpmuhendislik" },
  { src: "/linkedin.png", alt: "LinkedIn", href: "https://www.linkedin.com/company/ctp-muhendislik-su-sogutma-kuleleri/" },
  { src: "/pinterest.png", alt: "Pinterest", href: "https://pinterest.com/ctpmuhendislik" },
];

const AnnouncementBand = () => {
  return (
    <div className="w-full bg-primary h-12 flex items-center justify-center px-4 text-xs text-black gap-28">
      <div className="flex gap-2 items-center">
        {socialIcons.map(({ src, alt, href }, index) => (
          <a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-150"
          >
            <LogoImage imageLink={src} width={28} height={28} alt={alt} />
          </a>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-12 text-white">
        <a
          href="https://maps.google.com/?q=Alemdag Mah. Saray Cad. 111. Sk. No:1-3 Daire:10 Çekmeköy/ISTANBUL"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline cursor-pointer"
        >
          Alemdag Mah. Saray Cad. 111. Sk. No:1-3 Daire:10 Çekmeköy/ISTANBUL
        </a>

        <a href="facetime:+902163046868" className="hover:underline">
          +90 216 304 68 68
        </a>

        <a href="mailto:info@ctpmuhendislik.com" className="hover:underline">
          info@ctpmuhendislik.com
        </a>
      </div>
    </div>
  );
};

export default AnnouncementBand;
