import React from "react";
import Link from "next/link";
import { socialIcons } from "../_atoms/Icons";

const AnnouncementBand = () => {
  return (
    <div
      className="
        hidden lg:flex
        w-full bg-primary h-12
        items-center justify-center
        px-4 text-md text-black
        gap-28
        sm:gap-16 md:gap-12 lg:gap-20
        text-sm md:text-base lg:text-md
      "
    >
      <div className="flex gap-2 items-center">
        {socialIcons?.map(({ href, svg, alt, bgColor }) => (
          <Link
            key={alt}
            href={href}
            target="_blank"
            aria-label={alt}
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-125"
          >
            <div
              style={{ backgroundColor: bgColor }}
              className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 flex items-center justify-center rounded-full"
            >
              {svg}
            </div>
          </Link>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3  text-white text-xs md:text-sm lg:text-base text-center">
        <Link
          href="https://maps.google.com/?q=Alemdag Mah. Saray Cad. 111. Sk. No:1-3 Daire:10 Çekmeköy/ISTANBUL"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline cursor-pointer"
        >
          Alemdag Mah. Saray Cad. 111. Sk. No:1-3 Daire:10 Çekmeköy/ISTANBUL
        </Link>

        <Link href="tel:+902163046868" className="hover:underline">
          +90 216 304 68 68
        </Link>

        <Link href="mailto:info@ctpmuhendislik.com" className="hover:underline">
          info@ctpmuhendislik.com
        </Link>
      </div>
    </div>
  );
};

export default AnnouncementBand;
