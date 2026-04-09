import React from 'react';
import { ArrowRight, MapPin, Calendar, Tag } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
interface BlogSectionProps {
  onNavigate?: (page: 'home' | 'blog' | 'article', id?: string) => void;
}

// Append &fm=webp to Unsplash URLs so the browser receives WebP images
function toWebpUrl(url: string): string {
  if (url.includes('images.unsplash.com')) {
    return url.includes('fm=') ? url : `${url}&fm=webp`;
  }
  return url;
}
export function BlogSection({ onNavigate }: BlogSectionProps) {
  return (
    <section id="blog" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#f5f5f7]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1f2933] mb-4">
            Asia Relocation & Travel Blog
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Practical guides on how to relocate to Thailand or Vietnam — visa rules, cost of living for expats, housing tips, and local insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(0, 3).map((post) =>
          <article
            key={post.id}
            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full border border-gray-100">
            
              {/* Image Container — clickable */}
              <button
              onClick={() => onNavigate?.('article', post.id)}
              className="relative aspect-[16/9] overflow-hidden w-full block cursor-pointer"
              aria-label={`Read article: ${post.title}`}>
              
                <img
                src={toWebpUrl(post.coverImage)}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
                decoding="async"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                width="800"
                height="450" />
              
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
                  onClick={() => onNavigate?.('article', post.id)}
                  className="text-left">
                  
                    {post.title}
                  </button>
                </h3>

                <p className="text-gray-500 text-sm mb-6 line-clamp-3 flex-1">
                  {post.excerpt}
                </p>

                <button
                onClick={() => onNavigate?.('article', post.id)}
                className="inline-flex items-center justify-center px-5 py-2.5 bg-[#1f2933] text-white font-semibold text-sm rounded-lg hover:bg-[#374151] transition-colors mt-auto group w-fit">
                
                  Read Article
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </article>
          )}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => onNavigate?.('blog')}
            className="inline-flex items-center justify-center px-8 py-3 border border-[#1f2933] text-[#1f2933] font-medium rounded-md hover:bg-[#1f2933] hover:text-white transition-colors duration-300">
            
            View All Articles
          </button>
        </div>
      </div>
    </section>);

}