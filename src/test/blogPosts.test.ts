import { describe, it, expect } from 'vitest';
import { blogPosts, BlogPost } from '../data/blogPosts';

describe('blogPosts', () => {
  it('exports a non-empty array', () => {
    expect(Array.isArray(blogPosts)).toBe(true);
    expect(blogPosts.length).toBeGreaterThan(0);
  });

  it('every post has all required fields', () => {
    blogPosts.forEach((post: BlogPost) => {
      expect(typeof post.id).toBe('string');
      expect(post.id.length).toBeGreaterThan(0);

      expect(typeof post.title).toBe('string');
      expect(post.title.length).toBeGreaterThan(0);

      expect(typeof post.excerpt).toBe('string');
      expect(post.excerpt.length).toBeGreaterThan(0);

      expect(typeof post.content).toBe('string');
      expect(post.content.length).toBeGreaterThan(0);

      expect(typeof post.coverImage).toBe('string');
      expect(post.coverImage.length).toBeGreaterThan(0);

      expect(typeof post.category).toBe('string');
      expect(post.category.length).toBeGreaterThan(0);

      expect(typeof post.date).toBe('string');
      expect(post.date.length).toBeGreaterThan(0);

      expect(typeof post.readTime).toBe('string');
      expect(post.readTime.length).toBeGreaterThan(0);

      expect(typeof post.author).toBe('string');
      expect(post.author.length).toBeGreaterThan(0);

      expect(Array.isArray(post.tags)).toBe(true);
      expect(post.tags.length).toBeGreaterThan(0);
    });
  });

  it('every post id is unique', () => {
    const ids = blogPosts.map((p) => p.id);
    const unique = new Set(ids);
    expect(unique.size).toBe(ids.length);
  });

  it('every post date follows YYYY-MM-DD format', () => {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    blogPosts.forEach((post: BlogPost) => {
      expect(post.date).toMatch(dateRegex);
    });
  });

  it('every post readTime contains "min read"', () => {
    blogPosts.forEach((post: BlogPost) => {
      expect(post.readTime.toLowerCase()).toContain('min read');
    });
  });

  it('every post coverImage is a valid URL', () => {
    blogPosts.forEach((post: BlogPost) => {
      expect(() => new URL(post.coverImage)).not.toThrow();
    });
  });

  it('all tags are non-empty strings', () => {
    blogPosts.forEach((post: BlogPost) => {
      post.tags.forEach((tag) => {
        expect(typeof tag).toBe('string');
        expect(tag.length).toBeGreaterThan(0);
      });
    });
  });
});
