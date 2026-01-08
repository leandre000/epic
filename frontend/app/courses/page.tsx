'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

const courses = [
  {
    id: 1,
    title: 'The Ultimate Guide To Building User-Friendly Interfaces',
    description: 'Master Figma and UI/UX design principles to create stunning interfaces.',
    rating: 4.9,
    image: '/images/4773b12fa93e098fec80f8df4e5b2463c7af96dd.jpg',
    category: 'Development',
  },
  {
    id: 2,
    title: 'UI/UX Design and Development',
    description: 'Learn to design beautiful apps and websites that users love.',
    rating: 4.8,
    image: '/images/851629b974b0e40589d8b2df651330a5e5c2b912.jpg',
    category: 'Design',
  },
  {
    id: 3,
    title: 'Building User Interface - Complete Guide',
    description: 'Comprehensive guide to UI/UX principles and best practices.',
    rating: 4.7,
    image: '/images/a37e1a9c36b45642079ab15a8f753e1d21258de7.jpg',
    category: 'Development',
  },
];

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-bold text-epic-dark mb-2">Our Courses</h1>
            <p className="text-gray-600">Discover courses that transform careers</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Link key={course.id} href={`/courses/${course.id}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=400&h=300&fit=crop';
                    }}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-epic-light text-epic-dark rounded text-xs font-medium">
                      {course.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{course.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <span className="text-yellow-400">★</span>
                      <span className="ml-1 text-gray-700">{course.rating}</span>
                    </div>
                  </div>
                  <Button className="w-full bg-epic-dark hover:bg-epic-darker text-white">
                    View Course
                  </Button>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

