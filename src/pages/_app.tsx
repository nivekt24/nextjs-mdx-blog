import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import Link from 'next/link';
import { Logo } from '@/components/logo';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <nav className="top-nav">
        <Link href="/">
          <Logo />
        </Link>
        <ul className="nav-list">
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="container">
        <Component {...pageProps} />
      </div>
    </>
  );
}
