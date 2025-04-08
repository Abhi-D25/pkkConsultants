import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

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

  const handleLinkClick = (path: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    // Close mobile menu if open
    setIsMobileMenuOpen(false);
    // Navigate to the page
    navigate(path);
    // Smooth scroll to top
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center" onClick={handleLinkClick('/')}>
          <img 
            src="/lovable-uploads/bbb6bb24-36d2-4c76-b31b-49d9b71d2cc5.png" 
            alt="PK Kalra Consultants Logo" 
            className="h-12 md:h-16" 
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="/" className="font-medium text-pkkc-navy hover:text-pkkc-gold transition-colors" onClick={handleLinkClick('/')}>
            Home
          </a>
          <a href="/about" className="font-medium text-pkkc-navy hover:text-pkkc-gold transition-colors" onClick={handleLinkClick('/about')}>
            About Us
          </a>
          <a href="/services" className="font-medium text-pkkc-navy hover:text-pkkc-gold transition-colors" onClick={handleLinkClick('/services')}>
            Services
          </a>
          <a href="/contact" className="font-medium text-pkkc-navy hover:text-pkkc-gold transition-colors" onClick={handleLinkClick('/contact')}>
            Contact
          </a>
          <Button asChild className="bg-pkkc-gold hover:bg-pkkc-gold/90 text-white">
            <a href="/contact" onClick={handleLinkClick('/contact')}>Request Consultation</a>
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
              <a 
                href="/" 
                className="font-medium text-pkkc-navy hover:text-pkkc-gold transition-colors py-2"
                onClick={handleLinkClick('/')}
              >
                Home
              </a>
              <a 
                href="/about" 
                className="font-medium text-pkkc-navy hover:text-pkkc-gold transition-colors py-2"
                onClick={handleLinkClick('/about')}
              >
                About Us
              </a>
              <a 
                href="/services" 
                className="font-medium text-pkkc-navy hover:text-pkkc-gold transition-colors py-2"
                onClick={handleLinkClick('/services')}
              >
                Services
              </a>
              <a 
                href="/contact" 
                className="font-medium text-pkkc-navy hover:text-pkkc-gold transition-colors py-2"
                onClick={handleLinkClick('/contact')}
              >
                Contact
              </a>
              <Button 
                asChild 
                className="bg-pkkc-gold hover:bg-pkkc-gold/90 text-white w-full mt-2"
              >
                <a href="/contact" onClick={handleLinkClick('/contact')}>Request Consultation</a>
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
