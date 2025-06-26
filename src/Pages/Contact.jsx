import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // You can add your form submission logic here (API call etc.)
    setSubmitted(true);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-amber-50 rounded-md shadow-md mt-10 mb-3">
      <h1 className="text-4xl font-bold mb-6 text-purple-700 text-center">Contact Us</h1>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-purple-700 font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-purple-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-purple-700 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-purple-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-purple-700 font-semibold mb-2">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-purple-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="(Optional)"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-purple-700 font-semibold mb-2">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
              className="w-full border border-purple-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-md transition"
          >
            Send Message
          </button>
        </form>
      ) : (
        <div className="text-center text-green-600 font-semibold text-xl">
          Thank you for reaching out! We will get back to you soon.
        </div>
      )}
    </div>
  );
};

export default Contact;
