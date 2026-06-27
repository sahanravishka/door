import React, { useMemo, useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, ChevronRight, ChevronLeft, X } from 'lucide-react';
import Button from '../components/ui/Button';
import styles from './Products.module.css';

/* ── Core product images ── */
import imgBifold  from '../assets/lux_bifold.png';
import imgFront   from '../assets/lux_front.png';
import imgShaker  from '../assets/lux_shaker.png';
import imgGlass   from '../assets/lux_glass.png';
import imgBarn    from '../assets/lux_barn.png';
import imgFrench  from '../assets/lux_french.png';
import imgLouver  from '../assets/lux_louver.png';
import imgPocket  from '../assets/lux_pocket.png';

/* ── Lifestyle & detail shots ── */
import bifoldLifestyle  from '../assets/bifold_lifestyle_1782500220166.png';
import entryLifestyle   from '../assets/entry_lifestyle_1782500241236.png';
import shakerLifestyle  from '../assets/shaker_lifestyle_1782526390737.png';
import shakerDetail     from '../assets/shaker_detail_1782526401612.png';
import bypassLifestyle  from '../assets/bypass_lifestyle_1782526413606.png';
import bypassDetail     from '../assets/bypass_detail_1782526423893.png';
import glassLifestyle   from '../assets/glass_lifestyle_1782526448028.png';
import glassDetail      from '../assets/glass_detail_1782526460742.png';
import louverLifestyle  from '../assets/louver_lifestyle_1782526472978.png';
import louverDetail     from '../assets/louver_detail_1782526484736.png';
import frenchLifestyle  from '../assets/french_lifestyle_1782526507494.png';
import frenchDetail     from '../assets/french_detail_1782526519692.png';
import barnLifestyle    from '../assets/barn_lifestyle_1782526531438.png';
import barnDetail       from '../assets/barn_detail_1782526543332.png';
import pocketLifestyle  from '../assets/pocket_lifestyle_1782526583821.png';
import pocketDetail     from '../assets/pocket_detail_1782526595824.png';
import fireLifestyle    from '../assets/fire_lifestyle_1782526606377.png';
import fireDetail       from '../assets/fire_detail_1782526616858.png';

