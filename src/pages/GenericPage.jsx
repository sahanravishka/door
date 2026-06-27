import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Phone, Mail, MapPin, Clock,
  Download, CheckCircle, Shield, Star, Award, Layers, ChevronRight,
} from 'lucide-react';
import Button from '../components/ui/Button';
import styles from './GenericPage.module.css';

import imgBifold   from '../assets/lux_bifold.png';
import imgAbout    from '../assets/lux_about.png';
import imgWarranty from '../assets/lux_warranty.png';
import imgFront    from '../assets/lux_front.png';
import imgShaker   from '../assets/lux_shaker.png';
import imgGlass    from '../assets/lux_glass.png';
import imgBarn     from '../assets/lux_barn.png';
import imgFrench   from '../assets/lux_french.png';

/* ─── About ─── */
const AboutContent = () => (
  <>
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

    <div className={`container ${styles.splitSection}`}>
      <div className={styles.splitText}>
        <span className={styles.overline}>Our Heritage</span>
        <h2>Crafted for the<br /><em>Discerning Eye</em></h2>
        <p>Founded in 1984, Aura Millwork began with a single belief: that a door is not merely a functional threshold, but the opening statement of every exceptional space. From our workshops in the Pacific Northwest, every panel, rail, and stile is measured twice, assembled once.</p>
        <p>Four decades later, our work graces landmark residential estates, boutique hotels, and cultural institutions across North America. Our craftsmen are artisans first — each bringing decades of mastery in joinery, finishing, and architectural hardware.</p>
        <Link to="/contact" className={styles.splitLink}>Begin a conversation <ArrowRight size={14} /></Link>
      </div>
      <div className={styles.splitImage}>
        <img src={imgAbout} alt="Aura Millwork workshop" />
        <span className={styles.splitImageTag}>Pacific Northwest Workshops · Est. 1984</span>
      </div>
    </div>

    <div className={styles.processSection}>
      <div className="container">
        <div className={styles.processHeader}>
          <span className={styles.overline}>Our Process</span>
          <h2>Four Steps to <em>Perfection</em></h2>
        </div>
        <div className={styles.processGrid}>
          {[
            { num: '01', title: 'Consultation', desc: 'We begin with your vision — architecture, lifestyle, and design vocabulary inform every decision.' },
            { num: '02', title: 'Design',       desc: 'Our in-house designers produce detailed shop drawings reviewed by your architect or designer.' },
            { num: '03', title: 'Fabrication',  desc: 'Each door is hand-built by certified millwrights in our climate-controlled facility.' },
            { num: '04', title: 'Installation', desc: 'White-glove delivery and installation — including hardware, weatherstripping, and final inspection.' },
          ].map(step => (
            <div key={step.num} className={styles.processStep}>
              <div className={styles.processNum}>{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
);

/* ─── Contact ─── */
const ContactContent = () => (
  <div className={`container ${styles.contactLayout}`}>
    <div className={styles.contactForm}>
      <span className={styles.overline}>Send a Message</span>
      <h2>Let's Begin</h2>
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
      <Button variant="gold" shape="cut" icon={ArrowRight}>Send Enquiry</Button>
    </div>

    <aside className={styles.contactSidebar}>
      {[
        { Icon: Phone,  label: 'Phone',     lines: ['1-800-AURA-MWK'] },
        { Icon: Mail,   label: 'Email',     lines: ['projects@auramillwork.com'] },
        { Icon: MapPin, label: 'Showroom',  lines: ['2840 Millwork Blvd', 'Vancouver, BC V6B 2W7'] },
        { Icon: Clock,  label: 'Hours',     lines: ['Mon – Fri · 9am – 6pm', 'Saturday · 10am – 4pm'] },
      ].map(({ Icon, label, lines }) => (
        <div key={label} className={styles.contactDetail}>
          <Icon size={16} />
          <div>
            <strong>{label}</strong>
            {lines.map(l => <span key={l}>{l}</span>)}
          </div>
        </div>
      ))}
    </aside>
  </div>
);

/* ─── Warranty ─── */
const WarrantyContent = () => (
  <>
    <div className={`container ${styles.warrantyGrid}`}>
      {[
        { Icon: Shield, years: '25', title: 'Structural Integrity',  desc: 'All frame components, joinery, and engineered cores are warranted against delamination, warping, and structural failure for 25 years from date of installation.' },
        { Icon: Star,   years: '10', title: 'Finish & Surface',      desc: 'Factory-applied finishes are warranted against peeling, blistering, and significant fading under normal interior conditions for 10 full years.' },
        { Icon: Award,  years: '5',  title: 'Hardware',              desc: 'All Aura-supplied hardware — hinges, handles, and locking mechanisms — are warranted against mechanical failure for 5 years.' },
        { Icon: Layers, years: '2',  title: 'Glass Panels',          desc: 'Tempered and insulated glass units carry a 2-year manufacturing defect warranty inclusive of seal failure and condensation between panes.' },
      ].map(({ Icon, years, title, desc }) => (
        <div key={title} className={styles.warrantyCard}>
          <div className={styles.warrantyCardHead}>
            <Icon size={18} />
            <strong>{years} yr</strong>
          </div>
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
      ))}
    </div>

    <div className={`container ${styles.termsSection}`}>
      <h3>Conditions &amp; Exclusions</h3>
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
  </>
);

/* ─── Resources (Literature & Maintenance) ─── */
const ResourcesContent = () => (
  <div className={`container ${styles.resourcesGrid}`}>
    {[
      { title: 'Product Specification Sheets', desc: 'Technical drawings, dimension tolerances, and material specifications for all current collections.', tag: 'PDF · 4.2 MB' },
      { title: 'Finish Sample Guide',          desc: 'Comprehensive swatch library with all stain, paint, and lacquer finishes including LRV ratings.', tag: 'PDF · 8.8 MB' },
      { title: 'Installation Manual',          desc: 'Step-by-step guidance for certified millwrights. Includes rough opening prep and weatherstripping.', tag: 'PDF · 12.1 MB' },
      { title: 'Care & Maintenance Guide',     desc: 'Recommended cleaning products, seasonal adjustment procedures, and hardware care instructions.', tag: 'PDF · 2.6 MB' },
      { title: 'BIM / CAD Files',              desc: 'Revit families and AutoCAD blocks for all standard door configurations — for architectural use.', tag: 'ZIP · 18.3 MB' },
      { title: 'Hardware Catalog',             desc: 'Full hardware selection including levers, pulls, hinges, and locks with finish specifications.', tag: 'PDF · 6.7 MB' },
    ].map(doc => (
      <div key={doc.title} className={styles.docCard}>
        <div className={styles.docCardIcon}><Download size={18} /></div>
        <div className={styles.docCardBody}>
          <h3>{doc.title}</h3>
          <p>{doc.desc}</p>
          <span className={styles.docTag}>{doc.tag}</span>
        </div>
        <button className={styles.docDownload} aria-label={`Download ${doc.title}`}>
          <Download size={14} />
        </button>
      </div>
    ))}
  </div>
);

/* ─── Guides (How-To) ─── */
const GuidesContent = ({ title }) => (
  <div className={`container ${styles.guidesLayout}`}>
    <aside className={styles.guidesSidebar}>
      <h4>In This Guide</h4>
      <ul className={styles.guidesToc}>
        {['Overview', 'Tools Required', 'Measuring the Rough Opening', 'Checking for Square', 'Shimming Techniques', 'Final Inspection'].map(item => (
          <li key={item}><ChevronRight size={12} />{item}</li>
        ))}
      </ul>
    </aside>
    <div className={styles.guidesContent}>
      <div className={styles.guideStep}>
        <div className={styles.guideStepNum}>01</div>
        <div>
          <h3>Overview</h3>
          <p>Proper measurement is the single most important step before ordering any custom door. An error of even 1⁄8 inch can result in costly re-orders or compromised weathertight performance. This guide follows Aura Millwork's certified measurement protocol used by all our installation partners.</p>
        </div>
      </div>
      <div className={styles.guideStep}>
        <div className={styles.guideStepNum}>02</div>
        <div>
          <h3>Tools Required</h3>
          <ul className={styles.toolsList}>
            {['25-ft tape measure (preferably digital)', '4-ft or 6-ft spirit level', 'Speed square or framing square', 'Pencil and notepad', 'Flashlight for recessed areas'].map(tool => (
              <li key={tool}><CheckCircle size={13} />{tool}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.guideStep}>
        <div className={styles.guideStepNum}>03</div>
        <div>
          <h3>Measuring the Rough Opening</h3>
          <p>Measure the width of the rough opening at three points: top, middle, and bottom. Record the smallest measurement — this is your controlling width. Repeat for height on left, centre, and right. Standard rough opening allowance is the door size plus 2 inches on each side and 2.5 inches on top.</p>
          <div className={styles.guideCallout}>
            <strong>Pro Tip:</strong> Always order based on the smallest dimension found, never the largest. Our team reviews your submitted measurements before production begins.
          </div>
        </div>
      </div>
      <Button variant="gold" shape="cut" icon={ArrowRight} to="/contact">Submit Your Measurements</Button>
    </div>
  </div>
);

/* ─── Dealers ─── */
const DealersContent = () => (
  <>
    <div className={`container ${styles.dealerIntro}`}>
      <div className={styles.dealerIntroCopy}>
        <span className={styles.overline}>Authorised Retailers</span>
        <h2>Find an Aura <em>Dealer Near You</em></h2>
        <p>Our network of 200+ certified dealers spans North America. Each partner is trained by Aura Millwork specialists and maintains a curated showroom with physical door samples across our most popular collections.</p>
      </div>
      <div className={styles.dealerSearchWrap}>
        <input type="text" placeholder="Enter city, province, or postal code…" className={styles.dealerInput} />
        <button className={styles.dealerSearchBtn}>Search</button>
      </div>
    </div>
    <div className={styles.mapPlaceholder}>
      <MapPin size={28} />
      <p>Interactive dealer map · Contact us for your nearest showroom</p>
    </div>
    <div className={`container ${styles.dealerPartnerCta}`}>
      <div>
        <h3>Become an Aura Partner</h3>
        <p>We selectively expand our dealer network with partners who share our commitment to quality.</p>
      </div>
      <Button variant="gold" shape="cut" icon={ArrowRight} to="/dealer-application">Apply to Become a Dealer</Button>
    </div>
  </>
);

/* ─── Forms (Dealer Application, Login, Volume Sales) ─── */
const FormsContent = ({ title }) => (
  <div className={`container ${styles.formPage}`}>
    <span className={styles.overline}>Application Form</span>
    <h2>{title}</h2>
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
    <Button variant="gold" shape="cut" icon={ArrowRight}>Submit Application</Button>
  </div>
);

/* ─── Legal ─── */
const LegalContent = ({ title }) => (
  <div className={`container ${styles.legalContent}`}>
    <p className={styles.legalMeta}>Last updated: January 2025 &nbsp;·&nbsp; Aura Millwork Ltd.</p>
    <h3>1. Introduction</h3>
    <p>This {title} applies to all users of Aura Millwork's website, products, and services. By engaging with our products or services you agree to be bound by the terms outlined here.</p>
    <h3>2. Scope</h3>
    <p>These terms govern the relationship between Aura Millwork Ltd. ("Company") and its clients, dealers, and website visitors ("Users"). The Company reserves the right to amend these terms at any time with reasonable notice provided via email to registered clients.</p>
    <h3>3. Products &amp; Orders</h3>
    <p>All product orders are subject to a signed purchase agreement. Custom orders are non-cancellable once production has commenced. Standard lead times are 8–12 weeks for custom fabrication and 4–6 weeks for in-stock configurations.</p>
    <h3>4. Limitation of Liability</h3>
    <p>The Company's liability shall not exceed the original purchase price of the goods in question. The Company is not liable for consequential, incidental, or indirect damages arising from product use or installation.</p>
    <h3>5. Governing Law</h3>
    <p>These terms are governed by the laws of British Columbia, Canada. Any disputes shall be resolved through binding arbitration in Vancouver, BC.</p>
    <div className={styles.legalContact}>
      Questions? Contact our legal team: <strong>legal@auramillwork.com</strong>
    </div>
  </div>
);

/* ─── Inspirations ─── */
const InspirationsContent = () => {
  const imgs = [imgBifold, imgFront, imgShaker, imgAbout, imgWarranty, imgGlass, imgBarn, imgFrench];
  return (
    <div className={`container ${styles.inspirationGrid}`}>
      {imgs.map((img, i) => (
        <div key={i} className={styles.inspirationItem}>
          <img src={img} alt={`Inspiration ${i + 1}`} />
          <div className={styles.inspirationOverlay}><span>View Project</span></div>
        </div>
      ))}
    </div>
  );
};

/* ─── Shared CTA strip ─── */
const CtaStrip = () => (
  <div className={styles.ctaStrip}>
    <div className={`container ${styles.ctaStripInner}`}>
      <div className={styles.ctaStripText}>
        <h3>Ready to Elevate Your Space?</h3>
        <p>Our architectural specialists are standing by to assist with your project.</p>
      </div>
      <div className={styles.ctaStripActions}>
        <Button variant="gold" shape="cut" icon={ArrowRight} to="/contact">Begin a Project</Button>
        <Button variant="outline" shape="cut" to="/products">Browse Collections</Button>
      </div>
    </div>
  </div>
);

/* ─── Main component ─── */
const GenericPage = ({ title, type }) => {
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
    <div className="page-transition-enter-active">
      <div className={styles.hero}>
        <div className={styles.heroDecor} aria-hidden="true">{title.charAt(0)}</div>
        <h1 className="fade-in-up">{title}</h1>
      </div>

      <div className={styles.pageBody}>
        {content ?? (
          <div className={`container ${styles.content}`}>
            <span className={`${styles.rustLine} fade-in-up`} />
            <p className="fade-in-up stagger-1">
              Welcome to the {title} section. At Aura Millwork, we pride ourselves on delivering not just exceptional doors, but an unparalleled service experience.
            </p>
          </div>
        )}
      </div>

      <CtaStrip />
    </div>
  );
};

export default GenericPage;
