import { useState } from 'react';
import SectionTitle from '@/components/SectionTitle';
import AnimatedSection from '@/components/AnimatedSection';
import CTA from '@/components/CTA';
import { Button } from '@/components/ui/button';

const PortfolioItem = ({ 
  imageSrc, 
  title, 
  category 
}: { 
  imageSrc: string; 
  title: string; 
  category: string;
}) => {
  return (
    <div className="group cursor-pointer relative overflow-hidden">
      <div className="aspect-w-3 aspect-h-2 bg-gray-100">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover transition-all duration-500 group-hover:grayscale-0"
        />
      </div>
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <h3 className="text-xl font-light text-white">{title}</h3>
        <p className="text-gray-300 font-light">{category}</p>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [filter, setFilter] = useState<string>('all');

  const projects = [
    {
      id: 1,
      title: 'Corporate Office MEP Integration',
      category: 'mep',
      imageSrc: '/images/mep-1.jpg'
    },
    {
      id: 2,
      title: 'Residential Tower HVAC Planning',
      category: 'mep',
      imageSrc: '/images/mep-2.jpg'
    },
    {
      id: 3,
      title: 'Luxury Retail Complex',
      category: 'mep',
      imageSrc: '/images/mep-3.jpg'
    },
    {
      id: 4,
      title: 'Modern Office Building',
      category: 'architecture',
      imageSrc: '/images/mep-1.jpg'
    },
    {
      id: 5,
      title: 'Community Center Design',
      category: 'architecture',
      imageSrc: '/images/mep-2.jpg'
    },
    {
      id: 6,
      title: 'Boutique Hotel',
      category: 'architecture',
      imageSrc: '/images/mep-3.jpg'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-pkkc-black backdrop-blur-sm py-40">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-pkkc-gold mb-6">
              Selected Work
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
              A curated collection of our integrated architecture, interior, and MEP engineering projects.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            <div className="flex justify-center flex-wrap gap-4 mb-12">
              <Button 
                variant={filter === 'all' ? 'default' : 'outline'} 
                onClick={() => setFilter('all')}
                className={`font-light ${filter === 'all' ? 'bg-pkkc-primary text-white' : 'text-gray-700'}`}
              >
                All Projects
              </Button>
              <Button 
                variant={filter === 'mep' ? 'default' : 'outline'} 
                onClick={() => setFilter('mep')}
                className={`font-light ${filter === 'mep' ? 'bg-pkkc-primary text-white' : 'text-gray-700'}`}
              >
                MEP Projects
              </Button>
              <Button 
                variant={filter === 'architecture' ? 'default' : 'outline'} 
                onClick={() => setFilter('architecture')}
                className={`font-light ${filter === 'architecture' ? 'bg-pkkc-primary text-white' : 'text-gray-700'}`}
              >
                Architecture Projects
              </Button>
              <Button 
                variant={filter === 'interior' ? 'default' : 'outline'} 
                onClick={() => setFilter('interior')}
                className={`font-light ${filter === 'interior' ? 'bg-pkkc-primary text-white' : 'text-gray-700'}`}
                disabled
              >
                Interior Design <span className="ml-2 text-xs bg-gray-200 px-2 py-1 rounded text-gray-700">Coming Soon</span>
              </Button>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <AnimatedSection key={project.id} delay={project.id * 100}>
                <PortfolioItem 
                  imageSrc={project.imageSrc}
                  title={project.title}
                  category={project.category === 'mep' ? 'MEP Engineering' : 'Architecture'}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <AnimatedSection>
            <SectionTitle 
              title="Interior Design Portfolio" 
              subtitle="Our interior design portfolio will be launching soon. Contact us to learn more about our interior design capabilities and services."
            />
            <div className="mt-8">
              <Button asChild className="bg-pkkc-primary hover:bg-pkkc-primary/90 text-white font-light">
                <a href="/contact">Inquire About Interior Design</a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <CTA />
    </div>
  );
};

export default Portfolio; 