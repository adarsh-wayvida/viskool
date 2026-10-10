// Student Testimonials Page Component - Desktop Web Version matching Reference UI
import React, { useState } from 'react';

const CATEGORIES = [
  'All',
  'School Tuition',
  'NEET/JEE',
  'Competitive Exams',
  'Career Upskilling',
];

const STUDENT_TESTIMONIALS_DATA = [
  {
    id: 'st-1',
    name: 'Ananya S.',
    tag: 'Class 12 (School Tuition)',
    category: 'School Tuition',
    quote: 'My Class 12 board marks improved significantly with Viskool\'s structured classes and personal mentoring. The chapter-wise practice tests and 1-on-1 doubt clearing sessions gave me the conceptual confidence to score top marks in Mathematics and Physics.',
    image: 'student-ananya.png',
  },
  {
    id: 'st-2',
    name: 'Rohit K.',
    tag: 'NEET Aspirant',
    category: 'NEET/JEE',
    quote: 'The daily mock test analytics and dedicated NEET mentors at Viskool kept my preparation consistent throughout the year. The step-by-step revision modules helped me master high-weightage Biology and Chemistry topics quickly.',
    image: 'student-rohit.png',
  },
  {
    id: 'st-3',
    name: 'Sneha M.',
    tag: 'Digital Marketing (Upskilling)',
    category: 'Career Upskilling',
    quote: 'The Digital Marketing program was practical and industry-focused from day one. Learning performance marketing, SEO, and content strategy from active experts gave me the real portfolio skills to start taking freelance client projects.',
    image: 'student-sneha.png',
  },
  {
    id: 'st-4',
    name: 'Arjun P.',
    tag: 'JEE Aspirant',
    category: 'NEET/JEE',
    quote: 'Clear explanations, personal attention, and high-yield problem sets made a massive difference in my JEE preparation journey. The mentors always took extra time to explain tricky Physics numericals until I understood them completely.',
    image: 'student-arjun.png',
  },
  {
    id: 'st-5',
    name: 'Aparna R.',
    tag: 'High Court Assistant Aspirant',
    category: 'Competitive Exams',
    quote: 'Preparing for the High Court Assistant exam required structured speed and accuracy. Viskool\'s daily mock tests, live answer discussions, and updated GK study notes gave me the exact competitive edge needed to qualify.',
    image: 'student-aparna.jpg',
  },
  {
    id: 'st-6',
    name: 'Rahul V.',
    tag: 'Kerala PSC Aspirant',
    category: 'Competitive Exams',
    quote: 'Preparing for Kerala PSC alongside my full-time job was challenging, but Viskool\'s flexible evening live classes, downloadable revision summaries, and structured timetable made my routine smooth and manageable.',
    image: 'student-rahul.jpg',
  },
  {
    id: 'st-7',
    name: 'Diya M.',
    tag: 'Class 11 (Physics & Chem)',
    category: 'School Tuition',
    quote: 'Physics used to be my weakest subject in Class 11. My 1-on-1 Viskool mentor broke down complex numericals and formulas into simple visual steps, turning my fear into a strong subject score.',
    image: 'student-diya.jpg',
  },
  {
    id: 'st-8',
    name: 'Faris K.',
    tag: 'Data Analytics (Upskilling)',
    category: 'Career Upskilling',
    quote: 'The Data Analytics bootcamp provided hands-on SQL, Excel, and Power BI practice. The portfolio guidance and mock technical interview sessions directly helped me succeed in my job placement.',
    image: null, // Faceless placeholder demonstration
  },
];

