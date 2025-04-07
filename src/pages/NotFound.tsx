
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-pkkc-light pt-20 pb-20">
      <div className="text-center max-w-xl px-4">
        <h1 className="text-6xl md:text-8xl font-bold text-pkkc-gold mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-pkkc-navy mb-6">Page Not Found</h2>
        <p className="text-xl text-gray-600 mb-8">
          We're sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        <Button asChild className="bg-pkkc-gold hover:bg-pkkc-gold/90 text-pkkc-navy font-medium text-lg px-8 py-6">
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
