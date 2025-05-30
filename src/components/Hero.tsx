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
      {/* Background image with reduced overlay opacity for more visibility */}
      <div className="absolute inset-0 bg-pkkc-black">
        <img 
          src="/images/hero.webp" 
          alt="PKKC Hero" 
          className="w-full h-full object-cover opacity-80"
        />
        {/* Reduced overlay opacity from 70% to 40% for more image visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-pkkc-black/20 to-pkkc-black/40"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-6 animate-slide-fade-in-up">
            Welcome to PKKC
          </h1>
          <p className="text-pkkc-gold text-lg tracking-widest font-light mb-2 inline-block animate-slide-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Seamless Spaces, Engineered Excellence
          </p>
          <p className="text-lg text-gray-300 mb-12 animate-slide-fade-in-up" style={{ animationDelay: '0.3s' }}>
            One-stop solution that blends creative vision with engineering precision.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-slide-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-pkkc-darkGold hover:bg-pkkc-darkGold/90 text-white font-light text-lg px-8 py-6 border border-black/20">
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
            <Button asChild className="bg-transparent border border-white hover:bg-pkkc-darkGold/10 text-pkkc-gold font-light text-lg px-8 py-6 border border-white/20">
              <Link to="/portfolio">View Our Portfolio</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;