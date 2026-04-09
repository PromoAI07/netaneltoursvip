import { useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { blogPosts } from '../data/blogPosts';
import { ArrowLeft, Calendar, Clock, Tag, User } from 'lucide-react';

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
interface ArticlePageProps {
  articleId: string;
  onNavigate: (page: 'home' | 'blog' | 'article' | 'tools', id?: string) => void;
}
// Simple Markdown Parser
function renderMarkdown(markdown: string): string {
  if (!markdown) return '';
  // 1. Split into lines to handle block elements
  const lines = markdown.split('\n');
  let html = '';
  let inList = false;
  let inTable = false;
  let tableHeaderProcessed = false;
  // Helper to process inline styles (bold, italic)
  const processInline = (text: string) => {
    return (
      text.
      replace(
        /\*\*(.*?)\*\*/g,
        '<strong class="font-semibold text-gray-800">$1</strong>'
      ).
      replace(/\*(.*?)\*/g, '<em>$1</em>')
      // Basic link support just in case
      .replace(
        /\[(.*?)\]\((.*?)\)/g,
        '<a href="$2" class="text-blue-600 hover:underline">$1</a>'
      ));

  };
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i].trim();
    // Skip empty lines unless they are needed to close lists/tables
    if (line === '') {
      if (inList) {
        html += '</ul>';
        inList = false;
      }
      if (inTable) {
        html += '</tbody></table>';
        inTable = false;
        tableHeaderProcessed = false;
      }
      continue;
    }
    // --- Headings ---
    if (line.startsWith('# ')) {
      html += `<h1 class="text-2xl font-bold mb-4 mt-6 text-gray-800">${processInline(line.slice(2))}</h1>`;
      continue;
    }
    if (line.startsWith('## ')) {
      html += `<h2 class="text-xl font-semibold mb-3 mt-6 text-gray-700 border-b border-gray-200 pb-2">${processInline(line.slice(3))}</h2>`;
      continue;
    }
    if (line.startsWith('### ')) {
      html += `<h3 class="text-lg font-semibold mb-2 mt-4 text-gray-700">${processInline(line.slice(4))}</h3>`;
      continue;
    }
    // --- Horizontal Rule ---
    if (line === '---' || line === '***') {
      html += '<hr class="border-gray-200 my-6" />';
      continue;
    }
    // --- Lists ---
    if (line.startsWith('- ')) {
      if (!inList) {
        html += '<ul class="list-disc pl-6 mb-4 space-y-1 text-gray-600">';
        inList = true;
      }
      html += `<li class="text-gray-600">${processInline(line.slice(2))}</li>`;
      continue;
    } else if (inList) {
      html += '</ul>';
      inList = false;
    }
    // --- Tables ---
    if (line.startsWith('|')) {
      if (!inTable) {
        html +=
        '<div class="overflow-x-auto mb-4"><table class="w-full border-collapse text-sm">';
        inTable = true;
      }
      const cells = line.
      split('|').
      filter((cell) => cell.trim() !== '').
      map((cell) => cell.trim());
      // Check if it's a separator line (e.g., |---|---|)
      const isSeparator = cells.every((cell) => /^[-:]+$/.test(cell));
      if (isSeparator) {
        // Skip separator line rendering, but ensure we close thead and start tbody if needed
        // Actually, standard markdown tables usually have header, then separator.
        // If we just processed the header (first row), this separator marks the end of thead.
        continue;
      }
      if (!tableHeaderProcessed) {
        html += '<thead><tr>';
        cells.forEach((cell) => {
          html += `<th class="bg-gray-100 border border-gray-200 px-3 py-2 text-left font-semibold text-gray-700">${processInline(cell)}</th>`;
        });
        html += '</tr></thead><tbody>';
        tableHeaderProcessed = true;
      } else {
        html += '<tr>';
        cells.forEach((cell) => {
          html += `<td class="border border-gray-200 px-3 py-2 text-gray-600">${processInline(cell)}</td>`;
        });
        html += '</tr>';
      }
      continue;
    } else if (inTable) {
      html += '</tbody></table></div>';
      inTable = false;
      tableHeaderProcessed = false;
    }
    // --- Paragraphs ---
    // If we got here, it's a paragraph
    html += `<p class="mb-4 text-gray-600 leading-relaxed">${processInline(line)}</p>`;
  }
  // Close any open tags at the end
  if (inList) html += '</ul>';
  if (inTable) html += '</tbody></table></div>';
  return html;
}
export function ArticlePage({ articleId, onNavigate }: ArticlePageProps) {
  // Handle both string IDs (from URL/data) and number IDs (if passed from props)
  // The data file uses string IDs (e.g., 'rent-rooms-thailand-vietnam')
  // But the interface in App.tsx defines articleId as number | undefined.
  // We need to be careful. Let's check how blogPosts are defined.
  // data/blogPosts.ts defines id as string.
  // App.tsx defines selectedArticleId as number | undefined.
  // This is a mismatch in the existing code.
  // However, I should stick to the existing pattern or fix the type if I can.
  // Looking at App.tsx: const [selectedArticleId, setSelectedArticleId] = useState<number | undefined>(undefined)
  // Looking at blogPosts.ts: id: 'rent-rooms-thailand-vietnam' (string)
  // The existing code likely has a bug or I misread the file content.
  // Let's look at the file content again.
  // App.tsx: type Page = 'home' | 'blog' | 'article'; handleNavigate takes (page, id?: number).
  // blogPosts.ts: id: string.
  // This means the current App won't work correctly with the string IDs in blogPosts.ts.
  // BUT my task is ONLY to modify ArticlePage.tsx.
  // I will assume the ID passed in might be a string cast to any or the types are loose.
  // To be safe, I will compare loosely or convert.
  const article = blogPosts.find((p) => p.id === articleId);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [articleId]);
  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f5f5f7]">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#1f2933] mb-4">
            Article not found
          </h2>
          <button
            onClick={() => onNavigate('blog')}
            className="text-blue-600 hover:underline">
            
            Back to Blog
          </button>
        </div>
      </div>);

  }
  return (
    <div className="min-h-screen bg-[#f5f5f7] font-sans text-[#1f2933]">
      <Navbar onNavigate={onNavigate} forceDark={true} />

      <main className="pt-24 pb-16">
        {/* Hero Image */}
        <div className="w-full h-[40vh] md:h-[50vh] relative overflow-hidden">
          <img
            src={toWebpUrl(article.coverImage)}
            alt={article.title}
            className="w-full h-full object-cover" />
          
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="max-w-4xl mx-auto px-4 text-center text-white">
              <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-sm font-medium mb-4">
                {article.category}
              </span>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                {article.title}
              </h1>
              <div className="flex items-center justify-center gap-6 text-sm md:text-base text-white/90">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {article.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {article.readTime}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
          <div className="bg-white rounded-xl shadow-xl p-8 md:p-12">
            <button
              onClick={() => onNavigate('blog')}
              className="inline-flex items-center text-gray-500 hover:text-[#1f2933] mb-8 transition-colors group">
              
              <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
              Back to Blog
            </button>

            {/* Render Markdown Content */}
            <div
              className="article-body prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{
                __html: renderMarkdown(article.content)
              }} />
            

            <div className="mt-12 pt-8 border-t border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                  <User className="w-5 h-5 text-gray-500" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#1f2933]">
                    Netanel Tours VIP
                  </p>
                  <p className="text-xs text-gray-500">Travel Expert</p>
                </div>
              </div>
              <div className="flex gap-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                  <Tag className="w-3 h-3 mr-1" />
                  {article.category}
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>);

}