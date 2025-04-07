
import { Fan, Lightbulb, Droplets, Home, Leaf, FileSearch } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import AnimatedSection from '@/components/AnimatedSection';
import CTA from '@/components/CTA';

const Services = () => {
  return (
    <div className="pt-20">
      {/* Services Hero */}
      <section className="relative py-20 bg-pkkc-navy">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Engineering Services</h1>
            <p className="text-xl text-gray-300">
              Comprehensive engineering and design solutions tailored to your project needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <SectionTitle 
              title="What We Offer" 
              subtitle="Explore our comprehensive range of engineering services"
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection delay={200}>
              <div>
                <p className="text-lg text-gray-600 mb-6">
                  At PK Kalra Consultants, we offer a comprehensive range of engineering and design services to meet the diverse needs of our clients. From MEP design to green building solutions, our team of experts is committed to delivering excellence on every project.
                </p>
                <p className="text-lg text-gray-600">
                  Our services are tailored to meet the specific requirements of various project types, including commercial, residential, hospitality, healthcare, and industrial. We work closely with our clients to understand their vision and requirements, ensuring that our solutions exceed their expectations.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/4b008611-433a-4491-b4e1-1f03f43254d1.png" 
                  alt="Engineering Services" 
                  className="w-full h-auto" 
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 bg-pkkc-light">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <SectionTitle 
              title="Our Specialized Services" 
              subtitle="In-depth expertise across all areas of engineering design"
            />
          </AnimatedSection>

          <div className="space-y-12">
            <AnimatedSection delay={200}>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-16 text-pkkc-gold">
                    <Home size={64} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-pkkc-navy mb-4">MEP Design & Consultancy</h3>
                    <p className="text-gray-600 mb-6">
                      Our core service involves comprehensive mechanical, electrical, and plumbing engineering design tailored to your specific project requirements. We provide end-to-end solutions from concept development to detailed design and documentation.
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Comprehensive MEP system design and documentation</li>
                      <li>Project-specific engineering solutions</li>
                      <li>Coordination with architectural and structural designs</li>
                      <li>Regulatory compliance and standards adherence</li>
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-16 text-pkkc-gold">
                    <Fan size={64} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-pkkc-navy mb-4">HVAC System Design</h3>
                    <p className="text-gray-600 mb-6">
                      We design efficient heating, ventilation, and air conditioning systems that optimize comfort, energy consumption, and operational costs. Our HVAC solutions are tailored to meet the specific requirements of different building types and climatic conditions.
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Heating and cooling load calculations</li>
                      <li>Energy-efficient HVAC system selection</li>
                      <li>Ductwork and piping design</li>
                      <li>Indoor air quality optimization</li>
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-16 text-pkkc-gold">
                    <Lightbulb size={64} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-pkkc-navy mb-4">Electrical Load & Distribution Design</h3>
                    <p className="text-gray-600 mb-6">
                      Our electrical engineering services include comprehensive load calculations, distribution design, and lighting solutions that ensure safety, efficiency, and reliability. We focus on creating electrical systems that meet current needs while allowing for future expansion.
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Power distribution system design</li>
                      <li>Lighting design and control systems</li>
                      <li>Emergency power systems</li>
                      <li>Safety and protection system design</li>
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={500}>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-16 text-pkkc-gold">
                    <Droplets size={64} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-pkkc-navy mb-4">Plumbing & Firefighting Systems</h3>
                    <p className="text-gray-600 mb-6">
                      We design reliable plumbing and firefighting systems that prioritize safety, water conservation, and regulatory compliance. Our solutions include water supply, drainage, and fire protection systems tailored to your specific project requirements.
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Water supply and distribution systems</li>
                      <li>Drainage and sewage systems</li>
                      <li>Rainwater harvesting and management</li>
                      <li>Fire detection and suppression systems</li>
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={600}>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-16 text-pkkc-gold">
                    <Leaf size={64} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-pkkc-navy mb-4">Green Building & Energy Efficiency</h3>
                    <p className="text-gray-600 mb-6">
                      Sustainability is at the core of our design philosophy. We provide green building solutions that minimize environmental impact while maximizing energy efficiency and occupant comfort. Our team is experienced in various green building rating systems.
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Energy modeling and analysis</li>
                      <li>Renewable energy integration</li>
                      <li>Green building certification assistance</li>
                      <li>Sustainable design strategies</li>
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={700}>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-16 text-pkkc-gold">
                    <FileSearch size={64} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-pkkc-navy mb-4">Site Supervision & Technical Audits</h3>
                    <p className="text-gray-600 mb-6">
                      We provide comprehensive on-site quality control and performance evaluations at every stage of your project. Our technical audit services ensure that all engineering systems are installed and functioning as designed.
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Construction phase monitoring</li>
                      <li>System commissioning assistance</li>
                      <li>Performance testing and verification</li>
                      <li>Operational efficiency assessments</li>
                    </ul>
                  </div>
                </div>
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

export default Services;
