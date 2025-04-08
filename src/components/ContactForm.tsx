import { useState } from 'react';
import { Button } from "@/components/ui/button";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would normally submit the form data to your backend
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: '',
      message: ''
    });
    
    // Show success message (using alert for simplicity)
    alert('Thank you for your message. We will get back to you shortly!');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-light mb-2 text-gray-600">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-gray-50 border-0 focus:outline-none focus:ring-1 focus:ring-gray-400"
          placeholder="Your Name"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-light mb-2 text-gray-600">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-gray-50 border-0 focus:outline-none focus:ring-1 focus:ring-gray-400"
          placeholder="Your Email"
        />
      </div>
      
      <div>
        <label htmlFor="phone" className="block text-sm font-light mb-2 text-gray-600">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-gray-50 border-0 focus:outline-none focus:ring-1 focus:ring-gray-400"
          placeholder="Your Phone Number"
        />
      </div>
      
      <div>
        <label htmlFor="projectType" className="block text-sm font-light mb-2 text-gray-600">
          Project Type
        </label>
        <select
          id="projectType"
          name="projectType"
          value={formData.projectType}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-gray-50 border-0 focus:outline-none focus:ring-1 focus:ring-gray-400"
        >
          <option value="">Select Project Type</option>
          <option value="MEP Engineering">MEP Engineering</option>
          <option value="Architecture">Architecture</option>
          <option value="Interior Design">Interior Design</option>
          <option value="Other">Other</option>
        </select>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-light mb-2 text-gray-600">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 bg-gray-50 border-0 focus:outline-none focus:ring-1 focus:ring-gray-400"
          placeholder="Tell us about your project"
        ></textarea>
      </div>
      
      <Button 
        type="submit" 
        className="bg-pkkc-primary hover:bg-pkkc-primary/90 text-white font-light text-lg px-6 py-3 w-full mt-4"
      >
        Submit
      </Button>
    </form>
  );
};

export default ContactForm;
