import StoryCollection from './components/story-collection';

export default function Home() {
  return (
    <div className="page-shell">
      <header className="site-header">
        <a className="brand" href="#" aria-label="Storio home">
          <span className="brand-mark" aria-hidden="true">s</span>
          <span>storio</span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#discover">Discover</a>
          <a href="#how-it-works">How it works</a>
        </nav>
        <a className="header-link" href="#discover">Find a story <span aria-hidden="true">↗</span></a>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-dot" />A little room for big stories</p>
            <h1 id="hero-title">Get lost in a<br />good <span>story.</span></h1>
            <p className="hero-description">
              Your next favorite read is closer than you think. Find thoughtful stories for
              wherever your imagination wants to go.
            </p>
            <a className="primary-button" href="#discover">
              Explore the collection <span aria-hidden="true">→</span>
            </a>
            <div className="reader-note">
              <div className="reader-avatars" aria-hidden="true">
                <span>J</span><span>M</span><span>A</span>
              </div>
              <p><strong>Good stories travel.</strong><br />Find one to pass along.</p>
            </div>
          </div>

          <div className="hero-art" aria-label="Illustration of books ready to be read">
            <div className="sun-shape" />
            <div className="sparkle sparkle-one">✳</div>
            <div className="sparkle sparkle-two">✦</div>
            <div className="book-stack">
              <div className="book book-back">
                <span className="book-cover-label">A FIELD<br />OF QUIET</span>
                <span className="cover-flower" aria-hidden="true">✿</span>
              </div>
              <div className="book book-middle">
                <span className="book-cover-label">THE<br />LONG WAY<br />HOME</span>
                <span className="cover-moon" aria-hidden="true" />
              </div>
              <div className="book book-front">
                <span className="book-cover-kicker">A STORIO PICK</span>
                <span className="book-cover-title">Somewhere,<br />the sea</span>
                <span className="cover-wave" aria-hidden="true">〰</span>
              </div>
            </div>
            <div className="art-caption"><span>01</span> Turn the page. See where it takes you.</div>
          </div>
        </section>

        <StoryCollection />

        <section className="closing-note" id="how-it-works">
          <span className="closing-sparkle" aria-hidden="true">✳</span>
          <p>Every story opens a door.</p>
          <h2>Go on. Pick one.</h2>
          <a href="#discover">Browse the stories <span aria-hidden="true">↗</span></a>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#" aria-label="Storio home">
          <span className="brand-mark" aria-hidden="true">s</span><span>storio</span>
        </a>
        <p>Made for the love of a good story.</p>
        <span>© 2026 Storio</span>
      </footer>
    </div>
  );
}
