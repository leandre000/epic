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
        { text: 'Access to selected free courses', included: true },
        { text: 'Limited course materials and resources', included: true },
        { text: 'Basic community support', included: true },
        { text: 'No certification upon completion', included: false },
        { text: 'Ad-supported platform', included: false },
        { text: 'Access to exclusive Pro Plan community forums', included: false },
        { text: 'Early access to new courses and updates', included: false },
      ],
    },
    {
      name: 'Pro Plan',
      price: '300,000 Rwf',
      features: [
        { text: 'Unlimited access to all courses', included: true },
        { text: 'Unlimited course materials and resources', included: true },
        { text: 'Priority support from instructors', included: true },
        { text: 'Course completion certificates', included: true },
        { text: 'Ad-free experience', included: true },
        { text: 'Access to exclusive Pro Plan community forums', included: true },
        { text: 'Early access to new courses and updates', included: true },
      ],
    },
  ],
  yearly: [
    {
      name: 'Starter Plan',
      price: '500,000 Rwf',
      features: [
        { text: 'Access to selected free courses', included: true },
        { text: 'Limited course materials and resources', included: true },
        { text: 'Basic community support', included: true },
        { text: 'No certification upon completion', included: false },
        { text: 'Ad-supported platform', included: false },
        { text: 'Access to exclusive Pro Plan community forums', included: false },
        { text: 'Early access to new courses and updates', included: false },
      ],
    },
    {
      name: 'Pro Plan',
      price: '3,000,000 Rwf',
      features: [
        { text: 'Unlimited access to all courses', included: true },
        { text: 'Unlimited course materials and resources', included: true },
        { text: 'Priority support from instructors', included: true },
        { text: 'Course completion certificates', included: true },
        { text: 'Ad-free experience', included: true },
        { text: 'Access to exclusive Pro Plan community forums', included: true },
        { text: 'Early access to new courses and updates', included: true },
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
          <div className="mb-12">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <h1 className="text-4xl md:text-5xl font-bold text-epic-dark">Our Pricings</h1>
            </div>
            <p className="text-lg text-gray-600 max-w-4xl leading-relaxed">
              Welcome to Epic Careers&apos; Pricing Plan page, where we offer two comprehensive options to cater to your needs: Free and Pro. We believe in providing flexible and affordable pricing options for our services. Whether you&apos;re an individual looking to enhance your skills or a business seeking professional development solutions, we have a plan that suits you. Explore our pricing options below and choose the one that best fits your requirements.
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
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Available Features</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        {feature.included ? (
                          <svg
                            className="w-5 h-5 text-epic-dark flex-shrink-0 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <svg
                            className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        )}
                        <span className={`text-gray-700 ${!feature.included ? 'line-through opacity-60' : ''}`}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600 mb-2">Still you have any questions? Contact our Team via</p>
              <a href="mailto:support@epiccareers.com" className="text-epic-dark hover:underline">
                support@epiccareers.com
              </a>
              <div className="mt-4">
                <Link href="/faq" className="text-epic-dark hover:underline font-medium">
                  See All FAQ&apos;s →
                </Link>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {[
                  {
                    question: 'Can I enroll in multiple courses at once?',
                    answer: 'Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.',
                    button: 'Enrollment Process for Different Courses',
                  },
                  {
                    question: 'What kind of support can I expect from instructors?',
                    answer: 'Pro Plan members receive priority support with faster response times. Starter Plan members have access to basic community support.',
                  },
                  {
                    question: 'Are the courses self-paced or do they have specific start and end dates?',
                    answer: 'All our courses are self-paced, allowing you to learn at your own speed and convenience.',
                  },
                  {
                    question: 'Are there any prerequisites for the courses?',
                    answer: 'Most courses are designed for beginners, but some advanced courses may have prerequisites which will be clearly stated in the course description.',
                  },
                  {
                    question: 'Can I download the course materials for offline access?',
                    answer: 'Yes, Pro Plan members can download course materials for offline access. Starter Plan members have online-only access.',
                  },
                ].map((faq, index) => (
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
                        <p className="text-gray-700 mb-3">{faq.answer}</p>
                        {faq.button && (
                          <button className="flex items-center gap-2 text-epic-dark hover:underline font-medium">
                            {faq.button}
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

