import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-deep-blue text-white p-4 text-center">
      <p>&copy; 2025 Bwangubwangu ICT Consultancy. All rights reserved.</p>
      <nav className="mt-2">
        <ul className="flex justify-center space-x-4">
          <li><Link to="/about" className="hover:underline">About</Link></li>
          <li><Link to="/services" className="hover:underline">Services</Link></li>
          <li><Link to="/blog" className="hover:underline">Blog</Link></li>
          <li><Link to="/contact" className="hover:underline">Contact</Link></li>
        </ul>
      </nav>
    </footer>
  );
}