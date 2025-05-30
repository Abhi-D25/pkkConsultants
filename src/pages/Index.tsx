import { Fan, Lightbulb, Droplets, Home, Layers, FileSearch, Award } from 'lucide-react';
import Hero from '@/components/Hero';
import SectionTitle from '@/components/SectionTitle';
import ServiceCard from '@/components/ServiceCard';
import AnimatedSection from '@/components/AnimatedSection';
import CTA from '@/components/CTA';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Updated Hero text is within the Hero component */}
      <Hero />

      {/* About Section - Updated with warm background */}
      <section className="py-20 bg-pkkc-mediumBeige">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <SectionTitle
              title="PK Kalra Consultants" 
              subtitle="Engineering Excellence Meets Design Innovation"
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-12">
            <AnimatedSection delay={200}>
              <div>
                <p className="text-lg text-gray-600 mb-8 font-light leading-relaxed">
                  <span className="font-medium">PKKC</span> is a distinguished Engineering and Design consulting firm with a proud legacy in MEP Engineering, <span className="font-medium">now expanding its scope to include Architecture and Interior Design.</span>
                </p>
                <p className="text-lg text-gray-600 mb-8 font-light leading-relaxed">
                  With decades of experience in designing sustainable and high-performing building and township systems, we now offer a comprehensive, one-stop solution that fuses engineering precision with architectural creativity.
                </p>
                <p className="text-lg text-gray-600 mb-8 font-light leading-relaxed">
                  <span className="font-medium">Our expansion into Architecture and Interior Design ensures that every project is not only Engineered efficiently but also aesthetically refined, user-centric, and Vastu compliant.</span> As a true multidisciplinary firm, we embrace an integrated approach that balances functionality, innovation, and sustainability.
                </p>
                <p className="text-lg text-gray-600 mb-8 font-light leading-relaxed">
                  At PKKC, we are committed to the principles of green building and are actively engaged in designing Zero Liquid Discharge (ZLD) projects to promote environmental responsibility.
                </p>
                <p className="text-lg text-gray-600 font-light leading-relaxed">
                  Our success is defined by long-standing client relationships and a remarkable 90% repeat business rate—testament to the trust we've built through timely delivery, cost-effective solutions, and excellence in both design and performance.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <div className="bg-pkkc-darkBeige p-10 rounded-sm">
                <div className="grid grid-cols-2 gap-8 max-w-2xl mx-auto">
                  <div className="text-center col-span-2">
                    <h3 className="text-5xl font-light text-pkkc-primary mb-3">25+</h3>
                    <p className="text-gray-600 font-light">Years Experience</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-5xl font-light text-pkkc-primary mb-3">200+</h3>
                    <p className="text-gray-600 font-light">Projects Completed</p>
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

      {/* Services Section - Updated background */}
      <section className="py-20 bg-pkkc-cream">
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
                  icon={<Award className="text-pkkc-matte" size={40} />}
                  title="Specialised Services"
                  description="Environmental policies, ISO consultancy, impact assessment studies, Vastu-compliant design solutions, and façade design & optimization."
                />
              </a>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Specialized Services Section - Updated background */}
      <section className="py-20 bg-pkkc-mediumBeige">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <SectionTitle 
              title="Specialised Services" 
              subtitle="Our additional expertise to enhance your projects"
            />
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <AnimatedSection delay={200}>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 border-l-4 border-l-pkkc-gold group hover:translate-y-[-5px] h-full">
                <div className="flex items-start h-full">
                  <div className="mr-4 mt-1 text-pkkc-primary">
                    <div className="w-3 h-3 bg-pkkc-gold rounded-full group-hover:scale-110 transition-transform duration-300"></div>
                  </div>
                  <p className="text-gray-700 font-light group-hover:text-pkkc-darkGold transition-colors">ISO-9001 : 2000 consultancy and auditing</p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={300}>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 border-l-4 border-l-pkkc-gold group hover:translate-y-[-5px] h-full">
                <div className="flex items-start h-full">
                  <div className="mr-4 mt-1 text-pkkc-primary">
                    <div className="w-3 h-3 bg-pkkc-gold rounded-full group-hover:scale-110 transition-transform duration-300"></div>
                  </div>
                  <p className="text-gray-700 font-light group-hover:text-pkkc-darkGold transition-colors">Environmental Impact Assessment Studies</p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={350}>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 border-l-4 border-l-pkkc-gold group hover:translate-y-[-5px] h-full">
                <div className="flex items-start h-full">
                  <div className="mr-4 mt-1 text-pkkc-primary">
                    <div className="w-3 h-3 bg-pkkc-gold rounded-full group-hover:scale-110 transition-transform duration-300"></div>
                  </div>
                  <p className="text-gray-700 font-light group-hover:text-pkkc-darkGold transition-colors">Cost-effective solutions to High-End, customized luxury spaces</p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={400}>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 border-l-4 border-l-pkkc-gold group hover:translate-y-[-5px] h-full">
                <div className="flex items-start h-full">
                  <div className="mr-4 mt-1 text-pkkc-primary">
                    <div className="w-3 h-3 bg-pkkc-gold rounded-full group-hover:scale-110 transition-transform duration-300"></div>
                  </div>
                  <p className="text-gray-700 font-light group-hover:text-pkkc-darkGold transition-colors">Vastu-Compliant Design Solutions</p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={450}>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 border-l-4 border-l-pkkc-gold group hover:translate-y-[-5px] h-full">
                <div className="flex items-start h-full">
                  <div className="mr-4 mt-1 text-pkkc-primary">
                    <div className="w-3 h-3 bg-pkkc-gold rounded-full group-hover:scale-110 transition-transform duration-300"></div>
                  </div>
                  <p className="text-gray-700 font-light group-hover:text-pkkc-darkGold transition-colors">Façade Design & Optimization</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Updated background */}
      <section className="py-20 bg-pkkc-cream">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <SectionTitle 
              title="Our Purpose" 
              subtitle="Mission & Vision"
            />
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <AnimatedSection>
              <div className="p-8 bg-pkkc-light rounded-lg shadow-sm border border-gray-300 hover:shadow-md transition-all duration-300 h-full flex flex-col transform hover:-translate-y-2 hover:rotate-1">
                <h3 className="text-xl font-medium mb-6 text-pkkc-darkGold italic">Our Mission</h3>
                <p className="text-2xl font-light text-gray-500 leading-relaxed">
                  To deliver sustainable, innovative, and seamlessly integrated design solutions that are functional, aesthetic, and implementable while developing efficient methodologies for successful project execution.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="p-8 bg-pkkc-light rounded-lg shadow-sm border border-gray-300 hover:shadow-md transition-all duration-300 h-full flex flex-col transform hover:-translate-y-2 hover:-rotate-1">
                <h3 className="text-xl font-medium mb-6 text-pkkc-darkGold italic">Our Vision</h3>
                <p className="text-2xl font-light text-gray-500 leading-relaxed">
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