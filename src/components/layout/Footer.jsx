import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const IconInstagram = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);
const IconLinkedin = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);
const IconFacebook = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
const IconX = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4l16 16M20 4L4 20"/>
  </svg>
);

const Footer = () => (
  <footer className={styles.footer}>

    {/* Newsletter strip */}
    <div className={styles.newsletter}>
      <div className={`container ${styles.newsletterInner}`}>
        <div className={styles.newsletterText}>
          <h3>Stay in the Collection</h3>
          <p>New arrivals, exclusive finishes, and architectural inspiration — direct to your inbox.</p>
        </div>
        <div className={styles.newsletterForm}>
          <input
            type="email"
            className={styles.newsletterInput}
            placeholder="Your email address"
            aria-label="Email address"
          />
          <button className={styles.newsletterBtn} type="button">Subscribe</button>
        </div>
      </div>
    </div>

    <div className={`container ${styles.grid}`}>

      <div className={styles.brand}>
        <h2>Aura</h2>
        <span className={styles.brandSub}>Millwork</span>
        <p>Defining the threshold of luxury. Masterfully crafted doors engineered for the modern architectural landscape — combining security, elegance, and sustainability.</p>
        <span className={styles.brandAccent} />
      </div>

      <div className={styles.column}>
        <h4>Collections</h4>
        <ul>
          <li><Link to="/products/shaker">Shaker Series</Link></li>
          <li><Link to="/products/glass">Glass &amp; Light</Link></li>
          <li><Link to="/products/bifold">Panoramic Bifold</Link></li>
          <li><Link to="/products/french">Classic French</Link></li>
          <li><Link to="/products/custom">Custom Estates</Link></li>
        </ul>
      </div>

      <div className={styles.column}>
        <h4>Support &amp; Guides</h4>
        <ul>
          <li><Link to="/how-to/measure">Measurement Guide</Link></li>
          <li><Link to="/how-to/install">Installation Hub</Link></li>
          <li><Link to="/warranty">Warranty Info</Link></li>
          <li><Link to="/maintenance">Care &amp; Maintenance</Link></li>
          <li><Link to="/literature">Literature</Link></li>
        </ul>
      </div>

      <div className={styles.column}>
        <h4>Company</h4>
        <ul>
          <li><Link to="/about">Our Heritage</Link></li>
          <li><Link to="/inspirations">Gallery &amp; Projects</Link></li>
          <li><Link to="/where-to-buy">Find a Dealer</Link></li>
          <li><Link to="/dealer-application">Become a Partner</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </div>

    </div>

    <div className={`container ${styles.bottom}`}>
      <p>&copy; {new Date().getFullYear()} Aura Millwork Inc. All rights reserved.</p>
      <div className={styles.social}>
        <a href="#" aria-label="Instagram"><IconInstagram /></a>
        <a href="#" aria-label="Facebook"><IconFacebook /></a>
        <a href="#" aria-label="LinkedIn"><IconLinkedin /></a>
        <a href="#" aria-label="X / Twitter"><IconX /></a>
      </div>
      <div className={styles.legal}>
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/return-policy">Return Policy</Link>
      </div>
    </div>
  </footer>
);

export default Footer;
