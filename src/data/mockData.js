// Viskool Realistic Mock Data for Developer Handoff

export const ANNOUNCEMENT_ITEMS = [
  { icon: '👩‍🏫', text: 'Learn from ', highlight: 'Expert Tutors' },
  { icon: '🎓', highlight: 'Admissions Open', text: ' Now' },
  { icon: '⚡', highlight: 'NEET Crash Course', text: ' 2026 Batch' },
  { icon: '💯', highlight: '100%', text: ' Commitment & Personal Mentorship' },
  { icon: '📅', text: 'Book Your ', highlight: 'Free Demo Class', suffix: ' Today' },
  { icon: '🎉', highlight: 'Special offer', text: ' flat 10% off on all annual enrollments' },
];

export const NAV_LINKS = [
  { label: 'Home', href: '#' },
  { 
    label: 'Courses', 
    href: '#courses', 
    hasDropdown: true,
    dropdownType: 'mega',
  },
  { label: 'Blogs', href: '#blogs' },
  { 
    label: 'About Us', 
    href: '#about',
    hasDropdown: true,
    dropdownType: 'simple',
    items: [
      { label: 'About the Founder', href: '#founder' },
      { label: 'About Viskool', href: '#about-viskool' },
      { label: 'Student Testimonial', href: '#student-testimonials' },
      { label: 'Parent Testimonial', href: '#parent-testimonials' },
      { label: 'Student Feedback', href: '#student-feedback' },
    ]
  },
  { label: 'Career With Us', href: '#careers' },
  { label: 'Contact Us', href: '#contact', isContactTrigger: true },
];

export const HERO_SLIDES = [
  {
    id: 1,
    title: 'From Class 1 to Career Goals: Your Complete Learning Partner',
    description: 'Viskool offers live, 1-to-1 and small group online sessions for students from Class 1 to Career Skill Development. From School Tuitions to competitive exams like NEET, JEE, and KEAM, our interactive classes and expert mentors pave the way for success across the world.',
    ctaPrimary: 'Explore Now',
    ctaSecondary: 'Book Free Demo',
    badge: '🚀 Admissions Open for 2026',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
    stats: [
      { label: 'Active Students', value: '15,000+' },
      { label: 'Expert Tutors', value: '500+' },
      { label: 'Success Rate', value: '98.4%' }
    ]
  },
  {
    id: 2,
    title: 'Personalized 1-on-1 Mentorship for NEET & JEE Aspirants',
    description: 'Master core concepts with top-tier subject specialists. Customized study plans, real-time doubt clearing, and continuous performance analytics tailored to maximize your competitive rank.',
    ctaPrimary: 'Join Crash Course',
    ctaSecondary: 'View Syllabus',
    badge: '🏆 Proven Results & Top Ranks',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    stats: [
      { label: 'Mock Tests Conducted', value: '10,000+' },
      { label: 'NEET Qualifiers', value: '1,200+' },
      { label: 'Avg Score Improvement', value: '+35%' }
    ]
  }
];

export const PROCESS_STEPS = [
  {
    number: '1',
    title: '1. Explore All Courses',
    description: 'Discover a wide range of academic and skill-building courses tailored to your goals. Expert curriculum designed for your success.',
    icon: 'compass',
  },
  {
    number: '2',
    title: '2. Choose Your Teacher',
    description: 'Learn with verified, qualified experts. Choose by subject, rating, language preference, and schedule that suits your needs best.',
    icon: 'users',
  },
  {
    number: '3',
    title: '3. Start Learning Anywhere',
    description: 'Access live interactive sessions from the comfort of your home or on the go. Flexible learning schedules that fit your routine.',
    icon: 'laptop',
  },
];

export const COURSE_CATEGORIES = [
  'All Courses',
  'School Tuitions',
  'NEET & JEE',
  'Career Upskilling',
  'Coding & Tech',
];

export const FEATURED_COURSES = [
  {
    id: 'course-1',
    image: 'course-digital-marketing.png',
    title: 'Digital Marketing in 90 Days!',
    price: '₹25,000',
    originalPrice: '₹45,000',
    isPremium: true,
    isLive: false,
  },
  {
    id: 'course-2',
    image: 'course-excel-mastery.png',
    title: 'VISKOOL Advanced Excel Mastery',
    price: '₹500',
    originalPrice: '₹2,000',
    isPremium: true,
    isLive: true,
  },
  {
    id: 'course-3',
    image: 'course-class12-maths.png',
    title: 'School Tuition - Class12 CBSE (Subject wise)',
    price: '₹8,999',
    originalPrice: '₹12,000',
    isPremium: true,
    isLive: true,
  },
];

export const BENEFITS = [
  {
    id: 1,
    title: 'Live and Recorded Online Classes',
    description: 'Real-time mentorship with personalized attention and anytime access to high quality video learning resources and interactive notes.',
    tag: '1-to-1 & Small Batches',
    image: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&w=800&q=80',
    isLarge: true,
  },
  {
    id: 2,
    title: 'From School Learning to Career Success',
    description: 'Structured curriculum covering academic foundations from Class 1 to Class 12, competitive exams preparation, through advanced skill development.',
    tag: 'Holistic Growth',
    icon: 'graduation-cap',
    isLarge: false,
  },
  {
    id: 3,
    title: 'A Great Community',
    description: 'Connect with mentors, peer learners, and industry alumni to foster a collaborative and motivating atmosphere.',
    tag: 'Global Peer Network',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80',
    isLarge: false,
  },
];

