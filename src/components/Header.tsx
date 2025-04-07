
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/efde99c1-0ca9-46f4-a92e-46ec97b77399.png" 
            alt="PK Kalra Consultants Logo" 
            className="h-12 md:h-16" 
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="font-medium text-pkkc-navy hover:text-pkkc-gold transition-colors">
            Home
          </Link>
          <Link to="/about" className="font-medium text-pkkc-navy hover:text-pkkc-gold transition-colors">
            About Us
          </Link>
          <Link to="/services" className="font-medium text-pkkc-navy hover:text-pkkc-gold transition-colors">
            Services
          </Link>
          <Link to="/contact" className="font-medium text-pkkc-navy hover:text-pkkc-gold transition-colors">
            Contact
          </Link>
          <Button asChild className="bg-pkkc-gold hover:bg-pkkc-gold/90 text-white">
            <Link to="/contact">Request Consultation</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-pkkc-navy"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="font-medium text-pkkc-navy hover:text-pkkc-gold transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="font-medium text-pkkc-navy hover:text-pkkc-gold transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                to="/services" 
                className="font-medium text-pkkc-navy hover:text-pkkc-gold transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/contact" 
                className="font-medium text-pkkc-navy hover:text-pkkc-gold transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Button 
                asChild 
                className="bg-pkkc-gold hover:bg-pkkc-gold/90 text-white w-full mt-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Link to="/contact">Request Consultation</Link>
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
