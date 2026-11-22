'use client';

import { useState } from 'react';

const filters = [
  { label: 'All moments', category: 'all' },
  { label: 'Milestones', category: 'milestones' },
  { label: 'New beginnings', category: 'beginnings' },
  { label: 'Everyday moments', category: 'everyday' },
];

const stories = [
  {
    category: 'milestones',
    image:
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=85',
    imageAlt: 'College friends sharing a moment while working together',
    label: 'A MILESTONE',
    title: 'A Graduation to Remember',
    description: 'The late nights, the proud hugs, the moment it all became real.',
    author: 'A story by Maya',
    tone: 'terracotta',
  },
  {
    category: 'beginnings',
    image:
      'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1000&q=85',
    imageAlt: 'A quiet mountain lake at the beginning of a new day',
    label: 'A NEW CHAPTER',
    title: 'The Beginning of Something New',
    description: 'One brave yes, and the first page of a life-changing journey.',
    author: 'A story by Alex',
    tone: 'sage',
  },
  {
    category: 'everyday',
    image:
      'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1000&q=85',
    imageAlt: 'A family sharing a warm, everyday moment together',
    label: 'THE LITTLE THINGS',
    title: 'Little Moments, Big Memories',
    description: 'The ordinary afternoons that turn out to mean everything.',
    author: 'A story by Jordan',
    tone: 'gold',
  },
];

export default function FeaturedStories() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const visibleStories = stories.filter(
    (story) => selectedCategory === 'all' || story.category === selectedCategory,
  );

  return (
    <section className="featured-section" id="discover" aria-labelledby="featured-title">
      <div className="section-topline">
        <p className="eyebrow"><span className="eyebrow-dot" />A glimpse of what’s possible</p>
        <span className="section-index">01 — 03</span>
      </div>
      <div className="featured-heading">
        <h2 id="featured-title">Moments become<br /><span>memories in motion.</span></h2>
        <p>Real-life milestones and everyday magic, turned into stories worth coming back to.</p>
      </div>

      <div className="story-filters" role="group" aria-label="Filter stories by moment">
        {filters.map((filter) => (
          <button
            className={`story-filter${selectedCategory === filter.category ? ' is-active' : ''}`}
            type="button"
            key={filter.category}
            aria-pressed={selectedCategory === filter.category}
            onClick={() => setSelectedCategory(filter.category)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="featured-grid">
        {visibleStories.map((story, index) => (
          <article className={`featured-story ${story.tone}`} key={story.category}>
            <div className="featured-image-wrap">
              <img
                className="featured-image"
                src={story.image}
                alt={story.imageAlt}
                loading="lazy"
              />
              <span className="image-label">{story.label}</span>
              <span className="image-index">0{index + 1}</span>
            </div>
            <div className="featured-story-copy">
              <p className="story-author">{story.author}</p>
              <h3>{story.title}</h3>
              <p className="story-description">{story.description}</p>
              <span className="story-link" aria-hidden="true">A moment, made a keepsake <span>↗</span></span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
