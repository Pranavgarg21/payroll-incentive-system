import React from 'react';
import logo from '../assets/logo.png'; // adjust if needed

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 text-center">
      <div className="flex flex-col items-center justify-center">
        <img
          src={logo}
          alt="Lumeitup Logo"
          className="h-12 w-auto mb-2"
        />
        <a
          href="https://your-website.com"
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
