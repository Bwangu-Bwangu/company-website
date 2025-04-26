import React from 'react';

export default function Services() {
  const services = [
    { title: 'IT Infrastructure & Support', desc: 'Reliable setup and maintenance of your IT environment.' },
    { title: 'Web & Mobile App Development', desc: 'Custom applications to streamline your business processes.' },
    { title: 'Cybersecurity Services', desc: 'Protect your data and infrastructure from emerging threats.' },
    { title: 'Cloud & Hosting Solutions', desc: 'Scalable cloud services to grow with your business.' },
    { title: 'Digital Transformation & Tech Advisory', desc: 'Strategic guidance to accelerate your digital journey.' },
    { title: 'Training & Support', desc: 'Comprehensive training programs for your team.' }
  ];

  return (
    <section className="space-y-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold">Our Services</h1>
      <p className="mt-2">
        At Bwangubwangu ICT Consultancy, we offer a range of services to help your business thrive in the digital age.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {services.map((svc) => (
          <div key={svc.title} className="p-6 bg-white shadow rounded hover:shadow-lg transition">
            <h3 className="font-semibold mb-2 text-xl">{svc.title}</h3>
            <p className="text-gray-700">{svc.desc}</p>
            <a href="#" className="mt-3 inline-block text-sky-blue hover:underline">Learn More</a>
          </div>
        ))}
      </div>
    </section>
  );
}