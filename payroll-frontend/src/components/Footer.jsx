import React from 'react';
import logo from '../assets/logo.png'; // Adjust path if needed

const Footer = () => {
  return (
    <footer className="bg-black py-10 mt-12 text-white">
      <div className="flex flex-col items-center justify-center">
        <img
          src={logo}
          alt="Lumeitup Logo"
          className="w-32 sm:w-40 md:w-48 mb-4"
        />
        <a
          href="https://lumeitup.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          Visit our website
        </a>
      </div>
    </footer>
  );
};

export default Footer;
