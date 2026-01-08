'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

const offers = [
  {
    discount: '50%',
    title: 'Start Your Career Journey Today',
    description: 'Take the first step toward your dream career with EPIC\'s free and personalized guidance.',
    image: '/images/851629b974b0e40589d8b2df651330a5e5c2b912.jpg',
  },
  {
    discount: '10%',
    title: 'Start Your Career Journey Today',
    description: 'Take the first step toward your dream career with EPIC\'s free and personalized guidance.',
    image: '/images/a37e1a9c36b45642079ab15a8f753e1d21258de7.jpg',
  },
  {
    discount: '50%',
    title: 'Start Your Career Journey Today',
    description: 'Take the first step toward your dream career with EPIC\'s free and personalized guidance.',
    image: '/images/d55799db3f196f47823bee73e39cf73a1caec392.jpg',
  },
];

export default function CheckoutPage() {
  const [selectedCardType, setSelectedCardType] = useState<string>('');
  const [formData, setFormData] = useState({
    nameOnCard: '',
    cardNumber: '',
    expirationDate: '',
    cvc: '',
    saveInfo: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle payment processing
    console.log('Payment submitted', formData);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Payment Form */}
            <div className="lg:col-span-2">
              <div className="bg-white border-2 border-blue-500 rounded-lg p-8">
                <h1 className="text-3xl md:text-4xl font-bold text-epic-dark mb-8">Course Payment</h1>

                {/* Card Types */}
                <div className="mb-6">
                  <p className="text-sm font-medium text-gray-700 mb-3">Cart Type</p>
                  <div className="flex gap-4">
                    <button
                      onClick={() => setSelectedCardType('paypal')}
                      className={`flex items-center justify-center w-20 h-12 border-2 rounded transition-colors ${
                        selectedCardType === 'paypal'
                          ? 'border-epic-dark bg-epic-light'
                          : 'border-gray-300 hover:border-epic-dark'
                      }`}
                    >
                      <img
                        src="/images/0e31f22ac425ebdab5432c00af4e38cdac16199d.png"
                        alt="PayPal"
                        className="h-6 object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                      <span className="hidden text-xs font-semibold text-blue-600">PayPal</span>
                    </button>
                    <button
                      onClick={() => setSelectedCardType('visa')}
                      className={`flex items-center justify-center w-20 h-12 border-2 rounded transition-colors ${
                        selectedCardType === 'visa'
                          ? 'border-epic-dark bg-epic-light'
                          : 'border-gray-300 hover:border-epic-dark'
                      }`}
                    >
                      <img
                        src="/images/008b55b354350959de9d71c666d0f2b6c3e74480.png"
                        alt="VISA"
                        className="h-6 object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                      <span className="hidden text-xs font-semibold text-blue-600">VISA</span>
                    </button>
                    <button
                      onClick={() => setSelectedCardType('mastercard')}
                      className={`flex items-center justify-center w-20 h-12 border-2 rounded transition-colors ${
                        selectedCardType === 'mastercard'
                          ? 'border-epic-dark bg-epic-light'
                          : 'border-gray-300 hover:border-epic-dark'
                      }`}
                    >
                      <span className="text-xs font-semibold text-red-600">MC</span>
                    </button>
                    <button
                      onClick={() => setSelectedCardType('momo')}
                      className={`flex items-center justify-center w-20 h-12 border-2 rounded transition-colors ${
                        selectedCardType === 'momo'
                          ? 'border-epic-dark bg-epic-light'
                          : 'border-gray-300 hover:border-epic-dark'
                      }`}
                    >
                      <img
                        src="/images/c8a4649e9487cb4aa1c054932ffb6810e642c295.png"
                        alt="MoMo"
                        className="h-8 object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                      <span className="hidden text-xs font-semibold text-orange-600">MoMo</span>
                    </button>
                  </div>
                </div>

              {/* Payment Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name on Card
                  </label>
                  <Input
                    type="text"
                    value={formData.nameOnCard}
                    onChange={(e) => setFormData({ ...formData, nameOnCard: e.target.value })}
                    placeholder="Enter name on Card"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Card Number
                  </label>
                  <Input
                    type="text"
                    value={formData.cardNumber}
                    onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                    placeholder="Enter Card Number"
                    maxLength={19}
                    required
                    className="w-full"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Expiration Date (MM/YY)
                    </label>
                    <Input
                      type="text"
                      value={formData.expirationDate}
                      onChange={(e) => setFormData({ ...formData, expirationDate: e.target.value })}
                      placeholder="Enter Expiration Date"
                      maxLength={5}
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      CVC
                    </label>
                    <Input
                      type="text"
                      value={formData.cvc}
                      onChange={(e) => setFormData({ ...formData, cvc: e.target.value })}
                      placeholder="Enter CVC"
                      maxLength={4}
                      required
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="save-info"
                    checked={formData.saveInfo}
                    onChange={(e) => setFormData({ ...formData, saveInfo: e.target.checked })}
                    className="w-4 h-4 text-epic-dark border-gray-300 rounded focus:ring-epic-dark"
                  />
                  <label htmlFor="save-info" className="text-sm text-gray-700">
                    Save my information for faster checkout
                  </label>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-epic-dark hover:bg-epic-darker text-white"
                >
                  Confirm Payment
                </Button>
              </div>
              </form>
            </div>

            {/* Offers Sidebar */}
            <div className="lg:col-span-1">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">
                  Top Education offers and deals are listed here
                </h2>
                <Link href="/courses" className="text-sm text-epic-dark hover:underline">
                  See all
                </Link>
              </div>

              <div className="space-y-4">
                {offers.map((offer, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                  >
                    <div className="relative h-48">
                      <img
                        src={offer.image}
                        alt={offer.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=400&h=300&fit=crop';
                        }}
                      />
                      <div className="absolute inset-0 bg-epic-dark bg-opacity-60 flex flex-col justify-center items-center text-white p-4">
                        <div className="text-4xl font-bold mb-2">{offer.discount}</div>
                        <h3 className="text-lg font-semibold mb-2 text-center">{offer.title}</h3>
                        <p className="text-sm text-center opacity-90">{offer.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

