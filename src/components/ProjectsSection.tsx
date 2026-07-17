import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import FadeIn from './FadeIn';

// ES Module Imports for Showcases to guarantee perfect bundle resolve on deployment
import imgIdeaGuntur from '../assets/images/idea_guntur_1784014775547.jpg';
import imgOmkareswarRealtors from '../assets/images/omkareswar_realtors_1784014788464.jpg';
import imgVenkateshInteriors from '../assets/images/venkatesh_interiors_1784014805288.jpg';

import imgSurgicalSuperAdmin from '../assets/images/surgical_super_admin_1784113210032.jpg';
import imgSurgicalBranchAdmin from '../assets/images/surgical_branch_admin_1784113231071.jpg';
import imgSurgicalLoginPortal from '../assets/images/surgical_login_portal_1784113252217.jpg';

import imgArshiBilling1 from '../assets/images/arshi_billing_1_1784014989537.jpg';
import imgArshiBilling2 from '../assets/images/arshi_billing_2_1784015004774.jpg';
import imgSurgicalBillingPos from '../assets/images/surgical_billing_pos_1784113267910.jpg';

import imgSurgicalWorldEcommerce from '../assets/images/surgical_world_ecommerce_1784015018669.jpg';
import imgNyraToursWebsite from '../assets/images/nyra_tours_website_1784113283163.jpg';
import imgGoogleToursCargo from '../assets/images/google_tours_cargo_1784121161356.jpg';

import imgBejawadaEducation from '../assets/images/bejawada_education_1784015225721.jpg';
import imgBejawadaAboutPage from '../assets/images/bejawada_about_page_1784121121431.jpg';
import imgBejawadaContactPage from '../assets/images/bejawada_contact_page_1784121139454.jpg';

interface ProjectItem {
  src: string;
  title: string;
  subtitle: string;
  desc: string;
}

interface Project {
  id: string;
  number: string;
  category: string;
  name: string;
  items: ProjectItem[];
}

const PROJECTS: Project[] = [
  {
    id: 'p5',
    number: '01',
    category: 'SaaS Client Management & CRM Portals',
    name: 'CRM Software',
    items: [
      {
        src: imgIdeaGuntur,
        title: 'IDEA Website & Admin',
        subtitle: 'Main Platform',
        desc: "Premier Business Association home portal with active members and chapter directories."
      },
      {
        src: imgOmkareswarRealtors,
        title: 'Omkareswar Realtors',
        subtitle: 'CRM System',
        desc: "Interactive property search engines and custom dashboard panel for real estate operations."
      },
      {
        src: imgVenkateshInteriors,
        title: 'Venkatesh Interiors',
        subtitle: 'Design Web',
        desc: "Sleek and professional interior design collections explorer paired with client query engines."
      }
    ]
  },
  {
    id: 'p8',
    number: '02',
    category: 'Warehouse & Inventory Management Suites',
    name: 'Inventory Software',
    items: [
      {
        src: imgSurgicalSuperAdmin,
        title: 'Surgical World – Super Admin',
        subtitle: 'Global Control',
        desc: "Master analytics console supervising multiple retail branch logs, total sales, and live stock charts."
      },
      {
        src: imgSurgicalBranchAdmin,
        title: 'Surgical World – Branch Admin',
        subtitle: 'Branch Control',
        desc: "Localized dashboard for branch management, featuring stock thresholds and custom alert warnings."
      },
      {
        src: imgSurgicalLoginPortal,
        title: 'Surgical World – Employee Login',
        subtitle: 'Identity Gate',
        desc: "Secure authentication interface enabling authorized personnel to access the localized store ledger."
      }
    ]
  },
  {
    id: 'p4',
    number: '03',
    category: 'Enterprise Billing & Retail POS Systems',
    name: 'Billing Software',
    items: [
      {
        src: imgArshiBilling1,
        title: 'Aarshi Naturals Counter POS',
        subtitle: 'Counter terminal',
        desc: "Modern POS cash register equipped with quick-add hotkeys and automatic subtotal calculation."
      },
      {
        src: imgArshiBilling2,
        title: 'Aarshi Naturals Billing Screen',
        subtitle: 'Billing Console',
        desc: "Dedicated operator screen showing active sales, receipt previewing, and continuous server sync."
      },
      {
        src: imgSurgicalBillingPos,
        title: 'Surgical World Billing POS',
        subtitle: 'Medical POS',
        desc: "High-volume wholesale billing layout built specifically for rapid healthcare product transactions."
      }
    ]
  },
  {
    id: 'p6',
    number: '04',
    category: 'Premium E-Commerce & Travel Portals',
    name: 'E-Commerce Websites',
    items: [
      {
        src: imgSurgicalWorldEcommerce,
        title: 'Surgical World E-commerce',
        subtitle: 'Product Portal',
        desc: "Sleek retail catalog and store layout built for medical devices distribution and direct shopping."
      },
      {
        src: imgNyraToursWebsite,
        title: 'Nyra Tours Website',
        subtitle: 'Tour Portal',
        desc: "Immersive tourism, travel packages booking, and devotional temple pilgrimage scheduling."
      },
      {
        src: imgGoogleToursCargo,
        title: 'Google Tours Travel & Cargo',
        subtitle: 'Cargo & Booking',
        desc: "High-fidelity logistics layout combining ticket booking services with robust global cargo tracking."
      }
    ]
  },
  {
    id: 'p7',
    number: '05',
    category: 'Next-Gen Education & Global Portals',
    name: 'School & Education Systems',
    items: [
      {
        src: imgBejawadaEducation,
        title: 'Bejawada Education – Home Page',
        subtitle: 'Landing Page',
        desc: "Interactive overseas study portal guiding prospective students with statistics, destinations and signups."
      },
      {
        src: imgBejawadaAboutPage,
        title: 'Bejawada Education – About Page',
        subtitle: 'Agency About',
        desc: "Comprehensive company bio, certified counselor milestones, and core values presentation."
      },
      {
        src: imgBejawadaContactPage,
        title: 'Bejawada Education – Contact Page',
        subtitle: 'Contact & Maps',
        desc: "Online inquiry dispatch form integrated with interactive maps of active study-abroad offices."
      }
    ]
  },
];

