import { describe, it, expect } from 'vitest';
import { toWebpUrl, renderMarkdown } from '../pages/ArticlePage';

// ──────────────────────────────────────────────
// toWebpUrl
// ──────────────────────────────────────────────
describe('toWebpUrl', () => {
  it('appends &fm=webp to an Unsplash URL that has no fm param', () => {
    const url = 'https://images.unsplash.com/photo-123?w=800&q=80';
    expect(toWebpUrl(url)).toBe('https://images.unsplash.com/photo-123?w=800&q=80&fm=webp');
  });

  it('does not double-append fm=webp if already present', () => {
    const url = 'https://images.unsplash.com/photo-123?w=800&fm=webp';
    expect(toWebpUrl(url)).toBe(url);
  });

  it('returns non-Unsplash URLs unchanged', () => {
    const url = 'https://example.com/image.jpg';
    expect(toWebpUrl(url)).toBe(url);
  });

  it('returns a relative URL unchanged', () => {
    const url = '/images/local.jpg';
    expect(toWebpUrl(url)).toBe(url);
  });

  it('returns an empty string unchanged', () => {
    expect(toWebpUrl('')).toBe('');
  });

  it('returns a plain filename unchanged', () => {
    const url = 'photo.png';
    expect(toWebpUrl(url)).toBe('photo.png');
  });
});

// ──────────────────────────────────────────────
// renderMarkdown
// ──────────────────────────────────────────────
describe('renderMarkdown', () => {
  it('returns empty string for empty input', () => {
    expect(renderMarkdown('')).toBe('');
  });

  it('renders a markdown # heading as h2 (shifted for SEO)', () => {
    const html = renderMarkdown('# Hello World');
    expect(html).toContain('<h2');
    expect(html).toContain('Hello World');
  });

  it('renders a markdown ## heading as h3 (shifted for SEO)', () => {
    const html = renderMarkdown('## Section Title');
    expect(html).toContain('<h3');
    expect(html).toContain('Section Title');
  });

  it('renders a markdown ### heading as h4 (shifted for SEO)', () => {
    const html = renderMarkdown('### Sub Section');
    expect(html).toContain('<h4');
    expect(html).toContain('Sub Section');
  });

  it('renders a paragraph', () => {
    const html = renderMarkdown('This is a paragraph.');
    expect(html).toContain('<p');
    expect(html).toContain('This is a paragraph.');
  });

  it('renders bold text with **', () => {
    const html = renderMarkdown('This is **bold** text.');
    expect(html).toContain('<strong');
    expect(html).toContain('bold');
  });

  it('renders italic text with *', () => {
    const html = renderMarkdown('This is *italic* text.');
    expect(html).toContain('<em>italic</em>');
  });

  it('renders an unordered list', () => {
    const input = '- item one\n- item two\n- item three';
    const html = renderMarkdown(input);
    expect(html).toContain('<ul');
    expect(html).toContain('<li');
    expect(html).toContain('item one');
    expect(html).toContain('item two');
    expect(html).toContain('item three');
  });

  it('closes the list when followed by an empty line', () => {
    const input = '- item one\n- item two\n\nParagraph after list.';
    const html = renderMarkdown(input);
    expect(html).toContain('</ul>');
    expect(html).toContain('Paragraph after list.');
  });

  it('renders a horizontal rule for ---', () => {
    const html = renderMarkdown('---');
    expect(html).toContain('<hr');
  });

  it('renders a horizontal rule for ***', () => {
    const html = renderMarkdown('***');
    expect(html).toContain('<hr');
  });

  it('renders a markdown link', () => {
    const html = renderMarkdown('[Google](https://google.com)');
    expect(html).toContain('<a href="https://google.com"');
    expect(html).toContain('Google');
  });

  it('renders a table with header and data rows', () => {
    const input =
      '| Name | Value |\n|------|-------|\n| foo | bar |\n| baz | qux |';
    const html = renderMarkdown(input);
    expect(html).toContain('<table');
    expect(html).toContain('<thead>');
    expect(html).toContain('<tbody>');
    expect(html).toContain('Name');
    expect(html).toContain('Value');
    expect(html).toContain('foo');
    expect(html).toContain('bar');
  });

  it('closes open list at end of input', () => {
    const html = renderMarkdown('- only item');
    expect(html).toContain('</ul>');
  });

  it('closes open table at end of input', () => {
    const input = '| Col |\n|-----|\n| val |';
    const html = renderMarkdown(input);
    expect(html).toContain('</table>');
  });
});
