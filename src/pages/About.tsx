
import SectionTitle from '@/components/SectionTitle';
import AnimatedSection from '@/components/AnimatedSection';
import CTA from '@/components/CTA';

const About = () => {
  return (
    <div className="pt-20">
      {/* About Hero */}
      <section className="relative py-20 bg-pkkc-navy">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About PK Kalra Consultants</h1>
            <p className="text-xl text-gray-300">
              Shaping India's built environment with cutting-edge engineering and design excellence since 2002.
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
              subtitle="A journey of engineering excellence and innovation"
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection delay={200}>
              <div>
                <p className="text-lg text-gray-600 mb-6">
                  Founded in 2002, PK Kalra Consultants (PKKC) began with a vision to transform the engineering and design landscape in India. Our journey started with a small team of dedicated engineers focused on MEP design for residential projects.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Over the years, we have expanded our expertise to include a comprehensive range of engineering services. Today, we are proud to have a strong team of engineers, architects, designers, and project managers who share our commitment to excellence.
                </p>
                <p className="text-lg text-gray-600">
                  What sets us apart is our unwavering focus on sustainable, high-performing, and cost-effective solutions. We don't just design buildings—we shape the future of infrastructure with innovation and sustainability at the core.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/19aa26bc-fc07-4c50-97a1-72dad6ec51c3.png" 
                  alt="Engineering Excellence" 
                  className="w-full h-auto" 
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-pkkc-light">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <SectionTitle 
              title="Our Approach" 
              subtitle="How we deliver engineering excellence on every project"
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection delay={200}>
              <div className="bg-white p-8 rounded-lg shadow-md border-t-2 border-pkkc-gold h-full">
                <h3 className="text-2xl font-bold text-pkkc-navy mb-4">Collaborative Process</h3>
                <p className="text-gray-600">
                  We believe that the best results come from close collaboration with our clients. By understanding your vision and requirements, we can deliver solutions that exceed expectations.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="bg-white p-8 rounded-lg shadow-md border-t-2 border-pkkc-gold h-full">
                <h3 className="text-2xl font-bold text-pkkc-navy mb-4">Technical Excellence</h3>
                <p className="text-gray-600">
                  Our team of experts brings deep technical knowledge and practical experience to every project. We stay at the forefront of industry advancements to deliver cutting-edge solutions.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <div className="bg-white p-8 rounded-lg shadow-md border-t-2 border-pkkc-gold h-full">
                <h3 className="text-2xl font-bold text-pkkc-navy mb-4">Sustainable Focus</h3>
                <p className="text-gray-600">
                  Sustainability is at the heart of everything we do. We design with the future in mind, creating spaces that minimize environmental impact while maximizing efficiency and comfort.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <SectionTitle 
              title="Our Leadership" 
              subtitle="Meet the experts behind our engineering excellence"
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <AnimatedSection delay={200}>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/5231f21c-77d3-43cd-b76d-d8c3df34b88e.png" 
                  alt="Parveen Kumar Kalra, Founder and CEO" 
                  className="w-full h-auto" 
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div>
                <h3 className="text-2xl font-bold text-pkkc-navy mb-2">Parveen Kumar Kalra</h3>
                <p className="text-pkkc-gold font-medium mb-4">Founder and CEO</p>
                <p className="text-lg text-gray-600 mb-6">
                  With over 25 years of expertise in MEP engineering, Parveen has led the company from its inception to become a leading engineering consultancy in India. His vision and leadership continue to drive the firm's commitment to excellence and innovation.
                </p>
                <p className="text-lg text-gray-600">
                  Parveen's extensive experience spans across commercial, residential, hospitality, healthcare, and industrial sectors, providing him with a comprehensive understanding of diverse project requirements and challenges.
                </p>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={400}>
            <div className="bg-pkkc-light p-8 rounded-lg">
              <p className="text-lg text-center text-gray-600 italic">
                "Our team comprises talented engineers, architects, designers, and project managers who are committed to delivering sustainable, high-performing, and cost-effective solutions for all our clients."
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <CTA />
    </div>
  );
};

export default About;
