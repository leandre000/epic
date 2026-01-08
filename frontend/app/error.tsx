'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function Error({
  reset,
}: {
  error?: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-12">Error</h1>

        {/* Error Illustration */}
        <div className="flex justify-center items-center my-12">
          <div className="relative w-full max-w-3xl">
            {/* Browser Window */}
            <div className="bg-gray-100 rounded-lg shadow-2xl p-8 md:p-12 border-4 border-gray-300">
              {/* Browser Controls */}
              <div className="flex gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                <div className="w-3 h-3 rounded-full bg-gray-400"></div>
              </div>

              {/* Content Area */}
              <div className="relative bg-gradient-to-br from-blue-50 to-green-50 rounded-lg p-12 min-h-[400px] flex items-center justify-center">
                {/* Large Question Mark */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[200px] md:text-[300px] font-bold text-green-200 opacity-50">?</span>
                </div>

                {/* Person with Magnifying Glass */}
                <div className="relative z-10 flex items-end">
                  {/* Stool */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-green-400 rounded-t-lg"></div>
                  
                  {/* Person */}
                  <div className="relative">
                    {/* Body */}
                    <div className="w-24 h-32 bg-blue-600 rounded-t-full relative">
                      {/* Head */}
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-yellow-200 rounded-full border-4 border-blue-600">
                        {/* Beard */}
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-8 bg-gray-600 rounded-b-full"></div>
                      </div>
                      {/* Arms */}
                      <div className="absolute top-8 -left-4 w-8 h-16 bg-blue-600 rounded-full"></div>
                      <div className="absolute top-8 -right-4 w-8 h-16 bg-blue-600 rounded-full">
                        {/* Magnifying Glass */}
                        <div className="absolute top-4 right-4 w-12 h-12 border-4 border-gray-800 rounded-full">
                          <div className="absolute -bottom-2 -right-2 w-4 h-8 bg-gray-800 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-8 left-8 w-16 h-16 bg-green-200 rounded-full opacity-50"></div>
                <div className="absolute top-16 right-12 w-12 h-12 bg-blue-200 rounded-full opacity-50"></div>
                <div className="absolute bottom-8 left-16 w-20 h-20 bg-green-100 rounded-full opacity-50"></div>
                <div className="absolute bottom-12 right-8 w-16 h-16 bg-blue-100 rounded-full opacity-50"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Error Message and Actions */}
        <div className="text-center mt-12">
          <p className="text-xl text-gray-600 mb-6">
            Something went wrong. Don&apos;t worry, we&apos;re on it!
          </p>
          <div className="flex gap-4 justify-center">
            <Button
              onClick={reset}
              className="bg-epic-dark hover:bg-epic-darker text-white"
            >
              Try Again
            </Button>
            <Link href="/">
              <Button variant="outline" className="border-epic-dark text-epic-dark">
                Go Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

