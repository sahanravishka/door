import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Button from '../components/ui/Button';
import styles from './Home.module.css';

// Assets
import heroBg     from '../assets/hero_advert.png';
import featureImg from '../assets/lux_bifold.png';
import customImg  from '../assets/lux_about.png';
import classicImg from '../assets/lux_warranty.png';

const MARQUEE = [
  'Premium Architectural Doors', 'Sustainable Hardwoods',
  'Handcrafted Precision', 'Custom Every Dimension',
  'North American Craftsmanship', '25-Year Structural Warranty',
  'Premium Architectural Doors', 'Sustainable Hardwoods',
  'Handcrafted Precision', 'Custom Every Dimension',
  'North American Craftsmanship', '25-Year Structural Warranty',
];

const Home = () => (
  <div className={`page-transition-enter-active`}>

    {/* ════════════════════════════════════
        HERO — TEXT ABOVE PURE IMAGE
    ════════════════════════════════════ */}
    <section className={styles.hero}>
      <div className={`container ${styles.heroContainer}`}>
        
        {/* Top Text Block */}
        <div className={`${styles.heroTextTop} fade-in-up`}>
          <div className={styles.heroBrand}>Aura Millwork Collection</div>
          <h1 className={styles.heroHeadline}>
            Mastering <i>the</i> Entrance
          </h1>
          <p className={styles.heroDesc}>
            An exclusive series of architectural doors, where unparalleled craftsmanship meets uncompromising modern design.
          </p>
        </div>

        {/* Pure Image Block (No cropping) */}
        <div className={`${styles.heroImageWrapper} fade-in-up stagger-1`}>
          <img src={heroBg} alt="Luxury modern door interior" />
        </div>

      </div>
    </section>

    {/* ════════════════════════════════════
        MARQUEE STRIP
    ════════════════════════════════════ */}
    <div className={styles.marqueeStrip} aria-hidden="true">
      <div className={styles.marqueeTrack}>
        {MARQUEE.map((item, i) => (
          <span key={i} className={styles.marqueeItem}>
            {item} <span>·</span>
          </span>
        ))}
      </div>
    </div>

    {/* ════════════════════════════════════
        FEATURE SPLIT
    ════════════════════════════════════ */}
    <section className={styles.feature}>
      <div className={`container ${styles.featureGrid}`}>
        <div className={`${styles.featureImageWrap} fade-in-up`}>
          <img src={featureImg} alt="Panoramic Bifold Door" />
          <div className={styles.featureTag}>Panoramic Series</div>
        </div>

        <div className={`${styles.featureText} fade-in-up stagger-2`}>
          <p className={styles.featureOverline}>Redefining Boundaries</p>
          <h2>Architecture in Motion</h2>
          <p>
            Whether it's a sprawling panoramic bifold door merging your living room with nature, or a majestic solid wood entry door that sets the tone for your estate, our products are built as enduring statements of elegance.
          </p>
          <p>
            We source only the finest sustainable materials — treating every grain and hinge as a vital part of the architectural poetry.
          </p>

          <div className={styles.featureSpecs}>
            <div className={styles.specItem}>
              <strong>FSC</strong>
              <span>Certified Materials</span>
            </div>
            <div className={styles.specItem}>
              <strong>Custom</strong>
              <span>Every Dimension</span>
            </div>
            <div className={styles.specItem}>
              <strong>25 yr</strong>
              <span>Structural Warranty</span>
            </div>
            <div className={styles.specItem}>
              <strong>14 days</strong>
              <span>Lead Time</span>
            </div>
          </div>

          <Button to="/about" variant="solid" shape="cut" icon={ArrowRight}>
            Discover Our Process
          </Button>
        </div>
      </div>
    </section>

    {/* ════════════════════════════════════
        COLLECTIONS GALLERY
    ════════════════════════════════════ */}
    <section className={styles.collections}>
      <div className="container">
        <div className={styles.collectionsHeader}>
          <h2>Curated<br />Collections</h2>
          <div className={styles.collectionsHeaderRight}>
            <p>Meticulously designed door series spanning classic architectural styles to ultra-modern minimalism.</p>
            <Button to="/products" variant="outline" shape="pill" icon={ArrowRight}>
              All Collections
            </Button>
          </div>
        </div>

        <div className={styles.collectionGrid}>
          <div className={styles.collectionCard} onClick={() => (window.location.href = '/products/bifold')}>
            <img src={featureImg} alt="Panoramic Doors" />
            <div className={styles.collectionCardContent}>
              <div className={styles.collectionNum}>01</div>
              <h3>Panoramic</h3>
              <div className={styles.collectionCardLink}>
                View Collection <ArrowUpRight size={11} />
              </div>
            </div>
          </div>

          <div className={styles.collectionCard} onClick={() => (window.location.href = '/products/custom')}>
            <img src={customImg} alt="Custom Wood Doors" />
            <div className={styles.collectionCardContent}>
              <div className={styles.collectionNum}>02</div>
              <h3>Custom Estates</h3>
              <div className={styles.collectionCardLink}>
                Craft Your Vision <ArrowUpRight size={11} />
              </div>
            </div>
          </div>

          <div className={styles.collectionCard} onClick={() => (window.location.href = '/products/shaker')}>
            <img src={classicImg} alt="Classic Shaker" />
            <div className={styles.collectionCardContent}>
              <div className={styles.collectionNum}>03</div>
              <h3>Classic Series</h3>
              <div className={styles.collectionCardLink}>
                Timeless Elegance <ArrowUpRight size={11} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ════════════════════════════════════
        CTA DARK SECTION
    ════════════════════════════════════ */}
    <section className={styles.cta}>
      <div className={styles.ctaDecor} />
      <div className={styles.ctaDecor2} />
      <div className={`container ${styles.ctaInner}`}>
        <p className={styles.ctaOverline}>Exclusive Partnership</p>
        <h2>Join Our Global<br />Network</h2>
        <p>
          Aura Millwork partners with premier architects, builders, and dealers worldwide. Elevate your portfolio by becoming an authorised dealer.
        </p>
        <div className={styles.ctaActions}>
          <Button to="/dealer-application" variant="gold" shape="cut" icon={ArrowRight}>
            Apply Now
          </Button>
          <Button
            to="/inspirations"
            variant="outline"
            shape="pill"
            style={{ borderColor: 'rgba(255,255,255,0.2)', color: '#fff' }}
          >
            View Projects
          </Button>
        </div>
      </div>
    </section>

  </div>
);

export default Home;
