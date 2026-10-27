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
    href: '#',
    hasDropdown: true,
    dropdownType: 'simple',
    items: [
      { label: 'About Viskool', href: '/about-viskool' },
      { label: 'About the Founder', href: '#founder' },
      { label: 'Student Testimonial', href: '/student-testimonials' },
      { label: 'Parent Testimonial', href: '/parent-testimonials' }
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
    category: 'Upskill Programs',
  },
  {
    id: 'course-2',
    image: 'course-excel-mastery.png',
    title: 'VISKOOL Advanced Excel Mastery',
    price: '₹500',
    originalPrice: '₹2,000',
    isPremium: true,
    isLive: true,
    category: 'Upskill Programs',
  },
  {
    id: 'course-3',
    image: 'course-class12-maths.png',
    title: 'School Tuition - Class12 CBSE (Subject wise)',
    price: '₹8,999',
    originalPrice: '₹12,000',
    isPremium: true,
    isLive: true,
    category: 'School',
  },
  {
    id: 'course-temp-1',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
    title: 'Data Analytics Mastery',
    price: '₹7,000',
    isPremium: true,
    isLive: true,
    category: 'Upskill Programs',
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
    question: 'How are Viskool classes conducted?',
    answer: 'We conduct interactive live online sessions with real-time screen sharing, live chat for doubt resolution, and recorded session access for revision.',
  },
  {
    question: 'Can I request a free demo class before enrolling?',
    answer: 'Absolutely! You can book a free demo session or student assessment for any course by clicking the “Book a Free Demo” button.',
  },
  {
    question: 'How do you track student progress?',
    answer: 'We provide weekly assessment tests, automated performance dashboards, and monthly parent–mentor review meetings to ensure continuous progress.',
  },
  {
    question: 'Do you offer placement support for professional upskilling courses?',
    answer: 'Yes! Our career programs include résumé building, portfolio creation, mock interviews, and direct referral connections to hiring partners.',
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
    { name: 'Twitter/X', icon: 'twitter', href: '#' },
    { name: 'LinkedIn', icon: 'linkedin', href: '#' },
    { name: 'YouTube', icon: 'youtube', href: '#' },
    { name: 'Pinterest', icon: 'pinterest', href: '#' },
  ],
  copyright: '© 2026 Viskool. All rights reserved. Designed for excellence.',
};
