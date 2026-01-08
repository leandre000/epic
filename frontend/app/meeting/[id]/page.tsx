'use client';

import { useState } from 'react';
import Link from 'next/link';

const courseModules = [
  {
    id: 'get-started',
    title: 'Get Started',
    duration: '1 Hour',
    lessons: 5,
    expanded: false,
    items: [],
  },
  {
    id: 'illustrator-structures',
    title: 'Illustrator Structuors',
    duration: '2 Hour',
    lessons: 3,
    expanded: true,
    items: [
      { id: 1, title: 'Lorem ipsum dolor sit amet', duration: '65:00', completed: true, locked: false },
      { id: 2, title: 'Lorem ipsum dolor', duration: '25:00', completed: false, locked: true },
      { id: 3, title: 'Lorem ipsum dolor sit amet', duration: '30:00', completed: false, locked: true },
    ],
  },
  {
    id: 'using-illustrator',
    title: 'Using Illustrator',
    duration: '1 Hour',
    lessons: 4,
    expanded: false,
    items: [],
  },
  {
    id: 'what-is-pandas',
    title: 'What is Pandas?',
    duration: '12:54',
    lessons: 5,
    expanded: false,
    items: [],
  },
  {
    id: 'work-with-numpy',
    title: 'Work with Numpy',
    duration: '59:00',
    lessons: 3,
    expanded: false,
    items: [],
  },
];

const recommendations = [
  {
    id: 1,
    title: 'All Benefits of PLUS',
    image: '/images/713778750076baca22525eed5075b8640f2fe45a.jpg',
  },
  {
    id: 2,
    title: 'All Benefits of PLUS',
    image: '/images/713778750076baca22525eed5075b8640f2fe45a.jpg',
  },
];

export default function MeetingPage({ params }: { params: { id: string } }) {
  const [expandedModules, setExpandedModules] = useState<Record<string, boolean>>({
    'illustrator-structures': true,
  });

  const toggleModule = (moduleId: string) => {
    setExpandedModules((prev) => ({ ...prev, [moduleId]: !prev[moduleId] }));
  };

  return (
    <div className="h-screen bg-white flex flex-col overflow-hidden">
      {/* Top Bar */}
      <div className="bg-gray-800 text-white px-6 py-2 text-sm">Meeting</div>

      <div className="flex-1 flex overflow-hidden">
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className="bg-blue-100 px-6 py-4 border-b border-blue-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Link href="/courses" className="text-epic-dark hover:text-epic-darker">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </Link>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">UX/UI Design Conference Meeting</h1>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                    <span>9 Lesson</span>
                    <span>6h 30min</span>
                  </div>
                </div>
              </div>
              <button className="text-gray-600 hover:text-gray-900">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Video Area */}
          <div className="flex-1 flex gap-4 p-6 bg-gray-900">
            {/* Main Video */}
            <div className="flex-1 relative bg-gray-800 rounded-lg overflow-hidden">
              <img
                src="/images/851629b974b0e40589d8b2df651330a5e5c2b912.jpg"
                alt="Main speaker"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = '/images/4773b12fa93e098fec80f8df4e5b2463c7af96dd.jpg';
                }}
              />
            </div>

            {/* Side Videos */}
            <div className="w-48 flex flex-col gap-2">
              <div className="flex-1 bg-gray-800 rounded-lg overflow-hidden">
                <img
                  src="/images/713778750076baca22525eed5075b8640f2fe45a.jpg"
                  alt="Participant 1"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = '/images/4773b12fa93e098fec80f8df4e5b2463c7af96dd.jpg';
                  }}
                />
              </div>
              <div className="flex-1 bg-gray-800 rounded-lg overflow-hidden">
                <img
                  src="/images/a37e1a9c36b45642079ab15a8f753e1d21258de7.jpg"
                  alt="Participant 2"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = '/images/4773b12fa93e098fec80f8df4e5b2463c7af96dd.jpg';
                  }}
                />
              </div>
              <div className="flex-1 bg-gray-800 rounded-lg overflow-hidden">
                <img
                  src="/images/851629b974b0e40589d8b2df651330a5e5c2b912.jpg"
                  alt="Participant 3"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = '/images/4773b12fa93e098fec80f8df4e5b2463c7af96dd.jpg';
                  }}
                />
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="bg-white border-t border-gray-200 px-6 py-4">
            <div className="flex items-center justify-center gap-4">
              <button className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center text-white hover:bg-red-600 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </button>
              <button className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white hover:bg-green-600 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </button>
              <button className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center text-white hover:bg-red-600 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M7 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12h18M3 6h18M3 18h18" />
                </svg>
              </button>
              <button className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white hover:bg-green-600 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </button>
              <button className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white hover:bg-green-600 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-80 bg-white border-l border-gray-200 flex flex-col overflow-hidden">
          {/* Course Contents */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <h2 className="font-semibold text-gray-900">Course Contents</h2>
            </div>
            <div className="mb-4">
              <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                <span>2/5 COMPLETED</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-epic-dark h-2 rounded-full" style={{ width: '40%' }}></div>
              </div>
            </div>
          </div>

          {/* Scrollable Modules */}
          <div className="flex-1 overflow-y-auto p-4">
            {courseModules.map((module) => (
              <div key={module.id} className="mb-4">
                <button
                  onClick={() => toggleModule(module.id)}
                  className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="text-left">
                    <h3 className="font-medium text-gray-900">{module.title}</h3>
                    <p className="text-xs text-gray-600">{module.duration} • {module.lessons} Lesson</p>
                  </div>
                  <svg
                    className={`w-5 h-5 text-gray-600 transition-transform ${expandedModules[module.id] ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedModules[module.id] && module.items && (
                  <div className="mt-2 space-y-1">
                    {module.items.map((item) => (
                      <div
                        key={item.id}
                        className={`flex items-center justify-between p-2 rounded ${
                          item.completed ? 'bg-epic-light' : 'hover:bg-gray-50'
                        }`}
                      >
                        <div className="flex items-center gap-2 flex-1">
                          <span className={`text-sm ${item.completed ? 'text-epic-dark font-medium' : 'text-gray-700'}`}>
                            {item.id}. {item.title}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-gray-500">{item.duration}</span>
                          {item.locked && (
                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Book for you */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <h2 className="font-semibold text-gray-900">Book for you</h2>
            </div>
            <div className="space-y-4">
              {recommendations.map((rec) => (
                <div key={rec.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="relative w-full h-32">
                    <img
                      src={rec.image}
                      alt={rec.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = '/images/4773b12fa93e098fec80f8df4e5b2463c7af96dd.jpg';
                      }}
                    />
                  </div>
                  <div className="p-3">
                    <p className="text-sm font-medium text-gray-900 mb-2">{rec.title}</p>
                    <button className="w-full py-2 bg-epic-dark text-white rounded text-sm font-medium hover:bg-epic-darker transition-colors">
                      Learn more
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

