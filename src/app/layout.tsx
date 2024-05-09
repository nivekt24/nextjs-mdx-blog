import React from 'react';
import type { Metadata } from 'next';
import { Work_Sans, Spline_Sans_Mono } from 'next/font/google';
import clsx from 'clsx';

import Header from '@/components/Header';
import './styles.css';

export const metadata: Metadata = {
  title: 'Kevin Tran',
  description: 'I post about programming and web development.',
};

const mainFont = Work_Sans({
  subsets: ['latin'],
  display: 'fallback',
  weight: 'variable',
  variable: '--font-family',
});
const monoFont = Spline_Sans_Mono({
  subsets: ['latin'],
  display: 'fallback',
  weight: 'variable',
  variable: '--font-family-mono',
});

function RootLayout({ children }) {
  return (
    <html lang="en" className={clsx(mainFont.variable, monoFont.variable)}>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}

export default RootLayout;
