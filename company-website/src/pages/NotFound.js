import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="text-center py-16">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p>The page you are looking for doesn’t exist.</p>
      <Link to="/" className="mt-4 inline-block text-sky-blue hover:underline">Go Home</Link>
    </div>
  );
}