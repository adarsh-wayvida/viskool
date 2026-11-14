const fs = require('fs');
const file = 'c:/Users/Lenovo/.gemini/antigravity/scratch/viskool-version2/src/components/StudentTestimonialsPage.jsx';
let content = fs.readFileSync(file, 'utf8');

const target = `          <section 
            className="relative overflow-hidden py-16 sm:py-20 w-full bg-cover bg-[center_35%] bg-no-repeat"
            style={{ backgroundImage: "url('/student-testimonial-background-100kb.webp')" }}
          >
            {/* Semi-transparent burgundy gradient overlay (65% opacity) */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#8B1538]/65 to-[#73152C]/65"></div>
            
            {/* Subtle radial dark overlay behind text to improve readability without a visible box */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.3)_0%,_transparent_65%)] pointer-events-none"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center justify-center text-center">
              
              <nav className="flex items-center justify-center gap-2 text-sm font-medium text-white/80 mb-6 drop-shadow-sm">
                <a href="/" className="hover:text-white transition-colors cursor-pointer">Home</a>
                <span>&gt;</span>
                <a href="#" className="hover:text-white transition-colors cursor-pointer">About Us</a>
                <span>&gt;</span>
                <span className="text-white cursor-default">Student Testimonials</span>
              </nav>
              
              <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4 font-sans drop-shadow-md">
                Hear From Our Students
              </h1>
              
              <p className="text-lg sm:text-xl text-white/95 font-normal max-w-2xl font-sans drop-shadow-md">
                Real stories of learning, growth, and success from Viskool students.
              </p>
  
            </div>
          </section>`;

const replacement = `          <PageBanner 
            backgroundImage="/student-testimonial-background-100kb.webp"
            breadcrumbs={[
              { label: 'Home', href: '/' },
              { label: 'About Us', href: '#' },
              { label: 'Student Testimonials' }
            ]}
            title="Hear From Our Students"
            subtitle="Real stories of learning, growth, and success from Viskool students."
          />`;

if(content.includes(target)) {
  content = content.replace(target, replacement);
  content = content.replace("import { ParentVideoSlider, TestimonialCard } from './ParentTestimonialsPage.jsx';", "import { ParentVideoSlider, TestimonialCard } from './ParentTestimonialsPage.jsx';\nimport { PageBanner } from './PageBanner.jsx';");
  fs.writeFileSync(file, content, 'utf8');
  console.log('done');
} else {
  console.log('target not found');
}
