import React from 'react';
import logo from '../assets/logo.png'; // adjust this path if needed

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] py-10 mt-12 text-center">
      <div className="flex flex-col items-center">
        <img
          src={logo}
          alt="Lumeitup Logo"
          className="w-32 sm:w-40 md:w-48 mb-4"
        />
        <a
          href="https://lumeitup.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline text-sm"
        >
          Visit our website
        </a>
      </div>
    </footer>
  );
};

export default Footer;
