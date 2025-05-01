import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="bg-pkkc-black py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
          Ready to Start Your Project?
        </h2>
        <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto font-light">
          Collaborate with PK Kalra Consultants for integrated architecture, interior, and MEP solutions tailored to your vision.
        </p>
        <Button asChild className="bg-pkkc-gold hover:bg-pkkc-darkGold text-pkkc-black font-normal text-lg px-10 py-6">
          <Link to="/contact">Book a Free Consultation</Link>
        </Button>
      </div>
    </section>
  );
};

export default CTA;