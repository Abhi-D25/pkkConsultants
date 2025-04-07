
interface SectionTitleProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center';
  lightMode?: boolean;
}

const SectionTitle = ({ 
  title, 
  subtitle, 
  alignment = 'center',
  lightMode = false
}: SectionTitleProps) => {
  return (
    <div className={`mb-12 ${alignment === 'center' ? 'text-center' : 'text-left'}`}>
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${lightMode ? 'text-white' : 'text-pkkc-navy'}`}>
        <span className={`gold-underline ${alignment === 'center' ? 'inline-block' : ''}`}>
          {title}
        </span>
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-2xl ${alignment === 'center' ? 'mx-auto' : ''} ${lightMode ? 'text-gray-300' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
