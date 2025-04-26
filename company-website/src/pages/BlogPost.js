import React from 'react';
import { useParams, Link } from 'react-router-dom';

const posts = [
  {
    id: 1,
    title: 'Leveraging Cloud Solutions for SMEs',
    date: '2025-04-01',
    content: 'Discover how SMEs can optimize costs and performance using cloud strategies in depth...'
  },
  {
    id: 2,
    title: 'Top 5 Cybersecurity Practices in 2025',
    date: '2025-03-15',
    content: 'Stay ahead of threats with these essential cybersecurity measures explained...'
  }
];

export default function BlogPost() {
  const { id } = useParams();
  const post = posts.find(p => p.id === Number(id));
  if (!post) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-bold mb-4">Post Not Found</h2>
        <Link to="/blog" className="text-sky-blue hover:underline">Back to Blog</Link>
      </div>
    );
  }

  return (
    <article className="max-w-3xl mx-auto space-y-4">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="text-gray-500 text-sm">{new Date(post.date).toLocaleDateString()}</p>
      <div className="text-gray-700">{post.content}</div>
      <Link to="/blog" className="mt-6 inline-block text-sky-blue hover:underline">← Back to Blog</Link>
    </article>
  );
}