'use client';

import { useEffect, useState, type ReactNode } from 'react';
import { ThemeProvider as NextThemes } from 'next-themes';

interface ThemeProviderProps {
  children: ReactNode;
  attribute?: 'class' | 'data-theme';
  defaultTheme?: 'light' | 'dark' | 'system';
  enableSystem?: boolean;
  disableTransitionOnChange?: boolean;
}

export function ThemeProvider({ 
  children,
  attribute = 'class',
  defaultTheme = 'light',
  enableSystem = false,
  disableTransitionOnChange = true
}: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="contents" style={{ visibility: 'hidden' }}>{children}</div>;
  }

  return (
    <NextThemes
      attribute={attribute}
      defaultTheme={defaultTheme}
      enableSystem={enableSystem}
      disableTransitionOnChange={disableTransitionOnChange}
    >
      {children}
    </NextThemes>
  );
}