// Helper component to render achievement icons
const AchievementIcon = ({ type }) => {
  if (type === 'chart') {
    return (
      <svg className="w-4 h-4 text-[#8B1538] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    );
  }
  if (type === 'trophy') {
    return (
      <svg className="w-4 h-4 text-[#8B1538] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4a5 5 0 005 5h4a5 5 0 005-5V3M5 3h14M5 3H3v4a7 7 0 007 7h.01M19 3h2v4a7 7 0 01-7 7m-4 0v4m0 0H8m4 0h4m-4 4v-4" />
      </svg>
    );
  }
  if (type === 'trending') {
    return (
      <svg className="w-4 h-4 text-[#8B1538] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    );
  }
  if (type === 'briefcase') {
    return (
      <svg className="w-4 h-4 text-[#8B1538] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    );
  }
  // Default: Graduation cap academic icon
  return (
    <svg className="w-4 h-4 text-[#8B1538] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    </svg>
  );
};

// Faceless student placeholder icon component
const FacelessStudentPlaceholder = () => (
  <div className="w-full h-full bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center p-4">
    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center shadow-xs">
      <svg className="w-10 h-10 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
      </svg>
    </div>
  </div>
);

// Star Rating Component
const StarRating = ({ rating = 5 }) => (
  <div className="flex items-center gap-0.5 text-amber-400 shrink-0" aria-label={`${rating} out of 5 stars`}>
    {[...Array(5)].map((_, i) => (
      <svg 
        key={i} 
        className={`w-3.5 h-3.5 ${i < rating ? 'fill-amber-400 text-amber-400' : 'fill-gray-200 text-gray-200'}`} 
        viewBox="0 0 20 20" 
        fill="currentColor"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

export const StudentTestimonialsPage = ({ onOpenContact, onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalStudent, setActiveModalStudent] = useState(null);

  const filteredTestimonials = selectedCategory === 'All'
    ? STUDENT_TESTIMONIALS_DATA
    : STUDENT_TESTIMONIALS_DATA.filter((item) => item.category === selectedCategory);

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveModalStudent(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const scrollToGrid = () => {
    const el = document.getElementById('student-testimonials-grid');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full bg-[#FAF4F7] min-h-screen selection:bg-[#8B1538] selection:text-white">
      
      {/* 1. HERO SECTION (Reused structure from Parent Testimonials) */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FBF4F7] via-[#FAF2F6] to-[#FAF4F7] py-6 sm:py-8 lg:py-10 border-b border-[#8B1538]/5">
        
        {/* Layered Decorative Shapes */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-full max-w-6xl h-80 bg-[#EED5E2]/35 -rotate-1 rounded-3xl pointer-events-none blur-[1px]" />
        <div className="absolute top-14 left-1/2 -translate-x-1/2 w-full max-w-6xl h-80 bg-[#E8C2D3]/25 rotate-1 rounded-3xl pointer-events-none" />

        <div className="absolute -top-16 -right-16 w-96 h-96 rounded-full border border-[#8B1538]/10 pointer-events-none" />
        <div className="absolute -top-8 -right-8 w-72 h-72 rounded-full border border-[#8B1538]/15 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Heading & Description */}
            <div className="space-y-5">
              
              <div className="inline-flex items-center gap-2 bg-[#8B1538]/10 border border-[#8B1538]/15 px-3.5 py-1 rounded-full">
                <span className="text-xs sm:text-[13px] font-extrabold uppercase tracking-[0.2em] text-[#8B1538]">
                  STUDENT TESTIMONIALS
                </span>
                <span className="text-[#8B1538]/30 font-serif text-sm">✦</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-bold text-gray-900 tracking-tight leading-[1.1]">
                Inspiring Journeys from Our Classrooms to{' '}
                <span className="font-serif italic text-[#8B1538] font-bold relative inline-block">
                  Top Careers
                  <svg className="absolute -bottom-1 left-0 w-full h-2 text-[#8B1538]/20" viewBox="0 0 100 12" preserveAspectRatio="none" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M2 8 C 30 2, 70 10, 98 4" />
                  </svg>
                </span>
              </h1>

              <p className="text-base sm:text-[16px] text-gray-600 font-normal max-w-xl leading-relaxed pt-1">
                From higher marks to dream college admissions and new career opportunities—meet the Viskool students who turned their goals into real progress with the right guidance and support. Discover how personalized 1-on-1 mentorship and structured learning schedules helped them overcome every academic challenge. Their journeys highlight what is possible when dedicated effort meets expert direction.
              </p>

            </div>

            {/* Right Column: Layered "Wall of Student Stories" Overlapping Editorial Collage */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[500px] sm:max-w-[540px] h-[380px] sm:h-[420px] select-none">
                
                {/* Soft Organic Blush Backdrop Shapes */}
                <div className="absolute top-[-25px] right-[-20px] w-[320px] sm:w-[380px] h-[320px] sm:h-[380px] bg-[#FDEDF2]/80 rounded-full blur-2xl pointer-events-none -z-10" />
                <div className="absolute bottom-[-10px] left-[8%] w-[240px] sm:w-[280px] h-[240px] sm:h-[280px] bg-[#FAF0F4]/90 rounded-full blur-xl pointer-events-none -z-10" />

                {/* Giant Faded Georgia Quotation Mark Behind Portraits */}
                <div className="absolute -top-12 right-2 font-serif text-[140px] sm:text-[180px] leading-none text-[#F8DFE6] opacity-90 select-none pointer-events-none z-0">
                  “
                </div>

                {/* Subtle Burgundy Curved Vector Line Accents */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible" viewBox="0 0 540 420" fill="none">
                  <path d="M 270 30 C 370 5, 470 70, 500 130" stroke="#8B1538" strokeWidth="1.5" strokeOpacity="0.25" strokeDasharray="4 4" />
                  <path d="M 50 270 Q 15 310 0 370" stroke="#8B1538" strokeWidth="1.5" strokeOpacity="0.2" />
                  <path d="M 35 320 C 15 300, 25 280, 55 290 C 45 310, 30 320, 35 320 Z" fill="#8B1538" fillOpacity="0.08" stroke="#8B1538" strokeWidth="1" strokeOpacity="0.2" />
                  <path d="M 320 40 L 325 30 M 335 48 L 345 45" stroke="#8B1538" strokeWidth="1.5" strokeOpacity="0.3" strokeLinecap="round" />
                  <path d="M 340 360 L 345 370 M 352 352 L 362 357" stroke="#8B1538" strokeWidth="1.5" strokeOpacity="0.3" strokeLinecap="round" />
                </svg>

                {/* 1. Upper-Left Portrait (Overlapping Centre Card) */}
                <div className="absolute top-[2%] left-[2%] sm:left-[3%] w-[130px] sm:w-[150px] aspect-[4/5] rounded-xl sm:rounded-2xl overflow-hidden bg-white border-3 border-white shadow-[0_10px_25px_rgba(139,21,56,0.12)] -rotate-3 hover:rotate-0 transition-all duration-300 hover:scale-105 z-10 group">
                  <img src="student-rahul.jpg" alt="Viskool Student Rahul" className="w-full h-full object-cover object-top scale-110 transition-transform duration-300 group-hover:scale-115" />
                </div>

                {/* 2. Upper-Right Portrait (Overlapping Centre Card) */}
                <div className="absolute top-[5%] right-[2%] sm:right-[3%] w-[130px] sm:w-[150px] aspect-[4/5] rounded-xl sm:rounded-2xl overflow-hidden bg-white border-3 border-white shadow-[0_10px_25px_rgba(139,21,56,0.12)] rotate-3 hover:rotate-0 transition-all duration-300 hover:scale-105 z-10 group">
                  <img src="student-ananya.png" alt="Viskool Student Ananya" className="w-full h-full object-cover object-top scale-105 transition-transform duration-300 group-hover:scale-110" />
                </div>

                {/* 3. Center Dominant Featured Portrait (Aparna R. - 42% width, 68% height) */}
                <div className="absolute top-[10%] left-[28%] sm:left-[29%] w-[205px] sm:w-[230px] aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden bg-white border-4 sm:border-[5px] border-white shadow-[0_20px_45px_rgba(139,21,56,0.20)] -rotate-1.5 hover:rotate-0 transition-all duration-300 hover:scale-105 z-20 group">
                  <img src="student-aparna.jpg" alt="Viskool Student Aparna" className="w-full h-full object-cover object-top scale-105 transition-transform duration-300 group-hover:scale-110" />
                </div>

                {/* 4. Lower-Left Portrait (Overlapping Centre Card) */}
                <div className="absolute bottom-[3%] left-[7%] sm:left-[9%] w-[135px] sm:w-[155px] aspect-[4/5] rounded-xl sm:rounded-2xl overflow-hidden bg-white border-3 border-white shadow-[0_12px_28px_rgba(139,21,56,0.14)] rotate-2 hover:rotate-0 transition-all duration-300 hover:scale-105 z-30 group">
                  <img src="student-rohit.png" alt="Viskool Student Rohit" className="w-full h-full object-cover object-top scale-105 transition-transform duration-300 group-hover:scale-110" />
                </div>

                {/* 5. Lower-Right Portrait (Overlapping Centre Card) */}
                <div className="absolute bottom-[1%] right-[5%] sm:right-[7%] w-[135px] sm:w-[155px] aspect-[4/5] rounded-xl sm:rounded-2xl overflow-hidden bg-white border-3 border-white shadow-[0_12px_28px_rgba(139,21,56,0.14)] -rotate-2.5 hover:rotate-0 transition-all duration-300 hover:scale-105 z-30 group">
                  <img src="student-arjun.png" alt="Viskool Student Arjun" className="w-full h-full object-cover object-top scale-105 transition-transform duration-300 group-hover:scale-110" />
                </div>

                {/* Small Accent Burgundy Circle Dot */}
                <div className="absolute bottom-3 right-1 w-3.5 h-3.5 rounded-full bg-[#8B1538] shadow-xs z-30 pointer-events-none" />

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. TESTIMONIAL CONTENT SECTION WITH FILTER CHIPS */}
      <section id="student-testimonials-grid" className="w-full bg-[#FCFCFD] py-10 sm:py-14 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
          
          {/* Category Filter Chips Bar */}
          <div className="flex items-center justify-center sm:justify-start flex-wrap gap-2.5 sm:gap-3">
            {CATEGORIES.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer shadow-xs ${
                    isSelected
                      ? 'bg-[#8B1538] text-white shadow-md scale-102'
                      : 'bg-white text-gray-700 hover:bg-[#FDF2F4] hover:text-[#8B1538] border border-gray-200/80'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Testimonial Desktop 2-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 min-h-[300px] transition-all duration-300">
            {filteredTestimonials.length > 0 ? (
              filteredTestimonials.map((item, index) => {
                const isAlternate = index % 2 === 1;
                return (
                  <div 
                    key={item.id}
                    className={`rounded-2xl p-4 sm:p-5 lg:p-5.5 flex flex-col sm:flex-row gap-4 sm:gap-5 shadow-xs hover:shadow-md transition-all duration-300 relative overflow-hidden group min-h-[210px] sm:h-[220px] border ${
                      isAlternate 
                        ? 'bg-[#FDF5F8]/70 border-[#8B1538]/12 hover:border-[#8B1538]/30' 
                        : 'bg-[#FFFDFE] border-gray-200/80 hover:border-[#8B1538]/30'
                    }`}
                  >
                    
                    {/* Left Side: Fixed Head-and-Shoulders Photo Container */}
                    <div className="w-full sm:w-[155px] md:w-[165px] lg:w-[175px] shrink-0 h-44 sm:h-full rounded-xl overflow-hidden bg-gray-100 relative flex items-center justify-center">
                      {item.image ? (
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover object-top scale-110 group-hover:scale-115 transition-transform duration-500"
                        />
                      ) : (
                        <FacelessStudentPlaceholder />
                      )}
                    </div>

                    {/* Right Side: Content Area */}
                    <div className="flex-1 flex flex-col justify-between space-y-2 relative z-10 py-0.5">
                      
                      {/* Top Meta: Name, Star Rating & Secondary Class Badge */}
                      <div className="space-y-1">
                        <div className="flex items-center justify-between gap-2 flex-wrap">
                          <h4 className="font-extrabold text-gray-900 text-base sm:text-lg tracking-tight leading-snug">
                            {item.name}
                          </h4>
                          <StarRating rating={item.rating || 5} />
                        </div>
                        <div>
                          <span className="text-[11px] font-semibold text-[#8B1538] bg-[#8B1538]/8 border border-[#8B1538]/12 px-2.5 py-0.5 rounded-full inline-block">
                            {item.tag}
                          </span>
                        </div>
                      </div>

                      {/* Middle: Quotation Mark Accent & 4-Line Truncated Quote */}
                      <div className="relative flex-1 flex flex-col justify-center">
                        <span className="font-serif text-[#8B1538]/15 text-4xl sm:text-5xl leading-none absolute -top-2 -left-1 select-none pointer-events-none z-0">
                          “
                        </span>
                        <p className="text-xs sm:text-[13px] font-normal text-gray-700 leading-relaxed line-clamp-3 sm:line-clamp-4 relative z-10 pt-1">
                          {item.quote}
                        </p>
                      </div>

                      {/* Bottom Action: Read Full Story Link */}
                      <div className="pt-0.5 flex items-center justify-between">
                        <button
                          type="button"
                          onClick={() => setActiveModalStudent(item)}
                          className="text-[12px] font-bold text-[#8B1538] hover:text-[#73152C] hover:underline inline-flex items-center gap-1 cursor-pointer transition-colors"
                        >
                          <span>Read full story</span>
                          <span className="text-xs transition-transform group-hover:translate-x-0.5">→</span>
                        </button>

                        {/* Optional Achievement Mini Tag */}
                        {item.achievement && (
                          <span className="text-[10px] font-extrabold uppercase text-[#8B1538]/80 bg-white/80 border border-[#8B1538]/10 px-2 py-0.5 rounded-md shadow-2xs">
                            {item.achievement.type}
                          </span>
                        )}
                      </div>

                    </div>

                  </div>
                );
              })
            ) : (
              /* Clean Empty State */
              <div className="col-span-full py-12 px-6 bg-white border border-gray-100 rounded-3xl text-center space-y-3.5 shadow-xs">
                <div className="w-12 h-12 rounded-full bg-[#8B1538]/10 text-[#8B1538] mx-auto flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 tracking-tight">No stories found in this category right now</h3>
                <p className="text-xs sm:text-sm text-gray-500 max-w-sm mx-auto">
                  Try selecting another category filter above to read more inspiring student stories.
                </p>
                <button
                  type="button"
                  onClick={() => setSelectedCategory('All')}
                  className="inline-block text-xs font-bold text-[#8B1538] bg-[#8B1538]/10 hover:bg-[#8B1538]/15 px-4 py-2 rounded-full transition-colors cursor-pointer"
                >
                  View All Stories
                </button>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* 3. BOTTOM CTA SECTION */}
      <section className="w-full bg-gradient-to-r from-[#FFFDFE] via-[#FDF2F4] to-[#F8E1E7] py-12 sm:py-16 border-t border-[#8B1538]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 text-center md:text-left">
            
            {/* Left Content */}
            <div className="space-y-2 max-w-2xl">
              <h2 className="text-3xl sm:text-4xl md:text-[40px] font-extrabold text-gray-900 tracking-tight leading-tight">
                Your Story Could Be{' '}
                <span className="font-serif italic text-[#8B1538] font-bold">
                  Next
                </span>
              </h2>
              <p className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed">
                Get personalised guidance and take the next step towards your goals with Viskool.
              </p>
            </div>

            {/* Right Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 shrink-0 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => onOpenContact && onOpenContact('Talk to an Expert', { source: 'Student Testimonials Bottom CTA' })}
                className="w-full sm:w-auto inline-flex items-center justify-center bg-[#8B1538] hover:bg-[#73152C] text-white font-bold text-sm px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 cursor-pointer gap-2"
              >
                <span>Talk to an Expert</span>
                <span className="text-base leading-none">→</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  if (onNavigate) onNavigate('home');
                  setTimeout(() => {
                    const el = document.getElementById('courses');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center bg-white hover:bg-[#FDF2F4] text-[#8B1538] border border-[#8B1538]/30 font-bold text-sm px-6 py-3 rounded-full shadow-xs transition-all duration-200 active:scale-95 cursor-pointer"
              >
                <span>Explore Courses</span>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 4. READ FULL STORY MODAL */}
      {activeModalStudent && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn"
          onClick={() => setActiveModalStudent(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-[#8B1538]/15 space-y-5 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActiveModalStudent(null)}
              aria-label="Close modal"
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-gray-100 hover:bg-[#8B1538] hover:text-white flex items-center justify-center text-gray-500 transition-colors cursor-pointer"
            >
              ✕
            </button>

            {/* Header Profile */}
            <div className="flex items-center gap-4 border-b border-gray-100 pb-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden shrink-0 bg-gray-100 border border-gray-200">
                {activeModalStudent.image ? (
                  <img src={activeModalStudent.image} alt={activeModalStudent.name} className="w-full h-full object-cover object-top scale-110" />
                ) : (
                  <FacelessStudentPlaceholder />
                )}
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2.5">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#8B1538] bg-[#8B1538]/10 border border-[#8B1538]/15 px-2.5 py-0.5 rounded-full inline-block">
                    {activeModalStudent.category}
                  </span>
                  <StarRating rating={activeModalStudent.rating || 5} />
                </div>
                <h3 className="text-xl font-extrabold text-gray-900 tracking-tight">{activeModalStudent.name}</h3>
                <p className="text-xs font-semibold text-gray-500">{activeModalStudent.tag}</p>
              </div>
            </div>

            {/* Full Testimonial Quote */}
            <div className="relative pt-2">
              <div className="text-[#8B1538]/15 font-serif text-5xl leading-none absolute -top-3 -left-2 pointer-events-none">“</div>
              <p className="text-sm text-gray-700 leading-relaxed relative z-10 font-normal italic">
                {activeModalStudent.quote}
              </p>
            </div>

            {/* Achievement Tag if available */}
            {activeModalStudent.achievement && (
              <div className="bg-[#FAF2F5] border border-[#8B1538]/15 rounded-2xl p-3.5 flex items-center gap-3">
                <div className="p-2 rounded-xl bg-white shadow-2xs shrink-0">
                  <AchievementIcon type={activeModalStudent.achievement.type} />
                </div>
                <div>
                  <span className="block text-[10px] font-extrabold uppercase tracking-widest text-[#8B1538]">
                    KEY ACHIEVEMENT
                  </span>
                  <span className="block text-xs font-bold text-gray-900">
                    {activeModalStudent.achievement.label}
                  </span>
                </div>
              </div>
            )}

            {/* Footer Action */}
            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={() => setActiveModalStudent(null)}
                className="bg-[#8B1538] hover:bg-[#73152C] text-white font-bold text-xs px-5 py-2.5 rounded-full transition-colors cursor-pointer"
              >
                Close Story
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
