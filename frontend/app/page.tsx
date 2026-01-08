'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

const categories = [
  { name: 'Art & Design', courses: '2K Courses', icon: '🎨' },
  { name: 'Development', courses: '5K Courses', icon: '💻' },
  { name: 'Communication', courses: '1K Courses', icon: '📢' },
  { name: 'Videography', courses: '800 Courses', icon: '🎥' },
  { name: 'Photography', courses: '1.2K Courses', icon: '📸' },
  { name: 'Marketing', courses: '3K Courses', icon: '📈' },
  { name: 'Content Writing', courses: '1.5K Courses', icon: '✍️' },
  { name: 'Finance', courses: '2.5K Courses', icon: '💰' },
  { name: 'Acting', courses: '900 Courses', icon: '🎭' },
  { name: 'Business', courses: '4K Courses', icon: '💼' },
];

const courses = [
  {
    title: 'The Ultimate Guide to...',
    description: 'Master Figma and UI/UX design principles to create stunning interfaces.',
    rating: 4.9,
    image: '/images/4773b12fa93e098fec80f8df4e5b2463c7af96dd.jpg',
  },
  {
    title: 'UI/UX Design and...',
    description: 'Learn to design beautiful apps and websites that users love.',
    rating: 4.8,
    image: '/images/851629b974b0e40589d8b2df651330a5e5c2b912.jpg',
  },
  {
    title: 'Building User Interface -...',
    description: 'Comprehensive guide to UI/UX principles and best practices.',
    rating: 4.7,
    image: '/images/a37e1a9c36b45642079ab15a8f753e1d21258de7.jpg',
  },
];

const careerFairs = [
  {
    date: 'November 18, 2024',
    title: 'Dreamxhibition Innovation',
    description: 'Join us for an innovative career fair showcasing the latest opportunities.',
    tags: ['Research', 'Design'],
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2e87c?w=400&h=300&fit=crop',
    size: 'small',
  },
  {
    date: 'February 04, 2025',
    title: 'Meet recruiters from top companies',
    description: 'Network with industry leaders and discover your next career move.',
    tags: ['Research', 'Challenge'],
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=300&fit=crop',
    size: 'small',
  },
  {
    date: 'August 12, 2024',
    title: 'On Afua sport application opportunities',
    description: 'Explore exciting opportunities in sports technology and applications.',
    tags: ['Research', 'Partnership', 'Mentorship', 'Development'],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
    size: 'large',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-epic-light to-white py-12 md:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-epic-dark mb-6 leading-tight">
                Transform Your <span className="text-epic-dark">Career</span> With EPIC
              </h1>
              <p className="text-base sm:text-lg text-gray-600 mb-8">
                Welcome to EPIC Careers, where data meets ambition. We provide students with personalized, data-driven career guidance that helps them make informed decisions about their future.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Link href="/register">
                  <Button size="lg" className="bg-epic-dark hover:bg-epic-darker text-white">
                    Get Started
                  </Button>
                </Link>
                <Link href="/jobs">
                  <Button size="lg" variant="outline" className="border-epic-dark text-epic-dark hover:bg-epic-light">
                    Explore
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative order-1 lg:order-2"
            >
              <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px]">
                {/* Background circles */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-epic-dark rounded-full opacity-20 blur-3xl"></div>
                  <div className="absolute w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-epic-dark rounded-full opacity-30 blur-2xl"></div>
                </div>
                
                {/* Main green circle with person */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="relative bg-epic-dark rounded-full w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 flex items-center justify-center overflow-hidden shadow-2xl">
                    <img
                      src="/images/713778750076baca22525eed5075b8640f2fe45a.jpg"
                      alt="Career Success"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop';
                      }}
                    />
                  </div>
                </div>

                {/* Stats Cards */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="absolute top-4 right-0 sm:top-10 sm:right-10 bg-white rounded-lg shadow-xl p-3 sm:p-4 z-10"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-epic-light flex items-center justify-center">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-epic-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-epic-dark">1K+</div>
                      <div className="text-xs sm:text-sm text-gray-600">Online Courses</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="absolute bottom-16 left-0 sm:bottom-20 sm:left-10 bg-white rounded-lg shadow-xl p-3 sm:p-4 z-10"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-epic-light flex items-center justify-center">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-epic-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-epic-dark">1K+</div>
                      <div className="text-xs sm:text-sm text-gray-600">Video Courses</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                  className="absolute top-1/2 -right-2 sm:top-1/2 sm:-right-4 bg-white rounded-lg shadow-xl p-3 sm:p-4 z-10"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-epic-light flex items-center justify-center">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-epic-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-epic-dark">1000+</div>
                      <div className="text-xs sm:text-sm text-gray-600">Tutors</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full border-2 border-orange-500 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Define your goals.</h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full border-2 border-orange-500 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Explore Options.</h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full border-2 border-orange-500 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Take Action.</h3>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="py-12 md:py-16 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-lg sm:text-xl font-semibold text-gray-900">5+ Collaboration</div>
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
              <div className="text-2xl sm:text-3xl font-bold text-yellow-600">DA</div>
              <div className="flex flex-col items-center">
                <div className="text-xs sm:text-sm font-semibold text-gray-700">GREENLANDFILM</div>
                <div className="text-xs sm:text-sm text-gray-600">AND TELEVISION SCHOOL</div>
              </div>
              <div className="text-lg sm:text-xl font-semibold text-gray-800">agura</div>
              <div className="text-sm sm:text-base text-gray-700">Intare Soundwave Initiative</div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Categories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Top Categories</h2>
              <p className="text-gray-600">Explore with Popular Categories</p>
            </div>
            <Button variant="outline" className="border-epic-dark text-epic-dark">
              All Categories
            </Button>
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-5 gap-6"
          >
            {categories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white border border-gray-200 rounded-lg p-6 text-center cursor-pointer hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
                <p className="text-sm text-gray-600">{category.courses}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Most Popular Class Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Most Popular Class</h2>
            <p className="text-gray-600">Discover the courses that are transforming careers</p>
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {courses.map((course, index) => (
              <Link key={index} href={`/courses/${index + 1}`}>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{course.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <span className="text-yellow-400">★</span>
                        <span className="ml-1 text-gray-700">{course.rating}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        Learn More
                      </Button>
                      <Button size="sm" className="flex-1 bg-epic-dark hover:bg-epic-darker text-white">
                        Explore
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>
          <div className="text-center mt-8">
            <Button variant="outline" className="border-epic-dark text-epic-dark">
              See All Programs
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <blockquote className="text-2xl lg:text-3xl font-medium text-gray-900 mb-8">
              &ldquo;EPIC helped me go from feeling overwhelmed to confident about my future. Their personalized assessments showed me a clear path forward.&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                  alt="Tula Mnyamana"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">Tula Mnyamana</div>
                <div className="text-sm text-gray-600">High School Student</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Career Fairs Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Our recent career fairs</h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {careerFairs.map((fair, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className={`bg-white rounded-lg shadow-md overflow-hidden ${
                  fair.size === 'large' ? 'md:row-span-2' : ''
                }`}
              >
                <div className={`relative ${fair.size === 'large' ? 'h-64' : 'h-48'} overflow-hidden`}>
                  <img
                    src={fair.image}
                    alt={fair.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{fair.date}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{fair.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{fair.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {fair.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-epic-light text-epic-dark rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    </div>
  );
}
