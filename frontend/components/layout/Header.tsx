'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-epic-dark">epic careers</span>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-8 hidden md:block">
            <Input
              type="text"
              placeholder="Search to find more."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full"
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-epic-dark transition-colors">
              Home
            </Link>
            <Link href="/jobs" className="text-gray-700 hover:text-epic-dark transition-colors">
              Explore
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-epic-dark transition-colors">
              Blog
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-epic-dark transition-colors">
              About Us
            </Link>
            <Link href="/courses" className="text-gray-700 hover:text-epic-dark transition-colors">
              Courses
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-epic-dark transition-colors">
              Contact Us
            </Link>
            <Link href="/admin" className="text-gray-700 hover:text-epic-dark transition-colors">
              Admin
            </Link>
          </div>

          {/* Profile/Auth */}
          <div className="flex items-center space-x-4">
            <Link href="/login">
              <Button variant="ghost" size="sm">
                Login
              </Button>
            </Link>
            <Link href="/register">
              <Button size="sm" className="bg-epic-dark hover:bg-epic-darker text-white">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
