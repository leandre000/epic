'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
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
    image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=400&h=300&fit=crop',
  },
  {
    title: 'UI/UX Design and...',
    description: 'Learn to design beautiful apps and websites that users love.',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop',
  },
  {
    title: 'Building User Interface -...',
    description: 'Comprehensive guide to UI/UX principles and best practices.',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
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
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-epic-light to-white py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-epic-dark mb-6">
                Transform Your Career With EPIC
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
              </p>
              <div className="flex flex-wrap gap-4">
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
              <div className="flex items-center gap-8 mt-12">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🤝</span>
                  <span className="text-gray-700">5+ Collaborative</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">⚡</span>
                  <span className="text-gray-700">Flexible System</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🌐</span>
                  <span className="text-gray-700">Online Platform</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full h-[500px]">
                <div className="absolute inset-0 bg-epic-dark rounded-full opacity-20 blur-3xl"></div>
                <div className="relative bg-epic-dark rounded-full w-full h-full flex items-center justify-center p-8">
                  <div className="bg-white rounded-full w-64 h-64 flex items-center justify-center overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop"
                      alt="Success"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                {/* Stats Cards */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="absolute top-10 right-10 bg-white rounded-lg shadow-lg p-4"
                >
                  <div className="text-3xl font-bold text-epic-dark">18K+</div>
                  <div className="text-sm text-gray-600">Active Students</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="absolute bottom-20 left-10 bg-white rounded-lg shadow-lg p-4"
                >
                  <div className="text-3xl font-bold text-epic-dark">8K+</div>
                  <div className="text-sm text-gray-600">Online Courses</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                  className="absolute top-1/2 -right-4 bg-white rounded-lg shadow-lg p-4"
                >
                  <div className="text-3xl font-bold text-epic-dark">1000+</div>
                  <div className="text-sm text-gray-600">Companies</div>
                </motion.div>
              </div>
            </motion.div>
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
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
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

      <Footer />
    </div>
  );
}
