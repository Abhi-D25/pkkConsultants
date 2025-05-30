import { Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";
import SectionTitle from '@/components/SectionTitle';
import AnimatedSection from '@/components/AnimatedSection';
import CTA from '@/components/CTA';

const Careers = () => {
  const handleEmailResume = () => {
    const subject = 'Resume Submission - PKKC Career Opportunity';
    const body = 'Dear PKKC Team,\n\nI am interested in exploring career opportunities at PK Kalra Consultants. Please find my resume attached.\n\nThank you for your consideration.\n\nBest regards,';
    const mailtoLink = `mailto:info.pkkalraconsultants@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div>
      {/* Careers Hero */}
      <section className="relative py-44 bg-pkkc-black backdrop-blur-sm">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/images/sectionBG.png" 
            alt="Section Background" 
            className="w-full h-full object-cover opacity-95"
          />
          <div className="absolute inset-0 bg-pkkc-black/60"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-light text-pkkc-gold mb-6">Join Our Team</h1>
            <p className="text-xl text-gray-300 font-light">
              Shape the future of engineering and design with PKKC - where innovation meets opportunity.
            </p>
          </div>
        </div>
      </section>

      {/* Main Careers Section */}
      <section className="py-20 bg-pkkc-light">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <SectionTitle
              title="Build Your Career with PKKC"
              subtitle="Join a team of innovators and problem solvers"
            />
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <AnimatedSection delay={200}>
              <div className="bg-pkkc-mediumBeige rounded-lg shadow-md border-t-4 border-pkkc-gold p-8 mb-12">
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Whether you're a high school student exploring a future in consulting engineering, a recent college graduate, or an experienced professional, PKKC offers a dynamic environment where you can collaborate with a diverse team of innovators and problem solvers.
                </p>
                
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  We foster strong connections with colleagues and clients through both professional contributions and social engagement.
                </p>

                <div className="text-center">
                  <Button 
                    onClick={handleEmailResume}
                    className="bg-pkkc-darkGold hover:bg-pkkc-darkGold/90 text-white font-normal text-lg px-10 py-6 inline-flex items-center gap-3"
                  >
                    <Mail size={20} />
                    Email Your Resume
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-pkkc-mediumBeige">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <SectionTitle
              title="What We Value at PKKC"
              subtitle="The principles that guide our team and culture"
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <AnimatedSection delay={200}>
              <div className="bg-pkkc-light p-8 rounded-lg shadow-md border-t-4 border-pkkc-gold hover:shadow-md transition-all duration-300 h-full flex flex-col group">
                <div className="mb-6">
                  <h3 className="text-2xl font-medium text-pkkc-navy mb-4 group-hover:text-pkkc-darkGold transition-colors">Work</h3>
                  <p className="text-gray-600 leading-relaxed">
                    A balance of hard work and smart work.
                  </p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={300}>
              <div className="bg-pkkc-light p-8 rounded-lg shadow-md border-t-4 border-pkkc-gold hover:shadow-md transition-all duration-300 h-full flex flex-col group">
                <div className="mb-6">
                  <h3 className="text-2xl font-medium text-pkkc-navy mb-4 group-hover:text-pkkc-darkGold transition-colors">Active</h3>
                  <p className="text-gray-600 leading-relaxed">
                    A commitment to improving our communities.
                  </p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={400}>
              <div className="bg-pkkc-light p-8 rounded-lg shadow-md border-t-4 border-pkkc-gold hover:shadow-md transition-all duration-300 h-full flex flex-col group">
                <div className="mb-6">
                  <h3 className="text-2xl font-medium text-pkkc-navy mb-4 group-hover:text-pkkc-darkGold transition-colors">Engage</h3>
                  <p className="text-gray-600 leading-relaxed">
                    A deep understanding of our clients' needs.
                  </p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={500}>
              <div className="bg-pkkc-light p-8 rounded-lg shadow-md border-t-4 border-pkkc-gold hover:shadow-md transition-all duration-300 h-full flex flex-col group">
                <div className="mb-6">
                  <h3 className="text-2xl font-medium text-pkkc-navy mb-4 group-hover:text-pkkc-darkGold transition-colors">Future</h3>
                  <p className="text-gray-600 leading-relaxed">
                    A dedication to sustainability and the future of our planet.
                  </p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={600}>
              <div className="bg-pkkc-light p-8 rounded-lg shadow-md border-t-4 border-pkkc-gold hover:shadow-md transition-all duration-300 h-full flex flex-col group">
                <div className="mb-6">
                  <h3 className="text-2xl font-medium text-pkkc-navy mb-4 group-hover:text-pkkc-darkGold transition-colors">Balance</h3>
                  <p className="text-gray-600 leading-relaxed">
                    A belief in maintaining work-life harmony.
                  </p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={700}>
              <div className="bg-pkkc-light p-8 rounded-lg shadow-md border-t-4 border-pkkc-gold hover:shadow-md transition-all duration-300 h-full flex flex-col group">
                <div className="mb-6">
                  <h3 className="text-2xl font-medium text-pkkc-navy mb-4 group-hover:text-pkkc-darkGold transition-colors">Solution</h3>
                  <p className="text-gray-600 leading-relaxed">
                    A passion for tackling complex challenges.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-pkkc-light">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-light text-pkkc-darkGold mb-6">
                Ready to Shape the Future?
              </h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Join us and be part of a team that shapes the future.
              </p>
              
              <div className="space-y-6">
                <Button 
                  onClick={handleEmailResume}
                  className="bg-pkkc-darkGold hover:bg-pkkc-darkGold/90 text-white font-normal text-lg px-12 py-6 inline-flex items-center gap-3"
                >
                  <Mail size={24} />
                  Send Your Resume Now
                </Button>
                
                <div className="text-center">
                  <p className="text-gray-500 text-sm">
                    Email: <span className="text-pkkc-darkGold font-medium">info.pkkalraconsultants@gmail.com</span>
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Careers;