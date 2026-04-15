
import React from 'react'

const ContactForm = () => {
  return (
    <div className="min-h-screen bg-[#f3f0fb] flex justify-center py-10 px-4">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-sm overflow-hidden">
        
        {/* Header Image */}
        <div className="h-48 w-full">
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
            alt="Header"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Title Section */}
        <div className="border-t-8 border-purple-600 px-6 py-6">
          <h1 className="text-2xl font-semibold text-gray-900">
            Contact with Gopika
          </h1>

          <p className="mt-2 text-sm text-gray-700">
            🤝 Let’s build something amazing together! 🚀
          </p>

          <ul className="mt-3 space-y-1 text-sm text-gray-600">
            <li>📩 Reach out for projects, collaborations, or inquiries.</li>
            <li>⏳ Your message matters — I’ll get back to you soon.</li>
          </ul>

          <p className="mt-3 text-xs text-blue-600 cursor-pointer hover:underline">
            Sign in to Google to save your progress. Learn more
          </p>

          <p className="mt-1 text-xs text-red-500">
            * Indicates required question
          </p>
        </div>

        {/* Form */}
        <form className="px-6 py-8 space-y-6">
          <Input label="Name" required />
          <Input label="Email" required type="email" />
          <Input label="Contact Number" />
          <Input label="Reason for Contact" />
          <Textarea label="Message" />

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-purple-600 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-purple-700 transition"
            >
              Submit
            </button>

            <button
              type="reset"
              className="text-sm text-purple-600 hover:underline"
            >
              Clear form
            </button>
          </div>

          <p className="text-xs text-gray-500">
            Never submit passwords through Google Forms.
          </p>
        </form>

        {/* Footer */}
        <div className="text-center text-xs text-gray-500 py-4 border-t">
          <p>
            This content is neither created nor endorsed by Google · Terms of
            Service · Privacy Policy
          </p>
          <p className="mt-1">Google Forms</p>
        </div>
      </div>
    </div>
  );
}

function Input({ label, required = false, type = "text" }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-800">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        placeholder="Your answer"
        className="mt-1 w-full border-b border-gray-300 focus:border-purple-600 focus:outline-none py-2 text-sm"
        required={required}
      />
    </div>
  );
}

function Textarea({ label }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-800">
        {label}
      </label>
      <textarea
        placeholder="Your answer"
        rows={4}
        className="mt-1 w-full border-b border-gray-300 focus:border-purple-600 focus:outline-none py-2 text-sm resize-none"
      />
    </div>
  );
}


export default ContactForm