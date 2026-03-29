import React, { createElement } from 'react';
import './index.css';
import { render } from 'react-dom';
import { App } from './App';
// ── Performance: Preconnect to the 2 most critical origins only ──
// (Google warns if >4 preconnects; keep it lean)
const criticalPreconnects = [
{
  href: "/cdn.magicpatterns.com",
  crossOrigin: false
},
{
  href: 'https://fonts.googleapis.com',
  crossOrigin: false
},
{
  href: 'https://fonts.gstatic.com',
  crossOrigin: true
}];

criticalPreconnects.forEach(({ href, crossOrigin }) => {
  const link = document.createElement('link');
  link.rel = 'preconnect';
  link.href = href;
  if (crossOrigin) link.crossOrigin = 'anonymous';
  document.head.appendChild(link);
});
// dns-prefetch for secondary origins (cheaper than preconnect)
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
heroPreload.href = "/1000133315.png";

heroPreload.setAttribute('fetchpriority', 'high');
document.head.appendChild(heroPreload);
// ── Performance: Load Google Fonts non-blocking ──
// Step 1: preload the font CSS
const fontPreload = document.createElement('link');
fontPreload.rel = 'preload';
fontPreload.href =
'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap';
fontPreload.as = 'style';
fontPreload.setAttribute('onload', "this.onload=null;this.rel='stylesheet'");
document.head.appendChild(fontPreload);
// Step 2: noscript fallback
const noscript = document.createElement('noscript');
noscript.innerHTML =
'<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap">';
document.head.appendChild(noscript);
// ── Security Meta Tags ──
const securityMetas: Array<{
  httpEquiv?: string;
  name?: string;
  content: string;
}> = [
{
  httpEquiv: 'Content-Security-Policy',
  content: [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://emrldco.com",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com",
  "img-src 'self' data: blob: https://images.unsplash.com https://cdn.magicpatterns.com https://plus.unsplash.com https://picsum.photos https://flagcdn.com",
  "connect-src 'self' https://formsubmit.co https://emrldco.com",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self' https://formsubmit.co"].
  join('; ')
},
{
  httpEquiv: 'X-Frame-Options',
  content: 'SAMEORIGIN'
},
{
  httpEquiv: 'X-Content-Type-Options',
  content: 'nosniff'
},
{
  name: 'referrer',
  content: 'strict-origin-when-cross-origin'
},
{
  httpEquiv: 'Permissions-Policy',
  content: 'camera=(), microphone=(), geolocation=(), payment=()'
}];

securityMetas.forEach(({ httpEquiv, name, content }) => {
  const meta = document.createElement('meta');
  if (httpEquiv) meta.setAttribute('http-equiv', httpEquiv);
  if (name) meta.setAttribute('name', name);
  meta.setAttribute('content', content);
  document.head.appendChild(meta);
});
// ── Copy / Right-click Protection ──
document.addEventListener('contextmenu', (e) => e.preventDefault());
document.addEventListener('copy', (e) => e.preventDefault());
document.addEventListener('cut', (e) => e.preventDefault());
document.addEventListener('keydown', (e) => {
  if (
  (e.ctrlKey || e.metaKey) &&
  ['c', 'x', 'a', 'u', 's', 'p'].includes(e.key.toLowerCase()))
  {
    e.preventDefault();
  }
  if (e.key === 'F12') e.preventDefault();
});
render(<App />, document.getElementById('root'));