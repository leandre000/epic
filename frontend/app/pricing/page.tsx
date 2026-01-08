'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

const plans = {
  monthly: [
    {
      name: 'Starter Plan',
      price: '50,000 Rwf',
      features: [
        'Access to selected free courses',
        'Limited course materials and activities',
        'Basic community support',
        'No certification upon completion',
        'All-supported platform',
        'Access to exclusive Pro Plan community forums',
        'Early access to new courses and updates',
      ],
    },
    {
      name: 'Pro Plan',
      price: '300,000 Rwf',
      features: [
        'Unlimited courses',
        'Unlimited course materials and resources',
        'Priority support from instructors',
        'Course completion certificates',
        'Ad-free experience',
        'Access to exclusive Pro Plan community forums',
        'Early access to new courses and updates',
      ],
    },
  ],
  yearly: [
    {
      name: 'Starter Plan',
      price: '500,000 Rwf',
      features: [
        'Access to selected free courses',
        'Limited course materials and activities',
        'Basic community support',
        'No certification upon completion',
        'All-supported platform',
        'Access to exclusive Pro Plan community forums',
        'Early access to new courses and updates',
      ],
    },
    {
      name: 'Pro Plan',
      price: '3,000,000 Rwf',
      features: [
        'Unlimited courses',
        'Unlimited course materials and resources',
        'Priority support from instructors',
        'Course completion certificates',
        'Ad-free experience',
        'Access to exclusive Pro Plan community forums',
        'Early access to new courses and updates',
      ],
    },
  ],
};

const faqs = [
  {
    question: 'Can I enroll in multiple courses at once?',
    answer: 'Yes, with the Pro Plan you can enroll in unlimited courses simultaneously. The Starter Plan allows access to selected free courses.',
  },
  {
    question: 'What kind of support can I expect from instructors?',
    answer: 'Pro Plan members receive priority support with faster response times. Starter Plan members have access to basic community support.',
  },
  {
    question: 'Can I switch plans later?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.',
  },
  {
    question: 'Do you offer refunds?',
    answer: 'We offer a 30-day money-back guarantee for all plans. Contact our support team for assistance.',
  },
];

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-epic-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-epic-dark mb-4">Our Pricings</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Welcome to Epic Careers Pricing Plan. Choose the plan that best fits your learning journey and career goals.
            </p>
          </div>

          {/* Billing Toggle */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center bg-white rounded-lg p-1 shadow-md border border-gray-200">
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={`px-6 py-2 rounded-md font-medium transition-all ${
                  billingPeriod === 'monthly'
                    ? 'bg-epic-dark text-white shadow-sm'
                    : 'text-gray-700 hover:text-epic-dark'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingPeriod('yearly')}
                className={`px-6 py-2 rounded-md font-medium transition-all ${
                  billingPeriod === 'yearly'
                    ? 'bg-epic-dark text-white shadow-sm'
                    : 'text-gray-700 hover:text-epic-dark'
                }`}
              >
                Yearly
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {plans[billingPeriod].map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg border-2 border-gray-200 p-8 hover:border-epic-dark transition-colors"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-epic-dark">{plan.price}</span>
                  <span className="text-gray-600 ml-2">/{billingPeriod === 'monthly' ? 'month' : 'year'}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-epic-dark flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/checkout" className="block">
                  <Button className="w-full bg-epic-dark hover:bg-epic-darker text-white">
                    Get Started
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
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
                      expandedFaq === index ? 'rotate-45' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
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
        </div>
      </section>
    </div>
  );
}

