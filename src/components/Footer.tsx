import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-pkkc-black text-black pt-10 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo and Company Info - Center */}
          <div className="text-center mr-24">
            <Link to="/" className="inline-block">
              <img 
                src="/images/logo.jpeg" 
                alt="PK Kalra Consultants Logo" 
                className="h-24 w-auto mx-auto mb-2" 
              />
            </Link>
          </div>

          <div className="text-center mr-24">
            <div className="space-y-1">
              <p className="text-pkkc-gold font-light text-sm">
                <span className="font-semibold">Established:</span> 2002 <br />(Engineering Division) <br /> <br/> <span className="font-semibold">Operational Regions:</span> <br/>Delhi, India
              </p>
              <p className="text-gray-400 font-light text-xs">
                (Remote and In-person)
              </p>
            </div>
          </div>

          {/* Connect - Left */}
          <div className="flex flex-col items-center md:items-start ml-16">
            <h3 className="text-lg font-light mb-4 text-pkkc-gold">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/pk-kalra-consultants/" className="text-pkkc-gold hover:text-pkkc-warmWhite transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" className="text-pkkc-gold hover:text-pkkc-warmWhite transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-pkkc-gold hover:text-pkkc-warmWhite transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Info - Right */}
          <div className="flex flex-col items-center md:items-end">
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-3 text-pkkc-gold shrink-0 mt-1" size={18} />
                <span className="text-pkkc-gold font-light">F-67, Basement, Green Park Main, New Delhi-110016</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 text-pkkc-gold shrink-0" size={18} />
                <span className="text-pkkc-gold font-light">+91 XXXX XXXXXX</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 text-pkkc-gold shrink-0" size={18} />
                <span className="text-pkkc-gold font-light">info.pkkalraconsultants@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0 font-light">
              &copy; {new Date().getFullYear()} PK Kalra Consultants. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-pkkc-gold transition-colors text-sm font-light">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-pkkc-gold transition-colors text-sm font-light">
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