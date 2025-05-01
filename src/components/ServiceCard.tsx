import { ReactNode } from 'react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="service-card group bg-white p-8 border border-gray-100 hover:shadow-md transition-all duration-300 h-full flex flex-col">
      <div className="mb-6 text-pkkc-gold">{icon}</div>
      <h3 className="text-xl font-light mb-4 text-pkkc-darkGrey group-hover:text-pkkc-gold transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 font-light leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;