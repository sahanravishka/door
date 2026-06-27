import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Phone, Mail, MapPin, Clock,
  Download, CheckCircle, Shield, Star, Award, Layers, ChevronRight,
} from 'lucide-react';
import Button from '../components/ui/Button';
import styles from './GenericPage.module.css';

import imgAbout    from '../assets/lux_about.png';
import imgBifold   from '../assets/lux_bifold.png';
import imgWarranty from '../assets/lux_warranty.png';
import imgFront    from '../assets/lux_front.png';
import imgShaker   from '../assets/lux_shaker.png';
import imgGlass    from '../assets/lux_glass.png';
import imgBarn     from '../assets/lux_barn.png';
import imgFrench   from '../assets/lux_french.png';

/* ── Scroll-reveal hook ── */
function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const els = root.querySelectorAll('[data-reveal]');
    const show = (el) => { el.style.opacity = '1'; el.style.transform = 'none'; };
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((e) => { if (e.isIntersecting) { show(e.target); io.unobserve(e.target); } });
      }, { threshold: 0.05, rootMargin: '0px 0px 0px 0px' });
      els.forEach((el) => io.observe(el));
      // Fallback: reveal anything still hidden after 800ms (above-fold items)
      const t = setTimeout(() => els.forEach(show), 800);
      return () => { clearTimeout(t); io.disconnect(); };
    } else {
      els.forEach(show);
    }
  }, []);
  return ref;
}

