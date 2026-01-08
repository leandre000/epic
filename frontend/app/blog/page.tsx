'use client';

import { useState } from 'react';
import Link from 'next/link';

const articles = [
  {
    id: 1,
    title: 'The Ultimate Guide To Building User-Friendly Interfaces',
    date: 'Jan 24, 2023',
    image: '/images/713778750076baca22525eed5075b8640f2fe45a.jpg',
    snippet: 'We envision a world where everyone has access to the tools and support...',
  },
  {
    id: 2,
    title: 'The Ultimate Guide To Building User-Friendly Interfaces',
    date: 'Jan 24, 2023',
    image: '/images/4f2c785f6065e5ff7905e1f7cd63097088a96c88.jpg',
    snippet: 'We envision a world where everyone has access to the tools and support...',
  },
  {
    id: 3,
    title: 'The Ultimate Guide Mastering Photography',
    date: 'Jan 24, 2023',
    image: '/images/96d8a032557797d4cf969ffa5fabbe22d5e952db.png',
    snippet: 'We envision a world where everyone has access to the tools and support...',
  },
  {
    id: 4,
    title: 'The Ultimate Guide Mastering Photography',
    date: 'Jan 24, 2023',
    image: '/images/851629b974b0e40589d8b2df651330a5e5c2b912.jpg',
    snippet: 'We envision a world where everyone has access to the tools and support...',
  },
  {
    id: 5,
    title: 'The Ultimate Guide Mastering Photography',
    date: 'Jan 24, 2023',
    image: '/images/a37e1a9c36b45642079ab15a8f753e1d21258de7.jpg',
    snippet: 'We envision a world where everyone has access to the tools and support...',
  },
  {
    id: 6,
    title: 'The Ultimate Guide To Building User-Friendly Interfaces',
    date: 'Jan 24, 2023',
    image: '/images/4773b12fa93e098fec80f8df4e5b2463c7af96dd.jpg',
    snippet: 'We envision a world where everyone has access to the tools and support...',
  },
];

const categories = [
  { name: 'Commercial', count: 15 },
  { name: 'Office', count: 15 },
  { name: 'Shop', count: 15 },
  { name: 'Educate', count: 15 },
  { name: 'Academy', count: 15 },
  { name: 'Single family home', count: 15 },
];

const recentPosts = [
  {
    id: 1,
    title: 'The Ultimate Guide To Building User-Friendly Interfaces',
    image: '/images/713778750076baca22525eed5075b8640f2fe45a.jpg',
  },
  {
    id: 2,
    title: 'The Ultimate Guide To Building User-Friendly Interfaces',
    image: '/images/4f2c785f6065e5ff7905e1f7cd63097088a96c88.jpg',
  },
  {
    id: 3,
    title: 'The Ultimate Guide To Matering Photography',
    image: '/images/96d8a032557797d4cf969ffa5fabbe22d5e952db.png',
  },
];

const tags = ['Free couses', 'Marketing', 'Idea', 'LMS', 'Development', 'Instructor'];

export default function BlogPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">All Articles</h1>
              <div className="flex items-center gap-4">
                <div className="relative flex-1 max-w-xs">
                  <input
                    type="text"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-epic-dark focus:border-epic-dark outline-none"
                  />
                  <svg
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <div className="flex items-center gap-2 border border-gray-300 rounded-md p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded ${viewMode === 'grid' ? 'bg-epic-dark text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded ${viewMode === 'list' ? 'bg-epic-dark text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Articles Grid */}
            <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
              {articles.map((article) => (
                <Link key={article.id} href={`/blog/${article.id}`}>
                  <article className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                    <div className="relative w-full h-48">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = '/images/4773b12fa93e098fec80f8df4e5b2463c7af96dd.jpg';
                        }}
                      />
                    </div>
                    <div className="p-6">
                      <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{article.title}</h2>
                      <div className="flex items-center gap-2 text-gray-600 text-sm mb-3">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>{article.date}</span>
                      </div>
                      <p className="text-gray-600 line-clamp-2">{article.snippet}</p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 mt-12">
              <button className="p-2 text-gray-600 hover:text-epic-dark">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="w-10 h-10 rounded-full bg-epic-dark text-white font-medium">1</button>
              <button className="w-10 h-10 rounded-full text-gray-600 hover:bg-gray-100 font-medium">2</button>
              <button className="w-10 h-10 rounded-full text-gray-600 hover:bg-gray-100 font-medium">3</button>
              <button className="p-2 text-gray-600 hover:text-epic-dark">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              {/* Categories */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Category</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <Link href={`/blog?category=${category.name.toLowerCase()}`} className="flex items-center justify-between text-gray-700 hover:text-epic-dark transition-colors">
                        <span>{category.name}</span>
                        <span className="text-gray-500">({category.count})</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Posts */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Posts</h3>
                <ul className="space-y-4">
                  {recentPosts.map((post) => (
                    <li key={post.id}>
                      <Link href={`/blog/${post.id}`} className="flex gap-3 group">
                        <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                            onError={(e) => {
                              e.currentTarget.src = '/images/4773b12fa93e098fec80f8df4e5b2463c7af96dd.jpg';
                            }}
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm font-medium text-gray-900 group-hover:text-epic-dark line-clamp-2">{post.title}</h4>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <Link
                      key={index}
                      href={`/blog?tag=${tag.toLowerCase().replace(/\s+/g, '-')}`}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-epic-dark hover:text-white transition-colors"
                    >
                      {tag}
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
