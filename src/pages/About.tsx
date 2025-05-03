import SectionTitle from '@/components/SectionTitle';
import AnimatedSection from '@/components/AnimatedSection';
import CTA from '@/components/CTA';

const About = () => {
  return (
    <div>
      {/* About Hero */}
      <section className="relative py-40 bg-pkkc-black backdrop-blur-sm">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-light text-pkkc-gold mb-6">About PK Kalra Consultants</h1>
            <p className="text-xl text-gray-300 font-light">
              A distinguished engineering and design consulting firm expanding beyond MEP engineering to include Architecture and Interior Design.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <SectionTitle
              title="Our Story"
              subtitle="Expansion from MEP to a full-service design firm"
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection delay={200}>
              <div>
                <p className="text-lg text-gray-600 mb-6">
                  Founded in 2002, PK Kalra Consultants (PKKC) has been a trusted name in MEP engineering for over 23 years. With a strong foundation in delivering technically sound, efficient, and sustainable engineering solutions, we have consistently upheld our commitment to excellence, integrity, and long-term client partnerships.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  From the outset, PKKC has focused on providing exceptional service tailored to the unique requirements of each project. Drawing on deep experience across a diverse portfolio, we bring a solutions-driven mindset backed by proven expertise. Our reputation has been built on delivering on promises—on time, on budget, and with the highest standards of professionalism.
                </p>
                <p className="text-lg text-gray-600">
                  Today, PKKC is proud to evolve into a multidisciplinary design and consulting firm, expanding our scope to include Architecture and Interior Design. This strategic growth allows us to offer integrated, end-to-end solutions that merge design creativity with engineering precision. Our holistic approach ensures that every project is not only structurally sound but also aesthetically refined, user-centric, and sustainably designed. With a focus on innovation, functionality, and environmental responsibility, we are committed to shaping spaces that inspire, perform, and endure.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <div className="rounded-lg overflow-hidden shadow-md">
                <img
                  src="/images/team.jpg" // Replace if you have a specific image for this section
                  alt="Engineering Excellence"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-20 bg-pkkc-light">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <SectionTitle
              title="Our Expertise"
              subtitle="Comprehensive services across multiple disciplines"
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Core Engineering Card */}
            <AnimatedSection delay={200}>
              <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-pkkc-gold h-full flex flex-col">
                <h3 className="text-2xl font-bold text-pkkc-navy mb-4">Core Engineering</h3>
                <ul className="text-gray-600 space-y-2 flex-grow">
                  <li>• Infrastructure Assessments & Master Planning</li>
                  <li>• MEP Designs & Energy Audits</li>
                  <li>• Environmental Audits & Sustainability Consulting</li>
                  <li>• LEED Certification & Energy Modelling</li>
                  <li>• BIM Integration & Peer Reviews</li>
                  <li>• Systems Commissioning & High-Performance Townships</li>
                </ul>
              </div>
            </AnimatedSection>

            {/* Architecture Card */}
            <AnimatedSection delay={300}>
              <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-pkkc-gold h-full flex flex-col">
                <h3 className="text-2xl font-bold text-pkkc-navy mb-4">Architecture</h3>
                <ul className="text-gray-600 space-y-2 flex-grow">
                  <li>• Concept development and master planning</li>
                  <li>• Sustainable and energy-efficient building designs</li>
                  <li>• Residential, commercial, institutional projects</li>
                  <li>• 3D visualization and BIM modeling</li>
                  <li>• Space planning and ergonomic optimization</li>
                </ul>
              </div>
            </AnimatedSection>

            {/* Interior Design Card */}
            <AnimatedSection delay={400}>
              <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-pkkc-gold h-full flex flex-col">
                <h3 className="text-2xl font-bold text-pkkc-navy mb-4">Interior Design</h3>
                <ul className="text-gray-600 space-y-2 flex-grow">
                  <li>• Bespoke interiors for homes, offices, retail</li>
                  <li>• Space planning and ergonomic optimization</li>
                  <li>• Material selection and finishes</li>
                  <li>• Lighting design and furniture customization</li>
                  <li>• Hospitality and commercial interiors</li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* --- NEW LEADERSHIP SECTION --- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <SectionTitle
              title="The Leadership"
              subtitle="Combining Decades of Expertise with Modern Innovation"
            />
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <p className="text-center text-lg text-gray-700 mb-12 max-w-4xl mx-auto font-light">
              As a father-daughter-led firm, PKKC combines decades of engineering expertise with architectural and interior design innovation. Together, we aim to transform PKKC into a comprehensive design and engineering powerhouse, offering seamless, integrated solutions that cater to both the technical and aesthetic aspects of a project.
            </p>
          </AnimatedSection>

          {/* Mr. Parveen Kumar Kalra */}
          <AnimatedSection delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-center mb-16">
              {/* Image Container */}
              <div className="md:col-span-2 w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-xl mx-auto max-w-sm md:max-w-none">
                <img
                  src="/images/founder.png" // --- UPDATE PATH AS NEEDED ---
                  alt="Mr. Parveen Kumar Kalra - Founder & CEO"
                  className="w-full h-full object-contain object-center"
                />
              </div>
              {/* Text Content */}
              <div className="md:col-span-3">
                <h3 className="text-3xl font-semibold text-pkkc-navy mb-2">Mr. Parveen Kumar Kalra</h3>
                <p className="text-lg font-medium text-pkkc-gold mb-4">Founder & CEO</p>
                <div className="text-gray-600 space-y-3 text-base leading-relaxed">
                  <p>
                    Mr. Kalra is responsible for the firm's strategic focus, growth, and quality initiatives. With over 25 years of experience, he is an expert in design, commissioning, operations, and project management.
                  </p>
                  <p>
                    His knowledge spans township planning, institutional, industrial, and commercial sectors, complemented by deep expertise in environmental clearance, ISO certifications, and international building standards.
                  </p>
                  <p>
                    A fellow member of the Indian Plumbing Association and a certified chartered engineer, he is committed to delivering sustainable, high-performance designs. He regularly lectures on efficient township planning, Green Buildings, Energy Codes, and System Design.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Ms. Poorti Kalra */}
          <AnimatedSection delay={300}>
             {/* Using flexbox for easier reordering on mobile vs desktop */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
              {/* Text Content (Order 1 on mobile, Order 1 on desktop) */}
              <div className="md:order-1 w-full md:w-3/5">
                <h3 className="text-3xl font-semibold text-pkkc-navy mb-2">Ms. Poorti Kalra</h3>
                <p className="text-lg font-medium text-pkkc-gold mb-4">Architect & Interior Designer</p>
                 <div className="text-gray-600 space-y-3 text-base leading-relaxed">
                   <p>
                     Ms. Kalra holds a Master's degree in Interior Architecture from UCLA, Los Angeles, building upon her Bachelor's in Architecture from Delhi. Her design philosophy is rooted in modern and minimalist principles.
                   </p>
                   <p>
                     She refined her expertise in contemporary and functional design while working in Maryland, USA, successfully managing residential and commercial projects from concept to completion across the Washington, D.C., Maryland, and Virginia (DMV) area.
                   </p>
                   <p>
                     Now back at PKKC, she joins forces with her father, bringing her international experience and design perspective to expand the firm into a comprehensive Architecture, Interior, and MEP practice, aiming to redefine integrated design solutions.
                   </p>
                 </div>
              </div>
              {/* Image Container (Order 2 on mobile, Order 2 on desktop) */}
              <div className="w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-xl md:order-2 md:w-2/5">
                <img
                  src="/images/poorti.jpg" // --- USING THE PROVIDED IMAGE PATH ---
                  alt="Ms. Poorti Kalra - Architect & Interior Designer"
                  className="w-full h-full object-contain object-center"
                />
              </div>
            </div>
          </AnimatedSection>

        </div>
      </section>
      {/* --- END LEADERSHIP SECTION --- */}


      {/* Why Choose Us */}
      <section className="py-20 bg-pkkc-light"> {/* Changed background for variation */}
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <SectionTitle
              title="Why Choose PKKC"
              subtitle="What sets us apart"
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8"> {/* Adjusted grid for potentially 4 items */}
            <AnimatedSection delay={200}>
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow duration-300 h-full">
                <h3 className="text-xl font-medium text-pkkc-navy mb-3">Innovation & Thought Leadership</h3>
                <p className="text-gray-600 text-sm">We challenge industry norms to develop cutting-edge solutions.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow duration-300 h-full">
                <h3 className="text-xl font-medium text-pkkc-navy mb-3">Integrated Design Approach</h3>
                <p className="text-gray-600 text-sm">Architecture, Interiors, and Engineering under one roof.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow duration-300 h-full">
                <h3 className="text-xl font-medium text-pkkc-navy mb-3">Sustainable & Efficient Solutions</h3>
                <p className="text-gray-600 text-sm">We deliver energy-optimized, sustainable, and GREEN-certified projects.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={500}>
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow duration-300 h-full">
                <h3 className="text-xl font-medium text-pkkc-navy mb-3">Aesthetic Excellence</h3>
                <p className="text-gray-600 text-sm">Our expertise ensures functional, elegant, and modern spaces.</p>
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

export default About;