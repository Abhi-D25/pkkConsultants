
import { ReactNode } from 'react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="service-card group">
      <div className="mb-4 text-pkkc-gold">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-pkkc-navy group-hover:text-pkkc-gold transition-colors">
        {title}
      </h3>
      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
