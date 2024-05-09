import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { Rss, Sun, Moon } from 'react-feather';

import Logo from '@/components/Logo';
import VisuallyHidden from '@/components/VisuallyHidden';

import styles from './Header.module.css';

function Header({ className, ...delegated }) {
  return (
    <header className={clsx(styles.wrapper, className)} {...delegated}>
      <ul className={styles.nav}>
        <Logo />
        <Link href="/posts">Posts</Link>
      </ul>

      <div className={styles.actions}>
        <button className={styles.action}>
          {
            <Rss
              size="1.5rem"
              style={{
                // Optical alignment
                transform: 'translate(2px, -2px)',
              }}
            />
          }
          {<VisuallyHidden>View RSS feed</VisuallyHidden>}
        </button>
        <button className={styles.action}>
          <Sun size="1.5rem" />
          <VisuallyHidden>Toggle dark / light mode</VisuallyHidden>
        </button>
      </div>
    </header>
  );
}

export default Header;
