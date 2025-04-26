import React from 'react';
import { Link } from 'react-router-dom';

const posts = [
  {
    id: 1,
    title: 'Leveraging Cloud Solutions for SMEs',
    date: '2025-04-01',
    excerpt: 'Discover how SMEs can optimize costs and performance using cloud strategies.',
  },
  {
    id: 2,
    title: 'Top 5 Cybersecurity Practices in 2025',
    date: '2025-03-15',
    excerpt: 'Stay ahead of threats with these essential cybersecurity measures.',
  },
];

export default function Blog() {
  return (
    <section className="max-w-3xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Blog & Updates</h1>
      {posts.map(post => (
        <article key={post.id} className="p-6 bg-white shadow rounded">
          <h2 className="text-2xl font-semibold">{post.title}</h2>
          <p className="text-gray-500 text-sm">{new Date(post.date).toLocaleDateString()}</p>
          <p className="mt-2 text-gray-700">{post.excerpt}</p>
          <Link to={`/blog/${post.id}`} className="mt-3 inline-block text-sky-blue hover:underline">
            Read More
          </Link>
        </article>
      ))}
    </section>
  );
}