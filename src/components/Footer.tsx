
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-pkkc-navy text-white pt-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8">
          <div>
            <Link to="/" className="inline-block mb-6">
              <img 
                src="/lovable-uploads/efde99c1-0ca9-46f4-a92e-46ec97b77399.png" 
                alt="PK Kalra Consultants Logo" 
                className="h-16" 
              />
            </Link>
            <p className="text-gray-300 mb-4">
              A multidisciplinary consultancy firm delivering engineering and design services across townships, commercial, residential, and infrastructure projects since 2002.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 gold-underline">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-pkkc-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-pkkc-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-pkkc-gold transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-pkkc-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 gold-underline">Services</h3>
            <ul className="space-y-3">
              <li className="text-gray-300 hover:text-pkkc-gold transition-colors">MEP Design & Consultancy</li>
              <li className="text-gray-300 hover:text-pkkc-gold transition-colors">HVAC System Design</li>
              <li className="text-gray-300 hover:text-pkkc-gold transition-colors">Electrical Load Planning</li>
              <li className="text-gray-300 hover:text-pkkc-gold transition-colors">Plumbing & Firefighting</li>
              <li className="text-gray-300 hover:text-pkkc-gold transition-colors">Green Building Solutions</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 gold-underline">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 text-pkkc-gold shrink-0 mt-1" size={18} />
                <span className="text-gray-300">Delhi, India</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 text-pkkc-gold shrink-0" size={18} />
                <span className="text-gray-300">+91 XXXX XXXXXX</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 text-pkkc-gold shrink-0" size={18} />
                <span className="text-gray-300">info@pkkalraconsultants.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} PK Kalra Consultants. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-pkkc-gold transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-pkkc-gold transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
