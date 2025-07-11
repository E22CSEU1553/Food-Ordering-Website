import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 md:px-20 py-10 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center mb-8 text-orange-500">About Us</h1>

        {/* Introduction */}
        <p className="text-lg text-center mb-6">
          <span className="font-semibold">Welcome to <span className="text-orange-500">Sips And Bites</span></span> – Where Every Meal is a Memory!
        </p>

        {/* Who We Are */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">🍽️ Who We Are</h2>
          <p className="text-base leading-relaxed">
            Founded by passionate foodies and tech enthusiasts, <strong>Sips And Bites</strong> is your go-to food delivery platform, connecting hungry hearts with amazing restaurants across the city. We’re dedicated to fast, flavorful, and fulfilling meals that bring joy with every bite.
          </p>
        </section>

        {/* What We Do */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">🚀 What We Do</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>Curate top-rated restaurants and hidden gems</li>
            <li>Deliver hot, fresh meals with real-time tracking</li>
            <li>Offer personalized cuisine recommendations</li>
            <li>Use technology to enhance your food journey</li>
          </ul>
        </section>

        {/* Mission */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">🌍 Our Mission</h2>
          <blockquote className="border-l-4 border-orange-400 pl-4 italic text-gray-600">
            “To make great food accessible, affordable, and delightful – one bite at a time.”
          </blockquote>
        </section>

        {/* Why Choose Us */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">❤️ Why Choose Us?</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>✅ Verified, top-rated restaurants</li>
            <li>⚡ Fast & safe delivery</li>
            <li>📍 Live order tracking</li>
            <li>🔐 Secure payments</li>
            <li>💡 Intuitive & user-friendly app design</li>
          </ul>
        </section>

        {/* Built By */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">👨‍💻 Built By</h2>
          <p>
            <strong>Asheesh Gaur</strong> – A passionate developer & foodie aiming to blend tech with taste.
          </p>
        </section>

        {/* Contact */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">📞 Get in Touch</h2>
          <p className="mb-1">📧 <a href="mailto:contact@sipsandbites.com" className="text-orange-500 underline">contact@sipsandbites.com</a></p>
          <p>📍 Based in India | Pan-India delivery launching soon!</p>
        </section>

        <div className="text-center mt-12 text-gray-700">
          <p>Thank you for being part of our journey. Now go ahead and treat yourself — you deserve it! 🍴🚀</p>
        </div>
      </div>
    </div>
  );
};

export default About;
