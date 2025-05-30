import { useState } from 'react';
import SectionTitle from '@/components/SectionTitle';
import AnimatedSection from '@/components/AnimatedSection';
import CTA from '@/components/CTA';
import { Button } from '@/components/ui/button';

// Updated PortfolioItem component to include more details
const PortfolioItem = ({ 
  imageSrc, 
  title,
  client,
  buildingType,
  bua,
  location,
  scope,
  completionYear,
  category 
}: { 
  imageSrc: string; 
  title: string;
  client?: string;
  buildingType?: string;
  bua?: string;
  location?: string;
  scope?: string;
  completionYear?: string;
  category: string;
}) => {
  return (
    <div className="group cursor-pointer relative overflow-hidden rounded-lg shadow-md border border-gray-100 flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="aspect-w-3 aspect-h-2 bg-gray-100 overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6 bg-white flex-grow transition-colors duration-300 group-hover:bg-gray-50">
        <h3 className="text-xl font-medium text-pkkc-navy mb-3 transition-colors duration-300 group-hover:text-pkkc-gold">{title}</h3>
        
        <div className="space-y-2">
          {client && (
            <div>
              <span className="text-sm font-medium text-gray-600">Client:</span>
              <span className="text-sm text-gray-700 ml-2">{client}</span>
            </div>
          )}
          
          {buildingType && (
            <div>
              <span className="text-sm font-medium text-gray-600">Building Type:</span>
              <span className="text-sm text-gray-700 ml-2">{buildingType}</span>
            </div>
          )}
          
          {bua && (
            <div>
              <span className="text-sm font-medium text-gray-600">BUA:</span>
              <span className="text-sm text-gray-700 ml-2">{bua}</span>
            </div>
          )}
          
          {location && (
            <div>
              <span className="text-sm font-medium text-gray-600">Location:</span>
              <span className="text-sm text-gray-700 ml-2">{location}</span>
            </div>
          )}
          
          {scope && (
            <div>
              <span className="text-sm font-medium text-gray-600">Scope:</span>
              <span className="text-sm text-gray-700 ml-2">{scope}</span>
            </div>
          )}
          
          {completionYear && (
            <div>
              <span className="text-sm font-medium text-gray-600">Completed:</span>
              <span className="text-sm text-gray-700 ml-2">{completionYear}</span>
            </div>
          )}
        </div>
      </div>
      
      <div className="absolute top-0 right-0 bg-pkkc-gold text-white px-3 py-1 text-sm font-medium transition-colors duration-300 group-hover:bg-pkkc-darkGold">
        {category}
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [filter, setFilter] = useState<string>('all');

  // Updated projects data with the information from the revisions
  const projects = [
    {
      id: 1,
      title: '"70 Grandwalk" - Commercial Complex',
      client: 'SHINE BUILDCON PVT LTD.',
      buildingType: 'COMMERCIAL',
      bua: '362000 sft',
      location: 'Sector-70, Gurugram',
      scope: 'Consultancy for design of Complete MEP Engineering services',
      completionYear: '2023',
      category: 'mep',
      imageSrc: '/images/mep-1.jpg'
    },
    {
      id: 2,
      title: 'RESIDENTIAL PLOTTED COLONY "VERSALIA" AT GURUGRAM',
      client: 'ANSAL PROJECTS INFRASTRUCTURE LIMITED',
      buildingType: 'RESIDENTIAL',
      bua: '104 ACRES',
      location: 'Gurugram',
      scope: 'Consultancy for design of Complete MEP Infrastructure (External Development) Engineering services',
      completionYear: '2009',
      category: 'mep',
      imageSrc: '/images/mep-2.jpg'
    },
    {
      id: 3,
      title: 'EXTERNAL DEVELOPMENT OF LDEFF PLOTTED COLONY AT MURTHAL',
      client: 'ANSAL INFRASTRUCTURE LIMITED',
      buildingType: 'RESIDENTIAL',
      bua: '218.85 ACRES',
      location: 'SONIPAT',
      scope: 'Consultancy for design of Complete MEP Infrastructure (External Development) Engineering services',
      completionYear: '2012',
      category: 'mep',
      imageSrc: '/images/mep-3.jpg'
    },
    {
      id: 4,
      title: 'ARG - HIGH END APARTMENTS AT JAIPUR',
      client: 'ARG DEVELOPERS PVT LTD. JAIPUR',
      buildingType: 'RESIDENTIAL',
      bua: '2.75000 SFT',
      location: 'JAIPUR',
      scope: 'Consultancy for design of Complete MEP Engineering services',
      completionYear: '2024',
      category: 'mep',
      imageSrc: '/images/mep-4.jpg'
    },
    {
      id: 5,
      title: 'Hotel Fairfield Marriott at GOA',
      client: 'AA RA HOTELS PVT LTD',
      buildingType: '171 ROOMS 4 STAR HOTEL',
      bua: '84000 SFT',
      location: 'GOA',
      scope: 'Consultancy for design of Complete MEP Engineering Services',
      completionYear: '2021',
      category: 'mep',
      imageSrc: '/images/mep-5.jpg'
    },
    {
      id: 6,
      title: 'RESIDENTIAL TOWNSHIP AT SECTOR-63 GURUGRAM',
      client: 'ANANT RAJ LIMITED',
      buildingType: 'RESIDENTIAL TOWNSHIP',
      bua: '108 ACRES',
      location: 'SECTOR-63 GURUGRAM',
      scope: 'Consultancy for design of Complete MEP Engineering Services',
      completionYear: '2014',
      category: 'mep',
      imageSrc: '/images/mep-6.jpg'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-pkkc-black backdrop-blur-sm py-44">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/images/sectionBG.png" 
            alt="Section Background" 
            className="w-full h-full object-cover opacity-95"
          />
          <div className="absolute inset-0 bg-pkkc-black/60"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-pkkc-gold mb-6">
              Selected Work
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
              A curated collection of our MEP engineering projects, with architecture and interior design portfolios coming soon.
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
              
              {/* Disabled Architecture filter with Coming Soon badge */}
              <Button 
                variant="outline" 
                className="font-light text-gray-400 cursor-not-allowed"
                disabled
              >
                Architecture Projects <span className="ml-2 text-xs bg-gray-200 px-2 py-1 rounded text-gray-500">Coming Soon</span>
              </Button>
              
              {/* Disabled Interior Design filter with Coming Soon badge */}
              <Button 
                variant="outline" 
                className="font-light text-gray-400 cursor-not-allowed"
                disabled
              >
                Interior Design <span className="ml-2 text-xs bg-gray-200 px-2 py-1 rounded text-gray-500">Coming Soon</span>
              </Button>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <AnimatedSection key={project.id} delay={project.id * 100}>
                <PortfolioItem 
                  imageSrc={project.imageSrc}
                  title={project.title}
                  client={project.client}
                  buildingType={project.buildingType}
                  bua={project.bua}
                  location={project.location}
                  scope={project.scope}
                  completionYear={project.completionYear}
                  category="MEP Engineering"
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Coming Soon Section */}
      <section className="py-20 bg-pkkc-light">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <AnimatedSection>
            <div className="relative overflow-hidden rounded-lg bg-white p-12 shadow-lg border border-pkkc-gold">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-pkkc-gold opacity-10 rounded-full"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-pkkc-gold opacity-10 rounded-full"></div>
              
              <h2 className="text-3xl md:text-4xl font-light text-pkkc-darkGold mb-3 relative">
                ARCHITECTURE AND INTERIOR DESIGN PORTFOLIO
              </h2>
              
              <div className="w-16 h-1 bg-pkkc-gold mx-auto mb-8"></div>
              
              <div className="flex flex-col items-center justify-center">
                <div className="text-5xl font-bold text-pkkc-gold animate-pulse mb-8">
                  COMING SOON
                </div>
                
                <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
                  Our Architecture and Interior Design portfolio is currently in development. 
                  Stay tuned for stunning spaces that blend creative vision with engineering precision.
                </p>
                
                <Button asChild className="bg-pkkc-darkGold hover:bg-pkkc-darkGold/90 text-white font-normal text-lg px-10 py-6">
                  <a href="/contact">Book a Free Consultation</a>
                </Button>
              </div>
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