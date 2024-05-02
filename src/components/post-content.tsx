import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';
import PostHeader from './post-header';
import styles from './post-content.module.css';

SyntaxHighlighter.registerLanguage('js', js);
SyntaxHighlighter.registerLanguage('css', css);

interface Post {
  slug: string;
  image: string;
  title: string;
  content: string;
}

interface ImageNode {
  type: string;
  url: string;
  alt: string;
}

function PostContent({ post }: { post: Post }): JSX.Element {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customComponents = {
    img: ({ node, ...props }) => {
      return (
        <div className={styles.image}>
          <Image
            src={`/images/posts/${post.slug}/${props.src}`}
            alt={props.alt}
            width={600}
            height={300}
          />
        </div>
      );
    },

    code({ children, ...props }: { children: string }): JSX.Element {
      return (
        <SyntaxHighlighter
          language="javascript"
          PreTag="div"
          style={atomDark}
          children={String(children).replace(/\n$/, '')}
          {...props}
        />
      );
    },
  };

  return (
    <article className={styles.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={customComponents}>
        {post.content}
      </ReactMarkdown>
    </article>
  );
}

export default PostContent;
