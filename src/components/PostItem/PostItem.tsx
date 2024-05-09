import React from 'react';
import Link from 'next/link';
import { format } from 'date-fns';

import Card from '@/components/Card';

import styles from './PostItem.module.css';

function PostItem({ slug, title, publishedOn, excerpt }) {
  const href = `/${slug}`;
  const humanizedDate = format(new Date(publishedOn), 'MMMM do, yyyy');

  return (
    <Card className={styles.wrapper}>
      <Link href={href} className={styles.title}>
        {title}
      </Link>
      <time dateTime={publishedOn}>{humanizedDate}</time>
      <p>
        {excerpt}{' '}
        <Link href={href} className={styles.continueReadingLink}>
          Continue reading <span className={styles.arrow}>→</span>
        </Link>
      </p>
    </Card>
  );
}

export default PostItem;
