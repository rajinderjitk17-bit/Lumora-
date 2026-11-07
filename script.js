/**
 * LUMORA® — DIGITAL TRAVEL JOURNAL & CULTURAL TICKETING BUREAU
 * Pure Vanilla JavaScript — Showcase Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* ==========================================================================
     1. MASTER DATASET: CURATED EXPERIENCES (14 RICH MULTI-CITY ENTRIES)
     ========================================================================== */
  const EXPERIENCES = [
    {
      id: '014',
      title: 'Midnight Jazz at the Attic',
      subtitle: 'Acoustic horn solos & natural concrete reverberation',
      category: 'Music & Sound',
      city: 'Chandigarh',
      coords: '30.7333° N, 76.7794° E',
      venue: 'Sector 17, Attic Vault 03',
      date: '08 NOV 2026',
      isoDate: '2026-11-08',
      time: '08:30 PM',
      weekendDay: 'saturday',
      price: 899,
      mood: 'lose-yourself',
      image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=1200&q=80',
      host: {
        name: 'Maya Kapoor',
        role: 'Independent Architect & Sonic Curator',
        bio: 'Researching mid-century acoustics in Le Corbusier concrete architecture.'
      },
      description: 'An intimate unplugged session in an untreated concrete attic with vintage ribbon microphones, wax candles, and raw saxophone improvisation. Strictly limited to 28 seats in a concentric circle.',
      inclusions: [
        'Guaranteed seat in the acoustic circle',
        'Single-origin cold brew or botanical cocktail',
        '90-minute uninterrupted live performance',
        'LUMORA verified entry passport stamp'
      ],
      availability: '8 PASSES LEFT',
      featured: false
    },
    {
      id: '042',
      title: 'The City After Dark',
      subtitle: 'A nocturnal architectural walk through hidden courtyards & vinyl dens',
      category: 'Culture & Walks',
      city: 'Chandigarh',
      coords: '30.7333° N, 76.7794° E',
      venue: 'Sector 17 Piazza Fountain (Meeting Point)',
      date: '09 NOV 2026',
      isoDate: '2026-11-09',
      time: '07:30 PM',
      weekendDay: 'sunday',
      price: 1499,
      mood: 'stay-out-late',
      image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=80',
      host: {
        name: 'Maya Kapoor & Sector Studio',
        role: 'Resident Urban Archivists',
        bio: 'Mapping the unofficial nocturnal history of planned modernist capitals.'
      },
      description: 'A three-hour guided nocturnal journey through hidden architectural alcoves, forgotten modernist pilotis, private basement darkrooms, and an intimate listening room with Japanese highball pairings.',
      inclusions: [
        'Access to 4 private gated modernist courtyards',
        'Private 40-minute vinyl listening session',
        'Two craft beverage pours & midnight snacks',
        'Archival map of Chandigarh forgotten corners'
      ],
      availability: 'ONLY 8 REMAINING',
      featured: true
    },
    {
      id: '027',
      title: 'Sound / Space: Warehouse Sessions',
      subtitle: 'Deep modular synthesizer tapestries in a former textile shed',
      category: 'Music & Sound',
      city: 'Chandigarh',
      coords: '30.7046° N, 76.7179° E',
      venue: 'Industrial Area Phase 1, Warehouse 14',
      date: '14 NOV 2026',
      isoDate: '2026-11-14',
      time: '09:00 PM',
      weekendDay: null,
      price: 1299,
      mood: 'lose-yourself',
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80',
      host: {
        name: 'Rohan Seth',
        role: 'Electronic Composer & Archivist',
        bio: 'Synthesizing vintage analog circuits with North Indian raga microtones.'
      },
      description: 'Immersive sub-bass frequencies and quadraphonic synthesizer loops surrounded by raw brick and minimal warm sodium lighting. No phones permitted on the main floor.',
      inclusions: [
        'Quadraphonic immersive listening admission',
        'Complimentary fermented elderflower tonic',
        'Artist Q&A on modular patch architecture',
        'Passport admission verification'
      ],
      availability: '18 PASSES LEFT',
      featured: false
    },
    {
      id: '019',
      title: 'Old Haveli Communal Feast',
      subtitle: 'Generational clay-pot cooking under century-old banyan trees',
      category: 'Culinary',
      city: 'Delhi',
      coords: '28.6562° N, 77.2410° E',
      venue: 'Gali Guliyan, Haveli Dharampura Lane',
      date: '08 NOV 2026',
      isoDate: '2026-11-08',
      time: '07:00 PM',
      weekendDay: 'saturday',
      price: 1850,
      mood: 'meet-someone',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
      host: {
        name: 'Aarav Mehta',
        role: 'Culinary Anthropologist',
        bio: 'Documenting the slow-cooked Mughal-Kayastha hearth traditions of Old Shahjahanabad.'
      },
      description: 'A 7-course seasonal feast prepared in unglazed earthen pots over slow hardwood coals. Gather around a single 24-seat communal teak table in a restored 18th-century inner courtyard.',
      inclusions: [
        'Seven-course ancestral seasonal menu',
        'Handmade botanical sherbets & heritage digestifs',
        'Oral history storytelling with the family cook',
        'Take-home jar of hand-ground spice blend'
      ],
      availability: '4 PASSES LEFT',
      featured: false
    },
    {
      id: '033',
      title: 'Blue Pottery & Oxide Glaze Guild',
      subtitle: 'Wheel-thrown quartz clay & cobalt brushwork with master artisans',
      category: 'Workshops',
      city: 'Jaipur',
      coords: '26.9124° N, 75.7873° E',
      venue: 'Sanganer Guild Compound, Studio 2',
      date: '07 NOV 2026',
      isoDate: '2026-11-07',
      time: '10:30 AM',
      weekendDay: 'friday',
      price: 1200,
      mood: 'make-something',
      image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=1200&q=80',
      host: {
        name: 'Ustad Ramdev Kumhar',
        role: 'Master Ceramist (5th Generation)',
        bio: 'Guardian of traditional Jaipur quartz-dough pottery techniques without clay.'
      },
      description: 'Spend an unhurried morning shaping vessels from pulverized quartz, fuller’s earth, and natural gum. Learn the delicate cobalt blue brushwork before kiln firing.',
      inclusions: [
        'All materials: quartz paste, mineral oxides & natural brushes',
        'Two completed glazed ceramic pieces kiln-fired & shipped to you',
        'Traditional masala chai & local kachoris',
        'Certificate of traditional atelier apprenticeship'
      ],
      availability: '6 PASSES LEFT',
      featured: false
    },
    {
      id: '051',
      title: 'Kala Ghoda Subterranean Vinyl Night',
      subtitle: 'Subcontinental funk, jazz & Japanese ambient on vintage McIntosh gear',
      category: 'Nightlife',
      city: 'Mumbai',
      coords: '19.0760° N, 72.8777° E',
      venue: 'Ropewalk Lane, The Sub-Basement',
      date: '07 NOV 2026',
      isoDate: '2026-11-07',
      time: '09:30 PM',
      weekendDay: 'friday',
      price: 999,
      mood: 'lose-yourself',
      image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=1200&q=80',
      host: {
        name: 'Rohan Seth',
        role: 'Analog Sound Archivist',
        bio: 'Preserving lost Indian cassette releases and private press records from 1968–1985.'
      },
      description: 'A dark, teak-paneled subterranean sanctuary. No DJ booth—just two vintage Thorens turntables, tube amplifiers, and an archivist spinning records from start to finish.',
      inclusions: [
        'Basement access & dedicated listening lounge armchair',
        'Signature smoked kokum highball or craft beer',
        'Listening guide booklet with liner notes',
        'Exclusive digital download of recorded archival tape'
      ],
      availability: '12 PASSES LEFT',
      featured: false
    },
    {
      id: '064',
      title: 'Dawn Canopy Soundwalk',
      subtitle: 'Binaural field recording & acoustic ecology under heritage rain trees',
      category: 'Culture & Walks',
      city: 'Bangalore',
      coords: '12.9716° N, 77.5946° E',
      venue: 'Cubbon Park Bandstand (North Gate)',
      date: '09 NOV 2026',
      isoDate: '2026-11-09',
      time: '05:45 AM',
      weekendDay: 'sunday',
      price: 750,
      mood: 'see-something',
      image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80',
      host: {
        name: 'Dr. Siddharth Rao',
        role: 'Bio-acoustician & Field Recordist',
        bio: 'Tracking sonic biodiversity changes in urban colonial canopy corridors.'
      },
      description: 'Walk through Bangalore’s dawn mist wearing calibrated binaural hydrophone and parabolic headsets. Listen to the forest awaken with amplified detail before the city wakes.',
      inclusions: [
        'Professional binaural audio gear loan for the walk',
        'Curated bio-acoustic identification sheet',
        'Post-walk hot filter coffee & idlis at a heritage darshini',
        'WAV master file of the dawn field recording'
      ],
      availability: '10 PASSES LEFT',
      featured: false
    },
    {
      id: '078',
      title: 'Wild Yeast & Botanical Fermentation Lab',
      subtitle: 'Spontaneous ferment sourdough, wild meads & heritage koji starters',
      category: 'Workshops',
      city: 'Bangalore',
      coords: '12.9352° N, 77.6245° E',
      venue: 'Koramangala 4th Block, The Microbial Greenhouse',
      date: '15 NOV 2026',
      isoDate: '2026-11-15',
      time: '02:00 PM',
      weekendDay: null,
      price: 1650,
      mood: 'taste-something',
      image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80',
      host: {
        name: 'Tara Varma',
        role: 'Fermentation Scientist',
        bio: 'Cultivating wild indigenous microbes for sustainable culinary preservation.'
      },
      description: 'Demystify wild fermentations. Taste 8 wild ferments, build your own active sourdough mother, inoculate pearl millet koji, and bottle a botanical sparkling soda.',
      inclusions: [
        'Tasting flight of 8 fermented condiments & wild beverages',
        'Glass jar starter kit with sourdough culture & koji inoculant',
        'Printed fermentation handbook with recipes',
        'Continuous community microbiology group access'
      ],
      availability: '5 PASSES LEFT',
      featured: false
    },
    {
      id: '083',
      title: 'Silver Gelatin Analog Darkroom Print',
      subtitle: 'From 35mm film grain to red safe-light darkroom chemical prints',
      category: 'Workshops',
      city: 'Delhi',
      coords: '28.5528° N, 77.2038° E',
      venue: 'Hauz Khas Village, Studio Grain',
      date: '14 NOV 2026',
      isoDate: '2026-11-14',
      time: '11:00 AM',
      weekendDay: null,
      price: 1800,
      mood: 'make-something',
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80',
      host: {
        name: 'Arjun Varma',
        role: 'Analog Photographer & Printer',
        bio: 'Dedicated silver gelatin master printer working with mechanical Leica optics.'
      },
      description: 'Step into the amber glow of a wet darkroom. Enlarge your negatives onto fiber-base photographic paper, mix stop baths and fixers, and wash archival prints by hand.',
      inclusions: [
        'Darkroom enlarger station with Ilford photographic chemistry',
        'Five fiber-base 8x10 prints to take home',
        'Tea, coffee, and negative inspection loupes',
        'Archival print storage portfolio sleeve'
      ],
      availability: 'LIMITED TO 4 CITIZENS',
      featured: false
    },
    {
      id: '092',
      title: 'Site-Specific Light & Glass Intervention',
      subtitle: 'Suspended prisms, lasers & spatial drone acoustics in a disused grain mill',
      category: 'Art & Design',
      city: 'Bangalore',
      coords: '12.9856° N, 77.5539° E',
      venue: 'Yeshwanthpur Industrial Shed 09',
      date: '08 NOV 2026',
      isoDate: '2026-11-08',
      time: '06:30 PM',
      weekendDay: 'saturday',
      price: 1100,
      mood: 'see-something',
      image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80',
      host: {
        name: 'Studio Parallax',
        role: 'Spatial Light Collective',
        bio: 'Designing temporary kinetic spatial optics inside post-industrial concrete shells.'
      },
      description: 'An architectural intervention using 100 hand-cast optical prisms, narrow-beam laser diodes, and ambient cello drones that shift as daylight dissolves into night.',
      inclusions: [
        'Single entry to the 2-hour sensory intervention',
        'Curator’s exhibition notes booklet',
        'Botanical infused soda or artisanal cider',
        'Access to post-show artist talk'
      ],
      availability: '22 PASSES LEFT',
      featured: false
    },
    {
      id: '105',
      title: 'Sacred Clay Tandoor & Spice Masterclass',
      subtitle: 'Pre-dawn spice grinding & breadcraft with heritage ustad bakers',
      category: 'Culinary',
      city: 'Amritsar',
      coords: '31.6340° N, 74.8723° E',
      venue: 'Katras of the Walled City, Master Hearth',
      date: '07 NOV 2026',
      isoDate: '2026-11-07',
      time: '06:30 AM',
      weekendDay: 'friday',
      price: 950,
      mood: 'taste-something',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
      host: {
        name: 'Ustad Gurpreet Singh',
        role: 'Heritage Bread Master',
        bio: 'Baking layered Amritsari kulchas using live charcoal and 80-year-old sourdough mother.'
      },
      description: 'Wake before dawn to visit centuries-old spice grinders in the walled city. Learn the delicate layering of wild pomegranate seed, roasted cumin, and slapping dough into clay pits.',
      inclusions: [
        'Hands-on baking lesson at traditional sunken clay pit',
        'Full hearty Punjabi breakfast with sweet curd & butter',
        'Custom tin of whole-seed garam masala blend',
        'Walled city walking route map'
      ],
      availability: '8 PASSES LEFT',
      featured: false
    },
    {
      id: '114',
      title: 'Desert Twilight Acoustic Raga',
      subtitle: 'Sarangi & Pakhawaj recital amidst sandstone arches at golden hour',
      category: 'Music & Sound',
      city: 'Jaipur',
      coords: '26.9855° N, 75.8513° E',
      venue: 'Amer Fort Foothills, Sandstone Baori',
      date: '15 NOV 2026',
      isoDate: '2026-11-15',
      time: '05:15 PM',
      weekendDay: null,
      price: 1600,
      mood: 'lose-yourself',
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80',
      host: {
        name: 'Pandit Harshwardhan',
        role: 'Classical Sarangi Maestro',
        bio: 'Carrying forward the rare Senia-Gwalior musical lineage in historical spaces.'
      },
      description: 'As the desert sun dips beneath the Aravalli range, acoustic strings reverberate across the geometric steps of an ancient stepwell. No artificial amplification; only pure bronze and horsehair.',
      inclusions: [
        'Reserved cushion seating on historic baori steps',
        'Warm saffron almond milk and savoury snacks',
        'Introduction to evening twilight raga structures',
        'Commemorative event booklet'
      ],
      availability: '14 PASSES LEFT',
      featured: false
    },
    {
      id: '121',
      title: 'Rooftop 35mm Silent Film & Live Score',
      subtitle: 'Restored 1920s cinema with live improvised analog synthesizer score',
      category: 'Art & Design',
      city: 'Mumbai',
      coords: '18.9322° N, 72.8317° E',
      venue: 'Ballard Estate, Maritime Rooftop Terrace',
      date: '08 NOV 2026',
      isoDate: '2026-11-08',
      time: '08:00 PM',
      weekendDay: 'saturday',
      price: 1350,
      mood: 'see-something',
      image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80',
      host: {
        name: 'Bombay Cinema Guild',
        role: 'Silent Film Preservation Collective',
        bio: 'Projecting 35mm acetate archival prints against historic Edwardian stone facades.'
      },
      description: 'Overlooking Mumbai’s illuminated shipping port, watch a restored 1926 Indian silent classic projected from real 35mm film reels, accompanied live by an improvised modular synth and sitar ensemble.',
      inclusions: [
        'Deck-chair seating on historic heritage rooftop',
        'Classic buttered popcorn & Mumbai street gin tonic',
        'Screening notes with film archive history',
        'LUMORA event passport stamp'
      ],
      availability: '9 PASSES LEFT',
      featured: false
    },
    {
      id: '135',
      title: 'Slow Conversational Salon & Wine',
      subtitle: 'Prompt cards, philosophical inquiry & minimal intervention natural wines',
      category: 'Culture & Walks',
      city: 'Delhi',
      coords: '28.5355° N, 77.2604° E',
      venue: 'Sunder Nursery, Historic Pavilion 04',
      date: '09 NOV 2026',
      isoDate: '2026-11-09',
      time: '04:30 PM',
      weekendDay: 'sunday',
      price: 1400,
      mood: 'meet-someone',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
      host: {
        name: 'Aarav Mehta & Salon Collective',
        role: 'Facilitators of Slow Dialogue',
        bio: 'Creating spaces for unhurried thought, literary reflection, and deep human connection.'
      },
      description: 'A structured gathering of 16 thoughtful strangers. Guided conversational prompt cards on memory, craft, and contemporary life, paired with three glasses of minimal-intervention natural wine.',
      inclusions: [
        'Flight of three natural minimal-intervention wines',
        'Artisanal cheese, sourdough & pickled olives board',
        'Pack of 24 curated LUMORA philosophical prompt cards',
        'Dedicated access to private heritage pavilion'
      ],
      availability: '3 PASSES LEFT',
      featured: false
    }
  ];

  /* Initial default historical passport stamps */
  const DEFAULT_PASSPORT_STAMPS = [
    {
      id: 'stamp-01',
      city: 'CHANDIGARH',
      event: 'SOUND & SPACE № 014',
      date: '14 NOV 2026',
      type: 'cobalt',
      status: 'VERIFIED ATTENDED',
      coord: '30.7333° N',
      rotation: -3
    },
    {
      id: 'stamp-02',
      city: 'DELHI',
      event: 'OLD HAVELI COMMUNE',
      date: '22 OCT 2026',
      type: 'orange',
      status: 'HEARTH REGISTERED',
      coord: '28.6139° N',
      rotation: 4
    },
    {
      id: 'stamp-03',
      city: 'JAIPUR',
      event: 'BLUE POTTERY GUILD',
      date: '04 OCT 2026',
      type: 'emerald',
      status: 'ATELIER MASTER',
      coord: '26.9124° N',
      rotation: -2
    },
    {
      id: 'stamp-04',
      city: 'MUMBAI',
      event: 'KALA GHODA VINYL NIGHT',
      date: '18 SEP 2026',
      type: 'crimson',
      status: 'ANALOG ARCHIVE',
      coord: '19.0760° N',
      rotation: 5
    },
    {
      id: 'stamp-05',
      city: 'BANGALORE',
      event: 'BOTANICAL SOUNDWALK',
      date: '30 AUG 2026',
      type: 'cobalt',
      status: 'CANOPY CITIZEN',
      coord: '12.9716° N',
      rotation: -4
    }
  ];

  /* State Management */
  let activeFilters = {
    search: '',
    city: 'all',
    category: 'all',
    date: 'all',
    price: 'all',
    mood: 'all',
    sort: 'curated'
  };

  let savedEventIds = JSON.parse(localStorage.getItem('lumora_saved_events') || '[]');
  let passportStamps = JSON.parse(localStorage.getItem('lumora_passport_stamps') || 'null');
  if (!passportStamps) {
    passportStamps = [...DEFAULT_PASSPORT_STAMPS];
    localStorage.setItem('lumora_passport_stamps', JSON.stringify(passportStamps));
  }

  let activeModalEvent = null;
  let activePassTier = 'general';
  let activeQuantity = 1;
  let currentGalleryIndex = 0;

  /* ==========================================================================
     2. NAVIGATION & STICKY CONTROLS
     ========================================================================== */
  const navbar = document.getElementById('navbar');
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileClose = document.getElementById('mobile-close');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-item');
  const navLinks = document.querySelectorAll('.nav-links .nav-link');
  const backToTopBtn = document.getElementById('back-to-top-btn');

  // Sticky header transformation on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });

  // Mobile menu open / close
  function openMobileMenu() {
    mobileMenu.classList.add('open');
    mobileMenu.setAttribute('aria-hidden', 'false');
    mobileToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    mobileMenu.classList.remove('open');
    mobileMenu.setAttribute('aria-hidden', 'true');
    mobileToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (mobileToggle) mobileToggle.addEventListener('click', openMobileMenu);
  if (mobileClose) mobileClose.addEventListener('click', closeMobileMenu);

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });

  // Mobile creator proposal trigger
  const mobileCreateTrigger = document.getElementById('mobile-create-trigger');
  if (mobileCreateTrigger) {
    mobileCreateTrigger.addEventListener('click', () => {
      closeMobileMenu();
      openCreateModal();
    });
  }

  // Back to top button
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Active navigation link tracking via IntersectionObserver
  const trackedSections = document.querySelectorAll('section[id]');
  const observerOptions = {
    root: null,
    rootMargin: '-30% 0px -50% 0px',
    threshold: 0
  };

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  trackedSections.forEach(section => navObserver.observe(section));

  /* ==========================================================================
     3. THIS WEEKEND SECTION (TICKET RAIL)
     ========================================================================== */
  const weekendRail = document.getElementById('weekend-rail');
  const weekendPrevBtn = document.getElementById('weekend-prev-btn');
  const weekendNextBtn = document.getElementById('weekend-next-btn');
  const dayFilterBtns = document.querySelectorAll('.day-filter-btn');

  function renderWeekendRail(selectedDay = 'all') {
    if (!weekendRail) return;

    let weekendEvents = EXPERIENCES.filter(exp => exp.weekendDay !== null);
    if (selectedDay !== 'all') {
      weekendEvents = weekendEvents.filter(exp => exp.weekendDay === selectedDay);
    }

    if (weekendEvents.length === 0) {
      weekendRail.innerHTML = `
        <div class="empty-rail font-mono" style="padding: 40px; color: var(--ink-muted);">
          [ NO PASSES SCHEDULED FOR THIS SELECTION ]
        </div>
      `;
      return;
    }

    weekendRail.innerHTML = weekendEvents.map((exp, index) => {
      const isSaved = savedEventIds.includes(exp.id);
      return `
        <article class="weekend-ticket-item" data-event-id="${exp.id}" tabindex="0" role="button" aria-label="View details for ${exp.title}">
          <div class="w-ticket-top">
            <img src="${exp.image}" alt="${exp.title}" class="w-ticket-img" loading="lazy">
            <span class="w-ticket-badge-num font-mono">№ ${exp.id}</span>
            <span class="w-ticket-badge-cat font-mono">${exp.category.toUpperCase()}</span>
          </div>

          <!-- Perforated Tear Divider -->
          <div class="w-ticket-perforation" aria-hidden="true">
            <div class="w-ticket-dashline"></div>
          </div>

          <div class="w-ticket-body">
            <span class="w-ticket-date font-mono">${exp.date} · ${exp.time}</span>
            <h3 class="w-ticket-title">${exp.title}</h3>
            <span class="w-ticket-loc font-mono">${exp.venue}</span>
            
            <div class="w-ticket-footer">
              <span class="w-ticket-price font-mono">FROM ₹${exp.price.toLocaleString('en-IN')}</span>
              <span class="w-ticket-btn font-mono">RESERVE PASS →</span>
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Attach click events to weekend ticket items
    const ticketItems = weekendRail.querySelectorAll('.weekend-ticket-item');
    ticketItems.forEach(item => {
      item.addEventListener('click', () => {
        const eventId = item.dataset.eventId;
        openEventModal(eventId);
      });
      item.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openEventModal(item.dataset.eventId);
        }
      });
    });
  }

  // Weekend horizontal controls
  if (weekendPrevBtn && weekendRail) {
    weekendPrevBtn.addEventListener('click', () => {
      weekendRail.scrollBy({ left: -360, behavior: 'smooth' });
    });
  }
  if (weekendNextBtn && weekendRail) {
    weekendNextBtn.addEventListener('click', () => {
      weekendRail.scrollBy({ left: 360, behavior: 'smooth' });
    });
  }

  // Day filter pills
  dayFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      dayFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderWeekendRail(btn.dataset.day);
    });
  });

  renderWeekendRail('all');

  /* ==========================================================================
     4. DISCOVER BY MOOD INTERACTIVITY
     ========================================================================== */
  const moodItems = document.querySelectorAll('.mood-item');
  const moodPreviewImg = document.getElementById('mood-preview-img');
  const moodPreviewCaption = document.getElementById('mood-preview-caption');
  const moodPreviewCount = document.getElementById('mood-preview-count');

  moodItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      moodItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');

      const imgUrl = item.dataset.img;
      const caption = item.dataset.caption;
      const count = item.dataset.count;

      if (moodPreviewImg) {
        moodPreviewImg.style.opacity = '0.5';
        setTimeout(() => {
          moodPreviewImg.src = imgUrl;
          moodPreviewImg.style.opacity = '1';
        }, 120);
      }
      if (moodPreviewCaption) moodPreviewCaption.textContent = caption;
      if (moodPreviewCount) moodPreviewCount.textContent = count.toUpperCase();
    });

    // Clicking mood filters the archive
    item.addEventListener('click', (e) => {
      const moodValue = item.dataset.mood;
      const moodSelect = document.getElementById('filter-mood');
      if (moodSelect) {
        moodSelect.value = moodValue;
        activeFilters.mood = moodValue;
        applyFiltersAndRender();
        showToast(`Mood filtered: ${item.querySelector('.mood-title').textContent}`);
      }
    });
  });

  /* ==========================================================================
     5. FEATURED EXPERIENCE EVENT TRIGGER
     ========================================================================== */
  const featuredBookBtn = document.getElementById('featured-book-btn');
  const featuredBookmarkBtn = document.getElementById('featured-bookmark-btn');

  if (featuredBookBtn) {
    featuredBookBtn.addEventListener('click', () => {
      openEventModal('042');
    });
  }

  if (featuredBookmarkBtn) {
    featuredBookmarkBtn.addEventListener('click', () => {
      toggleSaveEvent('042');
      updateBookmarkBtnState(featuredBookmarkBtn, '042');
    });
  }

  function updateBookmarkBtnState(btn, eventId) {
    if (savedEventIds.includes(eventId)) {
      btn.innerHTML = `<span>★ SAVED TO PASSPORT</span>`;
      btn.style.borderColor = 'var(--accent-orange)';
      btn.style.color = 'var(--accent-orange)';
    } else {
      btn.innerHTML = `<span>★ SAVE TO PASSPORT</span>`;
      btn.style.borderColor = '';
      btn.style.color = '';
    }
  }

  /* ==========================================================================
     6. CITY EXPLORER & MAP INTERACTION
     ========================================================================== */
  const cityCards = document.querySelectorAll('.city-card');
  const mapPins = document.querySelectorAll('.map-pin');
  const mapTelemetry = document.getElementById('map-telemetry');

  const CITY_COORDS = {
    Chandigarh: '30.7333° N / 76.7794° E',
    Delhi: '28.6139° N / 77.2090° E',
    Mumbai: '19.0760° N / 72.8777° E',
    Bangalore: '12.9716° N / 77.5946° E',
    Jaipur: '26.9124° N / 75.7873° E',
    Amritsar: '31.6340° N / 74.8723° E'
  };

  function selectCity(cityName, triggerFilter = true) {
    // Update city cards
    cityCards.forEach(card => {
      if (card.dataset.city.toLowerCase() === cityName.toLowerCase()) {
        card.classList.add('active');
        card.setAttribute('aria-selected', 'true');
        card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      } else {
        card.classList.remove('active');
        card.setAttribute('aria-selected', 'false');
      }
    });

    // Update map pins
    mapPins.forEach(pin => {
      if (pin.dataset.city.toLowerCase() === cityName.toLowerCase()) {
        pin.classList.add('active');
      } else {
        pin.classList.remove('active');
      }
    });

    // Update telemetry bar
    if (mapTelemetry && CITY_COORDS[cityName]) {
      mapTelemetry.textContent = `ACTIVE GRID: ${cityName.toUpperCase()} · ${CITY_COORDS[cityName]}`;
    }

    // Optionally apply filter to archive
    if (triggerFilter) {
      const citySelect = document.getElementById('filter-city');
      if (citySelect) {
        citySelect.value = cityName;
        activeFilters.city = cityName;
        applyFiltersAndRender();
        showToast(`Base city set to: ${cityName}`);
      }
    }
  }

  cityCards.forEach(card => {
    card.addEventListener('click', () => {
      const cityName = card.dataset.city;
      selectCity(cityName, true);
      // Smooth scroll down to experiences archive
      const experiencesSec = document.getElementById('experiences');
      if (experiencesSec) {
        experiencesSec.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  mapPins.forEach(pin => {
    pin.addEventListener('click', () => {
      const cityName = pin.dataset.city;
      selectCity(cityName, true);
    });
  });

  // Footer city links
  const footerCityLinks = document.querySelectorAll('[data-footer-city]');
  footerCityLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const city = link.dataset.footerCity;
      selectCity(city, true);
      const expSec = document.getElementById('experiences');
      if (expSec) expSec.scrollIntoView({ behavior: 'smooth' });
    });
  });

  /* ==========================================================================
     7. SMART DISCOVERY FILTER & MASTER EVENT LISTING
     ========================================================================== */
  const eventList = document.getElementById('event-list');
  const resultsCount = document.getElementById('results-count');
  const activePillsWrap = document.getElementById('active-pills-wrap');
  const emptyState = document.getElementById('empty-state');
  const resetFiltersBtn = document.getElementById('reset-filters-btn');
  const emptyResetBtn = document.getElementById('empty-reset-btn');

  // Input & Select Elements
  const searchInput = document.getElementById('event-search');
  const searchClearBtn = document.getElementById('search-clear');
  const filterCity = document.getElementById('filter-city');
  const filterCategory = document.getElementById('filter-category');
  const filterDate = document.getElementById('filter-date');
  const filterPrice = document.getElementById('filter-price');
  const filterMood = document.getElementById('filter-mood');
  const filterSort = document.getElementById('event-sort');

  function applyFiltersAndRender() {
    let filtered = [...EXPERIENCES];

    // Search query filter
    const query = activeFilters.search.trim().toLowerCase();
    if (query) {
      filtered = filtered.filter(exp => 
        exp.title.toLowerCase().includes(query) ||
        exp.subtitle.toLowerCase().includes(query) ||
        exp.city.toLowerCase().includes(query) ||
        exp.category.toLowerCase().includes(query) ||
        exp.venue.toLowerCase().includes(query) ||
        exp.description.toLowerCase().includes(query) ||
        exp.host.name.toLowerCase().includes(query)
      );
    }

    // City filter
    if (activeFilters.city !== 'all') {
      filtered = filtered.filter(exp => exp.city.toLowerCase() === activeFilters.city.toLowerCase());
    }

    // Category filter
    if (activeFilters.category !== 'all') {
      filtered = filtered.filter(exp => exp.category.toLowerCase() === activeFilters.category.toLowerCase());
    }

    // Date filter
    if (activeFilters.date !== 'all') {
      if (activeFilters.date === 'weekend') {
        filtered = filtered.filter(exp => exp.weekendDay !== null);
      } else if (activeFilters.date === '7days') {
        filtered = filtered.filter(exp => ['07 NOV', '08 NOV', '09 NOV', '14 NOV', '15 NOV'].some(d => exp.date.includes(d)));
      }
    }

    // Price filter
    if (activeFilters.price !== 'all') {
      if (activeFilters.price === 'under1000') {
        filtered = filtered.filter(exp => exp.price < 1000);
      } else if (activeFilters.price === '1000to2000') {
        filtered = filtered.filter(exp => exp.price >= 1000 && exp.price <= 2000);
      } else if (activeFilters.price === 'above2000') {
        filtered = filtered.filter(exp => exp.price > 2000);
      }
    }

    // Mood filter
    if (activeFilters.mood !== 'all') {
      filtered = filtered.filter(exp => exp.mood === activeFilters.mood);
    }

    // Sorting
    if (activeFilters.sort === 'price-asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (activeFilters.sort === 'price-desc') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (activeFilters.sort === 'date-asc') {
      filtered.sort((a, b) => a.isoDate.localeCompare(b.isoDate));
    }

    // Render results
    renderEventList(filtered);
    updateFilterPills();
  }

  function renderEventList(events) {
    if (!eventList) return;

    if (resultsCount) resultsCount.textContent = events.length;

    if (events.length === 0) {
      eventList.innerHTML = '';
      if (emptyState) emptyState.style.display = 'block';
      return;
    }

    if (emptyState) emptyState.style.display = 'none';

    eventList.innerHTML = events.map((exp, index) => {
      const isAltLayout = index % 2 === 1 ? 'layout-alt' : '';
      const isSaved = savedEventIds.includes(exp.id);
      const dayPart = exp.date.split(' ')[0];
      const monthYearPart = exp.date.split(' ').slice(1).join(' ');

      return `
        <article class="event-row-card ${isAltLayout}" data-event-id="${exp.id}">
          
          <!-- Media Column -->
          <div class="card-media-col">
            <img src="${exp.image}" alt="${exp.title}" class="card-media-img" loading="lazy">
            <span class="card-num-badge font-mono">№ ${exp.id}</span>
            <span class="card-availability-badge font-mono">${exp.availability}</span>
          </div>

          <!-- Content Column -->
          <div class="card-content-col">
            <div class="card-top-meta">
              <span class="card-category font-mono">${exp.category.toUpperCase()}</span>
              <span>·</span>
              <span class="card-city font-mono">${exp.city.toUpperCase()} [${exp.coords.split(',')[0].trim()}]</span>
            </div>

            <h3 class="card-title">${exp.title}</h3>
            <p class="card-description">${exp.description}</p>

            <div class="card-details-strip">
              <span class="card-detail-item font-mono"><strong>TIME:</strong> ${exp.time}</span>
              <span class="card-detail-item font-mono"><strong>VENUE:</strong> ${exp.venue}</span>
              <span class="card-detail-item font-mono"><strong>HOST:</strong> ${exp.host.name}</span>
            </div>
          </div>

          <!-- Perforated Stub Column -->
          <div class="card-stub-col">
            <div class="stub-notch-top"></div>
            <div class="stub-notch-bot"></div>

            <div class="stub-date-stack">
              <span class="stub-date-day">${dayPart}</span>
              <span class="stub-date-month font-mono">${monthYearPart}</span>
            </div>

            <div class="stub-price-tag">
              <span class="stub-price-num font-mono">₹${exp.price.toLocaleString('en-IN')}</span>
              <span class="stub-price-label font-mono">ALL INCLUSIVE PASS</span>
            </div>

            <button type="button" class="btn-card-reserve font-mono" data-action="reserve" data-event-id="${exp.id}">
              RESERVE PASS →
            </button>

            <button type="button" class="btn-card-bookmark font-mono ${isSaved ? 'saved' : ''}" data-action="bookmark" data-event-id="${exp.id}">
              <span>★</span> <span>${isSaved ? 'SAVED' : 'SAVE PASS'}</span>
            </button>

            <div class="stub-barcode-mini font-mono" aria-hidden="true">
              ||| | || |||| | | |||
            </div>
          </div>

        </article>
      `;
    }).join('');

    // Attach card action listeners
    const reserveButtons = eventList.querySelectorAll('[data-action="reserve"]');
    reserveButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        openEventModal(btn.dataset.eventId);
      });
    });

    const bookmarkButtons = eventList.querySelectorAll('[data-action="bookmark"]');
    bookmarkButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.dataset.eventId;
        toggleSaveEvent(id);
      });
    });

    // Whole card click opens modal
    const cards = eventList.querySelectorAll('.event-row-card');
    cards.forEach(card => {
      card.addEventListener('click', () => {
        openEventModal(card.dataset.eventId);
      });
    });
  }

  function updateFilterPills() {
    if (!activePillsWrap) return;
    const pills = [];

    if (activeFilters.search) {
      pills.push({ type: 'search', label: `Search: "${activeFilters.search}"` });
    }
    if (activeFilters.city !== 'all') {
      pills.push({ type: 'city', label: `City: ${activeFilters.city}` });
    }
    if (activeFilters.category !== 'all') {
      pills.push({ type: 'category', label: `Discipline: ${activeFilters.category}` });
    }
    if (activeFilters.date !== 'all') {
      pills.push({ type: 'date', label: `Time: ${activeFilters.date}` });
    }
    if (activeFilters.price !== 'all') {
      pills.push({ type: 'price', label: `Valuation: ${activeFilters.price}` });
    }
    if (activeFilters.mood !== 'all') {
      pills.push({ type: 'mood', label: `Mood: ${activeFilters.mood}` });
    }

    activePillsWrap.innerHTML = pills.map(p => `
      <span class="filter-tag-pill font-mono">
        ${p.label}
        <button type="button" data-remove-filter="${p.type}" aria-label="Remove filter">✕</button>
      </span>
    `).join('');

    // Remove single filter pill
    activePillsWrap.querySelectorAll('[data-remove-filter]').forEach(btn => {
      btn.addEventListener('click', () => {
        const type = btn.dataset.removeFilter;
        if (type === 'search') {
          activeFilters.search = '';
          if (searchInput) searchInput.value = '';
          if (searchClearBtn) searchClearBtn.style.display = 'none';
        } else if (type === 'city') {
          activeFilters.city = 'all';
          if (filterCity) filterCity.value = 'all';
        } else if (type === 'category') {
          activeFilters.category = 'all';
          if (filterCategory) filterCategory.value = 'all';
        } else if (type === 'date') {
          activeFilters.date = 'all';
          if (filterDate) filterDate.value = 'all';
        } else if (type === 'price') {
          activeFilters.price = 'all';
          if (filterPrice) filterPrice.value = 'all';
        } else if (type === 'mood') {
          activeFilters.mood = 'all';
          if (filterMood) filterMood.value = 'all';
        }
        applyFiltersAndRender();
      });
    });
  }

  function resetAllFilters() {
    activeFilters = {
      search: '',
      city: 'all',
      category: 'all',
      date: 'all',
      price: 'all',
      mood: 'all',
      sort: 'curated'
    };

    if (searchInput) searchInput.value = '';
    if (searchClearBtn) searchClearBtn.style.display = 'none';
    if (filterCity) filterCity.value = 'all';
    if (filterCategory) filterCategory.value = 'all';
    if (filterDate) filterDate.value = 'all';
    if (filterPrice) filterPrice.value = 'all';
    if (filterMood) filterMood.value = 'all';
    if (filterSort) filterSort.value = 'curated';

    // Deselect city cards
    cityCards.forEach(c => c.classList.remove('active'));
    mapPins.forEach(p => p.classList.remove('active'));

    applyFiltersAndRender();
    showToast('Filters reset to default ledger.');
  }

  // Filter input event listeners
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      activeFilters.search = e.target.value;
      if (searchClearBtn) {
        searchClearBtn.style.display = e.target.value ? 'block' : 'none';
      }
      applyFiltersAndRender();
    });
  }

  if (searchClearBtn) {
    searchClearBtn.addEventListener('click', () => {
      searchInput.value = '';
      activeFilters.search = '';
      searchClearBtn.style.display = 'none';
      applyFiltersAndRender();
    });
  }

  if (filterCity) {
    filterCity.addEventListener('change', (e) => {
      activeFilters.city = e.target.value;
      if (e.target.value !== 'all') {
        selectCity(e.target.value, false);
      }
      applyFiltersAndRender();
    });
  }

  if (filterCategory) {
    filterCategory.addEventListener('change', (e) => {
      activeFilters.category = e.target.value;
      applyFiltersAndRender();
    });
  }

  if (filterDate) {
    filterDate.addEventListener('change', (e) => {
      activeFilters.date = e.target.value;
      applyFiltersAndRender();
    });
  }

  if (filterPrice) {
    filterPrice.addEventListener('change', (e) => {
      activeFilters.price = e.target.value;
      applyFiltersAndRender();
    });
  }

  if (filterMood) {
    filterMood.addEventListener('change', (e) => {
      activeFilters.mood = e.target.value;
      applyFiltersAndRender();
    });
  }

  if (filterSort) {
    filterSort.addEventListener('change', (e) => {
      activeFilters.sort = e.target.value;
      applyFiltersAndRender();
    });
  }

  if (resetFiltersBtn) resetFiltersBtn.addEventListener('click', resetAllFilters);
  if (emptyResetBtn) emptyResetBtn.addEventListener('click', resetAllFilters);

  // Initial render of events
  applyFiltersAndRender();

  /* ==========================================================================
     8. EVENT DETAILS & 4-STEP BOOKING MODAL
     ========================================================================== */
  const eventModalBackdrop = document.getElementById('event-modal-backdrop');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  // Modal elements
  const modalEventImg = document.getElementById('modal-event-img');
  const modalEventBadge = document.getElementById('modal-event-badge');
  const modalHostName = document.getElementById('modal-host-name');
  const modalHostBio = document.getElementById('modal-host-bio');
  const modalEventCity = document.getElementById('modal-event-city');
  const modalEventCoords = document.getElementById('modal-event-coords');
  const modalEventCategory = document.getElementById('modal-event-category');
  const modalEventTitle = document.getElementById('modal-event-title');
  const modalEventDate = document.getElementById('modal-event-date');
  const modalEventTime = document.getElementById('modal-event-time');
  const modalEventVenue = document.getElementById('modal-event-venue');
  const modalEventBaseprice = document.getElementById('modal-event-baseprice');
  const modalEventDesc = document.getElementById('modal-event-desc');
  const modalInclusionsList = document.getElementById('modal-inclusions-list');

  // Step containers & pills
  const step1 = document.getElementById('book-step-1');
  const step2 = document.getElementById('book-step-2');
  const step3 = document.getElementById('book-step-3');
  const stepSuccess = document.getElementById('book-step-success');

  const pillStep1 = document.getElementById('pill-step-1');
  const pillStep2 = document.getElementById('pill-step-2');
  const pillStep3 = document.getElementById('pill-step-3');

  // Step 1 Controls
  const passTierCards = document.querySelectorAll('.pass-tier-card');
  const tierPriceGen = document.getElementById('tier-price-gen');
  const tierPricePrem = document.getElementById('tier-price-prem');
  const tierPriceVip = document.getElementById('tier-price-vip');
  const qtyMinus = document.getElementById('qty-minus');
  const qtyPlus = document.getElementById('qty-plus');
  const qtyVal = document.getElementById('qty-val');
  const gotoStep2Btn = document.getElementById('goto-step-2');

  // Step 2 Controls
  const attendeeNameInput = document.getElementById('attendee-name');
  const attendeeEmailInput = document.getElementById('attendee-email');
  const attendeePhoneInput = document.getElementById('attendee-phone');
  const attendeeNotesInput = document.getElementById('attendee-notes');
  const backToStep1Btn = document.getElementById('back-to-step-1');
  const gotoStep3Btn = document.getElementById('goto-step-3');

  // Step 3 Controls
  const sumEventName = document.getElementById('sum-event-name');
  const sumPassType = document.getElementById('sum-pass-type');
  const sumPassDate = document.getElementById('sum-pass-date');
  const sumSubtotal = document.getElementById('sum-subtotal');
  const sumFee = document.getElementById('sum-fee');
  const sumTotal = document.getElementById('sum-total');
  const backToStep2Btn = document.getElementById('back-to-step-2');
  const btnConfirmBooking = document.getElementById('btn-confirm-booking');

  // Step 4 (Success) Controls
  const ticketGeneratedId = document.getElementById('ticket-generated-id');
  const ticketCityCoord = document.getElementById('ticket-city-coord');
  const ticketEventTitle = document.getElementById('ticket-event-title');
  const ticketAttendeeName = document.getElementById('ticket-attendee-name');
  const ticketPassTier = document.getElementById('ticket-pass-tier');
  const ticketDateTime = document.getElementById('ticket-date-time');
  const ticketTotalPaid = document.getElementById('ticket-total-paid');
  const jumpToPassportBtn = document.getElementById('jump-to-passport-btn');
  const btnDoneModal = document.getElementById('btn-done-modal');

  function openEventModal(eventId) {
    const exp = EXPERIENCES.find(e => e.id === eventId);
    if (!exp) return;

    activeModalEvent = exp;
    activePassTier = 'general';
    activeQuantity = 1;

    // Reset step states
    setBookingStep(1);

    // Populate modal content
    if (modalEventImg) modalEventImg.src = exp.image;
    if (modalEventBadge) modalEventBadge.textContent = `№ ${exp.id} · ${exp.availability}`;
    if (modalHostName) modalHostName.textContent = exp.host.name;
    if (modalHostBio) modalHostBio.textContent = exp.host.bio;
    if (modalEventCity) modalEventCity.textContent = exp.city.toUpperCase();
    if (modalEventCoords) modalEventCoords.textContent = exp.coords;
    if (modalEventCategory) modalEventCategory.textContent = exp.category.toUpperCase();
    if (modalEventTitle) modalEventTitle.textContent = exp.title;
    if (modalEventDate) modalEventDate.textContent = exp.date;
    if (modalEventTime) modalEventTime.textContent = exp.time;
    if (modalEventVenue) modalEventVenue.textContent = exp.venue;
    if (modalEventBaseprice) modalEventBaseprice.textContent = `From ₹${exp.price.toLocaleString('en-IN')}`;
    if (modalEventDesc) modalEventDesc.textContent = exp.description;

    if (modalInclusionsList) {
      modalInclusionsList.innerHTML = exp.inclusions.map(inc => `<li>${inc}</li>`).join('');
    }

    // Set prices for tiers
    const basePrice = exp.price;
    const premPrice = Math.round(basePrice * 1.6);
    const vipPrice = Math.round(basePrice * 2.8);

    if (tierPriceGen) tierPriceGen.textContent = `₹${basePrice.toLocaleString('en-IN')}`;
    if (tierPricePrem) tierPricePrem.textContent = `₹${premPrice.toLocaleString('en-IN')}`;
    if (tierPriceVip) tierPriceVip.textContent = `₹${vipPrice.toLocaleString('en-IN')}`;

    passTierCards.forEach(card => {
      const tier = card.dataset.tier;
      if (tier === 'general') {
        card.dataset.price = basePrice;
        card.classList.add('selected');
      } else if (tier === 'premium') {
        card.dataset.price = premPrice;
        card.classList.remove('selected');
      } else if (tier === 'vip') {
        card.dataset.price = vipPrice;
        card.classList.remove('selected');
      }
    });

    if (qtyVal) qtyVal.textContent = activeQuantity;

    // Show modal
    eventModalBackdrop.classList.add('open');
    eventModalBackdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeEventModal() {
    eventModalBackdrop.classList.remove('open');
    eventModalBackdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeEventModal);
  if (btnDoneModal) btnDoneModal.addEventListener('click', closeEventModal);

  eventModalBackdrop.addEventListener('click', (e) => {
    if (e.target === eventModalBackdrop) {
      closeEventModal();
    }
  });

  // Booking step transition helper
  function setBookingStep(stepNumber) {
    [step1, step2, step3, stepSuccess].forEach(s => s && s.classList.remove('active'));
    [pillStep1, pillStep2, pillStep3].forEach(p => p && p.classList.remove('active'));

    if (stepNumber === 1) {
      if (step1) step1.classList.add('active');
      if (pillStep1) pillStep1.classList.add('active');
    } else if (stepNumber === 2) {
      if (step2) step2.classList.add('active');
      if (pillStep2) pillStep2.classList.add('active');
    } else if (stepNumber === 3) {
      if (step3) step3.classList.add('active');
      if (pillStep3) pillStep3.classList.add('active');
      populateOrderSummary();
    } else if (stepNumber === 4) {
      if (stepSuccess) stepSuccess.classList.add('active');
    }
  }

  // Tier Card selection
  passTierCards.forEach(card => {
    card.addEventListener('click', () => {
      passTierCards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      activePassTier = card.dataset.tier;
    });
  });

  // Quantity stepper
  if (qtyMinus) {
    qtyMinus.addEventListener('click', () => {
      if (activeQuantity > 1) {
        activeQuantity--;
        qtyVal.textContent = activeQuantity;
      }
    });
  }

  if (qtyPlus) {
    qtyPlus.addEventListener('click', () => {
      if (activeQuantity < 8) {
        activeQuantity++;
        qtyVal.textContent = activeQuantity;
      } else {
        showToast('Maximum 8 passes allowed per citizen booking.');
      }
    });
  }

  // Step 1 -> Step 2
  if (gotoStep2Btn) {
    gotoStep2Btn.addEventListener('click', () => {
      setBookingStep(2);
    });
  }

  // Step 2 -> Step 1
  if (backToStep1Btn) {
    backToStep1Btn.addEventListener('click', () => {
      setBookingStep(1);
    });
  }

  // Step 2 -> Step 3 (Validation)
  if (gotoStep3Btn) {
    gotoStep3Btn.addEventListener('click', () => {
      const name = attendeeNameInput ? attendeeNameInput.value.trim() : '';
      const email = attendeeEmailInput ? attendeeEmailInput.value.trim() : '';
      const phone = attendeePhoneInput ? attendeePhoneInput.value.trim() : '';

      if (!name) {
        showToast('Please enter your full name for ticket issuance.');
        attendeeNameInput.focus();
        return;
      }
      if (!email || !email.includes('@')) {
        showToast('Please enter a valid email address.');
        attendeeEmailInput.focus();
        return;
      }
      if (!phone || phone.length < 8) {
        showToast('Please enter your phone number.');
        attendeePhoneInput.focus();
        return;
      }

      setBookingStep(3);
    });
  }

  // Step 3 -> Step 2
  if (backToStep2Btn) {
    backToStep2Btn.addEventListener('click', () => {
      setBookingStep(2);
    });
  }

  // Order summary calculator
  function populateOrderSummary() {
    if (!activeModalEvent) return;

    let tierPrice = activeModalEvent.price;
    let tierNameLabel = 'GENERAL ADMISSION';

    if (activePassTier === 'premium') {
      tierPrice = Math.round(activeModalEvent.price * 1.6);
      tierNameLabel = 'PREMIUM FRONT ROW';
    } else if (activePassTier === 'vip') {
      tierPrice = Math.round(activeModalEvent.price * 2.8);
      tierNameLabel = "VIP COLLECTOR'S PASS";
    }

    const subtotal = tierPrice * activeQuantity;
    const fee = Math.round(subtotal * 0.05);
    const grandTotal = subtotal + fee;

    if (sumEventName) sumEventName.textContent = activeModalEvent.title;
    if (sumPassType) sumPassType.textContent = `${tierNameLabel} (×${activeQuantity})`;
    if (sumPassDate) sumPassDate.textContent = `${activeModalEvent.date} · ${activeModalEvent.time}`;
    if (sumSubtotal) sumSubtotal.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
    if (sumFee) sumFee.textContent = `₹${fee.toLocaleString('en-IN')}`;
    if (sumTotal) sumTotal.textContent = `₹${grandTotal.toLocaleString('en-IN')}`;
  }

  // CONFIRM BOOKING & SIMULATED CHECKOUT
  if (btnConfirmBooking) {
    btnConfirmBooking.addEventListener('click', () => {
      const generatedCode = 'LMR-' + Math.floor(10000 + Math.random() * 90000);
      const name = attendeeNameInput ? attendeeNameInput.value.trim() : 'Kabir Mehra';

      let tierPrice = activeModalEvent.price;
      let tierLabel = 'GENERAL ADMISSION';
      if (activePassTier === 'premium') {
        tierPrice = Math.round(activeModalEvent.price * 1.6);
        tierLabel = 'PREMIUM FRONT ROW';
      } else if (activePassTier === 'vip') {
        tierPrice = Math.round(activeModalEvent.price * 2.8);
        tierLabel = "VIP COLLECTOR'S PASS";
      }

      const totalPaid = Math.round(tierPrice * activeQuantity * 1.05);

      // Populate Success Pass
      if (ticketGeneratedId) ticketGeneratedId.textContent = generatedCode;
      if (ticketCityCoord) ticketCityCoord.textContent = `${activeModalEvent.city.toUpperCase()} · ${activeModalEvent.coords}`;
      if (ticketEventTitle) ticketEventTitle.textContent = activeModalEvent.title;
      if (ticketAttendeeName) ticketAttendeeName.textContent = name.toUpperCase();
      if (ticketPassTier) ticketPassTier.textContent = `${tierLabel} (×${activeQuantity})`;
      if (ticketDateTime) ticketDateTime.textContent = `${activeModalEvent.date} · ${activeModalEvent.time}`;
      if (ticketTotalPaid) ticketTotalPaid.textContent = `₹${totalPaid.toLocaleString('en-IN')}`;

      // Update Passport Bearer Name if user provided one
      const passportBearer = document.getElementById('passport-holder-name');
      if (passportBearer && name) {
        passportBearer.textContent = name.toUpperCase();
      }

      // Issue and add a new dynamic passport stamp!
      addPassportStampFromBooking(activeModalEvent, generatedCode);

      // Move to success step
      setBookingStep(4);
      showToast('Booking confirmed! Official passport stamp issued.');
    });
  }

  // Jump from success to passport section
  if (jumpToPassportBtn) {
    jumpToPassportBtn.addEventListener('click', () => {
      closeEventModal();
      const passportSec = document.getElementById('passport');
      if (passportSec) {
        passportSec.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  /* ==========================================================================
     9. DIGITAL PASSPORT ARCHIVE & STAMP ENGINE
     ========================================================================== */
  const passportStampsGrid = document.getElementById('passport-stamps-grid');
  const passportStampCounter = document.getElementById('passport-stamp-counter');
  const passportCountBadge = document.getElementById('passport-count-badge');
  const mobilePassportCount = document.getElementById('mobile-passport-count');
  const demoStampBtn = document.getElementById('demo-stamp-btn');
  const clearStampsBtn = document.getElementById('clear-stamps-btn');

  function renderPassportStamps() {
    if (!passportStampsGrid) return;

    passportStampsGrid.innerHTML = passportStamps.map(stamp => {
      const typeClass = stamp.type ? `stamp-${stamp.type}` : 'stamp-cobalt';
      const rot = stamp.rotation || 0;

      return `
        <div class="passport-stamp-tile ${typeClass} ${stamp.isNew ? 'stamp-new-booked' : ''}" style="transform: rotate(${rot}deg);" data-stamp-id="${stamp.id}" tabindex="0" role="button" aria-label="Stamp: ${stamp.event} in ${stamp.city}">
          <span class="stamp-city-line">${stamp.city} · ${stamp.coord || 'GRID'}</span>
          <h4 class="stamp-event-name">${stamp.event}</h4>
          <span class="stamp-date-line font-mono">${stamp.date}</span>
          <span class="stamp-status-badge font-mono">${stamp.status || 'VERIFIED'}</span>
        </div>
      `;
    }).join('');

    const count = passportStamps.length;
    if (passportStampCounter) passportStampCounter.textContent = count;
    if (passportCountBadge) passportCountBadge.textContent = count;
    if (mobilePassportCount) mobilePassportCount.textContent = `${count} STAMPS`;

    // Click stamp to view notes
    passportStampsGrid.querySelectorAll('.passport-stamp-tile').forEach(tile => {
      tile.addEventListener('click', () => {
        const title = tile.querySelector('.stamp-event-name').textContent;
        const city = tile.querySelector('.stamp-city-line').textContent;
        showToast(`Inspecting passport record: ${title} (${city})`);
      });
    });
  }

  function addPassportStampFromBooking(event, bookingId) {
    const randomRot = Math.floor(Math.random() * 8) - 4; // -4 to +4 deg
    const newStamp = {
      id: 'stamp-' + Date.now(),
      city: event.city.toUpperCase(),
      event: event.title.toUpperCase(),
      date: event.date,
      type: 'cobalt',
      status: `CONFIRMED [${bookingId}]`,
      coord: event.coords.split(',')[0].trim(),
      rotation: randomRot,
      isNew: true
    };

    passportStamps.unshift(newStamp);
    localStorage.setItem('lumora_passport_stamps', JSON.stringify(passportStamps));
    renderPassportStamps();
  }

  // Demo Stamp button
  if (demoStampBtn) {
    demoStampBtn.addEventListener('click', () => {
      const sampleEvents = [
        { city: 'JAIPUR', title: 'DESERT TWILIGHT RAGA', coord: '26.9855° N', type: 'orange' },
        { city: 'DELHI', title: 'ROOFTOP SUFI SALON', coord: '28.5893° N', type: 'emerald' },
        { city: 'CHANDIGARH', title: 'CORBUSIER DARKROOM', coord: '30.7333° N', type: 'cobalt' }
      ];
      const sample = sampleEvents[Math.floor(Math.random() * sampleEvents.length)];
      const randomRot = Math.floor(Math.random() * 8) - 4;

      passportStamps.unshift({
        id: 'stamp-' + Date.now(),
        city: sample.city,
        event: sample.title,
        date: '08 NOV 2026',
        type: sample.type,
        status: 'VERIFIED ATTENDED',
        coord: sample.coord,
        rotation: randomRot,
        isNew: true
      });

      localStorage.setItem('lumora_passport_stamps', JSON.stringify(passportStamps));
      renderPassportStamps();
      showToast(`New verified stamp added to your passport: ${sample.title}`);
    });
  }

  // Reset to default stamps
  if (clearStampsBtn) {
    clearStampsBtn.addEventListener('click', () => {
      passportStamps = [...DEFAULT_PASSPORT_STAMPS];
      localStorage.setItem('lumora_passport_stamps', JSON.stringify(passportStamps));
      renderPassportStamps();
      showToast('Passport ledger reset to original 5 stamps.');
    });
  }

  renderPassportStamps();

  /* ==========================================================================
     10. "YOUR YEAR IN EXPERIENCES" ANIMATED COUNTERS
     ========================================================================== */
  const statNumbers = document.querySelectorAll('.stat-num[data-target]');
  let statsAnimated = false;

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !statsAnimated) {
        statsAnimated = true;
        statNumbers.forEach(numEl => {
          const target = parseInt(numEl.dataset.target, 10);
          animateCounter(numEl, target, 1600);
        });
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.getElementById('stats');
  if (statsSection) statsObserver.observe(statsSection);

  function animateCounter(element, target, duration) {
    let start = 0;
    const startTime = performance.now();

    function update(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out quad
      const current = Math.floor(progress * (2 - progress) * target);
      element.textContent = current < 10 ? `0${current}` : `${current}`;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        element.textContent = target < 10 ? `0${target}` : `${target}`;
      }
    }

    requestAnimationFrame(update);
  }

  /* ==========================================================================
     11. FIELD GALLERY & FULLSCREEN LIGHTBOX
     ========================================================================== */
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightboxModal = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCounter = document.getElementById('lightbox-counter');
  const lightboxMeta = document.getElementById('lightbox-meta');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxPhotog = document.getElementById('lightbox-photog');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxPrev = document.getElementById('lightbox-prev');
  const lightboxNext = document.getElementById('lightbox-next');
  const lightboxBackdrop = document.getElementById('lightbox-backdrop');

  const galleryData = Array.from(galleryItems).map(item => ({
    src: item.querySelector('img').src,
    caption: item.dataset.caption,
    city: item.dataset.city,
    coord: item.dataset.coord,
    photog: item.dataset.photog
  }));

  function openLightbox(index) {
    currentGalleryIndex = index;
    updateLightboxStage();
    lightboxModal.classList.add('open');
    lightboxModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightboxModal.classList.remove('open');
    lightboxModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function updateLightboxStage() {
    const data = galleryData[currentGalleryIndex];
    if (!data) return;

    if (lightboxImg) lightboxImg.src = data.src;
    if (lightboxCounter) {
      const curr = (currentGalleryIndex + 1).toString().padStart(2, '0');
      const tot = galleryData.length.toString().padStart(2, '0');
      lightboxCounter.textContent = `${curr} / ${tot}`;
    }
    if (lightboxMeta) lightboxMeta.textContent = `${data.city.toUpperCase()} · ${data.coord}`;
    if (lightboxCaption) lightboxCaption.textContent = data.caption;
    if (lightboxPhotog) lightboxPhotog.textContent = `PHOTOGRAPHED BY ${data.photog.toUpperCase()}`;
  }

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const idx = parseInt(item.dataset.index, 10);
      openLightbox(idx);
    });
  });

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);

  if (lightboxPrev) {
    lightboxPrev.addEventListener('click', (e) => {
      e.stopPropagation();
      currentGalleryIndex = (currentGalleryIndex - 1 + galleryData.length) % galleryData.length;
      updateLightboxStage();
    });
  }

  if (lightboxNext) {
    lightboxNext.addEventListener('click', (e) => {
      e.stopPropagation();
      currentGalleryIndex = (currentGalleryIndex + 1) % galleryData.length;
      updateLightboxStage();
    });
  }

  // Keyboard navigation for Lightbox & Modal
  document.addEventListener('keydown', (e) => {
    if (lightboxModal && lightboxModal.classList.contains('open')) {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft' && lightboxPrev) lightboxPrev.click();
      if (e.key === 'ArrowRight' && lightboxNext) lightboxNext.click();
    } else if (eventModalBackdrop && eventModalBackdrop.classList.contains('open')) {
      if (e.key === 'Escape') closeEventModal();
    } else if (savedDrawer && savedDrawer.classList.contains('open')) {
      if (e.key === 'Escape') closeSavedDrawer();
    }
  });

  /* ==========================================================================
     12. CREATOR PROPOSAL MODAL
     ========================================================================== */
  const createModalBackdrop = document.getElementById('create-modal-backdrop');
  const createModalClose = document.getElementById('create-modal-close');
  const openCreateModalBtn = document.getElementById('open-create-modal-btn');
  const creatorOpenBtn = document.getElementById('creator-open-btn');
  const creatorProposalForm = document.getElementById('creator-proposal-form');

  function openCreateModal() {
    createModalBackdrop.classList.add('open');
    createModalBackdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeCreateModal() {
    createModalBackdrop.classList.remove('open');
    createModalBackdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (openCreateModalBtn) openCreateModalBtn.addEventListener('click', openCreateModal);
  if (creatorOpenBtn) creatorOpenBtn.addEventListener('click', openCreateModal);
  if (createModalClose) createModalClose.addEventListener('click', closeCreateModal);

  createModalBackdrop.addEventListener('click', (e) => {
    if (e.target === createModalBackdrop) closeCreateModal();
  });

  if (creatorProposalForm) {
    creatorProposalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      closeCreateModal();
      showToast('Proposal submitted! Our editorial board will review within 48 hours.');
      creatorProposalForm.reset();
    });
  }

  // Filter experiences by creator
  const creatorFilterLinks = document.querySelectorAll('.creator-filter-link');
  creatorFilterLinks.forEach(link => {
    link.addEventListener('click', () => {
      const creatorName = link.dataset.creator;
      if (searchInput) searchInput.value = creatorName;
      activeFilters.search = creatorName;
      applyFiltersAndRender();
      const expSec = document.getElementById('experiences');
      if (expSec) expSec.scrollIntoView({ behavior: 'smooth' });
      showToast(`Showing experiences curated by ${creatorName}`);
    });
  });

  /* ==========================================================================
     13. TESTIMONIALS SLIDER
     ========================================================================== */
  const testSlides = document.querySelectorAll('.testimonial-slide');
  const testPrev = document.getElementById('test-prev');
  const testNext = document.getElementById('test-next');
  const testCounter = document.getElementById('test-counter');
  let currentTestIndex = 0;
  let testInterval = null;

  function setTestimonialSlide(index) {
    testSlides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
    currentTestIndex = index;
    if (testCounter) {
      testCounter.textContent = `0${index + 1} / 0${testSlides.length}`;
    }
  }

  function nextTestimonial() {
    const nextIdx = (currentTestIndex + 1) % testSlides.length;
    setTestimonialSlide(nextIdx);
  }

  function prevTestimonial() {
    const prevIdx = (currentTestIndex - 1 + testSlides.length) % testSlides.length;
    setTestimonialSlide(prevIdx);
  }

  if (testNext) testNext.addEventListener('click', () => { nextTestimonial(); resetTestTimer(); });
  if (testPrev) testPrev.addEventListener('click', () => { prevTestimonial(); resetTestTimer(); });

  function resetTestTimer() {
    clearInterval(testInterval);
    testInterval = setInterval(nextTestimonial, 7000);
  }

  testInterval = setInterval(nextTestimonial, 7000);

  /* ==========================================================================
     14. SAVED / BOOKMARKS DRAWER SYSTEM
     ========================================================================== */
  const savedDrawer = document.getElementById('saved-drawer');
  const savedBackdrop = document.getElementById('saved-backdrop');
  const openSavedBtn = document.getElementById('open-saved-btn');
  const closeSavedDrawerBtn = document.getElementById('close-saved-drawer');
  const savedDrawerContent = document.getElementById('saved-drawer-content');
  const savedCountBadge = document.getElementById('saved-count-badge');
  const savedDrawerCount = document.getElementById('saved-drawer-count');
  const clearAllSavedBtn = document.getElementById('clear-all-saved');
  const footerSaveTrigger = document.getElementById('footer-save-trigger');

  function openSavedDrawer() {
    renderSavedDrawer();
    savedDrawer.classList.add('open');
    savedBackdrop.classList.add('open');
    savedDrawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeSavedDrawer() {
    savedDrawer.classList.remove('open');
    savedBackdrop.classList.remove('open');
    savedDrawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (openSavedBtn) openSavedBtn.addEventListener('click', openSavedDrawer);
  if (closeSavedDrawerBtn) closeSavedDrawerBtn.addEventListener('click', closeSavedDrawer);
  if (savedBackdrop) savedBackdrop.addEventListener('click', closeSavedDrawer);
  if (footerSaveTrigger) {
    footerSaveTrigger.addEventListener('click', (e) => {
      e.preventDefault();
      openSavedDrawer();
    });
  }

  function toggleSaveEvent(eventId) {
    const index = savedEventIds.indexOf(eventId);
    const exp = EXPERIENCES.find(e => e.id === eventId);
    const title = exp ? exp.title : 'Experience';

    if (index > -1) {
      savedEventIds.splice(index, 1);
      showToast(`Removed from saved ledger: ${title}`);
    } else {
      savedEventIds.push(eventId);
      showToast(`★ Added to saved experiences: ${title}`);
    }

    localStorage.setItem('lumora_saved_events', JSON.stringify(savedEventIds));
    updateSavedCounters();
    applyFiltersAndRender();
    renderWeekendRail();
  }

  function updateSavedCounters() {
    const count = savedEventIds.length;
    if (savedCountBadge) savedCountBadge.textContent = count;
    if (savedDrawerCount) savedDrawerCount.textContent = `${count} ${count === 1 ? 'item' : 'items'} saved`;
  }

  function renderSavedDrawer() {
    if (!savedDrawerContent) return;

    if (savedEventIds.length === 0) {
      savedDrawerContent.innerHTML = `
        <div class="drawer-empty-state">
          <div class="drawer-empty-stamp">[ LEDGER BLANK ]</div>
          <p>No experiences currently saved. Bookmark any event from the archive to access it quickly here.</p>
        </div>
      `;
      return;
    }

    const savedList = EXPERIENCES.filter(exp => savedEventIds.includes(exp.id));

    savedDrawerContent.innerHTML = savedList.map(exp => `
      <div class="saved-item-card">
        <img src="${exp.image}" alt="${exp.title}" class="saved-thumb">
        <div class="saved-info">
          <h4 class="saved-info-title">${exp.title}</h4>
          <div class="saved-info-meta font-mono">${exp.city} · ${exp.date}</div>
          <div class="saved-info-price font-mono">₹${exp.price.toLocaleString('en-IN')}</div>
        </div>
        <div class="saved-actions">
          <button type="button" class="btn-saved-book" data-book-saved="${exp.id}">RESERVE</button>
          <button type="button" class="btn-saved-remove font-mono" data-remove-saved="${exp.id}">REMOVE</button>
        </div>
      </div>
    `).join('');

    // Attach listeners
    savedDrawerContent.querySelectorAll('[data-book-saved]').forEach(btn => {
      btn.addEventListener('click', () => {
        closeSavedDrawer();
        openEventModal(btn.dataset.bookSaved);
      });
    });

    savedDrawerContent.querySelectorAll('[data-remove-saved]').forEach(btn => {
      btn.addEventListener('click', () => {
        toggleSaveEvent(btn.dataset.removeSaved);
        renderSavedDrawer();
      });
    });
  }

  if (clearAllSavedBtn) {
    clearAllSavedBtn.addEventListener('click', () => {
      savedEventIds = [];
      localStorage.setItem('lumora_saved_events', JSON.stringify(savedEventIds));
      updateSavedCounters();
      renderSavedDrawer();
      applyFiltersAndRender();
      showToast('Cleared all saved experiences.');
    });
  }

  updateSavedCounters();

  /* ==========================================================================
     15. TOAST NOTIFICATION UTILITY
     ========================================================================== */
  const toastContainer = document.getElementById('toast-container');

  function showToast(message) {
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <span class="toast-icon">●</span>
      <span class="toast-text">${message}</span>
    `;

    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('toast-leave');
      setTimeout(() => {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 300);
    }, 3400);
  }

  /* ==========================================================================
     16. CUSTOM CURSOR FOLLOWER (DESKTOP)
     ========================================================================== */
  const customCursor = document.getElementById('custom-cursor');
  if (customCursor && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    window.addEventListener('mousemove', (e) => {
      customCursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    }, { passive: true });

    document.querySelectorAll('a, button, input, select, .weekend-ticket-item, .mood-item, .gallery-item, .passport-stamp-tile, .city-card').forEach(interactiveEl => {
      interactiveEl.addEventListener('mouseenter', () => customCursor.classList.add('hovering'));
      interactiveEl.addEventListener('mouseleave', () => customCursor.classList.remove('hovering'));
    });
  }

  /* ==========================================================================
     17. INITIAL CONSOLE CITIZEN DISPATCH
     ========================================================================== */
  console.log(
    '%cLUMORA® %c— Edition 04 / Digital Travel Journal Engine\nLoaded 14 Verified Expeditions · Base Coordinate: 30.7333° N',
    'color: #2448FF; font-family: monospace; font-size: 14px; font-weight: bold;',
    'color: #151515; font-family: monospace; font-size: 12px;'
  );
});