function ProjectCard({ project, index, totalCards }: { project: Project; index: number; totalCards: number; key?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll tracking to trigger scaling and rotation as the card sticky-scrolls past
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Highly professional 3D card deck stacking scroll animations:
  // When scrolled past, the card scales down, rotates backwards into depth, shifts upwards, and fades!
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.86]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.45]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, -10]);

  // Top positioning offset: index * 24px (staggered slightly to show deck depth)
  const topOffset = index * 24 + 96; 

  return (
    <div
      ref={containerRef}
      className="w-full min-h-[95vh] md:min-h-[110vh] relative flex justify-center py-8 perspective-1000"
    >
      <motion.div
        style={{
          scale,
          opacity,
          y,
          rotateX,
          top: `${topOffset}px`,
          transformStyle: 'preserve-3d',
          zIndex: index,
        }}
        className="sticky w-full max-w-none rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-orange-500/60 bg-[#121212]/95 backdrop-blur-xl p-6 sm:p-8 md:p-12 shadow-[0_0_35px_rgba(249,115,22,0.3),0_40px_80px_rgba(0,0,0,0.95)] overflow-hidden flex flex-col justify-between"
      >
        {/* Card ambient backing glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#B600A8]/5 rounded-full blur-[100px] pointer-events-none" />

        {/* Top Row Header Block */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-6 mb-8 relative z-10">
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Number */}
            <span className="font-black text-orange-500/10 text-[clamp(2.5rem,8vw,90px)] leading-none select-none font-mono">
              {project.number}
            </span>
            <div className="flex flex-col text-left">
              <span className="text-xs uppercase tracking-[0.2em] text-[#D7E2EA]/45 font-extrabold block mb-1">
                {project.category}
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase text-white tracking-tight">
                {project.name}
              </h3>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20">
            <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-[10px] uppercase tracking-wider text-orange-500 font-extrabold">3 System Snapshots</span>
          </div>
        </div>

        {/* Bottom Row - 3 Column Systems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 flex-grow relative z-10 w-full">
          {project.items.map((item, itemIdx) => (
            <div key={`${project.id}-item-${itemIdx}`} className="flex flex-col group h-full justify-between">
              {/* Image Block with Aspect Ratio and badging */}
              <div className="relative overflow-hidden aspect-[16/10] w-full rounded-[24px] sm:rounded-[28px] border border-white/10 bg-[#0C0C0C] shadow-2xl transition-all duration-500 group-hover:border-orange-500/40 group-hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]">
                <img
                  src={item.src}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                
                {/* Fine gradient screen cover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 pointer-events-none" />
              </div>

              {/* Title & metadata section directly underneath image */}
              <div className="flex flex-col text-left pt-5 flex-grow">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#D7E2EA]/30 block mb-1">
                  PRODUCTION BUILD
                </span>
                <h4 className="text-lg font-bold text-white group-hover:text-orange-500 transition-colors duration-300 tracking-tight leading-tight mb-2">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#D7E2EA]/55 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

const CLIENTS_LIST_ROW_1 = [
  "Surgical World", "Arshi Naturals", "Nyra", "Shayan's Dental", "IDEA", 
  "Merit Real Solutions", "Omkareswar", "Coffee billing", "Bejawada Overseas", 
  "SRS Furnitures", "Hindustan"
];

const CLIENTS_LIST_ROW_2 = [
  "Subharati", "GGU", "Venkatesh Interiors", "Windor Fab", "AR Fashions", 
  "Jaya Grand", "Aayushman Hospital", "Meenakshi collections", "Madhu Fashions", "Akshara"
];

export default function ProjectsSection() {
  return (
    <section
      id="projects-section"
      className="relative bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] pb-32 -mt-10 sm:-mt-12 md:-mt-14 z-30 overflow-visible w-full"
    >
      {/* Dynamic Keyframes for seamless continuous loop marquee */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes partnersMarqueeLeft {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes partnersMarqueeRight {
          0% { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        .animate-partners-left {
          display: flex;
          width: max-content;
          animation: partnersMarqueeLeft 28s linear infinite;
        }
        .animate-partners-right {
          display: flex;
          width: max-content;
          animation: partnersMarqueeRight 28s linear infinite;
        }
      `}} />

      <div className="w-full max-w-none px-6 sm:px-12 md:px-20 lg:px-28 flex flex-col">
        {/* Heading */}
        <div className="w-full text-center pt-24 pb-16 sm:pb-20 md:pb-24 overflow-hidden">
          <FadeIn delay={0} y={40} className="w-full">
            <h2 className="hero-heading font-black uppercase text-[clamp(3rem,11vw,140px)] leading-none tracking-tight">
              SHOWCASES
            </h2>
          </FadeIn>
        </div>

        {/* Stacking Cards Wrapper */}
        <div className="flex flex-col gap-0 mb-32">
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              totalCards={PROJECTS.length}
            />
          ))}
        </div>

        {/* Trusted Partners / Clients Section - Continuous Moving Marquee */}
        <div id="clients-subsection" className="w-full border-t border-white/5 pt-20 overflow-hidden">
          <FadeIn delay={0} y={30}>
            <div className="text-center mb-16">
              <span className="text-xs uppercase tracking-[0.2em] text-[#D7E2EA]/40 font-bold block mb-3">
                TRUSTED PARTNERS
              </span>
              <h3 className="hero-heading font-black uppercase text-4xl sm:text-5xl md:text-6xl text-white tracking-tight">
                OUR CLIENTS
              </h3>
            </div>
          </FadeIn>

          <div className="flex flex-col gap-5 w-full relative z-10 pointer-events-auto">
            {/* ROW 1: Slides Left */}
            <div className="w-full overflow-hidden relative py-2">
              <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#0C0C0C] to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#0C0C0C] to-transparent z-10 pointer-events-none" />
              
              <div className="animate-partners-left flex flex-row gap-4">
                {/* Dual arrays for perfect infinite scroll */}
                {[...CLIENTS_LIST_ROW_1, ...CLIENTS_LIST_ROW_1, ...CLIENTS_LIST_ROW_1].map((client, idx) => (
                  <div
                    key={`partner-r1-${idx}`}
                    className="flex-shrink-0 bg-[#141414] hover:bg-[#1A1A1A] border border-orange-500/40 hover:border-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.15)] hover:shadow-[0_0_25px_rgba(249,115,22,0.45)] transition-all duration-300 rounded-2xl py-5 px-8 flex items-center justify-center text-center group h-20 min-w-[160px] sm:min-w-[200px]"
                  >
                    <span className="text-[#D7E2EA]/60 group-hover:text-white font-black uppercase tracking-wider text-xs sm:text-sm transition-colors duration-200">
                      {client}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* ROW 2: Slides Right */}
            <div className="w-full overflow-hidden relative py-2">
              <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#0C0C0C] to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#0C0C0C] to-transparent z-10 pointer-events-none" />

              <div className="animate-partners-right flex flex-row gap-4">
                {[...CLIENTS_LIST_ROW_2, ...CLIENTS_LIST_ROW_2, ...CLIENTS_LIST_ROW_2].map((client, idx) => (
                  <div
                    key={`partner-r2-${idx}`}
                    className="flex-shrink-0 bg-[#141414] hover:bg-[#1A1A1A] border border-orange-500/40 hover:border-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.15)] hover:shadow-[0_0_25px_rgba(249,115,22,0.45)] transition-all duration-300 rounded-2xl py-5 px-8 flex items-center justify-center text-center group h-20 min-w-[160px] sm:min-w-[200px]"
                  >
                    <span className="text-[#D7E2EA]/60 group-hover:text-white font-black uppercase tracking-wider text-xs sm:text-sm transition-colors duration-200">
                      {client}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
