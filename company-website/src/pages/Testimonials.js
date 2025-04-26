import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Jane Doe',
    title: 'CEO, TechCorp',
    quote: 'Bwangubwangu transformed our IT infrastructure. Their expertise and support are unmatched.',
  },
  {
    id: 2,
    name: 'John Smith',
    title: 'CTO, InnovateX',
    quote: 'Professional service and clear communication. Highly recommend for any tech advisory needs.',
  },
  {
    id: 3,
    name: 'Emily Johnson',
    title: 'Director, EduFuture',
    quote: 'Their training programs empowered our team to adopt new technologies seamlessly.',
  },
];

export default function Testimonials() {
  return (
    <section className="max-w-4xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold text-center">Client Testimonials</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map(item => (
          <div key={item.id} className="p-6 bg-white shadow rounded">
            <p className="italic text-gray-700">“{item.quote}”</p>
            <p className="mt-4 font-semibold">{item.name}</p>
            <p className="text-sm text-gray-500">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}