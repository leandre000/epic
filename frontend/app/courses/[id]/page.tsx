'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

const tabs = ['Overview', 'Curriculum', 'Instructor', 'FAQs', 'Reviews'];

export default function CourseDetailPage() {
  const params = useParams();
  const [activeTab, setActiveTab] = useState('Overview');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(1);

  const courseData = {
    title: 'The Ultimate Guide To Building User-Friendly Interfaces',
    category: 'Development',
    instructor: 'DreamizeAfrica',
    duration: '2 Weeks',
    students: '156 Students',
    level: 'All levels',
    lessons: '20 Lessons',
    quizzes: '3 Quizzes',
    originalPrice: 59.0,
    currentPrice: 49.0,
    image: '/images/4773b12fa93e098fec80f8df4e5b2463c7af96dd.jpg',
  };

  const faqs = [
    {
      question: 'Do I Need Any Prior Design Or Coding Experience To Take This Course?',
      answer: 'Not at all! This course is designed for beginners as well as those looking to refine their UI design skills. We\'ll guide you through the fundamentals of user-friendly design, and all tools used in the course are beginner-friendly with no coding required. You\'ll be creating polished interfaces in no time!',
    },
    {
      question: 'What tools and software will I need?',
      answer: 'You\'ll need access to design software like Figma (free version available) and a computer with internet connection. All other tools and resources will be provided within the course.',
    },
    {
      question: 'How long do I have access to the course?',
      answer: 'Once enrolled, you\'ll have lifetime access to all course materials, including future updates and new content additions.',
    },
  ];

  const lessons = [
    { title: 'Introduction to UI Design', duration: '12:30', preview: true },
    { title: 'Understanding User Experience', duration: '10:05', preview: true },
    { title: 'Design Principles', duration: '15:20', preview: true },
    { title: 'Color Theory and Typography', duration: '8:45', preview: false },
    { title: 'Creating Your First Interface', duration: '20:10', preview: false },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-epic-light to-white py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-epic-dark text-white rounded-full text-sm font-medium">
              {courseData.category}
            </span>
            <span className="text-gray-600 text-sm">by {courseData.instructor}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-epic-dark mb-6">
                {courseData.title}
              </h1>

              <div className="flex flex-wrap gap-4 md:gap-6 mb-6">
                <div className="flex items-center gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-epic-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm">{courseData.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-epic-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="text-sm">{courseData.students}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-epic-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  <span className="text-sm">{courseData.level}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-epic-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <span className="text-sm">{courseData.lessons}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-epic-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <span className="text-sm">{courseData.quizzes}</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg">
                <img
                  src={courseData.image}
                  alt={courseData.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&h=600&fit=crop';
                  }}
                />
              </div>
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <span className="text-gray-500 line-through text-lg">${courseData.originalPrice.toFixed(1)}</span>
                  <span className="text-3xl font-bold text-epic-dark ml-3">${courseData.currentPrice.toFixed(1)}</span>
                </div>
                <Link href="/checkout">
                  <Button size="lg" className="bg-epic-dark hover:bg-epic-darker text-white">
                    Start Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 md:gap-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 px-2 text-sm md:text-base font-medium transition-colors ${
                  activeTab === tab
                    ? 'text-epic-dark border-b-2 border-epic-dark'
                    : 'text-gray-600 hover:text-epic-dark'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeTab === 'Overview' && (
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                The Ultimate Guide to Building User-Friendly Interfaces is a comprehensive course designed for anyone passionate about UI design—whether you&apos;re just starting out or looking to sharpen your skills.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                This course will take you through the fundamentals of user-friendly design, covering everything from understanding user needs to creating polished interfaces. You&apos;ll learn through interactive lessons, real-world projects, and hands-on exercises.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                By the end of this course, you&apos;ll have built a portfolio of user-friendly interfaces and gained the skills needed to start your freelance career or land a job in UI design. No advanced coding or design experience required!
              </p>
            </div>
          )}

          {activeTab === 'Curriculum' && (
            <div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Lessons With Video Content</h3>
                <div className="space-y-2">
                  {lessons.map((lesson, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-gray-600 text-sm">{index + 1}.</span>
                        <span className="text-gray-900">{lesson.title}</span>
                        <span className="text-gray-500 text-sm">{lesson.duration}</span>
                      </div>
                      {lesson.preview ? (
                        <Button size="sm" variant="outline" className="border-epic-dark text-epic-dark">
                          Preview
                        </Button>
                      ) : (
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'Instructor' && (
            <div>
              <div className="flex flex-col md:flex-row gap-6 mb-8">
                <div className="w-32 h-32 bg-epic-darker rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-4xl font-bold">DA</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{courseData.instructor}</h3>
                  <p className="text-gray-700 mb-4">
                    {courseData.instructor} is a tech-learning platform that helps students learn programming and build real-world projects through personalized paths and hands-on mentorship.
                  </p>
                  <div className="flex gap-6 mb-4">
                    <div>
                      <span className="text-gray-600 text-sm">{courseData.students}</span>
                    </div>
                    <div>
                      <span className="text-gray-600 text-sm">{courseData.lessons}</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">Follow:</p>
                    <div className="flex gap-3">
                      {['Facebook', 'Pinterest', 'Twitter', 'YouTube', 'Instagram'].map((social) => (
                        <a
                          key={social}
                          href="#"
                          className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-epic-light transition-colors"
                        >
                          <span className="text-xs text-gray-600">{social[0]}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'FAQs' && (
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-medium text-gray-900">{faq.question}</span>
                    <svg
                      className={`w-5 h-5 text-gray-500 transition-transform ${
                        expandedFaq === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {expandedFaq === index && (
                    <div className="p-4 bg-gray-50 border-t border-gray-200">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === 'Reviews' && (
            <div>
              <p className="text-gray-700">Reviews section coming soon...</p>
            </div>
          )}
        </div>
      </section>

      {/* Comment Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Leave A Comment</h2>
          <p className="text-sm text-gray-600 mb-6">
            Your email address will not be published. Required fields are marked *
          </p>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                type="text"
                placeholder="Name*"
                required
                className="w-full"
              />
              <Input
                type="email"
                placeholder="Email*"
                required
                className="w-full"
              />
            </div>
            <textarea
              placeholder="Comment"
              rows={6}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-epic-dark focus:border-transparent"
            />
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="save-info"
                className="w-4 h-4 text-epic-dark border-gray-300 rounded focus:ring-epic-dark"
              />
              <label htmlFor="save-info" className="text-sm text-gray-700">
                Save my name, email in this browser for the next time I comment
              </label>
            </div>
            <Button type="submit" className="bg-epic-dark hover:bg-epic-darker text-white">
              Posts Comment
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}

