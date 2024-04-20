import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import PostHeader from './post-header';
import styles from './post-content.module.css';

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

interface ParagraphNode {
  type: string;
  children: string;
}

interface CustomComponents {
  paragraph(paragraph: { node: ImageNode | ParagraphNode }): JSX.Element;
}

function PostContent({ post }: { post: Post }): JSX.Element {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customComponents: CustomComponents = {
    paragraph(paragraph) {
      const { node } = paragraph;

      if (node.type === 'image') {
        const image = node as ImageNode;

        return (
          <div className={styles.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.url}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }

      return <p>{(node as ParagraphNode).children}</p>;
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
