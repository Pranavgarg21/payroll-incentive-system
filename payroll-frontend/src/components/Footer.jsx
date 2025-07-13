import React from 'react';
import logo from '../assets/logo.png'; // Adjust path if needed

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4 text-center">
      <div className="flex flex-col items-center">
        <img
          src={logo}
          alt="Lumeitup Logo"
          className="h-10 w-auto mb-2" // 👈 smaller height
        />
        <a
          href="https://lumeitup.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-400 hover:underline"
        >
          Visit our website
        </a>
      </div>
    </footer>
  );
};

export default Footer;
