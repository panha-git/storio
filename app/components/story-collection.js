'use client';

import { useState } from 'react';

const filters = [
  { label: 'All stories', mood: 'all' },
  { label: '✦ Wonder', mood: 'wonder' },
  { label: '♡ Heart', mood: 'heart' },
  { label: '↗ Escape', mood: 'escape' },
];

const stories = [
  {
    mood: 'wonder',
    tag: 'SHORT READ',
    coverClass: 'cover-lantern',
    illustration: <span className="lantern" aria-hidden="true">✧</span>,
    coverTitle: <>The little<br />lightkeeper</>,
    byline: 'A tale for curious minds',
    title: 'The Little Lightkeeper',
    description: 'For nights that need a little magic.',
    readTime: '8 min',
  },
  {
    mood: 'heart',
    tag: 'A NOTE TO KEEP',
    coverClass: 'cover-postcard',
    illustration: <span className="postmark" aria-hidden="true">✳</span>,
    coverTitle: <>Letters from<br />the garden</>,
    byline: 'Written by A. Rowan',
    title: 'Letters from the Garden',
    description: 'A gentle reminder to begin again.',
    readTime: '5 min',
  },
  {
    mood: 'escape',
    tag: 'TAKE THE SCENIC ROUTE',
    coverClass: 'cover-mountain',
    illustration: <span className="mountain-sun" aria-hidden="true" />,
    coverTitle: <>Beyond the<br />blue hills</>,
    byline: 'A story by M. Sol',
    title: 'Beyond the Blue Hills',
    description: 'For when the horizon is calling.',
    readTime: '12 min',
  },
];

export default function StoryCollection() {
  const [selectedMood, setSelectedMood] = useState('all');

  return (
    <section className="collection" id="discover" aria-labelledby="collection-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow">A good place to start</p>
          <h2 id="collection-title">Stories for your <span>kind of day.</span></h2>
        </div>
        <p className="section-aside">A few handpicked reads to get you going.</p>
      </div>

      <div className="filters" role="group" aria-label="Filter stories by mood">
        {filters.map((filter) => (
          <button
            className={`filter-button${selectedMood === filter.mood ? ' is-active' : ''}`}
            type="button"
            key={filter.mood}
            aria-pressed={selectedMood === filter.mood}
            onClick={() => setSelectedMood(filter.mood)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="story-grid">
        {stories
          .filter((story) => selectedMood === 'all' || story.mood === selectedMood)
          .map((story) => (
            <article className="story-card" key={story.mood}>
              <div className={`story-cover ${story.coverClass}`}>
                <span className="cover-tag">{story.tag}</span>
                {story.illustration}
                <span className="cover-title">{story.coverTitle}</span>
                <span className="cover-byline">{story.byline}</span>
              </div>
              <div className="story-info">
                <div><h3>{story.title}</h3><p>{story.description}</p></div>
                <span className="read-time">{story.readTime}</span>
              </div>
            </article>
          ))}
      </div>
    </section>
  );
}
