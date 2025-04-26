import React from 'react';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <section className="max-w-3xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold text-center">Contact Us</h1>
      <ContactForm />
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Our Office</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb="
          width="100%" height="300" style={{ border: 0 }} allowFullScreen="" loading="lazy"
        ></iframe>
      </div>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <h3 className="font-semibold">Email</h3>
          <p>info@bwangubwanguict.com</p>
        </div>
        <div>
          <h3 className="font-semibold">Phone</h3>
          <p>+123 456 7890</p>
        </div>
        <div>
          <h3 className="font-semibold">Address</h3>
          <p>Chamba Valley, Mutumbi Office</p>
        </div>
        <div>
          <h3 className="font-semibold">Business Hours</h3>
          <p>Mon–Fri: 9 AM–6 PM</p>
        </div>
      </div>
    </section>
  );
}