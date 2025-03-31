import React from 'react';

const ContactUs = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-6">
          Contact Us
        </h1>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Have any questions, feedback, or need help? Our team is here to assist you! Please reach out to us using the contact form below or the provided contact details.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
            <form>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-600">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-600">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Contact Information</h2>
            <p className="text-gray-600 mb-4">
              If you need immediate assistance or have any questions, feel free to reach out to us using the contact details below:
            </p>
            <p className="text-gray-600 mb-2"><strong>Email:</strong> couponhub.deals@gmail.com, rishabh01b@gmail.com</p>
            <p className="text-gray-600 mb-2"><strong>Phone:</strong> +91 8368744383</p>
            <p className="text-gray-600"><strong>Address:</strong> Sector-86, Noida</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
