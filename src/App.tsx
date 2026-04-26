import { useEffect, useState } from 'react';
import { HomePage } from './pages/HomePage';
import { BlogPage } from './pages/BlogPage';
import { ArticlePage } from './pages/ArticlePage';
import { ToolsPage } from './pages/ToolsPage';
import { LanguageProvider } from './i18n';
import LanguageDetectionBanner from './components/LanguageDetectionBanner';
type Page = 'home' | 'blog' | 'article' | 'tools';
export function getStateFromUrl(): {
  page: Page;
  id?: string;
} {
  const hash = window.location.hash;
  if (hash.startsWith('#/article/')) {
    return {
      page: 'article',
      id: hash.replace('#/article/', '')
    };
  }
  if (hash === '#/blog') {
    return {
      page: 'blog'
    };
  }
  if (hash === '#/tools') {
    return {
      page: 'tools'
    };
  }
  return {
    page: 'home'
  };
}
export function App() {
  const initialState = getStateFromUrl();
  const [currentPage, setCurrentPage] = useState<Page>(initialState.page);
  const [selectedArticleId, setSelectedArticleId] = useState<
    string | undefined>(
    initialState.id);
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.defer = true;
    script.src = 'https://emrldco.com/NDk5NTk0.js?t=499594';
    script.setAttribute('data-noptimize', '1');
    script.setAttribute('data-cfasync', 'false');
    script.setAttribute('data-wpfc-render', 'false');
    script.crossOrigin = 'anonymous';
    script.onerror = () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
    document.head.appendChild(script);
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);
  useEffect(() => {
    const handlePopState = () => {
      const { page, id } = getStateFromUrl();
      setCurrentPage(page);
      if (id !== undefined) setSelectedArticleId(id);
      window.scrollTo(0, 0);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);
  const handleNavigate = (page: Page, id?: string) => {
    if (page === 'article' && id) {
      window.history.pushState({}, '', `#/article/${id}`);
    } else if (page === 'blog') {
      window.history.pushState({}, '', '#/blog');
    } else if (page === 'tools') {
      window.history.pushState({}, '', '#/tools');
    } else {
      window.history.pushState({}, '', '#/');
    }
    setCurrentPage(page);
    if (id !== undefined) {
      setSelectedArticleId(id);
    }
    window.scrollTo(0, 0);
  };
  return (
    <LanguageProvider>
      {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
      {currentPage === 'blog' && <BlogPage onNavigate={handleNavigate} />}
      {currentPage === 'tools' && <ToolsPage onNavigate={handleNavigate} />}
      {currentPage === 'article' && selectedArticleId &&
      <ArticlePage
        articleId={selectedArticleId}
        onNavigate={handleNavigate} />

      }
      <LanguageDetectionBanner />
    </LanguageProvider>);

}