/* ─── About ─── */
const AboutContent = () => {
  const ref = useReveal();
  return (
    <div ref={ref}>
      {/* Stats strip */}
      <div className={styles.statsStrip}>
        <div className={`container ${styles.statsInner}`}>
          {[
            { num: '1984', label: 'Founded' },
            { num: '40+',  label: 'Years of Craft' },
            { num: '12k+', label: 'Projects Delivered' },
            { num: '25yr', label: 'Structural Warranty' },
          ].map(s => (
            <div key={s.label} className={styles.stat}>
              <strong>{s.num}</strong><span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Split section */}
      <section className={styles.splitSection}>
        <div className="container">
          <div className={styles.splitGrid}>
            <div className={styles.splitText}>
              <div data-reveal className={styles.overlineRow}>
                <span className={styles.overlineLine} />
                Measured Twice, Assembled Once
              </div>
              <h2 data-reveal className={styles.splitHeading}>
                A workshop, not a <em>factory</em>
              </h2>
              <p data-reveal className={styles.splitPara}>
                From our workshops in the Pacific Northwest, every panel, rail, and stile is measured
                twice and assembled once. Four decades on, our work graces landmark estates, boutique
                hotels, and cultural institutions across the continent.
              </p>
              <p data-reveal className={styles.splitPara}>
                Our craftspeople are artisans first — each bringing a lifetime of mastery in joinery,
                finishing, and architectural hardware to a single threshold.
              </p>
              <Link data-reveal to="/contact" className={styles.splitLink}>
                Begin a conversation <ArrowRight size={14} />
              </Link>
            </div>
            <div data-reveal className={styles.splitImageWrap}>
              <img src={imgAbout} alt="Aura Millwork workshop" className={styles.splitImg} />
              <span className={styles.splitTag}>Pacific Northwest Workshops · Est. 1984</span>
              <span className={styles.splitCorner} />
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className={styles.processSection}>
        <div className="container">
          <div className={styles.processHeader}>
            <div data-reveal className={styles.overlineRow}><span className={styles.overlineLine} />From Drawing to Doorway</div>
            <h2 data-reveal className={styles.processHeading}>Four steps to <em>perfection</em></h2>
          </div>
          <div className={styles.processGrid}>
            {[
              { num: '01', title: 'Consultation', desc: 'We begin with your vision — architecture, lifestyle, and design vocabulary inform every decision.' },
              { num: '02', title: 'Design',       desc: 'In-house designers produce detailed shop drawings, reviewed with your architect before a board is cut.' },
              { num: '03', title: 'Fabrication',  desc: 'Each door is hand-built by certified millwrights in our climate-controlled facility.' },
              { num: '04', title: 'Installation', desc: 'White-glove delivery and fitting — hardware, weatherstripping, and a final inspection.' },
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
    </div>
  );
};

/* ─── Contact ─── */
const ContactContent = () => {
  const ref = useReveal();
  return (
    <div ref={ref}>
      <section className={styles.contactSection}>
        <div className="container">
          <div className={styles.contactGrid}>
            {/* Form */}
            <div data-reveal className={styles.contactFormWrap}>
              <div className={styles.overlineRow}><span className={styles.overlineLine} />Send a Message</div>
              <h2 className={styles.contactHeading}>Tell us about your project</h2>
              <form className={styles.form}>
                <div className={styles.formGrid}>
                  <div className={styles.formGroup}>
                    <label>First Name</label>
                    <input type="text" placeholder="Alexander" />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Last Name</label>
                    <input type="text" placeholder="Whitmore" />
                  </div>
                  <div className={`${styles.formGroup} ${styles.formGroupFull}`}>
                    <label>Email Address</label>
                    <input type="email" placeholder="you@studio.com" />
                  </div>
                  <div className={`${styles.formGroup} ${styles.formGroupFull}`}>
                    <label>Project Type</label>
                    <select>
                      <option>Residential · New Build</option>
                      <option>Residential · Renovation</option>
                      <option>Commercial · Hospitality</option>
                      <option>Commercial · Multi-Family</option>
                      <option>Dealer Inquiry</option>
                    </select>
                  </div>
                  <div className={`${styles.formGroup} ${styles.formGroupFull}`}>
                    <label>Message</label>
                    <textarea rows={5} placeholder="Tell us about your project…" />
                  </div>
                </div>
                <button type="submit" className={styles.submitBtn}>
                  Send Enquiry <span>→</span>
                </button>
              </form>
            </div>

            {/* Sidebar */}
            <aside data-reveal className={styles.contactSidebar}>
              <div className={styles.sidebarLabel}>Direct Lines</div>
              <div className={styles.contactDetails}>
                {[
                  { Icon: Phone,  label: 'Phone',    lines: ['1-800-AURA-MWK'] },
                  { Icon: Mail,   label: 'Email',    lines: ['projects@auramillwork.com'] },
                  { Icon: MapPin, label: 'Showroom', lines: ['2840 Millwork Blvd', 'Vancouver, BC V6B 2W7'] },
                  { Icon: Clock,  label: 'Hours',    lines: ['Mon – Fri · 9am – 6pm', 'Saturday · 10am – 4pm'] },
                ].map(({ Icon, label, lines }) => (
                  <div key={label} className={styles.contactDetail}>
                    <div className={styles.detailLabel}>{label}</div>
                    {lines.map(l => <div key={l} className={styles.detailLine}>{l}</div>)}
                  </div>
                ))}
              </div>
              <div className={styles.sidebarNote}>
                Visits are by appointment — we'll prepare physical samples for your project ahead of time.
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

/* ─── Warranty ─── */
const WarrantyContent = () => {
  const ref = useReveal();
  return (
    <div ref={ref}>
      <section className={styles.warrantySection}>
        <div className="container">
          <div className={styles.warrantyGrid}>
            {[
              { Icon: Shield, years: '25', title: 'Structural Integrity',  desc: 'All frame components, joinery, and engineered cores are warranted against delamination, warping, and structural failure for 25 years.' },
              { Icon: Star,   years: '10', title: 'Finish & Surface',      desc: 'Factory-applied finishes are warranted against peeling, blistering, and significant fading under normal interior conditions for 10 years.' },
              { Icon: Award,  years: '5',  title: 'Hardware',              desc: 'All Aura-supplied hardware — hinges, handles, and locking mechanisms — are warranted against mechanical failure for 5 years.' },
              { Icon: Layers, years: '2',  title: 'Glass Panels',          desc: 'Tempered and insulated glass units carry a 2-year manufacturing defect warranty inclusive of seal failure and condensation.' },
            ].map(({ Icon, years, title, desc }, i) => (
              <div key={title} data-reveal className={styles.warrantyCard} style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className={styles.warrantyCardHead}>
                  <Icon size={18} className={styles.warrantyIcon} />
                  <strong>{years} yr</strong>
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>

          <div className={styles.termsSection}>
            <h3>Conditions & Exclusions</h3>
            <ul className={styles.termsList}>
              {[
                'Warranty applies to the original purchaser and is non-transferable without written consent.',
                'Damage resulting from improper installation not performed by Aura-certified contractors is excluded.',
                'Exposure to extreme moisture, direct sunlight, or chemical solvents voids the finish warranty.',
                'Normal wear including minor surface scratches and handle patina is not covered.',
                'Submit warranty claims in writing within 30 days of discovering the defect.',
              ].map(term => (
                <li key={term}><CheckCircle size={13} />{term}</li>
              ))}
            </ul>
            <Button variant="outline" shape="cut" icon={ArrowRight} to="/contact">Register Your Product</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

/* ─── Resources ─── */
const ResourcesContent = () => {
  const ref = useReveal();
  return (
    <div ref={ref}>
      <section className={styles.resourcesSection}>
        <div className="container">
          <div className={styles.resourcesList}>
            {[
              { title: 'Product Specification Sheets', desc: 'Technical drawings, dimension tolerances, and material specifications for all current collections.', tag: 'PDF · 4.2 MB' },
              { title: 'Finish Sample Guide',          desc: 'Comprehensive swatch library with all stain, paint, and lacquer finishes including LRV ratings.',        tag: 'PDF · 8.8 MB' },
              { title: 'Installation Manual',          desc: 'Step-by-step guidance for certified millwrights. Includes rough opening prep and weatherstripping.',       tag: 'PDF · 12.1 MB' },
              { title: 'Care & Maintenance Guide',     desc: 'Recommended cleaning products, seasonal adjustment procedures, and hardware care instructions.',           tag: 'PDF · 2.6 MB' },
              { title: 'BIM / CAD Files',              desc: 'Revit families and AutoCAD blocks for all standard door configurations — for architectural use.',           tag: 'ZIP · 18.3 MB' },
              { title: 'Hardware Catalog',             desc: 'Full hardware selection including levers, pulls, hinges, and locks with finish specifications.',            tag: 'PDF · 6.7 MB' },
            ].map((doc, i) => (
              <div key={doc.title} data-reveal className={styles.docRow} style={{ transitionDelay: `${i * 0.06}s` }}>
                <div className={styles.docIcon}><Download size={18} /></div>
                <div className={styles.docBody}>
                  <h3>{doc.title}</h3>
                  <p>{doc.desc}</p>
                  <span className={styles.docTag}>{doc.tag}</span>
                </div>
                <button className={styles.docBtn} aria-label={`Download ${doc.title}`}><Download size={14} /></button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

/* ─── Guides ─── */
const GuidesContent = ({ title }) => {
  const ref = useReveal();
  return (
    <div ref={ref}>
      <section className={styles.guidesSection}>
        <div className="container">
          <div className={styles.guidesLayout}>
            <aside className={styles.guidesSidebar}>
              <h4>In This Guide</h4>
              <ul className={styles.guidesToc}>
                {['Overview', 'Tools Required', 'Measuring the Rough Opening', 'Checking for Square', 'Shimming Techniques', 'Final Inspection'].map(item => (
                  <li key={item}><ChevronRight size={12} />{item}</li>
                ))}
              </ul>
            </aside>
            <div className={styles.guidesContent}>
              {[
                { num: '01', heading: 'Overview', body: 'Proper measurement is the single most important step before ordering any custom door. An error of even 1⁄8 inch can result in costly re-orders or compromised weathertight performance. This guide follows Aura Millwork\'s certified measurement protocol used by all our installation partners.' },
                { num: '02', heading: 'Tools Required', list: ['25-ft tape measure (preferably digital)', '4-ft or 6-ft spirit level', 'Speed square or framing square', 'Pencil and notepad', 'Flashlight for recessed areas'] },
                { num: '03', heading: 'Measuring the Rough Opening', body: 'Measure the width of the rough opening at three points: top, middle, and bottom. Record the smallest measurement — this is your controlling width. Repeat for height on left, centre, and right. Standard rough opening allowance is the door size plus 2 inches on each side and 2.5 inches on top.', callout: 'Always order based on the smallest dimension found, never the largest. Our team reviews your submitted measurements before production begins.' },
              ].map((step) => (
                <div key={step.num} data-reveal className={styles.guideStep}>
                  <div className={styles.guideNum}>{step.num}</div>
                  <div>
                    <h3>{step.heading}</h3>
                    {step.body && <p>{step.body}</p>}
                    {step.list && (
                      <ul className={styles.toolsList}>
                        {step.list.map(t => <li key={t}><CheckCircle size={13} />{t}</li>)}
                      </ul>
                    )}
                    {step.callout && <div className={styles.callout}><strong>Pro Tip:</strong> {step.callout}</div>}
                  </div>
                </div>
              ))}
              <Button variant="gold" shape="cut" icon={ArrowRight} to="/contact">Submit Your Measurements</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

/* ─── Dealers ─── */
const DealersContent = () => {
  const ref = useReveal();
  return (
    <div ref={ref}>
      <section className={styles.dealersSection}>
        <div className="container">
          <div className={styles.dealerIntroGrid}>
            <div className={styles.dealerIntroCopy}>
              <div data-reveal className={styles.overlineRow}><span className={styles.overlineLine} />Authorised Retailers</div>
              <h2 data-reveal className={styles.dealerHeading}>Find an Aura <em>Dealer Near You</em></h2>
              <p data-reveal>Our network of 200+ certified dealers spans North America. Each partner is trained by Aura Millwork specialists and maintains a curated showroom with physical door samples.</p>
            </div>
            <div data-reveal className={styles.dealerSearch}>
              <input type="text" placeholder="Enter city, province, or postal code…" className={styles.dealerInput} />
              <button className={styles.dealerSearchBtn}>Search</button>
            </div>
          </div>
        </div>
        <div className={styles.mapPlaceholder}>
          <MapPin size={28} />
          <p>Interactive dealer map · Contact us for your nearest showroom</p>
        </div>
        <div className="container">
          <div data-reveal className={styles.dealerCta}>
            <div>
              <h3>Become an Aura Partner</h3>
              <p>We selectively expand our dealer network with partners who share our commitment to quality.</p>
            </div>
            <Button variant="gold" shape="cut" icon={ArrowRight} to="/dealer-application">Apply to Become a Dealer</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

/* ─── Forms ─── */
const FormsContent = ({ title }) => {
  const ref = useReveal();
  return (
    <div ref={ref}>
      <section className={styles.formsSection}>
        <div className="container">
          <div className={styles.formsLayout}>
            <div data-reveal className={styles.formWrap}>
              <div className={styles.overlineRow}><span className={styles.overlineLine} />Application Form</div>
              <h2 className={styles.formHeading}>{title}</h2>
              <form className={styles.form}>
                <div className={styles.formGrid}>
                  <div className={styles.formGroup}>
                    <label>Business Name</label>
                    <input type="text" placeholder="Whitmore Design Group" />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Primary Contact</label>
                    <input type="text" placeholder="Full name" />
                  </div>
                  <div className={`${styles.formGroup} ${styles.formGroupFull}`}>
                    <label>Business Email</label>
                    <input type="email" placeholder="contact@yourbusiness.com" />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Phone</label>
                    <input type="tel" placeholder="+1 (604) 555-0100" />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Province / State</label>
                    <select>
                      <option>British Columbia</option>
                      <option>Ontario</option>
                      <option>Alberta</option>
                      <option>California</option>
                      <option>Washington</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className={`${styles.formGroup} ${styles.formGroupFull}`}>
                    <label>Annual Door Sales Volume</label>
                    <select>
                      <option>Under 50 units</option>
                      <option>50 – 200 units</option>
                      <option>200 – 500 units</option>
                      <option>500+ units</option>
                    </select>
                  </div>
                  <div className={`${styles.formGroup} ${styles.formGroupFull}`}>
                    <label>Additional Notes</label>
                    <textarea rows={4} placeholder="Tell us about your business and what draws you to Aura Millwork…" />
                  </div>
                </div>
                <button type="submit" className={styles.submitBtn}>Submit Application <span>→</span></button>
              </form>
            </div>
            <aside data-reveal className={styles.formAside}>
              <div className={styles.sidebarLabel}>Why Partner With Us</div>
              {[
                { title: 'Exclusive Territory', desc: 'Dealers receive protected geographic territories with no overlap.' },
                { title: 'Co-op Marketing',     desc: 'Access to professional photography, digital assets, and co-funded campaigns.' },
                { title: 'Technical Training',  desc: 'On-site training by Aura-certified installation specialists.' },
                { title: 'Priority Access',     desc: 'Early access to new collections and limited-run custom finishes.' },
              ].map(item => (
                <div key={item.title} className={styles.asideItem}>
                  <CheckCircle size={14} className={styles.asideIcon} />
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

/* ─── Legal ─── */
const LegalContent = ({ title }) => {
  const ref = useReveal();
  return (
    <div ref={ref}>
      <section className={styles.legalSection}>
        <div className="container">
          <div data-reveal className={styles.legalBody}>
            <p className={styles.legalMeta}>Last updated: January 2025 &nbsp;·&nbsp; Aura Millwork Ltd.</p>
            <h3>1. Introduction</h3>
            <p>This {title} applies to all users of Aura Millwork's website, products, and services. By engaging with our products or services you agree to be bound by the terms outlined here.</p>
            <h3>2. Scope</h3>
            <p>These terms govern the relationship between Aura Millwork Ltd. ("Company") and its clients, dealers, and website visitors ("Users"). The Company reserves the right to amend these terms at any time with reasonable notice provided via email to registered clients.</p>
            <h3>3. Products & Orders</h3>
            <p>All product orders are subject to a signed purchase agreement. Custom orders are non-cancellable once production has commenced. Standard lead times are 8–12 weeks for custom fabrication and 4–6 weeks for in-stock configurations.</p>
            <h3>4. Limitation of Liability</h3>
            <p>The Company's liability shall not exceed the original purchase price of the goods in question. The Company is not liable for consequential, incidental, or indirect damages arising from product use or installation.</p>
            <h3>5. Governing Law</h3>
            <p>These terms are governed by the laws of British Columbia, Canada. Any disputes shall be resolved through binding arbitration in Vancouver, BC.</p>
            <div className={styles.legalContact}>Questions? Contact our legal team: <strong>legal@auramillwork.com</strong></div>
          </div>
        </div>
      </section>
    </div>
  );
};

/* ─── Inspirations ─── */
const InspirationsContent = () => {
  const ref = useReveal();
  const imgs = [imgBifold, imgFront, imgShaker, imgAbout, imgWarranty, imgGlass, imgBarn, imgFrench];
  return (
    <div ref={ref}>
      <section className={styles.inspirationsSection}>
        <div className="container">
          <div className={styles.inspirationGrid}>
            {imgs.map((img, i) => (
              <div key={i} data-reveal className={styles.inspirationItem} style={{ transitionDelay: `${(i % 3) * 0.07}s` }}>
                <img src={img} alt={`Inspiration ${i + 1}`} />
                <div className={styles.inspirationOverlay}><span>View Project</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

/* ─── CTA Strip ─── */
const CtaStrip = () => (
  <section className={styles.ctaStrip}>
    <div className={styles.ctaGlow} />
    <div className="container">
      <div className={styles.ctaInner}>
        <div className={styles.ctaText}>
          <h3>Ready to Elevate Your Space?</h3>
          <p>Our architectural specialists are standing by to assist with your project.</p>
        </div>
        <div className={styles.ctaActions}>
          <Button variant="gold" shape="cut" icon={ArrowRight} to="/contact">Begin a Project</Button>
          <Button variant="outline" shape="cut" to="/products">Browse Collections</Button>
        </div>
      </div>
    </div>
  </section>
);

/* ─── Main component ─── */
const GenericPage = ({ title, type }) => {
  const firstChar = title.charAt(0);

  const content = {
    about:        <AboutContent />,
    contact:      <ContactContent />,
    warranty:     <WarrantyContent />,
    resources:    <ResourcesContent />,
    guides:       <GuidesContent title={title} />,
    dealers:      <DealersContent />,
    forms:        <FormsContent title={title} />,
    legal:        <LegalContent title={title} />,
    inspirations: <InspirationsContent />,
  }[type];

  return (
    <div className={`page-transition-enter-active ${styles.page}`}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroDecorChar} aria-hidden="true">{firstChar}</div>
        <div className="container">
          <div className={styles.heroInner}>
            <div className={styles.heroOverline}>
              <span className={styles.overlineLine} />
              Aura Millwork
            </div>
            <h1 className={`fade-in-up ${styles.heroTitle}`}>{title}</h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className={styles.pageBody}>
        {content ?? (
          <section className={styles.fallbackSection}>
            <div className="container">
              <div className={styles.fallbackContent}>
                <div className={styles.overlineRow}><span className={styles.overlineLine} />Coming Soon</div>
                <p>Welcome to the {title} section. At Aura Millwork, we pride ourselves on delivering not just exceptional doors, but an unparalleled service experience.</p>
              </div>
            </div>
          </section>
        )}
      </div>

      <CtaStrip />
    </div>
  );
};

export default GenericPage;
