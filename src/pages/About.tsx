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

          {/* Mr. Parveen Kumar Kalra */}
          <AnimatedSection delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-center mb-16">
              {/* Image Container */}
              <div className="md:col-span-2 w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-xl mx-auto max-w-sm md:max-w-none">
                <img
                  src="/images/founder.jpg" // --- UPDATE PATH AS NEEDED ---
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
                  Mr. Parveen Kumar Kalra leads the firm’s strategic direction, growth initiatives, and commitment to quality. With over 40+ Years of industry experience, he brings deep expertise in design, project execution, commissioning, and operations. Holding degrees in B.E, M.E, and M.I.E, he has played a pivotal role across sectors including township planning, institutional, industrial, and commercial projects.
                  </p>
                  <p>
                  Mr. Kalra is highly regarded for his proficiency in environmental clearances, ISO certifications, and adherence to international building standards. A Fellow of the Indian Plumbing Association and a certified Chartered Engineer, he is dedicated to creating sustainable, high-performance engineering solutions. He is also an active speaker, sharing his insights on township planning, green buildings, energy codes, and system design with both industry professionals and students.
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
                   Ms. Poorti Kalra – <b>Architect & Interior Designer</b>, a Master’s graduate in <b>Interior Architecture from UCLA, Los Angeles</b>, with a strong foundation in modern and minimalist design. After completing her Bachelor’s in Architecture in Delhi, she moved to LA to refine her expertise in contemporary and functional design.
                   </p>
                   <p>
                   Having worked in Maryland, USA, she has successfully handled and <b>led residential and commercial projects</b> from concept to completion, gaining experience across <b>Washington, D.C., Maryland, and Virginia.</b> Now, she brings her expertise back to PKKC, joining forces with her father to expand the company into a comprehensive <b>Architecture, Interior, and MEP</b> firm.
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


          <AnimatedSection delay={100}>
            <p className="text-center text-lg text-gray-600 mt-20 max-w-4xl mx-auto italic">
            Together, we aim to transform PKKC into a <b>comprehensive design and engineering powerhouse</b>, offering <b>seamless, integrated solutions</b> that cater to both the <b>technical and aesthetic</b> aspects of a project.
            </p>
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