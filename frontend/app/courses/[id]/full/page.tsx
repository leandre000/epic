'use client';

import { useState } from 'react';
import Link from 'next/link';

const lessons = [
  { id: 1, title: 'Lesson 01: Introduction about XD', duration: '30 mins', completed: true },
  { id: 2, title: 'Lesson 01: Introduction about XD', duration: '00 min', completed: false },
  { id: 3, title: 'Lesson 01: Introduction about XD', duration: '30 mins', completed: false },
  { id: 4, title: 'Lesson 01: Introduction about XD', duration: '00 min', completed: false },
  { id: 5, title: 'Lesson 01: Introduction about XD', duration: '30 mins', completed: false },
];

const quizzes = [
  { id: 1, title: 'Lesson 01: Introduction about XD', duration: '30 mins', completed: false },
  { id: 2, title: 'Lesson 01: Introduction about XD', duration: '00 min', completed: false },
  { id: 3, title: 'Lesson 01: Introduction about XD', duration: '30 mins', completed: false },
];

const relatedCourses = [
  {
    id: 1,
    title: 'The Ultimate Guide To Mastering Photography',
    category: 'Design',
    duration: '2 Month',
    image: '/images/96d8a032557797d4cf969ffa5fabbe22d5e952db.png',
    description: 'We envision a world where everyone has access to the tools and support...',
    instructor: 'Lina',
    originalPrice: 100,
    currentPrice: 80,
  },
  {
    id: 2,
    title: 'The Ultimate Guide To Mastering Photography',
    category: 'Design',
    duration: '2 Month',
    image: '/images/96d8a032557797d4cf969ffa5fabbe22d5e952db.png',
    description: 'We envision a world where everyone has access to the tools and support...',
    instructor: 'Lina',
    originalPrice: 100,
    currentPrice: 80,
  },
];

export default function CourseFullViewPage({ params }: { params: { id: string } }) {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    'change-simplification': true,
  });

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="flex h-screen overflow-hidden">
        {/* Left Sidebar - Course Content */}
        <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
          {/* Header */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <Link href={`/courses/${params.id}`} className="text-epic-dark hover:text-epic-darker">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </Link>
              <span className="text-sm text-gray-600">Course Full View</span>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto">
            {/* Change Simplification Section */}
            <div>
              <button
                onClick={() => toggleSection('change-simplification')}
                className="w-full bg-epic-dark text-white px-4 py-3 text-left font-semibold flex items-center justify-between"
              >
                <span>Change Simplification</span>
                <svg
                  className={`w-5 h-5 transition-transform ${expandedSections['change-simplification'] ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {expandedSections['change-simplification'] && (
                <div className="bg-gray-50">
                  {lessons.map((lesson, index) => (
                    <div
                      key={lesson.id}
                      className={`px-4 py-3 border-b border-gray-200 flex items-center gap-3 ${
                        index === 0 ? 'bg-epic-light' : 'hover:bg-gray-100'
                      }`}
                    >
                      <svg className="w-5 h-5 text-epic-dark flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      <div className="flex-1">
                        <p className={`text-sm ${index === 0 ? 'text-epic-dark font-semibold' : 'text-gray-700'}`}>
                          {lesson.title}
                        </p>
                        <p className="text-xs text-gray-500">{lesson.duration}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Practice Quiz Section */}
            <div>
              <button
                onClick={() => toggleSection('practice-quiz')}
                className="w-full bg-gray-800 text-white px-4 py-3 text-left font-semibold flex items-center justify-between"
              >
                <span>PRACTICE QUIZ</span>
                <svg
                  className={`w-5 h-5 transition-transform ${expandedSections['practice-quiz'] ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {expandedSections['practice-quiz'] && (
                <div className="bg-gray-50">
                  {quizzes.map((quiz) => (
                    <div
                      key={quiz.id}
                      className="px-4 py-3 border-b border-gray-200 flex items-center gap-3 hover:bg-gray-100"
                    >
                      <svg className="w-5 h-5 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      <div className="flex-1">
                        <p className="text-sm text-gray-700">{quiz.title}</p>
                        <p className="text-xs text-gray-500">{quiz.duration}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-epic-dark text-white px-6 py-4">
            <h1 className="text-2xl font-bold">Learn about Adobe XD & Prototyping</h1>
            <p className="text-epic-light mt-1">Introduction about XD</p>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-6">
              {/* Video Player */}
              <div className="relative w-full h-96 bg-gray-900 rounded-lg overflow-hidden mb-6">
                <img
                  src="/images/4f2c785f6065e5ff7905e1f7cd63097088a96c88.jpg"
                  alt="Video thumbnail"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = '/images/4773b12fa93e098fec80f8df4e5b2463c7af96dd.jpg';
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-20 h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all">
                    <svg className="w-10 h-10 text-epic-dark ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
                  <div className="flex items-center justify-between text-white text-sm mb-2">
                    <span>0:24</span>
                    <span>3:37</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-epic-light h-2 rounded-full" style={{ width: '7%' }}></div>
                  </div>
                </div>
              </div>

              {/* Content Sections */}
              <div className="space-y-6 mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">06 Super Coins on the way</h2>
                  <p className="text-gray-700 leading-relaxed">
                    The Ultimate Guide to Building User-Friendly Interfaces is a comprehensive course designed for anyone passionate about UI design—whether you&apos;re just starting out or looking to sharpen your skills. This is one of the best online courses available for learning how to create intuitive, engaging interfaces that enhance user experience and functionality.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">Who this course is for?</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Through a structured curriculum with interactive lessons and real-world design projects, you&apos;ll master the principles of user-centered design—all within a clean and easy-to-navigate learning environment. With this course, you&apos;ll build a solid foundation in interface design and develop the practical skills needed to create appealing websites or software that people love to use—no advanced coding or design experience required.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">Archievable</h2>
                  <p className="text-gray-700 leading-relaxed">
                    The Ultimate Guide to Building User-Friendly Interfaces is a comprehensive course designed for anyone passionate about UI design—whether you&apos;re just starting out or looking to sharpen your skills. This is one of the best online courses available for learning how to create intuitive, engaging interfaces that enhance user experience and functionality.
                  </p>
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-amber-50 rounded-lg p-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <img
                      src="/images/713778750076baca22525eed5075b8640f2fe45a.jpg"
                      alt="Talia Niyonsaba"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = '/images/713778750076baca22525eed5075b8640f2fe45a.jpg';
                      }}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-1">Talia Niyonsaba</h3>
                    <div className="flex items-center gap-1 mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-700">
                      EPIC gave my child tailored, data-driven career advice that was far beyond generic guidance. I highly recommend them to other parents.
                    </p>
                  </div>
                </div>
              </div>

              {/* Student also bought */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Student also bought</h2>
                  <Link href="/courses" className="text-epic-dark hover:underline">
                    See all
                  </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {relatedCourses.map((course) => (
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
                        <div className="p-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">{course.category}</span>
                            <span className="text-xs text-gray-600">{course.duration}</span>
                          </div>
                          <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{course.title}</h3>
                          <p className="text-gray-600 text-sm mb-3 line-clamp-2">{course.description}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-700">{course.instructor}</span>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