const ALL_PRODUCTS = [
  {
    id: 'sk-classic-01',
    name: 'Classic Shaker',
    category: 'shaker',
    categoryLabel: 'Shaker',
    material: 'Solid Alder',
    finish: 'Antique White',
    images: [imgShaker, shakerLifestyle, shakerDetail],
    description: 'Timeless five-panel construction refined with contemporary proportions — a staple of premium interior design, perfected. Each rail and stile is precision-jointed by hand, then finished in layers for a surface that endures decades without compromise.',
  },
  {
    id: 'gd-aria-01',
    name: 'Aria Glass Door',
    category: 'glass',
    categoryLabel: 'Glass',
    material: 'White Oak + Tempered',
    finish: 'Matte Onyx',
    images: [imgGlass, glassLifestyle, glassDetail],
    description: 'Curated light flow through precisely fitted tempered glass panels, set within a structural white oak surround. The Aria brings transparency and weight in equal measure — luminous from every angle, commanding at first sight.',
  },
  {
    id: 'bd-panorama-01',
    name: 'Panorama Bifold',
    category: 'bifold',
    categoryLabel: 'Bifold',
    material: 'Engineered Oak',
    finish: 'Natural Blonde',
    images: [imgBifold, bifoldLifestyle, imgBifold],
    description: 'Floor-to-ceiling panels that fold away completely, merging interior with the outdoors in seamless architectural grandeur. Precision-engineered pivot hardware ensures each panel glides without effort, year after year.',
  },
  {
    id: 'fr-belvedere-01',
    name: 'Belvedere French',
    category: 'french',
    categoryLabel: 'French',
    material: 'Engineered Maple',
    finish: 'Linen White',
    images: [imgFrench, frenchLifestyle, frenchDetail],
    description: 'Elegant double-door grandeur with ornate glass detailing, flooding every space with natural light and intention. The Belvedere brings old-world proportion to contemporary interiors — a study in symmetry and light.',
  },
  {
    id: 'bn-heritage-01',
    name: 'Heritage Barn',
    category: 'barn',
    categoryLabel: 'Barn',
    material: 'Reclaimed Pine',
    finish: 'Raw Industrial',
    images: [imgBarn, barnLifestyle, barnDetail],
    description: 'Bold, sliding presence. Industrial hardware paired with sustainably sourced reclaimed timber for dramatic impact. Every plank carries its own story — weathered grain and natural variation that no factory can replicate.',
  },
  {
    id: 'bp-glide-01',
    name: 'Glide Bypass',
    category: 'bypass',
    categoryLabel: 'Bypass',
    material: 'Solid Walnut',
    finish: 'Dark Espresso',
    images: [bypassLifestyle, bypassDetail, bypassLifestyle],
    description: 'Space-efficient panels that glide in perfect silence on precision-machined tracks — ideal for walk-in wardrobes and open-plan spaces. The Glide eliminates swing clearance entirely without sacrificing the presence of solid timber.',
  },
  {
    id: 'lv-aero-01',
    name: 'Aero Louver',
    category: 'louver',
    categoryLabel: 'Louver',
    material: 'Engineered Teak',
    finish: 'Warm Honey',
    images: [imgLouver, louverLifestyle, louverDetail],
    description: 'Precisely angled louvres allow controlled ventilation and soft light diffusion — a hallmark of tropical and coastal architectural vernacular. Each slat is kiln-dried and sealed to resist moisture and seasonal movement.',
  },
  {
    id: 'pk-recess-01',
    name: 'Recess Pocket',
    category: 'pocket',
    categoryLabel: 'Pocket',
    material: 'Solid White Oak',
    finish: 'Cerused White',
    images: [imgPocket, pocketLifestyle, pocketDetail],
    description: 'Disappears entirely into the wall cavity on a precision-machined track — maximum architectural restraint, minimum visual footprint. The Recess is the preferred choice of architects who believe the best door is one you forget is there.',
  },
  {
    id: 'wr-shield-01',
    name: 'Shield Fire Door',
    category: 'fire-rated',
    categoryLabel: 'Fire Rated',
    material: 'Fire-Core Composite',
    finish: 'Steel Grey',
    images: [fireLifestyle, fireDetail, fireLifestyle],
    description: 'Engineered for 90-minute fire resistance without sacrificing aesthetic purity. Safety and sophistication, unified. The Shield carries full third-party certification while maintaining the same exacting finish standards as our interior collection.',
  },
  {
    id: 'fd-estate-01',
    name: 'Estate Entry',
    category: 'custom',
    categoryLabel: 'Custom',
    material: 'Solid Mahogany',
    finish: 'Ebony Stain',
    images: [imgFront, entryLifestyle, imgFront],
    description: 'A commanding single-slab entry statement, hand-carved and finished for the most distinguished of residences. Every Estate Entry is a one-of-one commission — reviewed with your architect and built to your exact specification.',
  },
];

const CATEGORIES = [
  { slug: 'all',        label: 'All Collections'  },
  { slug: 'shaker',     label: 'Shaker Doors'     },
  { slug: 'bypass',     label: 'By Pass Doors'    },
  { slug: 'bifold',     label: 'Bifold Doors'     },
  { slug: 'glass',      label: 'Glass Doors'      },
  { slug: 'louver',     label: 'Louver Doors'     },
  { slug: 'french',     label: 'French Doors'     },
  { slug: 'barn',       label: 'Barn Doors'       },
  { slug: 'pocket',     label: 'Pocket Doors'     },
  { slug: 'fire-rated', label: 'Fire Rated Doors' },
  { slug: 'custom',     label: 'Custom Doors'     },
];

const HERO_SLIDES = [
  { img: imgShaker,  label: 'Classic Shaker'    },
  { img: imgGlass,   label: 'Aria Glass Door'   },
  { img: imgBifold,  label: 'Panorama Bifold'   },
  { img: imgFrench,  label: 'Belvedere French'  },
  { img: imgBarn,    label: 'Heritage Barn'     },
  { img: imgFront,   label: 'Estate Entry'      },
];

