'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Clock, Calendar, User } from 'lucide-react';
import { getBlogPost, blogPosts } from '../../data/blog';
import styles from './page.module.css';

interface BlogPostContentProps {
  slug: string;
}

// Helper function to render text with bold markdown
function renderWithBold(text: string): React.ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

export default function BlogPostContent({ slug }: BlogPostContentProps) {
  const post = getBlogPost(slug);

  if (!post) {
    return (
      <div className={styles.container}>
        <div className={styles.notFound}>
          <h1>Post Not Found</h1>
          <p>The blog post you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/blog" className={styles.backLink}>
            <ArrowLeft size={20} />
            <span>Back to Blog</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <article className={styles.article}>
        <div className={styles.header}>
          <div className={styles.backLinkWrapper}>
            <Link href="/blog" className={styles.backLink}>
              <ArrowLeft size={20} />
              <span>Back to Blog</span>
            </Link>
          </div>

          <div className={styles.category}>{post.category}</div>

          <h1 className={styles.title}>{post.title}</h1>

          <div className={styles.meta}>
            <span className={styles.metaItem}>
              <User size={16} />
              {post.author}
            </span>
            <span className={styles.metaItem}>
              <Calendar size={16} />
              {post.date}
            </span>
            <span className={styles.metaItem}>
              <Clock size={16} />
              {post.readTime}
            </span>
          </div>
        </div>

        <div className={styles.heroImage}>
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="100vw"
            className={styles.image}
            priority
          />
        </div>

        <div className={styles.content}>
          {post.content.split('\n').map((paragraph, index) => {
            const trimmed = paragraph.trim();
            // Skip empty lines
            if (trimmed === '') {
              return null;
            }
            // Skip table rows and separators
            if (trimmed.startsWith('|') || trimmed.match(/^\|?[-:|]+\|?$/)) {
              return null;
            }
            // Headers
            if (trimmed.startsWith('## ')) {
              return <h2 key={index}>{trimmed.replace('## ', '')}</h2>;
            }
            if (trimmed.startsWith('### ')) {
              return <h3 key={index}>{trimmed.replace('### ', '')}</h3>;
            }
            // List items
            if (trimmed.startsWith('- ')) {
              return <li key={index}>{renderWithBold(trimmed.replace('- ', ''))}</li>;
            }
            // Numbered list items
            if (trimmed.match(/^\d+\.\s/)) {
              return <li key={index}>{renderWithBold(trimmed.replace(/^\d+\.\s/, ''))}</li>;
            }
            // Regular paragraphs
            return <p key={index}>{renderWithBold(trimmed)}</p>;
          })}
        </div>

        <div className={styles.tags}>
          <span className={styles.tagsLabel}>Related Topics:</span>
          {post.keywords.map((keyword) => (
            <span key={keyword} className={styles.tag}>
              {keyword}
            </span>
          ))}
        </div>

        <div className={styles.cta}>
          <h2>Plan Your Bhutan Adventure</h2>
          <p>Ready to experience Bhutan? Contact Yodsel Tours & Treks for a customized tour package.</p>
          <div className={styles.ctaButtons}>
            <Link href="/#contact" className={styles.ctaButton}>
              Contact Us
            </Link>
            <Link href="/" className={styles.ctaButtonSecondary}>
              View Tour Packages
            </Link>
          </div>
        </div>
      </article>

      <aside className={styles.sidebar}>
        <h3>More Articles</h3>
        {blogPosts
          .filter((p) => p.slug !== slug)
          .slice(0, 3)
          .map((relatedPost) => (
            <Link href={`/blog/${relatedPost.slug}`} key={relatedPost.slug} className={styles.relatedCard}>
              <div className={styles.relatedImage}>
                <Image
                  src={relatedPost.image}
                  alt={relatedPost.title}
                  fill
                  sizes="100px"
                  className={styles.image}
                />
              </div>
              <div className={styles.relatedContent}>
                <h4>{relatedPost.title}</h4>
                <span>{relatedPost.readTime}</span>
              </div>
            </Link>
          ))}
      </aside>

      <div className={styles.footer}>
        <Link href="/blog" className={styles.backLink}>
          <ArrowLeft size={20} />
          <span>Back to Blog</span>
        </Link>
      </div>
    </div>
  );
}
