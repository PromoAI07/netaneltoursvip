import './index.css';
import { render } from 'react-dom';
import { App } from './App';

// dns-prefetch for origins not already covered by preconnect in index.html
const dnsPrefetch = ['https://formsubmit.co'];

dnsPrefetch.forEach((href) => {
  const link = document.createElement('link');
  link.rel = 'dns-prefetch';
  link.href = href;
  document.head.appendChild(link);
});

render(<App />, document.getElementById('root'));