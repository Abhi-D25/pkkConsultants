import { Fan, Lightbulb, Droplets, Home, Leaf, FileSearch } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import AnimatedSection from '@/components/AnimatedSection';
import CTA from '@/components/CTA';

const Services = () => {
  return (
    <div className="pt-20">
      {/* Services Hero */}
      <section className="relative py-20 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-light text-white mb-6">Our Services</h1>
            <p className="text-xl text-gray-300 font-light">
              Integrated Architecture, Interior & MEP Solutions for Seamless Design & Execution
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <SectionTitle 
              title="Integrated MEP and Design Solutions" 
              subtitle="A one-stop solution for architecture, interiors, and engineering"
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection delay={200}>
              <div>
                <p className="text-lg text-gray-600 mb-6">
                  We provide comprehensive engineering and design consulting services, combining expertise in MEP technology, architecture, and interior design. Our multidisciplinary approach ensures energy-efficient, functional, and aesthetically refined projects.
                </p>
                <p className="text-lg text-gray-600">
                  With experience spanning thousands of projects, we bring precision, innovation, and sustainability to every endeavor. Our integrated approach ensures that all aspects of your project work harmoniously, from the structural systems to the interior finishes.
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
              subtitle="In-depth expertise across engineering, architecture, and interior design"
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
                    <h3 className="text-2xl font-bold text-pkkc-navy mb-4">MEP Engineering Services</h3>
                    <p className="text-gray-600 mb-6">
                      Our MEP solutions include comprehensive mechanical, electrical, and plumbing design tailored to your specific project requirements. We provide end-to-end solutions from concept development to detailed design and documentation.
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Mechanical, Electrical, and Plumbing (MEP) Design</li>
                      <li>Firefighting and Safety Systems</li>
                      <li>Plumbing and Sanitary Engineering</li>
                      <li>Electrical Design and Power Solutions</li>
                      <li>HVAC Design and Energy Optimization</li>
                      <li>Water Treatment and Sewage Management</li>
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
                    <h3 className="text-2xl font-bold text-pkkc-navy mb-4">Fire Protection Systems</h3>
                    <p className="text-gray-600 mb-6">
                      We design fire protection systems as per NFPA, TAC, BIS, NBC, and local fire authority norms for various building types. Our comprehensive fire safety solutions ensure occupant safety and regulatory compliance.
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Clean agent suppression systems for sensitive equipment rooms</li>
                      <li>CO2 extinguishing systems for electrical panels</li>
                      <li>Portable fire extinguishers for first-aid fire safety</li>
                      <li>Fire suppression systems for kitchens and specialized areas</li>
                      <li>Helipad fire protection in compliance with NFPA 418</li>
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-16 text-pkkc-gold">
                    <Droplets size={64} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-pkkc-navy mb-4">Plumbing & Sanitary Systems</h3>
                    <p className="text-gray-600 mb-6">
                      Our solutions meet WHO standards and national/international codes for water conservation and efficiency. We design reliable plumbing systems that prioritize safety, water conservation, and regulatory compliance.
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Water consumption analysis and rainwater harvesting</li>
                      <li>Sewage Treatment Plants (STP) for effective waste management</li>
                      <li>Water treatment systems including filtration, softeners, and RO units</li>
                      <li>Fuel storage and distribution for DG sets and boilers</li>
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={500}>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-16 text-pkkc-gold">
                    <Lightbulb size={64} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-pkkc-navy mb-4">Electrical Design Services</h3>
                    <p className="text-gray-600 mb-6">
                      We deliver customized electrical solutions with power backup and protection systems. Our electrical engineering services include comprehensive load calculations, distribution design, and lighting solutions that ensure safety, efficiency, and reliability.
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Earthing & lightning protection per Indian and international standards</li>
                      <li>UPS systems for uninterrupted power to critical equipment</li>
                      <li>DG sets with noise & pollution control for emergency backup</li>
                      <li>Lighting design and control systems</li>
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
                    <h3 className="text-2xl font-bold text-pkkc-navy mb-4">HVAC Design Services</h3>
                    <p className="text-gray-600 mb-6">
                      Optimized for energy efficiency and climate adaptability, our HVAC solutions ensure thermal comfort and air quality. We design efficient heating, ventilation, and air conditioning systems that optimize comfort, energy consumption, and operational costs.
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Compliance with ASHRAE, CIBSE, NBC, and Energy Conservation Act</li>
                      <li>Zoning and space usage strategies for optimal energy utilization</li>
                      <li>Smart climate control for commercial, residential, and institutional buildings</li>
                      <li>Indoor air quality optimization</li>
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
                    <h3 className="text-2xl font-bold text-pkkc-navy mb-4">Architectural & Interior Design Services</h3>
                    <p className="text-gray-600 mb-6">
                      We integrate architecture and interior design with MEP engineering for cohesive, high-performance spaces. Our design team creates functional, beautiful, and user-centric environments tailored to your specific needs.
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li><span className="font-semibold">Architectural Services:</span> Concept development, master planning, sustainable and energy-efficient building designs, BIM modeling</li>
                      <li><span className="font-semibold">Interior Design Services:</span> Bespoke interiors for various spaces, space planning, material selection, lighting design, furniture customization</li>
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <SectionTitle 
              title="Join Our Team" 
              subtitle="Build your career with PKKC"
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection delay={200}>
              <div>
                <p className="text-lg text-gray-600 mb-6">
                  Whether you're a high school student exploring a future in consulting engineering, a recent college graduate, or an experienced professional, PKKC offers a dynamic environment where you can collaborate with a diverse team of innovators and problem solvers.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  We foster strong connections with colleagues and clients through both professional contributions and social engagement.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-gray-50 p-4 rounded">
                    <h4 className="font-medium text-pkkc-navy mb-2">Work</h4>
                    <p className="text-gray-600 text-sm">A balance of hard work and smart work.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <h4 className="font-medium text-pkkc-navy mb-2">Active</h4>
                    <p className="text-gray-600 text-sm">A commitment to improving our communities.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <h4 className="font-medium text-pkkc-navy mb-2">Engage</h4>
                    <p className="text-gray-600 text-sm">A deep understanding of our clients' needs.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <h4 className="font-medium text-pkkc-navy mb-2">Balance</h4>
                    <p className="text-gray-600 text-sm">A belief in maintaining work-life harmony.</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/4b008611-433a-4491-b4e1-1f03f43254d1.png" 
                  alt="Join Our Team" 
                  className="w-full h-auto" 
                />
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
