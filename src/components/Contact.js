import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      setError('Please fill in all fields.');
      return;
    }

    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-orange-100 via-white to-orange-200 px-6 py-16 flex items-center justify-center">
      <div className="max-w-3xl w-full bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-2xl p-8 md:p-12 font-sans">
        
        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-center text-orange-500 mb-4">Contact Us</h1>
        <p className="text-center text-gray-600 mb-10">
          Got questions, feedback, or just want to say hello? We’d love to hear from you!
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-gray-800 font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent shadow-sm transition"
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-gray-800 font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent shadow-sm transition"
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-gray-800 font-medium mb-1">Message</label>
            <textarea
              name="message"
              rows="5"
              placeholder="Your message here..."
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent shadow-sm resize-none transition"
            ></textarea>
          </div>

          {/* Error / Success Feedback */}
          {error && <p className="text-red-500 text-sm">{error}</p>}
          {submitted && (
            <p className="text-green-600 text-sm">✅ Message sent successfully!</p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg shadow-md hover:shadow-lg transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
