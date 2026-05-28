import { useEffect, useState } from 'react';
import HomePage from './pages/HomePage';
import IntakePage from './pages/IntakePage';
import ScrollReveal from './components/ScrollReveal';

function getPath() {
  return window.location.pathname;
}

export default function App() {
  const [path, setPath] = useState(getPath());

  useEffect(() => {
    const handler = () => setPath(getPath());
    window.addEventListener('popstate', handler);
    return () => window.removeEventListener('popstate', handler);
  }, []);

  // Intercept anchor clicks for client-side navigation
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (!target) return;
      const href = target.getAttribute('href');
      if (!href) return;
      if (href.startsWith('/') && !href.startsWith('//')) {
        e.preventDefault();
        window.history.pushState(null, '', href);
        setPath(href);
        window.scrollTo(0, 0);
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  if (path === '/intake') return <IntakePage />;
  return (
    <>
      <ScrollReveal />
      <HomePage />
    </>
  );
}
