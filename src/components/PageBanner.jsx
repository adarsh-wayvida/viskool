import React from 'react';

export const PageBanner = ({
  backgroundImage = '/student-testimonial-background-100kb.webp',
  breadcrumbs = [], // [{ label: 'Home', href: '/' }]
  title,
  subtitle,
  titleClassName = "",
  subtitleClassName = "max-w-2xl",
}) => {
  return (
    <section 
      className="relative overflow-hidden py-16 sm:py-20 w-full bg-cover bg-[center_35%] bg-no-repeat"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      {/* Semi-transparent burgundy gradient overlay (65% opacity) */}
      <div className="absolute inset-0 bg-[#111111]/70"></div>
      
      {/* Subtle radial dark overlay behind text to improve readability without a visible box */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.3)_0%,_transparent_65%)] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center justify-center text-center">
        
        <nav className="flex items-center justify-center gap-2 text-sm font-medium text-white/80 mb-6 drop-shadow-sm">
          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={index}>
              {crumb.href ? (
                <>
                  <a href={crumb.href} className="hover:text-white transition-colors cursor-pointer">{crumb.label}</a>
                  <span>&gt;</span>
                </>
              ) : (
                <span className="text-white cursor-default">{crumb.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>
        
        <h1 className={`text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4 font-sans drop-shadow-md ${titleClassName}`}>
          {title}
        </h1>
        
        {subtitle && (
          <p className={`text-lg sm:text-xl text-white/95 font-normal ${subtitleClassName} font-sans drop-shadow-md`}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};
