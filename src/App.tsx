import React, { useEffect, useState } from 'react';
import { HomePage } from './pages/HomePage';
import { BlogPage } from './pages/BlogPage';
import { ArticlePage } from './pages/ArticlePage';
import { ToolsPage } from './pages/ToolsPage';
type Page = 'home' | 'blog' | 'article' | 'tools';
function getStateFromUrl(): {
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
    <>
      {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
      {currentPage === 'blog' && <BlogPage onNavigate={handleNavigate} />}
      {currentPage === 'tools' && <ToolsPage onNavigate={handleNavigate} />}
      {currentPage === 'article' && selectedArticleId &&
      <ArticlePage
        articleId={selectedArticleId}
        onNavigate={handleNavigate} />

      }
    </>);

}