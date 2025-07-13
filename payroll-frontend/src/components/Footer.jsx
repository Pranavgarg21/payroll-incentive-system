import React from 'react';
import logo from '../assets/logo.png'; // adjust the path as needed

const Footer = () => {
  return (
    <footer className="bg-[#1e1e1e] text-white py-6 mt-12">
      <div className="flex flex-col items-center justify-center gap-3">
        <img
          src={logo}
          alt="Lumeitup Logo"
          className="h-10 w-auto rounded-sm"
        />
        <p className="text-sm">
          Built with <span className="text-yellow-400">💡</span> by <strong>Lumeitup</strong>
        </p>
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
