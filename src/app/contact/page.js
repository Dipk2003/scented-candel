"use client";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6">
        <label className="block mb-3">
          <span className="text-gray-700">Name</span>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required
            className="w-full mt-1 p-2 border rounded-lg"
          />
        </label>
        
        <label className="block mb-3">
          <span className="text-gray-700">Email</span>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required
            className="w-full mt-1 p-2 border rounded-lg"
          />
        </label>

        <label className="block mb-3">
          <span className="text-gray-700">Message</span>
          <textarea 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            required
            className="w-full mt-1 p-2 border rounded-lg h-28"
          ></textarea>
        </label>

        <button type="submit" className="w-full bg-black text-white py-2 rounded-lg mt-3 hover:bg-gray-800">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
