"use client";
import { useState } from "react";
import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required!";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required!";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email!";
    }
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty!";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-gradient-to-b from-gray-100 to-gray-300">
      <div className="bg-white/80 backdrop-blur-md shadow-lg rounded-lg p-8 max-w-lg w-full">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">Contact Us 📩</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-gray-700">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none h-32"
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold transition duration-300 hover:bg-gray-700"
          >
            Send Message 🚀
          </button>
        </form>

        <div className="mt-6 flex justify-center space-x-6 text-gray-700 text-2xl">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-pink-600 transition duration-300" />
          </a>
          <a href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="hover:text-green-600 transition duration-300" />
          </a>
          <a href="mailto:your@email.com">
            <FaEnvelope className="hover:text-blue-600 transition duration-300" />
          </a>
        </div>

        <div className="mt-6 text-center">
          <button className="text-blue-600 font-semibold underline hover:text-blue-800 transition duration-300">
            💬 Live Chat Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
