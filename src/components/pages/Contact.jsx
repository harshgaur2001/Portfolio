import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY] = [
    String(import.meta.env.VITE_EMAILJS_SERVICE_ID),
    String(import.meta.env.VITE_EMAILJS_TEMPLATE_ID),
    String(import.meta.env.VITE_EMAILJS_PUBLIC_KEY),
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          setSubmitted(true);
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("FAILED...", error);
          setSubmitted(true);
          setFormData({ name: "", email: "", message: "" });
        }
      );
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6 py-20 text-white">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left side - Contact info */}
        <div className="flex flex-col justify-center space-y-8">
          <h1 className="text-5xl font-extrabold max-w-md">Let's Connect</h1>
          <p className="text-gray-300 max-w-md leading-relaxed">
            Have a question, collaboration idea, or want to say hello? Fill out
            the form and I'll get back to you as soon as possible.
          </p>

          <div>
            <h3 className="text-[#5b7553] font-semibold mb-2">Email</h3>
            <a
              href="mailto:harshgaur040@gmail.com"
              className="text-gray-300 hover:text-[#5b7553] transition"
            >
              harshgaur040@gmail.com
            </a>
          </div>

          <div>
            <h3 className="text-[#5b7553] font-semibold mb-2">Phone</h3>
            <a
              href="tel:+919636784846"
              className="text-gray-300 hover:text-[#5b7553] transition"
            >
              +91 96367 84846
            </a>
          </div>
        </div>

        {/* Right side - Contact form */}
        <form
          ref={form}
          onSubmit={handleSubmit}
          className="bg-black border-2 border-gray-950 rounded-lg p-8 shadow-lg"
        >
          <label className="block mb-6">
            <span className="text-gray-300">Name</span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md bg-black border border-gray-900 px-3 py-3 text-white focus:outline-none focus:border-[#5b7553]"
              placeholder="Your full name"
            />
          </label>

          <label className="block mb-6">
            <span className="text-gray-300">Email</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md bg-black border border-gray-900 px-3 py-3 text-white focus:outline-none focus:border-[#5b7553]"
              placeholder="Your email address"
            />
          </label>

          <label className="block mb-6">
            <span className="text-gray-300">Message</span>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="mt-1 block w-full rounded-md bg-black border border-gray-900 px-3 py-3 text-white focus:outline-none focus:border-[#5b7553]"
              placeholder="Write your message here..."
            />
          </label>

          <button
            type="submit"
            className="w-full  transition-colors text-white font-semibold py-4 rounded-md shadow cursor-pointer border border-[#5b7553] hover:bg-[#5b7553] "
          >
            Send Message
          </button>

          {submitted && (
            <p className="mt-4 text-[#5b7553] text-center font-medium">
              Thank you for reaching out! I will get back to you soon.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
