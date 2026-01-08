'use client';

import { useState } from 'react';
import Link from 'next/link';

const courses = [
  {
    id: 1,
    title: 'The Ultimate Guide To Building User-Friendly Interfaces',
    category: 'Development',
    duration: '3 Month',
    image: '/images/4f2c785f6065e5ff7905e1f7cd63097088a96c88.jpg',
    description: 'We envision a world where everyone has access to the tools and support...',
    instructor: 'Lina',
    instructorAvatar: '/images/713778750076baca22525eed5075b8640f2fe45a.jpg',
    originalPrice: 100,
    currentPrice: 80,
  },
  {
    id: 2,
    title: 'The Ultimate Guide To Building User-Friendly Interfaces',
    category: 'Development',
    duration: '3 Month',
    image: '/images/713778750076baca22525eed5075b8640f2fe45a.jpg',
    description: 'We envision a world where everyone has access to the tools and support...',
    instructor: 'Lina',
    instructorAvatar: '/images/713778750076baca22525eed5075b8640f2fe45a.jpg',
    originalPrice: 100,
    currentPrice: 80,
  },
  {
    id: 3,
    title: 'The Ultimate Guide To Mastering Photography',
    category: 'Photography',
    duration: '2 Month',
    image: '/images/96d8a032557797d4cf969ffa5fabbe22d5e952db.png',
    description: 'We envision a world where everyone has access to the tools and support...',
    instructor: 'Lina',
    instructorAvatar: '/images/713778750076baca22525eed5075b8640f2fe45a.jpg',
    originalPrice: 100,
    currentPrice: 80,
  },
  {
    id: 4,
    title: 'The Ultimate Guide To Mastering Photography',
    category: 'Photography',
    duration: '2 Month',
    image: '/images/96d8a032557797d4cf969ffa5fabbe22d5e952db.png',
    description: 'We envision a world where everyone has access to the tools and support...',
    instructor: 'Lina',
    instructorAvatar: '/images/713778750076baca22525eed5075b8640f2fe45a.jpg',
    originalPrice: 100,
    currentPrice: 80,
  },
  {
    id: 5,
    title: 'The Ultimate Guide To Mastering Photography',
    category: 'Photography',
    duration: '2 Month',
    image: '/images/96d8a032557797d4cf969ffa5fabbe22d5e952db.png',
    description: 'We envision a world where everyone has access to the tools and support...',
    instructor: 'Lina',
    instructorAvatar: '/images/713778750076baca22525eed5075b8640f2fe45a.jpg',
    originalPrice: 100,
    currentPrice: 80,
  },
  {
    id: 6,
    title: 'The Ultimate Guide To Building User-Friendly Interfaces',
    category: 'Development',
    duration: '3 Month',
    image: '/images/4773b12fa93e098fec80f8df4e5b2463c7af96dd.jpg',
    description: 'We envision a world where everyone has access to the tools and support...',
    instructor: 'Lina',
    instructorAvatar: '/images/713778750076baca22525eed5075b8640f2fe45a.jpg',
    originalPrice: 100,
    currentPrice: 80,
  },
];

const recommendedCourses = courses.slice(0, 3);

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    subject: '',
    partner: '',
    program: '',
    language: '',
    availability: '',
    learningType: '',
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Search Section */}
      <section className="relative py-20 bg-gradient-to-br from-epic-dark to-epic-darker overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/images/4f2c785f6065e5ff7905e1f7cd63097088a96c88.jpg"
            alt="Background"
            className="w-full h-full object-cover blur-sm"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Search</h1>
          </div>
          
          {/* Main Search Bar */}
          <div className="flex gap-4 mb-8 max-w-4xl mx-auto">
            <input
              type="text"
              placeholder="Search your favourite course"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-6 py-4 rounded-lg border-0 focus:ring-2 focus:ring-epic-light outline-none text-lg"
            />
            <button className="px-8 py-4 bg-epic-light text-white rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
              Search
            </button>
          </div>

          {/* Filter Dropdowns */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {['Subject', 'Partner', 'Program', 'Language', 'Availability', 'Learning Type'].map((filter) => (
              <select
                key={filter}
                value={filters[filter.toLowerCase().replace(/\s+/g, '') as keyof typeof filters]}
                onChange={(e) => setFilters({ ...filters, [filter.toLowerCase().replace(/\s+/g, '')]: e.target.value })}
                className="px-4 py-3 rounded-lg border-0 bg-white text-gray-700 focus:ring-2 focus:ring-epic-light outline-none"
              >
                <option value="">{filter}</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
              </select>
            ))}
          </div>
        </div>
      </section>

      {/* Course Listing */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {courses.map((course) => (
              <Link key={course.id} href={`/courses/${course.id}`}>
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer">
                  <div className="relative w-full h-48">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = '/images/4773b12fa93e098fec80f8df4e5b2463c7af96dd.jpg';
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">{course.category}</span>
                      <div className="flex items-center gap-1 text-gray-600 text-sm">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{course.duration}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">{course.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full overflow-hidden">
                          <img
                            src={course.instructorAvatar}
                            alt={course.instructor}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.currentTarget.src = '/images/713778750076baca22525eed5075b8640f2fe45a.jpg';
                            }}
                          />
                        </div>
                        <span className="text-sm text-gray-700">{course.instructor}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-gray-400 line-through text-sm">${course.originalPrice}</span>
                        <span className="text-epic-dark font-bold ml-2">${course.currentPrice}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended for you */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Recommended for you</h2>
            <Link href="/courses?recommended=true" className="text-epic-dark hover:underline">
              See all
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recommendedCourses.map((course) => (
              <Link key={course.id} href={`/courses/${course.id}`}>
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer">
                  <div className="relative w-full h-48">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = '/images/4773b12fa93e098fec80f8df4e5b2463c7af96dd.jpg';
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">{course.category}</span>
                      <div className="flex items-center gap-1 text-gray-600 text-sm">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{course.duration}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">{course.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full overflow-hidden">
                          <img
                            src={course.instructorAvatar}
                            alt={course.instructor}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.currentTarget.src = '/images/713778750076baca22525eed5075b8640f2fe45a.jpg';
                            }}
                          />
                        </div>
                        <span className="text-sm text-gray-700">{course.instructor}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-gray-400 line-through text-sm">${course.originalPrice}</span>
                        <span className="text-epic-dark font-bold ml-2">${course.currentPrice}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
