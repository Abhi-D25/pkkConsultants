
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import ContactForm from '@/components/ContactForm';
import AnimatedSection from '@/components/AnimatedSection';

const Contact = () => {
  return (
    <div className="pt-20">
      {/* Contact Hero */}
      <section className="relative py-20 bg-pkkc-navy">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
            <p className="text-xl text-gray-300">
              Get in touch to discuss your engineering and design requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Details and Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <SectionTitle 
              title="Get In Touch" 
              subtitle="We're here to answer your questions and discuss your project requirements"
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection delay={200}>
              <div>
                <h3 className="text-2xl font-bold text-pkkc-navy mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-pkkc-light p-3 rounded-lg mr-4">
                      <MapPin className="text-pkkc-gold" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Office Location</h4>
                      <p className="text-gray-600">Delhi, India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-pkkc-light p-3 rounded-lg mr-4">
                      <Phone className="text-pkkc-gold" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Phone</h4>
                      <p className="text-gray-600">+91 XXXX XXXXXX</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-pkkc-light p-3 rounded-lg mr-4">
                      <Mail className="text-pkkc-gold" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Email</h4>
                      <p className="text-gray-600">info@pkkalraconsultants.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-pkkc-light p-3 rounded-lg mr-4">
                      <Clock className="text-pkkc-gold" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Business Hours</h4>
                      <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h3 className="text-2xl font-bold text-pkkc-navy mb-6">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-pkkc-light p-3 rounded-lg text-pkkc-gold hover:bg-pkkc-gold hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                    <a href="#" className="bg-pkkc-light p-3 rounded-lg text-pkkc-gold hover:bg-pkkc-gold hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>
                    <a href="#" className="bg-pkkc-light p-3 rounded-lg text-pkkc-gold hover:bg-pkkc-gold hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <div className="bg-pkkc-light p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-pkkc-navy mb-6">Request a Consultation</h3>
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <SectionTitle 
              title="Our Location" 
              subtitle="Find us in Delhi, India"
            />
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="rounded-lg overflow-hidden shadow-md h-[400px] bg-gray-200 flex items-center justify-center">
              {/* Placeholder for a Google Map or other map service */}
              <div className="text-center px-4">
                <p className="text-gray-600 mb-4">Map integration would be added here with the exact office location in Delhi, India.</p>
                <p className="text-gray-500 text-sm">For implementation, a Google Maps API key or similar service would be required.</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Contact;
