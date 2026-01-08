'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showExploreDropdown, setShowExploreDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col">
            <span className="text-xl sm:text-2xl font-bold text-epic-dark">epic careers</span>
            <span className="text-xs text-gray-500 hidden sm:block">Hunting for passion</span>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-2 md:mx-4 hidden md:block">
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">Q</span>
              <Input
                type="text"
                placeholder="Want to learn?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 text-sm"
              />
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            <div className="relative">
              <button
                onMouseEnter={() => setShowExploreDropdown(true)}
                onMouseLeave={() => setShowExploreDropdown(false)}
                className="text-gray-700 hover:text-epic-dark transition-colors flex items-center text-sm"
              >
                Explore
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {showExploreDropdown && (
                <div
                  className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50"
                  onMouseEnter={() => setShowExploreDropdown(true)}
                  onMouseLeave={() => setShowExploreDropdown(false)}
                >
                  <Link href="/jobs" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm">Jobs</Link>
                  <Link href="/courses" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm">Courses</Link>
                  <Link href="/companies" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm">Companies</Link>
                </div>
              )}
            </div>
            <Link href="/" className="text-gray-700 hover:text-epic-dark transition-colors text-sm">
              Home
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-epic-dark transition-colors text-sm">
              Blog
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-epic-dark transition-colors text-sm">
              About us
            </Link>
            <Link href="/courses" className="text-gray-700 hover:text-epic-dark transition-colors text-sm">
              Courses
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-epic-dark transition-colors text-sm">
              Contact us
            </Link>
            <Link href="/faq" className="text-gray-700 hover:text-epic-dark transition-colors text-sm">
              FAQ&apos;s
            </Link>
          </div>

          {/* User Profile - Positioned separately in top right */}
          <Link href="/profile" className="flex items-center space-x-2 cursor-pointer group relative ml-4">
            <div className="w-10 h-10 rounded-full bg-epic-light flex items-center justify-center overflow-hidden border-2 border-gray-200 group-hover:border-epic-dark transition-colors">
              <img
                src="/images/713778750076baca22525eed5075b8640f2fe45a.jpg"
                alt="User"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop';
                }}
              />
            </div>
            <span className="hidden xl:block text-sm font-medium text-gray-700">Lina</span>
            <svg className="w-4 h-4 text-gray-500 hidden xl:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-epic-dark"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="mb-4">
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">Q</span>
                <Input
                  type="text"
                  placeholder="Want to learn?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-8 text-sm"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <Link href="/" className="text-gray-700 hover:text-epic-dark transition-colors py-2 text-sm">
                Home
              </Link>
              <Link href="/jobs" className="text-gray-700 hover:text-epic-dark transition-colors py-2 text-sm">
                Explore
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-epic-dark transition-colors py-2 text-sm">
                Blog
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-epic-dark transition-colors py-2 text-sm">
                About us
              </Link>
              <Link href="/courses" className="text-gray-700 hover:text-epic-dark transition-colors py-2 text-sm">
                Courses
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-epic-dark transition-colors py-2 text-sm">
                Contact us
              </Link>
              <Link href="/faq" className="text-gray-700 hover:text-epic-dark transition-colors py-2 text-sm">
                FAQ&apos;s
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
