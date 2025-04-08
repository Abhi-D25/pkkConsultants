import { Fan, Lightbulb, Droplets, Home, Layers, FileSearch } from 'lucide-react';
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
              title="Integrated Solutions" 
              subtitle="Architecture, Interior & MEP Services"
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-12">
            <AnimatedSection delay={200}>
              <div>
                <p className="text-lg text-gray-600 mb-8 font-light leading-relaxed">
                  PKKC is a distinguished engineering and design consulting firm, now expanding its expertise beyond MEP engineering to include Architecture and Interior Design. With a legacy of designing sustainable and high-performing building and township systems, we now provide a comprehensive, one-stop solution that seamlessly integrates engineering precision with architectural creativity.
                </p>
                <p className="text-lg text-gray-600 mb-8 font-light leading-relaxed">
                  By expanding into Architecture and Interior Design, we ensure that our projects are not only structurally efficient but also aesthetically refined and user-centric. Our approach balances functionality, sustainability, and design innovation, making us a true multidisciplinary firm.
                </p>
                <p className="text-lg text-gray-600 font-light leading-relaxed">
                  The measure of our success is reflected in the quality of our longstanding relationships and our impressive 90% repeat business rate. We deliver projects that are on time, cost-effective, sustainable, energy optimized, and aesthetically superior.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <div className="bg-gray-100 p-10 rounded-sm">
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <h3 className="text-5xl font-light text-pkkc-primary mb-3">20+</h3>
                    <p className="text-gray-600 font-light">Years Experience</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-5xl font-light text-pkkc-primary mb-3">500+</h3>
                    <p className="text-gray-600 font-light">Projects Completed</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-5xl font-light text-pkkc-primary mb-3">50+</h3>
                    <p className="text-gray-600 font-light">Expert Professionals</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-5xl font-light text-pkkc-primary mb-3">90%</h3>
                    <p className="text-gray-600 font-light">Repeat Business</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <SectionTitle 
              title="Our Services" 
              subtitle="Comprehensive design & engineering solutions"
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <AnimatedSection delay={200}>
              <a href="/services" className="block h-full transition-transform duration-300 hover:transform hover:scale-105">
                <ServiceCard 
                  icon={<Fan className="text-pkkc-matte" size={40} />}
                  title="MEP Engineering"
                  description="Comprehensive mechanical, electrical, and plumbing engineering solutions that ensure efficiency, sustainability, and regulatory compliance."
                />
              </a>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <a href="/services" className="block h-full transition-transform duration-300 hover:transform hover:scale-105">
                <ServiceCard 
                  icon={<Lightbulb className="text-pkkc-matte" size={40} />}
                  title="Architecture"
                  description="Concept development, master planning, sustainable building designs, and 3D visualization for residential, commercial, institutional, and hospitality projects."
                />
              </a>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <a href="/services" className="block h-full transition-transform duration-300 hover:transform hover:scale-105">
                <ServiceCard 
                  icon={<Droplets className="text-pkkc-matte" size={40} />}
                  title="Interior Design"
                  description="Bespoke interiors for homes, offices, retail, and hospitality spaces with expert space planning, material selection, and lighting design."
                />
              </a>
            </AnimatedSection>

            <AnimatedSection delay={500}>
              <a href="/services" className="block h-full transition-transform duration-300 hover:transform hover:scale-105">
                <ServiceCard 
                  icon={<Home className="text-pkkc-matte" size={40} />}
                  title="Fire Systems"
                  description="Fire protection systems designed as per NFPA, TAC, BIS, NBC, and local fire authority norms, including suppression systems and fire safety solutions."
                />
              </a>
            </AnimatedSection>

            <AnimatedSection delay={600}>
              <a href="/services" className="block h-full transition-transform duration-300 hover:transform hover:scale-105">
                <ServiceCard 
                  icon={<Layers className="text-pkkc-matte" size={40} />}
                  title="Sustainability Consulting"
                  description="Environmental audits, LEED certification, energy modeling, and sustainable design strategies for energy-efficient, eco-friendly buildings."
                />
              </a>
            </AnimatedSection>

            <AnimatedSection delay={700}>
              <a href="/services" className="block h-full transition-transform duration-300 hover:transform hover:scale-105">
                <ServiceCard 
                  icon={<FileSearch className="text-pkkc-matte" size={40} />}
                  title="BIM & Infrastructure"
                  description="BIM integration, peer reviews, infrastructure assessments, and master planning for high-performance township development."
                />
              </a>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <SectionTitle 
              title="Our Purpose" 
              subtitle="Mission & Vision"
            />
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <AnimatedSection>
              <div className="p-8 bg-pkkc-primary/5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                <h3 className="text-xl font-light mb-6">Our Mission</h3>
                <p className="text-2xl font-light text-pkkc-primary leading-relaxed">
                  To deliver sustainable, innovative, and seamlessly integrated design solutions that are functional, aesthetic, and implementable while developing efficient methodologies for successful project execution.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="p-8 bg-pkkc-primary/5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                <h3 className="text-xl font-light mb-6">Our Vision</h3>
                <p className="text-2xl font-light text-pkkc-primary leading-relaxed">
                  To become a leading multidisciplinary design firm, recognized for our holistic approach to architecture and engineering, creating timeless, efficient, and inspiring spaces that stand the test of time.
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
