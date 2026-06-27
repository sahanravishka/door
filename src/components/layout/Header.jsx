import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Search, X, Menu } from 'lucide-react';
import Button from '../ui/Button';
import styles from './Header.module.css';

const Header = () => {
  const [scrolled,    setScrolled]    = useState(false);
  const [mobileOpen,  setMobileOpen]  = useState(false);
  const [openSection, setOpenSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* Lock scroll when mobile nav is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const closeMenu = () => { setMobileOpen(false); setOpenSection(null); };

  const toggleSection = (section) =>
    setOpenSection(prev => (prev === section ? null : section));

  return (
    <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}>

      {/* Announcement bar */}
      <div className={styles.topBar}>
        <span className={styles.topBarDot} />
        <span>Complimentary delivery on all architectural projects</span>
        <span className={styles.topBarAccent}>&nbsp;·&nbsp;25-Year Structural Warranty</span>
        <span className={styles.topBarDot} />
      </div>

      <div className={`container ${styles.nav}`}>

        {/* Logo */}
        <Link to="/" className={styles.logo} onClick={closeMenu}>
          <span className={styles.logoWordmark}>Aura</span>
          <span className={styles.logoSub}>Millwork</span>
        </Link>

        {/* Desktop nav */}
        <nav className={styles.links}>

          <div className={styles.navItem}>
            <Link to="/products" className={styles.navLink}>
              Products <ChevronDown size={12} />
            </Link>
            <div className={styles.dropdown}>
              <div className={styles.dropdownGroup}>
                <h4>Interior</h4>
                <Link to="/products/shaker"    className={styles.dropdownItem}>Shaker Doors</Link>
                <Link to="/products/bypass"    className={styles.dropdownItem}>By Pass Doors</Link>
                <Link to="/products/bifold"    className={styles.dropdownItem}>Bifold Doors</Link>
                <Link to="/products/glass"     className={styles.dropdownItem}>Glass Doors</Link>
                <Link to="/products/louver"    className={styles.dropdownItem}>Louver Doors</Link>
                <Link to="/products/french"    className={styles.dropdownItem}>French Doors</Link>
              </div>
              <div className={styles.dropdownGroup}>
                <h4>Specialty</h4>
                <Link to="/products/barn"       className={styles.dropdownItem}>Barn Doors</Link>
                <Link to="/products/pocket"     className={styles.dropdownItem}>Pocket Doors</Link>
                <Link to="/products/fire-rated" className={styles.dropdownItem}>Fire Rated Doors</Link>
                <Link to="/products/custom"     className={styles.dropdownItem}>Custom Doors</Link>
              </div>
            </div>
          </div>

          <div className={styles.navItem}>
            <span className={styles.navLink}>Resources <ChevronDown size={12} /></span>
            <div className={styles.dropdown} style={{ minWidth: '400px' }}>
              <div className={styles.dropdownGroup}>
                <h4>Help &amp; Guides</h4>
                <Link to="/warranty"    className={styles.dropdownItem}>Warranty Info</Link>
                <Link to="/literature"  className={styles.dropdownItem}>Literature &amp; Catalogs</Link>
                <Link to="/maintenance" className={styles.dropdownItem}>Care &amp; Maintenance</Link>
              </div>
              <div className={styles.dropdownGroup}>
                <h4>How To</h4>
                <Link to="/how-to/measure" className={styles.dropdownItem}>Take Measurements</Link>
                <Link to="/how-to/install" className={styles.dropdownItem}>Install Guides</Link>
              </div>
            </div>
          </div>

          <div className={styles.navItem}>
            <span className={styles.navLink}>Partners <ChevronDown size={12} /></span>
            <div className={styles.dropdown} style={{ minWidth: '400px' }}>
              <div className={styles.dropdownGroup}>
                <h4>Business</h4>
                <Link to="/dealer-application" className={styles.dropdownItem}>Dealer Application</Link>
                <Link to="/volume-sales"        className={styles.dropdownItem}>Volume Sales</Link>
                <Link to="/dealer-login"        className={styles.dropdownItem}>Dealer Login</Link>
              </div>
              <div className={styles.dropdownGroup}>
                <h4>Find Us</h4>
                <Link to="/where-to-buy" className={styles.dropdownItem}>Where to Buy</Link>
              </div>
            </div>
          </div>

          <div className={styles.navItem}>
            <Link to="/about"        className={styles.navLink}>About Us</Link>
          </div>
          <div className={styles.navItem}>
            <Link to="/inspirations" className={styles.navLink}>Inspirations</Link>
          </div>

        </nav>

        {/* Desktop actions */}
        <div className={styles.actions}>
          <button className={styles.iconBtn} aria-label="Search">
            <Search size={16} />
          </button>
          <Button to="/contact" variant="solid" shape="pill" className={styles.desktopCta}>
            Contact Us
          </Button>
        </div>

        {/* Hamburger — mobile only */}
        <button
          className={styles.hamburger}
          onClick={() => setMobileOpen(o => !o)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

      </div>

      {/* Mobile nav drawer */}
      <nav className={`${styles.mobileNav} ${mobileOpen ? styles.mobileNavOpen : ''}`}>

        <div className={styles.mobileSection}>
          <button
            className={styles.mobileSectionToggle}
            onClick={() => toggleSection('products')}
          >
            Products
            <ChevronDown size={14} className={openSection === 'products' ? styles.chevronOpen : ''} />
          </button>
          {openSection === 'products' && (
            <div className={styles.mobileSectionLinks}>
              <span className={styles.mobileSectionLabel}>Interior</span>
              {[['shaker','Shaker Doors'],['bypass','By Pass Doors'],['bifold','Bifold Doors'],['glass','Glass Doors'],['louver','Louver Doors'],['french','French Doors']].map(([slug,label]) => (
                <Link key={slug} to={`/products/${slug}`} className={styles.mobileLink} onClick={closeMenu}>{label}</Link>
              ))}
              <span className={styles.mobileSectionLabel}>Specialty</span>
              {[['barn','Barn Doors'],['pocket','Pocket Doors'],['fire-rated','Fire Rated Doors'],['custom','Custom Doors']].map(([slug,label]) => (
                <Link key={slug} to={`/products/${slug}`} className={styles.mobileLink} onClick={closeMenu}>{label}</Link>
              ))}
            </div>
          )}
        </div>

        <div className={styles.mobileSection}>
          <button
            className={styles.mobileSectionToggle}
            onClick={() => toggleSection('resources')}
          >
            Resources
            <ChevronDown size={14} className={openSection === 'resources' ? styles.chevronOpen : ''} />
          </button>
          {openSection === 'resources' && (
            <div className={styles.mobileSectionLinks}>
              {[['warranty','Warranty Info'],['literature','Literature & Catalogs'],['maintenance','Care & Maintenance'],['how-to/measure','Take Measurements'],['how-to/install','Install Guides']].map(([path,label]) => (
                <Link key={path} to={`/${path}`} className={styles.mobileLink} onClick={closeMenu}>{label}</Link>
              ))}
            </div>
          )}
        </div>

        <div className={styles.mobileSection}>
          <button
            className={styles.mobileSectionToggle}
            onClick={() => toggleSection('partners')}
          >
            Partners
            <ChevronDown size={14} className={openSection === 'partners' ? styles.chevronOpen : ''} />
          </button>
          {openSection === 'partners' && (
            <div className={styles.mobileSectionLinks}>
              {[['dealer-application','Dealer Application'],['volume-sales','Volume Sales'],['dealer-login','Dealer Login'],['where-to-buy','Where to Buy']].map(([path,label]) => (
                <Link key={path} to={`/${path}`} className={styles.mobileLink} onClick={closeMenu}>{label}</Link>
              ))}
            </div>
          )}
        </div>

        <div className={styles.mobileSection}>
          <Link to="/about"        className={styles.mobileSectionToggle} onClick={closeMenu}>About Us</Link>
        </div>
        <div className={styles.mobileSection}>
          <Link to="/inspirations" className={styles.mobileSectionToggle} onClick={closeMenu}>Inspirations</Link>
        </div>

        <div className={styles.mobileActions}>
          <Button to="/contact" variant="gold" shape="cut" onClick={closeMenu} style={{ width: '100%', justifyContent: 'center' }}>
            Contact Us
          </Button>
        </div>

      </nav>

    </header>
  );
};

export default Header;
