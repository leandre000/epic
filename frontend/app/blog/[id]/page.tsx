'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

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
    title: 'The Ultimate Guide To Mastering Photography',
    image: '/images/96d8a032557797d4cf969ffa5fabbe22d5e952db.png',
  },
];

const tags = ['Free courses', 'Marketing', 'Idea', 'LMS', 'Development', 'Instructor'];

const comments = [
  {
    id: 1,
    name: 'Talia Hisyamuba',
    date: 'October 03, 2022',
    avatar: '/images/713778750076baca22525eed5075b8640f2fe45a.jpg',
    comment: 'EPIC gave my child tailored, data-driven career advice that was far beyond generic guidance. I highly recommend them to other parents.',
  },
  {
    id: 2,
    name: 'Peter Uwlmana',
    date: 'October 03, 2022',
    avatar: '/images/713778750076baca22525eed5075b8640f2fe45a.jpg',
    comment: 'Thanks to EPIC, I discovered a passion for engineering I didn\'t know I had. Their guidance helped me find direction and motivation.',
  },
  {
    id: 3,
    name: 'Claire Imanzi',
    date: 'October 03, 2022',
    avatar: '/images/713778750076baca22525eed5075b8640f2fe45a.jpg',
    comment: 'EPIC has been a game-changer for our school. Their data-backed approach has made a real difference in my students career planning.',
  },
];

export default function BlogDetailPage({ params }: { params: { id: string } }) {
  const [commentData, setCommentData] = useState({
    name: '',
    email: '',
    comment: '',
    saveInfo: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle comment submission
    console.log('Comment submitted', commentData);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Ultimate Guide To Building User-Friendly Interfaces
            </h1>

            {/* Metadata */}
            <div className="flex flex-wrap items-center gap-4 text-gray-600 text-sm mb-8">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>Adminadpalme</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Jan 24, 2023</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span>20 Comments</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden">
              <img
                src="/images/713778750076baca22525eed5075b8640f2fe45a.jpg"
                alt="Featured"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = '/images/4773b12fa93e098fec80f8df4e5b2463c7af96dd.jpg';
                }}
              />
            </div>

            {/* Article Content */}
            <div className="prose max-w-none mb-8">
              <p className="text-gray-700 leading-relaxed mb-4">
                The Ultimate Guide to Building User-Friendly Interfaces is a comprehensive course designed for anyone passionate about UI design—whether you&apos;re just starting out or looking to sharpen your skills. This is one of the best online courses available for learning how to create intuitive, engaging interfaces that enhance user experience and functionality.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Through a structured curriculum with interactive lessons and real-world design projects, you&apos;ll master the principles of user-centered design—all within a clean and easy-to-navigate learning environment. With this course, you&apos;ll build a solid foundation in interface design and develop the practical skills needed to create appealing websites or software that people love to use—no advanced coding or design experience required.
              </p>
            </div>

            {/* Tags */}
            <div className="mb-8">
              <span className="text-sm font-medium text-gray-900 mr-3">Tags:</span>
              <div className="inline-flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 rounded text-sm ${
                      tag === 'Development'
                        ? 'bg-epic-dark text-white'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Share */}
            <div className="mb-12">
              <span className="text-sm font-medium text-gray-900 mr-3">Share:</span>
              <div className="inline-flex gap-3">
                {['Facebook', 'Twitter', 'YouTube', 'Instagram'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-epic-dark hover:text-white transition-colors"
                  >
                    <span className="text-xs">{social[0]}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Article Navigation */}
            <div className="grid grid-cols-2 gap-4 mb-12">
              <Link href="/blog/1" className="p-4 border border-gray-200 rounded-lg hover:border-epic-dark transition-colors">
                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span className="text-sm">Prev Articles</span>
                </div>
                <p className="text-gray-900 font-medium line-clamp-2">The Ultimate Guide To Building User-Friendly Interfaces</p>
              </Link>
              <Link href="/blog/2" className="p-4 border border-gray-200 rounded-lg hover:border-epic-dark transition-colors text-right">
                <div className="flex items-center justify-end gap-2 text-gray-600 mb-2">
                  <span className="text-sm">Next Articles</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <p className="text-gray-900 font-medium line-clamp-2">The Ultimate Guide To Building User-Friendly Interfaces</p>
              </Link>
            </div>

            {/* Comments Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Comments</h2>
              <p className="text-gray-600 mb-6">30 Comments</p>

              <div className="space-y-6">
                {comments.map((comment) => (
                  <div key={comment.id} className="flex gap-4 pb-6 border-b border-gray-200 last:border-b-0">
                    <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                      <img
                        src={comment.avatar}
                        alt={comment.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop';
                        }}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-gray-900">{comment.name}</span>
                        <span className="text-sm text-gray-500">{comment.date}</span>
                      </div>
                      <p className="text-gray-700 mb-2">{comment.comment}</p>
                      <button className="text-sm text-epic-dark hover:underline">Reply</button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-center gap-2 mt-6">
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

            {/* Leave A Comment */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Leave A Comment</h2>
              <p className="text-gray-600 mb-6">
                Your email address will not be published. Required fields are marked *
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={commentData.name}
                    onChange={(e) => setCommentData({ ...commentData, name: e.target.value })}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={commentData.email}
                    onChange={(e) => setCommentData({ ...commentData, email: e.target.value })}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-2">
                    Comment
                  </label>
                  <textarea
                    id="comment"
                    value={commentData.comment}
                    onChange={(e) => setCommentData({ ...commentData, comment: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-epic-dark focus:border-epic-dark outline-none resize-none"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="save-info"
                    checked={commentData.saveInfo}
                    onChange={(e) => setCommentData({ ...commentData, saveInfo: e.target.checked })}
                    className="w-4 h-4 text-epic-dark border-gray-300 rounded focus:ring-epic-dark"
                  />
                  <label htmlFor="save-info" className="text-sm text-gray-700">
                    Save my name, email in this browser for the next time I comment
                  </label>
                </div>
                <Button
                  type="submit"
                  className="bg-epic-dark hover:bg-epic-darker text-white"
                >
                  Post Comment
                </Button>
              </form>
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

