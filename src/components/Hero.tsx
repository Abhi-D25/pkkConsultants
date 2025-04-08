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
    <section className="relative h-screen flex items-center">
      {/* Background color */}
      <div className="absolute inset-0 bg-gradient-to-br from-pkkc-navy to-pkkc-navy/90">
        <div className="absolute inset-0 bg-black/10"></div>
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
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-pkkc-gold hover:bg-pkkc-gold/90 text-pkkc-navy font-medium text-lg px-8 py-6">
                  Request a Consultation
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle className="text-xl mb-4">Request a Consultation</DialogTitle>
                </DialogHeader>
                <ContactForm />
              </DialogContent>
            </Dialog>
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
