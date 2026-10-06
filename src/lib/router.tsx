import React, { createContext, useContext, useEffect, useState } from 'react';

interface RouterContextType {
  pathname: string;
  searchQuery: string;
  navigate: (to: string) => void;
  openSampleModal: () => void;
}

const RouterContext = createContext<RouterContextType>({
  pathname: '/',
  searchQuery: '',
  navigate: () => {},
  openSampleModal: () => {},
});

export function RouterProvider({
  children,
  onOpenSampleModal,
}: {
  children: React.ReactNode;
  onOpenSampleModal: () => void;
}) {
  const [pathname, setPathname] = useState<string>(() => window.location.pathname || '/');
  const [searchQuery, setSearchQuery] = useState<string>(() => window.location.search || '');

  useEffect(() => {
    const handlePopState = () => {
      setPathname(window.location.pathname || '/');
      setSearchQuery(window.location.search || '');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (to: string) => {
    if (to.startsWith('http://') || to.startsWith('https://')) {
      window.location.href = to;
      return;
    }

    const [pathPart, hashPart] = to.split('#');
    const [cleanPath, queryPart] = (pathPart || '/').split('?');
    const nextPath = cleanPath || '/';
    const nextSearch = queryPart ? `?${queryPart}` : '';

    window.history.pushState({}, '', to);
    setPathname(nextPath);
    setSearchQuery(nextSearch);

    if (hashPart) {
      setTimeout(() => {
        const el = document.getElementById(hashPart);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 60);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <RouterContext.Provider
      value={{
        pathname,
        searchQuery,
        navigate,
        openSampleModal: onOpenSampleModal,
      }}
    >
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  return useContext(RouterContext);
}

export function Link({
  href,
  children,
  className = '',
  ariaLabel,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
  onClick?: () => void;
}) {
  const { navigate } = useRouter();
  const isExternal = href.startsWith('http://') || href.startsWith('https://');
  const isStaticAsset = href.endsWith('.pdf') || href.endsWith('.xml') || href.endsWith('.txt');

  if (isExternal || isStaticAsset) {
    return (
      <a
        href={href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        download={href.endsWith('.pdf') ? 'Kids-Printables-Fall-Sample-Ages-3-5.pdf' : undefined}
        className={className}
        aria-label={ariaLabel}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className={className}
      onClick={(e) => {
        e.preventDefault();
        if (onClick) onClick();
        navigate(href);
      }}
    >
      {children}
    </a>
  );
}
