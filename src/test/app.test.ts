import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { getStateFromUrl } from '../App';

describe('getStateFromUrl', () => {
  const originalHash = window.location.hash;

  afterEach(() => {
    // restore hash after each test
    window.location.hash = originalHash;
  });

  it('returns home page for empty hash', () => {
    window.location.hash = '';
    expect(getStateFromUrl()).toEqual({ page: 'home' });
  });

  it('returns home page for unrecognised hash', () => {
    window.location.hash = '#/unknown';
    expect(getStateFromUrl()).toEqual({ page: 'home' });
  });

  it('returns blog page for #/blog', () => {
    window.location.hash = '#/blog';
    expect(getStateFromUrl()).toEqual({ page: 'blog' });
  });

  it('returns tools page for #/tools', () => {
    window.location.hash = '#/tools';
    expect(getStateFromUrl()).toEqual({ page: 'tools' });
  });

  it('returns article page with id for #/article/<id>', () => {
    window.location.hash = '#/article/my-article-slug';
    expect(getStateFromUrl()).toEqual({ page: 'article', id: 'my-article-slug' });
  });

  it('handles article id with special characters', () => {
    window.location.hash = '#/article/thailand-vs-vietnam-2025';
    expect(getStateFromUrl()).toEqual({
      page: 'article',
      id: 'thailand-vs-vietnam-2025',
    });
  });

  it('does not treat #/blog-extra as the blog page', () => {
    window.location.hash = '#/blog-extra';
    expect(getStateFromUrl()).toEqual({ page: 'home' });
  });

  it('does not treat #/tools-extra as the tools page', () => {
    window.location.hash = '#/tools-extra';
    expect(getStateFromUrl()).toEqual({ page: 'home' });
  });
});
