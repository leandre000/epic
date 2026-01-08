'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'What Does Royalty Free Mean?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    question: 'What Does Royalty Free Mean?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    question: 'What Does Royalty Free Mean?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    question: 'What Does Royalty Free Mean?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    question: 'What Does Royalty Free Mean?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    question: 'What Does Royalty Free Mean?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];

export default function FAQPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">FAQs</h1>

        {/* FAQ Accordion */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border border-gray-200 rounded-lg overflow-hidden transition-colors ${
                expandedFaq === index ? 'bg-gray-100' : 'bg-white'
              }`}
            >
              <button
                onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ${
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
                <div className="p-4 bg-gray-100 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Illustration */}
        <div className="flex justify-center items-center mt-12">
          <div className="relative w-full max-w-2xl">
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg p-8 md:p-12">
              <div className="flex flex-col items-center">
                {/* Person with laptop illustration */}
                <div className="relative mb-8">
                  {/* Laptop */}
                  <div className="w-48 h-32 bg-blue-200 rounded-lg shadow-lg flex items-center justify-center">
                    <div className="w-40 h-24 bg-white rounded"></div>
                  </div>
                  {/* Person */}
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-16 h-16 bg-purple-300 rounded-full flex items-center justify-center">
                      <svg className="w-10 h-10 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                {/* Floating elements */}
                <div className="absolute top-4 left-8">
                  <div className="w-8 h-8 bg-red-400 rounded transform rotate-45"></div>
                </div>
                <div className="absolute top-8 right-12">
                  <div className="w-8 h-8 bg-yellow-400 rounded transform rotate-45"></div>
                </div>
                <div className="absolute top-12 right-20">
                  <div className="w-8 h-8 bg-purple-400 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">?</span>
                  </div>
                </div>
                <div className="absolute top-16 left-16">
                  <div className="w-8 h-8 bg-blue-400 rounded transform rotate-45 flex items-center justify-center">
                    <span className="text-white font-bold">H</span>
                  </div>
                </div>
                {/* Graph */}
                <div className="absolute bottom-8 right-8">
                  <svg className="w-24 h-24" viewBox="0 0 100 100">
                    <line x1="10" y1="90" x2="90" y2="90" stroke="#4A5568" strokeWidth="2"/>
                    <line x1="10" y1="90" x2="10" y2="10" stroke="#4A5568" strokeWidth="2"/>
                    <path d="M 10 90 Q 30 70, 50 50 T 90 30" stroke="#3182CE" strokeWidth="3" fill="none"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
