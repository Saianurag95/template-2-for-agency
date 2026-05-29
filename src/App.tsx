import { useEffect, useState } from 'react';
import HomePage from './pages/HomePage';
import IntakePage from './pages/IntakePage';
import PaymentConfirmation from './components/PaymentConfirmation';
import ScrollReveal from './components/ScrollReveal';

function getPath() {
  if (window.location.hash === '#payment-confirmation') return '/payment-confirmation';
  return window.location.pathname;
}

export default function App() {
  const [path, setPath] = useState(getPath());

  useEffect(() => {
    const handler = () => setPath(getPath());
    window.addEventListener('popstate', handler);
    window.addEventListener('hashchange', handler);
    return () => {
      window.removeEventListener('popstate', handler);
      window.removeEventListener('hashchange', handler);
    };
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
  if (path === '/payment-confirmation') return <PaymentConfirmation />;
  return (
    <>
      <ScrollReveal />
      <HomePage />
    </>
  );
}
