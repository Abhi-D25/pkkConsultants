
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-[url('/lovable-uploads/19aa26bc-fc07-4c50-97a1-72dad6ec51c3.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-pkkc-navy/85"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in">
            Engineering Tomorrow's Spaces with Precision, Innovation & Sustainability
          </h1>
          <p className="text-xl text-gray-200 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            PK Kalra Consultants (PKKC) is a leading multidisciplinary engineering consultancy delivering seamless design solutions since 2002.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button asChild className="bg-pkkc-gold hover:bg-pkkc-gold/90 text-pkkc-navy font-medium text-lg px-8 py-6">
              <Link to="/contact">Request a Consultation</Link>
            </Button>
            <Button asChild className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-medium text-lg px-8 py-6">
              <Link to="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
