import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

export default function Header() {
  return (
    <header className="bg-deep-blue text-white p-4 flex justify-between items-center">
      <Link to="/">
        <img src={logo} alt="Bwangubwangu ICT Consultancy Logo" className="h-8" />
      </Link>
      <nav>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:text-sky-blue">Home</Link></li>
          <li><Link to="/about" className="hover:text-sky-blue">About</Link></li>
          <li><Link to="/services" className="hover:text-sky-blue">Services</Link></li>
          <li><Link to="/blog" className="hover:text-sky-blue">Blog</Link></li>
          <li><Link to="/contact" className="hover:text-sky-blue">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}