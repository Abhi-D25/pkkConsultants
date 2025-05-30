import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

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
        isHomePage 
          ? (isScrolled ? 'bg-pkkc-light/95 backdrop-blur-sm shadow-sm py-1' : 'bg-pkkc-light/90 backdrop-blur-sm py-2')
          : 'bg-pkkc-light/95 backdrop-blur-sm shadow-sm py-1'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center" onClick={handleLinkClick('/')}>
          <img 
            src="/images/logo.png" 
            alt="PK Kalra Consultants Logo" 
            className="h-14 md:h-20" 
          />
        </Link>

        {/* Desktop Navigation - Updated colors for dark text on white background */}
        <nav className="hidden md:flex items-center space-x-10">
          <a href="/" className="font-light text-pkkc-darkGrey hover:text-pkkc-darkGold transition-colors" onClick={handleLinkClick('/')}>
            Home
          </a>
          <a href="/about" className="font-light text-pkkc-darkGrey hover:text-pkkc-darkGold transition-colors" onClick={handleLinkClick('/about')}>
            About Us
          </a>
          <a href="/services" className="font-light text-pkkc-darkGrey hover:text-pkkc-darkGold transition-colors" onClick={handleLinkClick('/services')}>
            Services
          </a>
          <a href="/portfolio" className="font-light text-pkkc-darkGrey hover:text-pkkc-darkGold transition-colors" onClick={handleLinkClick('/portfolio')}>
            Portfolio
          </a>
          <a href="/careers" className="font-light text-pkkc-darkGrey hover:text-pkkc-darkGold transition-colors" onClick={handleLinkClick('/careers')}>
            Careers
          </a>
          <a href="/contact" className="font-light text-pkkc-darkGrey hover:text-pkkc-darkGold transition-colors" onClick={handleLinkClick('/contact')}>
            Contact
          </a>
          <Button asChild className="bg-pkkc-darkGold hover:bg-pkkc-darkGold/90 text-white font-light border border-black/20">
            <a href="/contact" onClick={handleLinkClick('/contact')}>Book Consultation</a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-pkkc-darkGrey"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-pkkc-light/95 backdrop-blur-sm shadow-sm">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <a 
                href="/" 
                className="font-light text-pkkc-darkGrey hover:text-pkkc-darkGold transition-colors py-2"
                onClick={handleLinkClick('/')}
              >
                Home
              </a>
              <a 
                href="/about" 
                className="font-light text-pkkc-darkGrey hover:text-pkkc-darkGold transition-colors py-2"
                onClick={handleLinkClick('/about')}
              >
                About Us
              </a>
              <a 
                href="/services" 
                className="font-light text-pkkc-darkGrey hover:text-pkkc-darkGold transition-colors py-2"
                onClick={handleLinkClick('/services')}
              >
                Services
              </a>
              <a 
                href="/portfolio" 
                className="font-light text-pkkc-darkGrey hover:text-pkkc-darkGold transition-colors py-2"
                onClick={handleLinkClick('/portfolio')}
              >
                Careers
              </a>
              <a 
                href="/contact" 
                className="font-light text-pkkc-darkGrey hover:text-pkkc-darkGold transition-colors py-2"
                onClick={handleLinkClick('/contact')}
              >
                Contact
              </a>
              <Button 
                asChild 
                className="bg-pkkc-darkGold hover:bg-pkkc-darkGold/90 text-white font-light w-full mt-2 border border-black/20"
              >
                <a href="/contact" onClick={handleLinkClick('/contact')}>Book Consultation</a>
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;