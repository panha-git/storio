import FeaturedStories from './components/featured-stories';

export default function Home() {
  return (
    <div className="page-shell">
      <header className="site-header">
        <a className="brand" href="#" aria-label="Storio home">
          <span className="brand-mark" aria-hidden="true">S</span>
          <span>STORIO</span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#discover">Discover</a>
          <a href="#how-it-works">How it works</a>
        </nav>
        <a className="header-cta" href="#start-creating">Create a story <span aria-hidden="true">↗</span></a>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-dot" />Your life, beautifully told</p>
            <h1 id="hero-title">Every moment<br />has a <span>story.</span></h1>
            <p className="hero-description">
              Turn your meaningful moments, milestones, and memories into beautiful digital
              stories worth sharing.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#start-creating">
                Create your story <span aria-hidden="true">↗</span>
              </a>
              <a className="text-button" href="#discover">
                Explore stories <span aria-hidden="true">↓</span>
              </a>
            </div>
            <p className="hero-note"><span aria-hidden="true">✳</span> Made from your moments. Made to be shared.</p>
          </div>

          <div className="hero-visual">
            <div className="hero-photo-wrap">
              <img
                className="hero-photo"
                src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1400&q=85"
                alt="Friends celebrating a meaningful moment together outdoors"
                fetchPriority="high"
              />
              <span className="photo-caption">A milestone, made personal</span>
            </div>
            <div className="hero-story-card">
              <span className="story-card-mark" aria-hidden="true">✳</span>
              <div>
                <p>A MOMENT WORTH KEEPING</p>
                <span>All the little things that led to this.</span>
              </div>
              <span className="hero-story-arrow" aria-hidden="true">↗</span>
            </div>
            <span className="hero-visual-note">Real life. Your point of view.</span>
          </div>
        </section>

        <FeaturedStories />

        <section className="how-section" id="how-it-works" aria-labelledby="how-title">
          <div className="how-heading">
            <p className="eyebrow"><span className="eyebrow-dot" />A few simple steps</p>
            <h2 id="how-title">From your moment<br />to <span>your story.</span></h2>
            <p>Meaningful stories start with the moments only you can tell.</p>
          </div>
          <div className="steps-grid">
            <article className="step-card">
              <span className="step-number">01</span>
              <span className="step-icon" aria-hidden="true">✎</span>
              <h3>Tell your story</h3>
              <p>Gather the memories, details, and words that make this moment yours.</p>
            </article>
            <article className="step-card">
              <span className="step-number">02</span>
              <span className="step-icon" aria-hidden="true">✳</span>
              <h3>Make it yours</h3>
              <p>Bring it to life with your photos, your voice, and a style that feels like you.</p>
            </article>
            <article className="step-card">
              <span className="step-number">03</span>
              <span className="step-icon" aria-hidden="true">↗</span>
              <h3>Share it with the world</h3>
              <p>Give the people who matter a beautiful way to be part of the moment.</p>
            </article>
          </div>
        </section>

        <section className="final-cta" id="start-creating" aria-labelledby="final-cta-title">
          <div className="cta-decoration cta-decoration-one" aria-hidden="true" />
          <div className="cta-decoration cta-decoration-two" aria-hidden="true" />
          <p className="eyebrow"><span className="eyebrow-dot" />Start with a moment</p>
          <h2 id="final-cta-title">Your story deserves<br />a <span>place.</span></h2>
          <a className="primary-button cta-button" href="#discover">
            Start creating <span aria-hidden="true">↗</span>
          </a>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#" aria-label="Storio home">
          <span className="brand-mark" aria-hidden="true">S</span><span>STORIO</span>
        </a>
        <p>Made for the moments that make us.</p>
        <span>© 2026 STORIO</span>
      </footer>
    </div>
  );
}
