import React, { useState, useMemo } from 'react';
import NewsHero from '@/components/news/NewsHero';
import NewsCategoryFilter from '@/components/news/NewsCategoryFilter';
import NewsArticleCard from '@/components/news/NewsArticleCard';
import NewsletterBand from '@/components/news/NewsletterBand';
import { NEWS_CATEGORIES, NEWS_ARTICLES } from '@/lib/newsData';

export default function News() {
  const [category, setCategory] = useState('All');

  const filtered = useMemo(
    () => (category === 'All' ? NEWS_ARTICLES : NEWS_ARTICLES.filter((a) => a.category === category)),
    [category]
  );

  return (
    <div>
      <NewsHero />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <NewsCategoryFilter categories={NEWS_CATEGORIES} value={category} onChange={setCategory} />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((article) => (
            <NewsArticleCard key={article.id} {...article} />
          ))}
        </div>

        <div className="mt-12">
          <NewsletterBand />
        </div>
      </section>
    </div>
  );
}