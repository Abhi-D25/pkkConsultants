import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ContactForm from "@/components/ContactForm";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Hero = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-gray-900">
        <img 
          src="/images/hero-placeholder.jpg" 
          alt="PKKC Hero" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-6 animate-slide-fade-in-up">
            Seamless Spaces, Engineered Excellence
          </h1>
          <p className="text-xl text-gray-200 mb-10 animate-slide-fade-in-up font-light tracking-wide" style={{ animationDelay: '0.2s' }}>
            Integrated Architecture, Interior & MEP Solutions
          </p>
          <p className="text-lg text-gray-300 mb-12 animate-slide-fade-in-up" style={{ animationDelay: '0.3s' }}>
            One-stop solutions that blend creative vision with engineering precision.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-slide-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-white hover:bg-gray-200 text-gray-900 font-normal text-lg px-8 py-6">
                  Book a Free Consultation
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle className="text-xl mb-4 font-light">Request a Consultation</DialogTitle>
                </DialogHeader>
                <ContactForm />
              </DialogContent>
            </Dialog>
            <Button asChild className="bg-transparent border border-white hover:bg-white/10 text-white font-normal text-lg px-8 py-6">
              <Link to="/portfolio">View Our Portfolio</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