export const FAQS = [
  {
    question: 'Which subjects and boards do you cover for NEET, JEE, or school tuitions?',
    answer: 'Viskool covers all major national and state boards including CBSE, ICSE, IGCSE, IB, and State Boards from Class 1 through Class 12. For competitive exams, we offer dedicated high-yield modules in Physics, Chemistry, Biology (Botany & Zoology), and Mathematics for NEET, JEE Main/Advanced, and KEAM.',
  },
  {
    question: 'What is the qualification and selection process of tutors at Viskool?',
    answer: 'Every tutor undergoes a rigorous 4-stage vetting process including background verification, subject-matter expertise testing, pedagogical evaluation, and interactive demo class assessments. Only the top 3% of educator applicants are onboarded.',
  },
  {
    question: 'What makes Viskool’s 1-on-1 and batch classes unique?',
    answer: 'Viskool combines personalized learning paths with live interactive digital whiteboards, customized pace matching, instant real-time doubt resolution, and periodic progress reports shared directly with parents.',
  },
  {
    question: 'Are upskilling and IT courses beginner-friendly?',
    answer: 'Yes! Our career upskilling courses (including Power BI, Python, Data Analytics, Full Stack Web Development, and Digital Marketing) are designed with a zero-to-hero curriculum featuring practical hands-on projects and portfolio reviews.',
  },
  {
    question: 'What devices and software do I need to attend classes?',
    answer: 'You can join classes using any standard laptop, desktop computer, tablet, or smartphone with an active internet connection. All sessions run seamlessly inside modern web browsers with no complex software installation required.',
  },
  {
    question: 'Do you provide study materials, mock tests, and revision notes?',
    answer: 'Yes, all enrolled students receive comprehensive digital study materials, topic-wise practice question banks, chapter revision flashcards, and regular mock exams with detailed AI-driven performance breakdowns.',
  },
  {
    question: 'How do I enroll or book a free demo session?',
    answer: 'Simply click "Book Free Demo" or "Get In Touch", select your grade and target subject, and our academic advisor will schedule a complimentary 1-on-1 trial class at your preferred time slot.',
  },
  {
    question: 'What is the typical class timing and schedule flexibility?',
    answer: 'We offer highly flexible class timings including early morning, evening, and weekend batches to ensure classes do not clash with school or college hours.',
  },
  {
    question: 'What makes Viskool different from other edtech platforms?',
    answer: 'Unlike automated pre-recorded platforms, Viskool focuses on genuine human connection: 100% live interactive teaching, empathetic mentorship, small batch sizes, and continuous one-on-one accountability tracking.',
  },
];

export const ACHIEVEMENTS = [
  {
    id: 1,
    name: 'RAHUL MENON',
    cardImage: 'achievement-rahul.png',
  },
  {
    id: 2,
    name: 'APARNA SHARMA',
    cardImage: 'achievement-aparna.png',
  },
  {
    id: 3,
    name: 'DIYA JACOB',
    cardImage: 'achievement-diya.png',
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Aarav',
    role: 'Class 12 (NEET Aspirant)',
    quote: 'Viskool helped me fall in love with learning again! Their funny and code-based teaching style made Chemistry easy for me. I am now confident about cracking NEET.',
    image: 'testimonial-aarav.png',
  },
  {
    id: 2,
    name: 'Rhea Nambiar',
    role: 'Class 10 CBSE Student',
    quote: 'The 1-to-1 math sessions helped me overcome my fear of trigonometry and algebra. My mentor was always patient and available to solve my doubts anytime. I scored 95% in my board exams thanks to Viskool!',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    rating: 5,
    location: 'Bangalore, Karnataka',
  },
  {
    id: 3,
    name: 'Karthik Raja',
    role: 'Power BI Upskilling Graduate',
    quote: 'The 10-day Power BI workshop was intense, practical, and highly relevant. We built real-world executive dashboards from scratch. Within 3 weeks of finishing, I successfully transitioned into a Business Analyst role.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    rating: 5,
    location: 'Chennai, Tamil Nadu',
  },
];

export const FOOTER_DATA = {
  about: 'Viskool is India’s versatile online learning platform for interactive live classes, school tuitions, competitive exam preparation (NEET/JEE/KEAM), and professional career upskilling.',
  appLinks: {
    playStore: '#',
    appStore: '#',
  },
  quickLinks: [
    { label: 'Home', href: '#' },
    { label: 'All Courses', href: '#courses' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms & Conditions', href: '#' },
    { label: 'Contact Us', href: '#' },
  ],
  socials: [
    { name: 'Instagram', icon: 'instagram', href: '#' },
    { name: 'Facebook', icon: 'facebook', href: '#' },
    { name: 'Twitter', icon: 'twitter', href: '#' },
    { name: 'LinkedIn', icon: 'linkedin', href: '#' },
    { name: 'YouTube', icon: 'youtube', href: '#' },
  ],
  copyright: '© 2026 Viskool. All rights reserved. Designed for excellence.',
};
