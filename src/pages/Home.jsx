import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import styles from './Home.module.css';

import heroBg        from '../assets/hero_advert.png';
import bifoldLife    from '../assets/bifold_lifestyle_1782500220166.png';
import imgFront      from '../assets/lux_front.png';
import imgBarn       from '../assets/lux_barn.png';
import imgGlass      from '../assets/lux_glass.png';
import imgShaker     from '../assets/lux_shaker.png';

const MARQUEE_ITEMS = [
  'Handcrafted Precision','Sustainable Hardwoods','Custom Every Dimension',
  '25-Year Structural Warranty','North American Craftsmanship','Engineered to the Millimetre',
];

const Home = () => {
  const heroEyebrowRef = useRef(null);
  const heroL1Ref      = useRef(null);
  const heroL2Ref      = useRef(null);
  const heroSubRef     = useRef(null);
  const revealRootRef  = useRef(null);

  useEffect(() => {
    // Hero entrance
    const t = setTimeout(() => {
      [heroEyebrowRef, heroL1Ref, heroL2Ref, heroSubRef].forEach(r => {
        if (r.current) { r.current.style.opacity = '1'; r.current.style.transform = 'none'; }
      });
    }, 80);

    // Scroll reveal
    const root = revealRootRef.current;
    if (root && 'IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) { e.target.style.opacity = '1'; e.target.style.transform = 'none'; io.unobserve(e.target); }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -6% 0px' });
      root.querySelectorAll('[data-reveal]').forEach(el => io.observe(el));
      return () => { clearTimeout(t); io.disconnect(); };
    }
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={`page-transition-enter-active ${styles.page}`} ref={revealRootRef}>

      {/* ═══════════════ HERO ═══════════════ */}
      <section className={styles.hero}>
        <div className={styles.heroParallax}>
          <img src={heroBg} alt="Modern walnut pivot entrance" className={styles.heroImg} />
        </div>
        <div className={styles.heroOverlayA} />
        <div className={styles.heroOverlayB} />

        <div className={styles.heroInner}>
          <div ref={heroEyebrowRef} className={styles.heroEyebrow}>
            <span className={styles.heroEyebrowLine} />
            The Aura Millwork Collection
          </div>
          <h1 className={styles.heroTitle}>
            <span ref={heroL1Ref} className={styles.heroLine}>Every home begins</span>
            <span ref={heroL2Ref} className={styles.heroLine}>
              at the <em>threshold</em>.
            </span>
          </h1>
          <div ref={heroSubRef} className={styles.heroSub}>
            <p>Architectural doors handcrafted from sustainable hardwoods — engineered to the millimetre and made to be the first thing your guests ever touch.</p>
            <div className={styles.heroCtas}>
              <Link to="/products" className={styles.heroCtaPrimary}>
                Explore the Collection <span>→</span>
              </Link>
              <Link to="/about" className={styles.heroCtaGhost}>Our Craft</Link>
            </div>
          </div>
        </div>

        <div className={styles.heroMeta}>Est. 1988 — North America</div>
        <div className={styles.heroScrollCue}>
          <span>Scroll</span>
          <span className={styles.heroScrollLine} />
        </div>
      </section>

      {/* ═══════════════ MARQUEE ═══════════════ */}
      <div className={styles.marquee} aria-hidden="true">
        <div className={styles.marqueeTrack}>
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} className={styles.marqueeItem}>
              {item} <span className={styles.marqueeDot} />
            </span>
          ))}
        </div>
      </div>

      {/* ═══════════════ MANIFESTO ═══════════════ */}
      <section className={styles.manifesto}>
        <div className={styles.manifestoInner}>
          <div data-reveal className={styles.manifestoOverline}>
            <span className={styles.overlineLine} />
            Our Philosophy
          </div>
          <h2 data-reveal className={styles.manifestoHeading}>
            We don't build doors. We build the pause before arrival —
            the <em>weight in the hand</em>, the light through the threshold,
            the first impression of everything within.
          </h2>
          <div data-reveal className={styles.manifestoBody}>
            <p>For three decades, Aura Millwork has shaped solid hardwood into thresholds for the most considered homes in North America — each one drawn, milled, and finished by hand to a single opening's exact dimensions.</p>
            <Link to="/about" className={styles.manifestoLink}>
              The making of a door <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════ FEATURE SPLIT ═══════════════ */}
      <section className={styles.feature}>
        <div className={styles.featureDecor} aria-hidden="true">01</div>
        <div className={styles.featureGrid}>
          <div data-reveal className={styles.featureImageWrap}>
            <img src={bifoldLife} alt="Panoramic bifold doors" className={styles.featureImg} />
            <div className={styles.featureTag}>Panoramic Series</div>
            <div className={styles.featureCorner} />
          </div>
          <div className={styles.featureText}>
            <div data-reveal className={styles.featureOverline}>
              <span className={styles.overlineLine} /> Redefining Boundaries
            </div>
            <h2 data-reveal className={styles.featureHeading}>
              Architecture<br />in <em>motion</em>
            </h2>
            <p data-reveal className={styles.featurePara}>
              A panoramic bifold that folds an entire wall away. A pivot door that turns on a whisper. Our doors are engineered as moving architecture — dissolving the line between a room and the world beyond it.
            </p>
            <div data-reveal className={styles.featureStats}>
              {[
                { val: '100%', label: 'FSC-Certified Hardwood' },
                { val: '25 yr', label: 'Structural Warranty' },
                { val: '14',   label: 'Day Lead Time' },
                { val: '38',   label: 'Years of Craft' },
              ].map(s => (
                <div key={s.label} className={styles.statItem}>
                  <strong>{s.val}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
            <Link data-reveal to="/about" className={styles.featureBtn}>
              Discover our process <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════ COLLECTIONS BENTO ═══════════════ */}
      <section className={styles.collections}>
        <div className={styles.collectionsInner}>
          <div className={styles.collectionsHeader}>
            <div>
              <div data-reveal className={styles.collectionsOverline}>
                <span className={styles.overlineLine} /> Curated Collections
              </div>
              <h2 data-reveal className={styles.collectionsHeading}>
                A door for every<br /><em>threshold</em>
              </h2>
            </div>
            <div data-reveal className={styles.collectionsDesc}>
              <p>Ten signature styles, spanning panoramic glass to reclaimed barn — every one built to your dimensions.</p>
              <Link to="/products" className={styles.collectionsLink}>View all collections <span>→</span></Link>
            </div>
          </div>

          <div className={styles.collGrid}>
            {/* Tall feature card */}
            <Link to="/products/custom" data-reveal className={`${styles.collCard} ${styles.collCardTall}`} style={{ transitionDelay: '0s' }}>
              <img src={imgFront} alt="Signature walnut entry door" />
              <div className={styles.collGrad} />
              <div className={styles.collCardBody}>
                <div className={styles.collNum}>01 — Signature Entry</div>
                <h3>Front Doors</h3>
                <div className={styles.collLink}>View Collection <span>↗</span></div>
              </div>
            </Link>

            <Link to="/products/shaker" data-reveal className={styles.collCard} style={{ transitionDelay: '0.08s' }}>
              <img src={imgShaker} alt="Classic shaker door" />
              <div className={styles.collGrad} />
              <div className={styles.collCardBody}>
                <div className={styles.collNum}>02 — Classic</div>
                <h3>Shaker Doors</h3>
                <div className={styles.collLink}>View Collection <span>↗</span></div>
              </div>
            </Link>

            <Link to="/products/bifold" data-reveal className={styles.collCard} style={{ transitionDelay: '0.16s' }}>
              <img src={bifoldLife} alt="Panoramic bifold doors" />
              <div className={styles.collGrad} />
              <div className={styles.collCardBody}>
                <div className={styles.collNum}>03 — Panoramic</div>
                <h3>Bifold Doors</h3>
                <div className={styles.collLink}>View Collection <span>↗</span></div>
              </div>
            </Link>

            <Link to="/products/barn" data-reveal className={styles.collCard} style={{ transitionDelay: '0.1s' }}>
              <img src={imgBarn} alt="Reclaimed barn door" />
              <div className={styles.collGrad} />
              <div className={styles.collCardBody}>
                <div className={styles.collNum}>04 — Reclaimed</div>
                <h3>Barn Doors</h3>
                <div className={styles.collLink}>View Collection <span>↗</span></div>
              </div>
            </Link>

            <Link to="/products/glass" data-reveal className={styles.collCard} style={{ transitionDelay: '0.18s' }}>
              <img src={imgGlass} alt="Glass french doors" />
              <div className={styles.collGrad} />
              <div className={styles.collCardBody}>
                <div className={styles.collNum}>05 — Daylight</div>
                <h3>Glass & French</h3>
                <div className={styles.collLink}>View Collection <span>↗</span></div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════ CINEMATIC PORTAL ═══════════════ */}
      <section className={styles.portal}>
        <div className={styles.portalOverlay} />
        <div className={styles.portalContent}>
          <div data-reveal className={styles.portalOverline}>Built to Endure</div>
          <h2 data-reveal className={styles.portalHeading}>
            Craftsmanship that <em>outlives</em> generations
          </h2>
          <p data-reveal className={styles.portalPara}>
            Every joint is cut to last a century. We finish each door by hand, then sign it — because the doors we make today will still be opening long after we're gone.
          </p>
        </div>
      </section>

      {/* ═══════════════ PROCESS ═══════════════ */}
      <section className={styles.process}>
        <div className={styles.processInner}>
          <div className={styles.processHeader}>
            <div>
              <div data-reveal className={styles.processOverline}>
                <span className={styles.overlineLineLight} /> From Drawing to Doorway
              </div>
              <h2 data-reveal className={styles.processHeading}>The Aura <em>process</em></h2>
            </div>
            <p data-reveal className={styles.processDesc}>Four deliberate stages, fourteen days, one door made only for your opening.</p>
          </div>
          <div className={styles.processGrid}>
            {[
              { num: '01', title: 'Design',    desc: 'Bespoke shop drawings, drawn to the exact dimensions of your opening and approved before a single board is cut.' },
              { num: '02', title: 'Mill',      desc: 'Sustainable hardwood, selected for grain and milled to the millimetre on machinery tuned by hand.' },
              { num: '03', title: 'Finish',    desc: 'Hand-sanded through nine grits, oiled, and inspected under raking light — then signed by its maker.' },
              { num: '04', title: 'Deliver',   desc: 'Crated, shipped, and set into place by a certified installer — flawless from the first swing.' },
            ].map((step, i) => (
              <div key={step.num} data-reveal className={styles.processCard} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className={styles.processNum}>{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ DEALER CTA ═══════════════ */}
      <section className={styles.dealerCta}>
        <div className={styles.dealerGlow} />
        <div className={styles.dealerRing} />
        <div className={styles.dealerContent}>
          <div data-reveal className={styles.dealerOverline}>
            <span className={styles.overlineLineLight} />
            Exclusive Partnership
            <span className={styles.overlineLineLight} />
          </div>
          <h2 data-reveal className={styles.dealerHeading}>Join our global network</h2>
          <p data-reveal className={styles.dealerPara}>
            Aura Millwork partners with premier architects, builders, and dealers worldwide. Elevate your portfolio by becoming an authorised dealer.
          </p>
          <div data-reveal className={styles.dealerActions}>
            <Link to="/dealer-application" className={styles.dealerBtnPrimary}>
              Apply as a Dealer <span>→</span>
            </Link>
            <Link to="/products" className={styles.dealerBtnGhost}>View Projects</Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
