import React from "react";
import { SambaLinks } from "../_atoms/SambaLinks";

const Breadcrumb = ({ items }) => (
  <nav className="text-sm mb-4" aria-label="Breadcrumb">
    <ol className="list-none p-0 inline-flex">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-center">
          {idx > 0 && <span className="mx-2 text-gray-400">/</span>}
          {item.href ? (
            <SambaLinks href={item.href} className="text-blue-600 hover:underline">
              {item.label}
            </SambaLinks>
          ) : (
            <span className="text-gray-500">{item.label}</span>
          )}
        </li>
      ))}
    </ol>
  </nav>
);

export default Breadcrumb;