import React, { useState, useMemo } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { blogPosts } from '../data/blogPosts';
import { ArrowRight, Calendar, MapPin, Tag, Search, X } from 'lucide-react';

interface BlogPageProps {
  onNavigate: (page: 'home' | 'blog' | 'article', id?: string) => void;
}

export function BlogPage({ onNavigate }: BlogPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = useMemo(() => {
    const cats = Array.from(new Set(blogPosts.map((p) => p.category)));
    return ['All', ...cats];
  }, []);

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory =
        selectedCategory === 'All' || post.category === selectedCategory;
      const matchesSearch =
        searchQuery === '' ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const featuredPost = filteredPosts[0];
  const remainingPosts = filteredPosts.slice(1);

  return (
    <div className="min-h-screen bg-[#f5f5f7] font-sans text-[#1f2933]">
      <Navbar onNavigate={onNavigate} forceDark={true} />

      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1f2933] mb-4">
              Travel Blog
            </h1>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Explore our latest stories, guides, and tips for your next
              adventure across Southeast Asia.
            </p>
          </div>

          {/* Search & Filter Bar */}
          <div className="mb-10 flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles..."
                className="w-full pl-10 pr-10 py-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#1f2933]/20 focus:border-[#1f2933] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === cat
                      ? 'bg-[#1f2933] text-white'
                      : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Results count */}
          {(searchQuery || selectedCategory !== 'All') && (
            <p className="text-sm text-gray-500 mb-6">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
              {selectedCategory !== 'All' && ` in "${selectedCategory}"`}
              {searchQuery && ` matching "${searchQuery}"`}
            </p>
          )}

          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg mb-2">No articles found.</p>
              <p className="text-gray-400 text-sm">
                Try a different search term or category.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="mt-4 text-[#1f2933] font-medium hover:underline"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <>
              {/* Featured Post (Hero) */}
              {featuredPost && (
                <button
                  onClick={() => onNavigate('article', featuredPost.id)}
                  className="w-full text-left mb-12 group"
                >
                  <div className="relative rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                    <div className="grid md:grid-cols-2">
                      <div className="relative aspect-[16/10] md:aspect-auto overflow-hidden">
                        <img
                          src={featuredPost.coverImage}
                          alt={featuredPost.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="eager"
                          decoding="async"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-[#1f2933] backdrop-blur-sm shadow-sm">
                            <Tag className="w-3 h-3 mr-1" />
                            {featuredPost.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-8 md:p-10 flex flex-col justify-center">
                        <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">
                          Featured Article
                        </span>
                        <h2 className="text-2xl md:text-3xl font-bold text-[#1f2933] mb-4 group-hover:text-[#4b5563] transition-colors leading-tight">
                          {featuredPost.title}
                        </h2>
                        <p className="text-gray-500 mb-6 line-clamp-3">
                          {featuredPost.excerpt}
                        </p>
                        <div className="flex items-center text-xs text-gray-400 mb-6 space-x-4">
                          <div className="flex items-center">
                            <Calendar className="w-3 h-3 mr-1" />
                            {featuredPost.date}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-3 h-3 mr-1" />
                            {featuredPost.readTime}
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {featuredPost.tags.slice(0, 4).map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-0.5 bg-gray-100 text-gray-600 rounded-full text-xs"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <span className="inline-flex items-center text-[#1f2933] font-semibold text-sm group-hover:gap-2 transition-all">
                          Read Article
                          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
              )}

              {/* Remaining Posts Grid */}
              {remainingPosts.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {remainingPosts.map((post) => (
                    <article
                      key={post.id}
                      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full border border-gray-100"
                    >
                      {/* Image Container */}
                      <button
                        onClick={() => onNavigate('article', post.id)}
                        className="relative aspect-[16/9] overflow-hidden w-full block cursor-pointer"
                        aria-label={`Read article: ${post.title}`}
                      >
                        <img
                          src={post.coverImage}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                          loading="lazy"
                          decoding="async"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          width="800"
                          height="450"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-[#1f2933] backdrop-blur-sm shadow-sm">
                            <Tag className="w-3 h-3 mr-1" />
                            {post.category}
                          </span>
                        </div>
                      </button>

                      {/* Content */}
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center text-xs text-gray-400 mb-3 space-x-4">
                          <div className="flex items-center">
                            <Calendar className="w-3 h-3 mr-1" />
                            {post.date}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-3 h-3 mr-1" />
                            {post.readTime}
                          </div>
                        </div>

                        <h3 className="text-xl font-bold text-[#1f2933] mb-3 line-clamp-2 hover:text-[#4b5563] transition-colors">
                          <button
                            onClick={() => onNavigate('article', post.id)}
                            className="text-left"
                          >
                            {post.title}
                          </button>
                        </h3>

                        <p className="text-gray-500 text-sm mb-4 line-clamp-3 flex-1">
                          {post.excerpt}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {post.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 bg-gray-50 text-gray-500 rounded text-xs"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <button
                          onClick={() => onNavigate('article', post.id)}
                          className="inline-flex items-center justify-center px-5 py-2.5 bg-[#1f2933] text-white font-semibold text-sm rounded-lg hover:bg-[#374151] transition-colors mt-auto group w-fit"
                        >
                          Read Article
                          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
