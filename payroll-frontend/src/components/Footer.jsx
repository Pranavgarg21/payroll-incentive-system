import React from 'react';
import logo from '../assets/logo.png'; // Make sure to update this path if needed

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container text-center">
        <img
          src={logo}
          alt="Lumeitup Logo"
          style={{ height: '50px', marginBottom: '10px' }}
        />

        <p className="mt-2 mb-1">
          Built with 💡 by <strong>Lumeitup</strong>
        </p>

        <a
          href="https://lumeitup.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-light text-decoration-underline"
        >
          Visit our website
        </a>

        <p className="mt-3 text-muted" style={{ fontSize: '0.85rem' }}>
          © {new Date().getFullYear()} Lumeitup. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
