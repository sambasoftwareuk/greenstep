"use client";
import React, { useState } from "react";

const Modal = ({ onClose, children }) => {
  const [zoomed, setZoomed] = useState(false);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleZoomToggle = () => {
    setZoomed((prev) => !prev);
  };

  return (
    <div
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
    >
      <div
        className={`max-w-6xl w-[90vw] h-[90vh] relative bg-white flex rounded-xl overflow-hidden shadow-xl items-center justify-center transition-transform duration-300 ${
          zoomed ? "scale-[1.5]" : "scale-100"
        }`}
        onClick={handleZoomToggle}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
