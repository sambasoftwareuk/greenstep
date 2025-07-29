"use client";
import React from "react";

const Modal = ({ onClose, children }) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
    >
      <div className="relative max-w-6xl w-[90vw] h-[90vh] bg-white rounded-xl shadow-xl overflow-hidden flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default Modal;