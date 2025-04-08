
import { Fan, Lightbulb, Droplets, Home, Leaf, FileSearch } from 'lucide-react';
import Hero from '@/components/Hero';
import SectionTitle from '@/components/SectionTitle';
import ServiceCard from '@/components/ServiceCard';
import AnimatedSection from '@/components/AnimatedSection';
import CTA from '@/components/CTA';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <SectionTitle 
              title="About PK Kalra Consultants" 
              subtitle="Engineering design excellence since 2002"
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection delay={200}>
              <div>
                <p className="text-lg text-gray-600 mb-6">
                  PK Kalra Consultants (PKKC) is a leading multidisciplinary engineering consultancy delivering seamless design and engineering solutions across commercial, residential, and infrastructure projects.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  With a legacy of over two decades, we specialize in MEP, architecture, and interior design services built on excellence and innovation.
                </p>
                <p className="text-lg text-gray-600">
                  We don't just design buildings—we shape the future of engineering and infrastructure with innovation and sustainability at the core.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <div className="bg-pkkc-light p-8 rounded-lg">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <h3 className="text-5xl font-bold text-pkkc-gold mb-2">20+</h3>
                    <p className="text-pkkc-navy font-medium">Years Experience</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-5xl font-bold text-pkkc-gold mb-2">500+</h3>
                    <p className="text-pkkc-navy font-medium">Projects Completed</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-5xl font-bold text-pkkc-gold mb-2">50+</h3>
                    <p className="text-pkkc-navy font-medium">Expert Professionals</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-5xl font-bold text-pkkc-gold mb-2">100%</h3>
                    <p className="text-pkkc-navy font-medium">Client Satisfaction</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-pkkc-light">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <SectionTitle 
              title="Our Engineering Services" 
              subtitle="Comprehensive solutions for all your engineering needs"
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedSection delay={200}>
              <ServiceCard 
                icon={<Fan size={48} />}
                title="HVAC System Design"
                description="Efficient heating, ventilation, and air conditioning systems that optimize comfort, energy consumption, and operational costs."
              />
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <ServiceCard 
                icon={<Lightbulb size={48} />}
                title="Electrical Load Planning"
                description="Comprehensive electrical load calculations and distribution design solutions that ensure safety, efficiency, and reliability."
              />
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <ServiceCard 
                icon={<Droplets size={48} />}
                title="Plumbing & Firefighting"
                description="Reliable plumbing and firefighting system designs that prioritize safety, water conservation, and regulatory compliance."
              />
            </AnimatedSection>

            <AnimatedSection delay={500}>
              <ServiceCard 
                icon={<Home size={48} />}
                title="MEP Design & Consultancy"
                description="End-to-end mechanical, electrical, and plumbing engineering consultancy services tailored to your specific project requirements."
              />
            </AnimatedSection>

            <AnimatedSection delay={600}>
              <ServiceCard 
                icon={<Leaf size={48} />}
                title="Green Building Solutions"
                description="Sustainable design strategies and solutions that minimize environmental impact while maximizing energy efficiency and occupant comfort."
              />
            </AnimatedSection>

            <AnimatedSection delay={700}>
              <ServiceCard 
                icon={<FileSearch size={48} />}
                title="Technical Audits"
                description="Comprehensive on-site quality control audits and performance evaluations at every stage of your project to ensure excellence."
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/5231f21c-77d3-43cd-b76d-d8c3df34b88e.png" 
                  alt="Parveen Kumar Kalra, Founder" 
                  className="w-full h-auto" 
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div>
                <h3 className="text-xl text-pkkc-gold font-medium mb-2">Meet Our Founder</h3>
                <h2 className="text-3xl md:text-4xl font-bold text-pkkc-navy mb-6">Parveen Kumar Kalra</h2>
                <p className="text-lg text-gray-600 mb-6">
                  As the Founder and CEO of PK Kalra Consultants, Parveen Kumar Kalra brings over 25 years of expertise in MEP engineering across commercial, residential, hospitality, healthcare, and industrial sectors.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  His leadership drives our pursuit of engineering excellence across every project. With a focus on precision, innovation, and sustainability, he has guided the firm to become a leading engineering consultancy in India.
                </p>
                <p className="text-lg text-gray-600">
                  "From MEP design to energy-efficient solutions, our work is rooted in engineering excellence and a passion for building smarter spaces."
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA />
    </div>
  );
};

export default Index;
