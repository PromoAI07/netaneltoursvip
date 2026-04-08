import React, { createElement } from 'react';
import './index.css';
import { render } from 'react-dom';
import { App } from './App';

// ── Performance: dns-prefetch for origins used by the page ──
const dnsPrefetch = [
'https://images.unsplash.com',
'https://flagcdn.com',
'https://formsubmit.co'];

dnsPrefetch.forEach((href) => {
  const link = document.createElement('link');
  link.rel = 'dns-prefetch';
  link.href = href;
  document.head.appendChild(link);
});
// ── Performance: Preload hero image (LCP element) ──
const heroPreload = document.createElement('link');
heroPreload.rel = 'preload';
heroPreload.as = 'image';
heroPreload.href = "/1000133315.webp";
heroPreload.setAttribute('fetchpriority', 'high');
document.head.appendChild(heroPreload);

render(<App />, document.getElementById('root'));