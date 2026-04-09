import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { blogPosts } from '../data/blogPosts';
import { ArrowRight, Calendar, MapPin, Tag } from 'lucide-react';

// Append &fm=webp to Unsplash URLs so the browser receives WebP images
function toWebpUrl(url: string): string {
  try {
    const parsed = new URL(url);
    if (parsed.hostname === 'images.unsplash.com') {
      return parsed.searchParams.has('fm') ? url : `${url}&fm=webp`;
    }
  } catch {
    // Not a valid absolute URL — return unchanged
  }
  return url;
}
interface BlogPageProps {
  onNavigate: (page: 'home' | 'blog' | 'article' | 'tools', id?: string) => void;
}
export function BlogPage({ onNavigate }: BlogPageProps) {
  return (
    <div className="min-h-screen bg-[#f5f5f7] font-sans text-[#1f2933]">
      <Navbar onNavigate={onNavigate} forceDark={true} />

      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1f2933] mb-4">
              Travel Blog
            </h1>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Explore our latest stories, guides, and tips for your next
              adventure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) =>
            <article
              key={post.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full border border-gray-100">
              
                {/* Image Container — clickable */}
                <button
                onClick={() => onNavigate('article', post.id)}
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
                    onClick={() => onNavigate('article', post.id)}
                    className="text-left">
                    
                      {post.title}
                    </button>
                  </h3>

                  <p className="text-gray-500 text-sm mb-6 line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>

                  <button
                  onClick={() => onNavigate('article', post.id)}
                  className="inline-flex items-center justify-center px-5 py-2.5 bg-[#1f2933] text-white font-semibold text-sm rounded-lg hover:bg-[#374151] transition-colors mt-auto group w-fit">
                  
                    Read Article
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </article>
            )}
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>);

}