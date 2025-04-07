
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="bg-pkkc-navy py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Transform Your Engineering Vision into Reality?
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Partner with PK Kalra Consultants for innovative, sustainable, and precision-engineered solutions tailored to your specific requirements.
        </p>
        <Button asChild className="bg-pkkc-gold hover:bg-pkkc-gold/90 text-pkkc-navy font-medium text-lg px-8 py-6">
          <Link to="/contact">Request a Consultation</Link>
        </Button>
      </div>
    </section>
  );
};

export default CTA;
