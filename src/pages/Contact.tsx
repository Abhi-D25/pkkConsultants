import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import SectionTitle from '@/components/SectionTitle';
import ContactForm from '@/components/ContactForm';
import AnimatedSection from '@/components/AnimatedSection';


const Contact = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  return (
    <div>
      {/* Contact Hero */}
      <section className="relative py-40 bg-pkkc-black backdrop-blur-sm">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-light text-pkkc-gold mb-6">Contact</h1>
            <p className="text-xl text-gray-300 font-light">
              Get in touch to discuss your architecture, interior, and MEP requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Details and Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedSection>
              <div>
                <h3 className="text-2xl font-light text-gray-800 mb-10">Contact Information</h3>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="bg-gray-50 p-3 mr-5">
                      <MapPin className="text-gray-400" size={24} />
                    </div>
                    <div>
                      <h4 className="font-light text-lg mb-1 underline">Registered Office</h4>
                      <p className="text-gray-600 font-light">P.K.Kalra Consultants</p>
                      <p className="text-gray-600 font-light">F-67, Basement, Green Park Main</p>
                      <p className="text-gray-600 font-light">New Delhi-110016</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-gray-50 p-3 mr-5">
                      <Phone className="text-gray-400" size={24} />
                    </div>
                    <div>
                      <h4 className="font-light text-lg mb-1">Phone</h4>
                      <p className="text-gray-600 font-light">+91 XXXX XXXXXX</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-gray-50 p-3 mr-5">
                      <Mail className="text-gray-400" size={24} />
                    </div>
                    <div>
                      <h4 className="font-light text-lg mb-1">Email</h4>
                      
                      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                        <DialogTrigger asChild>
                          <Button 
                            variant="outline" 
                            className="border-pkkc-darkGold text-pkkc-darkGold hover:bg-pkkc-darkGold/10"
                          >
                            View All Email Contacts
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[500px]">
                          <DialogHeader>
                            <DialogTitle className="text-xl mb-4 font-light">Contact Email Addresses</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div className="border-l-4 border-pkkc-gold p-4 bg-gray-50">
                              <h4 className="font-medium text-pkkc-navy">General Inquiries</h4>
                              <a 
                                href="mailto:info.pkkalraconsultants@gmail.com" 
                                className="text-pkkc-darkGold hover:underline"
                              >
                                info.pkkalraconsultants@gmail.com
                              </a>
                            </div>
                            
                            <div className="border-l-4 border-pkkc-gold p-4 bg-gray-50">
                              <h4 className="font-medium text-pkkc-navy">MEP Engineering Inquiries</h4>
                              <a 
                                href="mailto:pkkalraconsultants@gmail.com" 
                                className="text-pkkc-darkGold hover:underline"
                              >
                                pkkalraconsultants@gmail.com
                              </a>
                            </div>
                            
                            <div className="border-l-4 border-pkkc-gold p-4 bg-gray-50">
                              <h4 className="font-medium text-pkkc-navy">Architecture Inquiries</h4>
                              <a 
                                href="mailto:poortikalra@pkkalraconsultants.com" 
                                className="text-pkkc-darkGold hover:underline"
                              >
                                poortikalra@pkkalraconsultants.com
                              </a>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-gray-50 p-3 mr-5">
                      <Clock className="text-gray-400" size={24} />
                    </div>
                    <div>
                      <h4 className="font-light text-lg mb-1">Business Hours</h4>
                      <p className="text-gray-600 font-light">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-600 font-light">Saturday: 9:00 AM - 1:00 PM</p>
                      <p className="text-gray-600 font-light">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-16">
                  <h3 className="text-2xl font-light text-gray-800 mb-6">Connect</h3>
                  <div className="flex space-x-5">
                    <a href="https://www.linkedin.com/company/pk-kalra-consultants/" className="bg-gray-50 p-3 text-gray-500 hover:bg-gray-100 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                    <a href="#" className="bg-gray-50 p-3 text-gray-500 hover:bg-gray-100 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>
                    <a href="#" className="bg-gray-50 p-3 text-gray-500 hover:bg-gray-100 transition-colors">
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

            <AnimatedSection delay={300}>
              <div className="bg-white p-8 border border-gray-100">
                <h3 className="text-2xl font-light text-gray-800 mb-6">Book a Free Consultation</h3>
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* No Map Section for Minimal Design */}
    </div>
  );
};

export default Contact;
