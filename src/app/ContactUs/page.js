'use client';

import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import { useState } from 'react';

export default function ContactUsForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus('');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3_FORM_API_KEY, // Your Web3Forms API key
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (res.ok) {
        setFormStatus('Your message has been sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setFormStatus('There was an error sending your message. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setFormStatus('There was an error sending your message. Please try again.');
    }

    setIsSubmitting(false);
  };

  return (
    <>
      <NavBar />
      <section className="py-16">
        <div className="container mx-auto px-6 md:px-12 text-white">
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-secondary mb-6 text-center">
            Contact Us
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl mb-8 leading-relaxed text-center text-tertiary">
            We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible.
          </p>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-xl border-2 border-gray-100 max-w-4xl mx-auto">
            <form onSubmit={handleSubmit}>
              {/* Name Field */}
              <div className="mb-4">
                <label htmlFor="name" className="block text-lg text-gray-700 mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg"
                />
              </div>

              {/* Email Field */}
              <div className="mb-4">
                <label htmlFor="email" className="block text-lg text-gray-700 mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg"
                />
              </div>

              {/* Message Field */}
              <div className="mb-4">
                <label htmlFor="message" className="block text-lg text-gray-700 mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg"
                  rows="5"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 bg-primary text-tertiary rounded-lg shadow-lg hover:bg-secondary hover:text-primary focus:outline-none transition duration-300"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>

            {/* Status Message */}
            {formStatus && (
              <div className="mt-4 text-center text-lg text-gray-700">
                <p>{formStatus}</p>
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
