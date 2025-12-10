'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { blogPosts } from '../data/blog';
import styles from './page.module.css';

export default function BlogPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link href="/" className={styles.backLink}>
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </Link>
        <h1 className={styles.title}>Bhutan Travel Blog</h1>
        <p className={styles.subtitle}>
          Expert guides, travel tips, and insights for planning your perfect Bhutan tour
        </p>
      </div>

      <div className={styles.grid}>
        {blogPosts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.slug} className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className={styles.image}
              />
              <div className={styles.category}>{post.category}</div>
            </div>
            <div className={styles.cardContent}>
              <h2 className={styles.cardTitle}>{post.title}</h2>
              <p className={styles.excerpt}>{post.excerpt}</p>
              <div className={styles.meta}>
                <span className={styles.metaItem}>
                  <Calendar size={14} />
                  {post.date}
                </span>
                <span className={styles.metaItem}>
                  <Clock size={14} />
                  {post.readTime}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className={styles.cta}>
        <h2>Ready to Plan Your Bhutan Trip?</h2>
        <p>Contact our travel experts for a personalized tour package</p>
        <Link href="/#contact" className={styles.ctaButton}>
          Get in Touch
        </Link>
      </div>

      <div className={styles.footer}>
        <Link href="/" className={styles.backLink}>
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  );
}
