import React from 'react';

export default function Home() {
  return (
    <section className="space-y-12">
      {/* Hero Section */}
      <div className="hero text-center space-y-4">
        <h1 className="text-5xl font-bold">Fast. Smart. Reliable ICT Solutions.</h1>
        <p className="text-lg">Your trusted partner in technology solutions.</p>
        <a href="/services" className="bg-sky-blue text-white px-6 py-3 rounded hover:bg-deep-blue">Explore Our Services</a>
      </div>
      {/* Core Service Highlights */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 bg-white shadow rounded">
          <h3 className="font-semibold mb-2">IT Infrastructure & Support</h3>
          <p>Reliable setup and maintenance of your IT environment.</p>
        </div>
        <div className="p-6 bg-white shadow rounded">
          <h3 className="font-semibold mb-2">Web & Mobile App Development</h3>
          <p>Custom applications to streamline your business processes.</p>
        </div>
        <div className="p-6 bg-white shadow rounded">
          <h3 className="font-semibold mb-2">Cybersecurity Services</h3>
          <p>Protect your data and infrastructure from emerging threats.</p>
        </div>
      </div>
      {/* Impact Stats */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl mb-4">Our Impact</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <p className="text-3xl font-bold">150+</p>
            <p>Clients Served</p>
          </div>
          <div>
            <p className="text-3xl font-bold">300+</p>
            <p>Projects Completed</p>
          </div>
          <div>
            <p className="text-3xl font-bold">10</p>
            <p>Years of Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}