const CATEGORY_DESC = {
  shaker:       'Timeless five-panel craftsmanship refined to modern proportions — a staple of premium interior design.',
  bypass:       'Silent, space-efficient panels that glide with surgical precision, ideal for wardrobes and open-plan living.',
  bifold:       'Floor-to-ceiling panels that fold away entirely, dissolving the boundary between inside and out.',
  glass:        'Precisely fitted tempered glass within structural hardwood surrounds for curated, architectural light flow.',
  louver:       'Architecturally louvred panels offering nuanced climate control, light diffusion, and visual depth.',
  french:       'Double-door grandeur with ornate glass detailing — flooding spaces with natural light and intention.',
  barn:         'Industrial hardware paired with sustainably sourced reclaimed timber for dramatic, tactile impact.',
  pocket:       'Space-saving elegance that disappears seamlessly into the wall — pure architectural restraint.',
  'fire-rated': 'Engineered for 90-minute fire resistance without sacrificing aesthetic purity.',
  custom:       'Bespoke architectural statements built to your precise vision, material, and specification.',
};

/* ─────────────────────────────── */

const Products = () => {
  const { category } = useParams();
  const activeCategory = category || 'all';

  const [lightboxIndex,    setLightboxIndex]    = useState(null);
  const [lightboxImgIndex, setLightboxImgIndex] = useState(0);
  const [slideIndex,       setSlideIndex]       = useState(0);

  /* ── Derived data ── */
  const filtered = useMemo(
    () => activeCategory === 'all'
      ? ALL_PRODUCTS
      : ALL_PRODUCTS.filter(p => p.category === activeCategory),
    [activeCategory]
  );

  /* Hero background: category's own images for single-category pages */
  const heroSlides = useMemo(() => {
    if (activeCategory === 'all' || filtered.length === 0) return HERO_SLIDES;
    return filtered.map(p => ({ img: p.images[0], label: p.name }));
  }, [activeCategory, filtered]);

  /* ── Effects ── */
  useEffect(() => { setSlideIndex(0); }, [activeCategory]);

  useEffect(() => {
    if (lightboxIndex !== null || heroSlides.length <= 1) return;
    const t = setInterval(() => setSlideIndex(i => (i + 1) % heroSlides.length), 5000);
    return () => clearInterval(t);
  }, [lightboxIndex, heroSlides.length]);

  /* ── Callbacks ── */
  const prevSlide = useCallback(
    () => setSlideIndex(i => (i <= 0 ? heroSlides.length - 1 : i - 1)),
    [heroSlides.length]
  );
  const nextSlide = useCallback(
    () => setSlideIndex(i => (i >= heroSlides.length - 1 ? 0 : i + 1)),
    [heroSlides.length]
  );

  const openLightbox  = useCallback((idx, imgIdx = 0) => { setLightboxIndex(idx); setLightboxImgIndex(imgIdx); }, []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevImage     = useCallback(() => setLightboxImgIndex(i => (i <= 0 ? 2 : i - 1)), []);
  const nextImage     = useCallback(() => setLightboxImgIndex(i => (i >= 2 ? 0 : i + 1)), []);

  useEffect(() => {
    const onKey = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape')     closeLightbox();
      if (e.key === 'ArrowLeft')  prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxIndex, closeLightbox, prevImage, nextImage]);

  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightboxIndex]);

  const product     = lightboxIndex !== null ? filtered[lightboxIndex] : null;
  const activeLabel = CATEGORIES.find(c => c.slug === activeCategory)?.label || 'All Collections';
  const catIndex    = CATEGORIES.findIndex(c => c.slug === activeCategory) + 1;

  /* ── Lightbox portal ── */
  const lightboxPortal = product
    ? createPortal(
        <div className={styles.lightboxOverlay} onClick={closeLightbox} role="dialog" aria-modal="true">
          <div className={styles.lightboxModal} onClick={e => e.stopPropagation()}>
            <button className={styles.lightboxClose} onClick={closeLightbox} aria-label="Close">
              <X size={16} />
            </button>

            <div className={styles.lightboxImgPane}>
              <img key={lightboxImgIndex} src={product.images[lightboxImgIndex]} alt={`${product.name} view ${lightboxImgIndex + 1}`} />

              <div className={styles.lightboxImgCounter}>
                {String(lightboxImgIndex + 1).padStart(2, '0')}&nbsp;/&nbsp;03
              </div>

              <div className={styles.lightboxThumbs}>
                {product.images.map((imgUrl, i) => (
                  <button key={i} className={`${styles.lightboxThumb} ${i === lightboxImgIndex ? styles.lightboxThumbActive : ''}`} onClick={() => setLightboxImgIndex(i)}>
                    <img src={imgUrl} alt="" />
                  </button>
                ))}
              </div>

              <div className={styles.lightboxArrows}>
                <button className={styles.lightboxArrow} onClick={prevImage} aria-label="Previous"><ChevronLeft size={18} /></button>
                <button className={styles.lightboxArrow} onClick={nextImage} aria-label="Next"><ChevronRight size={18} /></button>
              </div>
            </div>

            <div className={styles.lightboxInfo}>
              <div className={styles.lightboxCategory}>{product.categoryLabel}</div>
              <h2 className={styles.lightboxTitle}>{product.name}</h2>
              <div className={styles.lightboxSpecs}>
                <div className={styles.lightboxSpec}><span>Material</span><strong>{product.material}</strong></div>
                <div className={styles.lightboxSpec}><span>Finish</span><strong>{product.finish}</strong></div>
              </div>
              <p className={styles.lightboxDesc}>{product.description}</p>
              <Button to="/contact" variant="gold" shape="cut" icon={ArrowRight}>Request a Quote</Button>
            </div>
          </div>
        </div>,
        document.body
      )
    : null;

  /* ── Render ── */
  return (
    <div className={`page-transition-enter-active ${styles.page}`}>
      {lightboxPortal}

      {/* ── Hero ── */}
      <section className={`${styles.hero} ${activeCategory !== 'all' ? styles.heroSingle : ''}`}>
        <div className={styles.heroSlides} aria-hidden="true">
          {heroSlides.map((slide, i) => (
            <div key={i} className={`${styles.heroSlide} ${i === slideIndex ? styles.heroSlideActive : ''}`}>
              <img src={slide.img} alt="" />
            </div>
          ))}
          <div className={`${styles.heroOverlay} ${activeCategory !== 'all' ? styles.heroOverlaySingle : ''}`} />
        </div>

        <div className={styles.heroDecorNum} aria-hidden="true">
          {String(catIndex).padStart(2, '0')}
        </div>

        <div className={styles.heroContent}>
          {activeCategory !== 'all' && (
            <span className={`${styles.heroCatOverline} fade-in-up`}>— Collection</span>
          )}
          <h1 className={`fade-in-up ${activeCategory !== 'all' ? 'stagger-1' : ''}`}>{activeLabel}</h1>
          {activeCategory === 'all' ? (
            <p className="fade-in-up stagger-1">Aura Millwork · Premium Architectural Doors</p>
          ) : (
            <>
              {CATEGORY_DESC[activeCategory] && (
                <p className={`${styles.heroCatDesc} fade-in-up stagger-2`}>{CATEGORY_DESC[activeCategory]}</p>
              )}
              <div className={`${styles.heroCatMeta} fade-in-up stagger-3`}>
                <span>{filtered.length} {filtered.length === 1 ? 'model' : 'models'} in collection</span>
                <Link to="/contact" className={styles.heroCatLink}>Request a Quote →</Link>
              </div>
            </>
          )}
        </div>

        {heroSlides.length > 1 && (
          <div className={styles.heroControls}>
            <span className={styles.heroSlideLabel}>{heroSlides[slideIndex]?.label ?? ''}</span>
            <div className={styles.heroDots}>
              {heroSlides.map((_, i) => (
                <button key={i} className={`${styles.heroDot} ${i === slideIndex ? styles.heroDotActive : ''}`} onClick={() => setSlideIndex(i)} aria-label={`Slide ${i + 1}`} />
              ))}
            </div>
          </div>
        )}

        {heroSlides.length > 1 && (
          <>
            <button className={`${styles.heroArrow} ${styles.heroArrowPrev}`} onClick={prevSlide} aria-label="Previous"><ChevronLeft size={18} /></button>
            <button className={`${styles.heroArrow} ${styles.heroArrowNext}`} onClick={nextSlide} aria-label="Next"><ChevronRight size={18} /></button>
          </>
        )}
      </section>

      {/* ── Main layout ── */}
      <div className="container">
        <div className={`${styles.layout} ${styles.layoutAll}`}>

          {/* Sidebar */}
          <aside className={`${styles.sidebar} fade-in-up`}>
            <h3>Collections</h3>
            <ul className={styles.categoryList}>
              {CATEGORIES.map(cat => (
                <li key={cat.slug}>
                  <Link
                    to={cat.slug === 'all' ? '/products' : `/products/${cat.slug}`}
                    className={activeCategory === cat.slug ? `${styles.categoryLink} ${styles.categoryLinkActive}` : styles.categoryLink}
                  >
                    <ChevronRight size={13} />
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className={styles.sidebarCta}>
              <p>Our specialists can guide you to the perfect door for your project.</p>
              <Button to="/contact" variant="solid" shape="pill" style={{ width: '100%', justifyContent: 'center', fontSize: '9px' }}>
                Contact an Expert
              </Button>
            </div>
          </aside>

          {/* Main content */}
          <main className={lightboxIndex !== null ? styles.mainBlurred : ''}>
            {filtered.length === 0 ? (
              <div className={styles.emptyState}>
                <h2>Collection Coming Soon</h2>
                <p>Being curated by our design team. <Link to="/contact" style={{ color: 'var(--rust)' }}>Contact us</Link> for details.</p>
              </div>

            ) : activeCategory !== 'all' ? (
              /* ── Single-category: showcase layout ── */
              <div className={`${styles.showcase} fade-in-up stagger-1`}>
                {filtered.map((prod, idx) => (
                  <div key={prod.id} className={styles.showcaseItem}>

                    {/* Image group: main + two thumbnails */}
                    <div className={styles.showcaseImages}>
                      <div
                        className={styles.showcaseMainImg}
                        onClick={() => openLightbox(idx, 0)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={e => e.key === 'Enter' && openLightbox(idx, 0)}
                        aria-label={`Open gallery for ${prod.name}`}
                      >
                        <img src={prod.images[0]} alt={prod.name} />
                      </div>
                      <div className={styles.showcaseThumbCol}>
                        {prod.images.slice(1).map((img, i) => (
                          <div
                            key={i}
                            className={styles.showcaseThumbItem}
                            onClick={() => openLightbox(idx, i + 1)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={e => e.key === 'Enter' && openLightbox(idx, i + 1)}
                          >
                            <img src={img} alt={`${prod.name} view ${i + 2}`} loading="lazy" />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Free description — no box, just text */}
                    <div className={styles.showcaseBody}>
                      <span className={styles.showcaseCat}>{prod.categoryLabel}</span>
                      <h2 className={styles.showcaseName}>{prod.name}</h2>
                      <p className={styles.showcaseDesc}>{prod.description}</p>
                      <div className={styles.showcaseMeta}>
                        <div><span>Material</span><strong>{prod.material}</strong></div>
                        <div><span>Finish</span><strong>{prod.finish}</strong></div>
                      </div>
                      <div className={styles.showcaseActions}>
                        <Button to="/contact" variant="gold" shape="cut" icon={ArrowRight}>Request a Quote</Button>
                        <button className={styles.showcaseGalleryBtn} onClick={() => openLightbox(idx, 0)}>
                          View Full Gallery ↗
                        </button>
                      </div>
                    </div>

                  </div>
                ))}
              </div>

            ) : (
              /* ── All collections: 3-col card grid ── */
              <div className={`${styles.grid} ${styles.gridAll} fade-in-up stagger-1`}>
                {filtered.map((prod, idx) => (
                  <article
                    key={prod.id}
                    className={styles.productCard}
                    onClick={() => openLightbox(idx)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={e => e.key === 'Enter' && openLightbox(idx)}
                    aria-label={`View ${prod.name}`}
                  >
                    <div className={styles.imgWrapper}>
                      <img src={prod.images[0]} alt={prod.name} loading="lazy" />
                    </div>
                    <div className={styles.cardDetails}>
                      <span className={styles.cardMetaCat}>{prod.categoryLabel}</span>
                      <h3>{prod.name}</h3>
                      <p className={styles.cardDetailsDesc}>{prod.description}</p>
                      <span className={styles.cardDetailsLink}>View Details <ArrowRight size={12} /></span>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </main>

        </div>
      </div>
    </div>
  );
};

export default Products;
