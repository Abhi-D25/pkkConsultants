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
      <h2 className={`text-3xl md:text-4xl font-light mb-3 ${lightMode ? 'text-white' : 'text-pkkc-darkGrey'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-2xl ${alignment === 'center' ? 'mx-auto' : ''} ${lightMode ? 'text-gray-300' : 'text-gray-500'} font-light`}>
          {subtitle}
        </p>
      )}
      <div className={`h-px w-16 bg-pkkc-gold mt-6 ${alignment === 'center' ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

export default SectionTitle;