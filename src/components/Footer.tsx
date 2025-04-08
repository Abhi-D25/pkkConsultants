import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12">
          <div>
            <Link to="/" className="inline-block mb-6">
              <img 
                src="/lovable-uploads/bbb6bb24-36d2-4c76-b31b-49d9b71d2cc5.png" 
                alt="PK Kalra Consultants Logo" 
                className="h-14 grayscale" 
              />
            </Link>
            <p className="text-gray-400 mb-4 font-light">
              A multidisciplinary consultancy firm delivering integrated architecture, interior and MEP solutions for commercial, residential, and infrastructure projects.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-light mb-6 text-white">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors font-light">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors font-light">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors font-light">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-400 hover:text-white transition-colors font-light">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors font-light">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-light mb-6 text-white">Services</h3>
            <ul className="space-y-3">
              <li className="text-gray-400 hover:text-white transition-colors font-light">MEP Engineering</li>
              <li className="text-gray-400 hover:text-white transition-colors font-light">Architecture</li>
              <li className="text-gray-400 hover:text-white transition-colors font-light">Interior Design</li>
              <li className="text-gray-400 hover:text-white transition-colors font-light">Fire Systems</li>
              <li className="text-gray-400 hover:text-white transition-colors font-light">Sustainability Consulting</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-light mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 text-gray-500 shrink-0 mt-1" size={18} />
                <span className="text-gray-400 font-light">F-67, Basement, Green Park Main, New Delhi-110016</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 text-gray-500 shrink-0" size={18} />
                <span className="text-gray-400 font-light">+91 XXXX XXXXXX</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 text-gray-500 shrink-0" size={18} />
                <span className="text-gray-400 font-light">Pkkc@pkkalraconsultants.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0 font-light">
              &copy; {new Date().getFullYear()} PK Kalra Consultants. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm font-light">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm font-light">
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
