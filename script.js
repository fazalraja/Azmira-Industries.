/**
 * Azmira Industries - Royal Indian Handicrafts
 * Interactive Application Logic & Product Catalog
 * Hasanpur, District Amroha, Uttar Pradesh, India - 244241
 */

document.addEventListener('DOMContentLoaded', () => {

  // =========================================================================
  // 1. Curated Product Catalog Data
  // =========================================================================
  const products = [
    {
      id: 'az-01',
      title: 'Hand-Carved Heritage Jharokha Panel',
      category: 'woodwork',
      categoryLabel: 'Carved Woodwork',
      badge: 'Bestseller',
      badgeClass: 'badge-wood',
      image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
      description: 'An architectural Mughal-inspired window jharokha chiseled by hand from aged Sheesham timber. Features delicate floral jaali lattices and an antique distressed natural wax polish.',
      material: '100% Solid Seasoned Sheesham Wood',
      dimensions: '36" H x 24" W x 4" D',
      finish: 'Natural Heritage Wax Buff',
      origin: 'Hasanpur, Amroha (UP)',
      craftTechnique: 'Deep relief hand chiseling & Mughal Jaali lattice',
      inStock: 'Custom & Bulk Available'
    },
    {
      id: 'az-02',
      title: 'Antique Hand-Hammered Brass Urli with Bells',
      category: 'brass',
      categoryLabel: 'Brass & Metal Art',
      badge: 'Heritage',
      badgeClass: 'badge-brass',
      image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=800&q=80',
      description: 'Traditional solid brass floating urli bowl adorned with hand-cast peacock motifs and dangling temple ghungroos. Perfect for rose petals, scented water, and festive floating candles.',
      material: 'Virgin Brass (Lost-Wax Casting)',
      dimensions: '14" Diameter x 5" Height',
      finish: 'Antique Golden Patina',
      origin: 'Amroha Artisan Foundry',
      craftTechnique: 'Hand beaten repoussé and cast engraving',
      inStock: 'Ready to Dispatch'
    },
    {
      id: 'az-03',
      title: 'Royal Bone Inlay Floral Keepsake Chest',
      category: 'inlay',
      categoryLabel: 'Bone & Inlay Art',
      badge: 'Export Grade',
      badgeClass: 'badge-inlay',
      image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80',
      description: 'A masterwork of patience and precision. Ethically sourced buffalo bone pieces individually carved into delicate floral tendrils and hand-inlaid into dyed jewel-toned resin.',
      material: 'Ethical Bone, Resin & Sheesham Base',
      dimensions: '12" L x 8" W x 5" H',
      finish: 'High-Gloss Hand Polished',
      origin: 'Hasanpur Inlay Guild',
      craftTechnique: 'Traditional Amroha mosaic bone inlay',
      inStock: 'Limited Artisan Batch'
    },
    {
      id: 'az-04',
      title: 'Mughal Jaali Wooden Lantern & Lamp',
      category: 'woodwork',
      categoryLabel: 'Carved Woodwork',
      badge: 'New Arrival',
      badgeClass: 'badge-wood',
      image: 'https://images.unsplash.com/photo-1517991104123-1d56a6e81ed9?auto=format&fit=crop&w=800&q=80',
      description: 'Intricately fretted wooden lantern designed to cast spellbinding geometric shadow patterns on your living room walls. Fitted with a brass handle and glass tea-light cup.',
      material: 'Mature Teakwood & Cast Brass Fittings',
      dimensions: '16" H x 9" W x 9" D',
      finish: 'Dark Walnut Matte Oil',
      origin: 'Hasanpur, Amroha (UP)',
      craftTechnique: 'Fretwork scroll saw & hand beveling',
      inStock: 'Wholesale & Retail Ready'
    },
    {
      id: 'az-05',
      title: 'Artisan Acacia Wood Salad & Fruit Platter Set',
      category: 'tableware',
      categoryLabel: 'Artisanal Tableware',
      badge: 'Organic',
      badgeClass: 'badge-table',
      image: 'https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&w=800&q=80',
      description: 'Turned on traditional wood lathes from single blocks of organic Acacia hardwood. Food-grade walnut oil buff highlights the stunning natural chatoyancy of raw wood grains.',
      material: 'Single-piece Harvested Acacia',
      dimensions: 'Bowl 12" Dia + 2 Servers (10")',
      finish: '100% Food-Safe Natural Plant Oil',
      origin: 'Hasanpur Workshop Studio',
      craftTechnique: 'Freehand lathe turning & organic sealing',
      inStock: 'Bulk Hospitality Orders'
    },
    {
      id: 'az-06',
      title: 'Amroha Classical Engraved Dholak & Percussion',
      category: 'heritage',
      categoryLabel: 'Amroha Specials',
      badge: 'Amroha Icon',
      badgeClass: 'badge-heritage',
      image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=800&q=80',
      description: 'Amroha is world-renowned for its musical heritage. Hand-hollowed seasoned mango wood body, hand-tuned parchment membranes, and traditional rope-tensioning with brass rings.',
      material: 'Seasoned Mango Wood & Goat Hide',
      dimensions: '18" Length x 9" Head Diameter',
      finish: 'Sun-Cured Lacquer Coating',
      origin: 'District Amroha Heritage Master',
      craftTechnique: 'Acoustic wood hollowing & hide tuning',
      inStock: 'Master Tuned'
    },
    {
      id: 'az-07',
      title: 'Vintage Brass Peacock Diya & Oil Chandelier',
      category: 'brass',
      categoryLabel: 'Brass & Metal Art',
      badge: 'Spiritual Decor',
      badgeClass: 'badge-brass',
      image: 'https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?auto=format&fit=crop&w=800&q=80',
      description: 'A stately 5-wick hanging temple diya crowned with a majestic peacock figurine. Cast using traditional sand molding techniques and buffed to an alluring warm brass glow.',
      material: 'Heavyweight Solid Brass',
      dimensions: '22" Height with Brass Chain',
      finish: 'Semi-Gloss Hand Buffed Brass',
      origin: 'Amroha Metal Foundry',
      craftTechnique: 'Sand mold lost-wax brass casting',
      inStock: 'Ready to Dispatch'
    },
    {
      id: 'az-08',
      title: 'Mother of Pearl Inlaid Coaster & Box Ensemble',
      category: 'inlay',
      categoryLabel: 'Bone & Inlay Art',
      badge: 'Luxury Gift',
      badgeClass: 'badge-inlay',
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80',
      description: 'Shimmering natural seashell flakes precisely embedded in deep midnight resin on seasoned Sheesham wood. Complete with 6 coasters and a matching hinged presentation box.',
      material: 'Natural Sea Shell, Resin & Sheesham',
      dimensions: 'Box 5.5" x 5.5" x 3.5"',
      finish: 'Glass-Smooth Resin Polish',
      origin: 'Hasanpur, Amroha (UP)',
      craftTechnique: 'Micro-tesserae mother of pearl setting',
      inStock: 'Corporate Gifting Favorite'
    },
    {
      id: 'az-09',
      title: 'Hand-Chiseled Teakwood Mandala Wall Medallion',
      category: 'woodwork',
      categoryLabel: 'Carved Woodwork',
      badge: 'Statement Art',
      badgeClass: 'badge-wood',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
      description: 'A concentric radial mandala wall plaque hand-chiseled from 2-inch thick seasoned teakwood. Whitewashed distressed accents accentuate the dramatic depth of petal relief.',
      material: 'Kiln-Dried Indian Teakwood',
      dimensions: '30" Diameter x 2" Depth',
      finish: 'Distressed Antique White & Natural Wood',
      origin: 'Hasanpur Workshop Studio',
      craftTechnique: 'High-relief gouge carving',
      inStock: 'Custom Sizes Available'
    },
    {
      id: 'az-10',
      title: 'Artisan Sheesham & Boxwood Handcrafted Chess Set',
      category: 'woodwork',
      categoryLabel: 'Carved Woodwork',
      badge: 'Collector Edition',
      badgeClass: 'badge-wood',
      image: 'https://images.unsplash.com/photo-1586165368502-1bad197a6461?auto=format&fit=crop&w=800&q=80',
      description: 'Folding game board with brass latch and velvet-lined storage slots. Each Staunton chess piece is individually hand-carved with felted weighted bases for seamless play.',
      material: 'Golden Sheesham & Natural Boxwood',
      dimensions: '14" x 14" Board (King: 3" Height)',
      finish: 'Silky Satin Polyurethane',
      origin: 'Hasanpur, Amroha (UP)',
      craftTechnique: 'Precision turning & piece sculpting',
      inStock: 'Export Packaged'
    },
    {
      id: 'az-11',
      title: 'Hammered Copper & Brass Royal Water Goblets',
      category: 'brass',
      categoryLabel: 'Brass & Metal Art',
      badge: 'Ayurvedic',
      badgeClass: 'badge-brass',
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
      description: 'Hand-hammered pure copper interior with an antiqued brass exterior stem. Blends ancient wellness wisdom with regal dinner table aesthetics.',
      material: '99% Pure Copper Interior, Brass Exterior',
      dimensions: '350ml Capacity | 7" Height',
      finish: 'Hand-Dimpled Patina',
      origin: 'Amroha Metal Foundry',
      craftTechnique: 'Dual metal fusion & repoussé hammering',
      inStock: 'Sets of 2, 4 & 6'
    },
    {
      id: 'az-12',
      title: 'Four-Panel Floral Mughal Jaali Room Divider',
      category: 'woodwork',
      categoryLabel: 'Carved Woodwork',
      badge: 'Architectural',
      badgeClass: 'badge-wood',
      image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800&q=80',
      description: 'A grand folding 4-panel architectural room screen featuring openwork Mughal jaali cutouts and hand-carved floral lower registers. Folds flat for effortless movement.',
      material: 'Selected Premium Sheesham Wood',
      dimensions: '72" Height x 80" Total Width (4 panels)',
      finish: 'Dark Honey Antique Wax',
      origin: 'Hasanpur Master Woodcarvers',
      craftTechnique: 'Pierced fretwork & mortise-tenon joinery',
      inStock: 'Bespoke Order Available'
    }
  ];

  // =========================================================================
  // 2. DOM Elements
  // =========================================================================
  const productsGrid = document.getElementById('productsGrid');
  const categoryFilters = document.getElementById('categoryFilters');
  const productSearch = document.getElementById('productSearch');
  const clearSearch = document.getElementById('clearSearch');
  
  // Modals
  const productModal = document.getElementById('productModal');
  const modalProductBody = document.getElementById('modalProductBody');
  const closeProductModal = document.getElementById('closeProductModal');
  const closeModalOverlay = document.getElementById('closeModalOverlay');
  
  // Lightbox
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxDesc = document.getElementById('lightboxDesc');
  const closeLightboxBtn = document.getElementById('closeLightboxBtn');
  const closeLightboxOverlay = document.getElementById('closeLightboxOverlay');
  const galleryItems = document.querySelectorAll('.gallery-item');

  // Mobile Navigation
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileOverlay = document.getElementById('mobileOverlay');
  const closeDrawer = document.getElementById('closeDrawer');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  // Contact Form
  const inquiryForm = document.getElementById('inquiryForm');
  const whatsappDirectBtn = document.getElementById('whatsappDirectBtn');
  const formNotification = document.getElementById('formNotification');
  const interestedProductInput = document.getElementById('interestedProduct');

  // Scroll to Top & Header
  const header = document.getElementById('header');
  const backToTopBtn = document.getElementById('backToTopBtn');
  const currentYearSpan = document.getElementById('currentYear');
  const toastContainer = document.getElementById('toastContainer');

  // Set Year
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // =========================================================================
  // 3. Render Product Cards
  // =========================================================================
  let currentFilter = 'all';
  let searchQuery = '';

  function renderProducts() {
    if (!productsGrid) return;

    const filtered = products.filter(item => {
      const matchesCategory = (currentFilter === 'all') || (item.category === currentFilter);
      const matchesSearch = searchQuery === '' || 
        item.title.toLowerCase().includes(searchQuery) ||
        item.description.toLowerCase().includes(searchQuery) ||
        item.material.toLowerCase().includes(searchQuery) ||
        item.categoryLabel.toLowerCase().includes(searchQuery);

      return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
      productsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: #fff; border-radius: 12px; border: 1px dashed var(--gold);">
          <i class="fa-solid fa-box-open" style="font-size: 3rem; color: var(--gold); margin-bottom: 16px;"></i>
          <h3 style="font-family: var(--font-serif); font-size: 1.6rem; color: var(--primary-dark); margin-bottom: 8px;">No Masterpieces Found</h3>
          <p style="color: var(--text-secondary); max-width: 450px; margin: 0 auto 20px;">
            We couldn't find any crafts matching "${searchQuery}". Please try another keyword or browse our complete collection.
          </p>
          <button class="btn btn-gold btn-sm" id="resetCatalogSearch">Show All Masterpieces</button>
        </div>
      `;

      const resetBtn = document.getElementById('resetCatalogSearch');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          searchQuery = '';
          currentFilter = 'all';
          if (productSearch) productSearch.value = '';
          if (clearSearch) clearSearch.style.display = 'none';
          document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
          const allBtn = document.querySelector('.filter-btn[data-filter="all"]');
          if (allBtn) allBtn.classList.add('active');
          renderProducts();
        });
      }
      return;
    }

    productsGrid.innerHTML = filtered.map(item => `
      <div class="product-card" data-id="${item.id}">
        <div class="product-thumb">
          <img src="${item.image}" alt="${item.title}" loading="lazy">
          <span class="product-badge ${item.badgeClass}">${item.badge}</span>
          <button class="quick-view-btn" data-id="${item.id}" aria-label="Quick view ${item.title}">
            <i class="fa-solid fa-eye"></i> Quick View
          </button>
        </div>
        <div class="product-details">
          <span class="product-category">${item.categoryLabel}</span>
          <h3 class="product-title">${item.title}</h3>
          <p class="product-desc">${item.description}</p>
          
          <div class="product-meta-specs">
            <span><strong>Material:</strong> ${item.material}</span>
            <span><strong>Dimensions:</strong> ${item.dimensions}</span>
          </div>

          <div class="product-footer">
            <span class="product-origin"><i class="fa-solid fa-location-dot"></i> ${item.origin}</span>
            <button class="product-inquire-btn" data-title="${item.title}">
              <i class="fa-solid fa-envelope"></i> Inquire
            </button>
          </div>
        </div>
      </div>
    `).join('');

    // Attach listeners to newly rendered items
    attachProductCardEvents();
  }

  function attachProductCardEvents() {
    // Quick View Buttons
    document.querySelectorAll('.quick-view-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const prodId = btn.getAttribute('data-id');
        openProductModal(prodId);
      });
    });

    // Inquire Buttons
    document.querySelectorAll('.product-inquire-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const title = btn.getAttribute('data-title');
        handleProductInquiry(title);
      });
    });

    // Entire Card Click opens quick view
    document.querySelectorAll('.product-card').forEach(card => {
      card.addEventListener('click', () => {
        const prodId = card.getAttribute('data-id');
        openProductModal(prodId);
      });
    });
  }

  // Initial render
  renderProducts();

  // =========================================================================
  // 4. Filter & Search Handling
  // =========================================================================
  if (categoryFilters) {
    categoryFilters.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;

      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      currentFilter = btn.getAttribute('data-filter') || 'all';
      renderProducts();
    });
  }

  if (productSearch) {
    productSearch.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      if (clearSearch) {
        clearSearch.style.display = searchQuery ? 'block' : 'none';
      }
      renderProducts();
    });
  }

  if (clearSearch) {
    clearSearch.addEventListener('click', () => {
      if (productSearch) {
        productSearch.value = '';
        searchQuery = '';
        clearSearch.style.display = 'none';
        renderProducts();
      }
    });
  }

  // Footer Category Links
  document.querySelectorAll('.category-link').forEach(link => {
    link.addEventListener('click', (e) => {
      const cat = link.getAttribute('data-cat');
      if (cat) {
        currentFilter = cat;
        document.querySelectorAll('.filter-btn').forEach(b => {
          b.classList.toggle('active', b.getAttribute('data-filter') === cat);
        });
        renderProducts();
      }
    });
  });

  // =========================================================================
  // 5. Product Quick-View Modal
  // =========================================================================
  function openProductModal(productId) {
    const item = products.find(p => p.id === productId);
    if (!item || !productModal || !modalProductBody) return;

    modalProductBody.innerHTML = `
      <div class="modal-product-layout">
        <div class="modal-img-wrap">
          <img src="${item.image}" alt="${item.title}">
        </div>
        <div class="modal-info-wrap">
          <span class="modal-cat-tag">${item.categoryLabel} • ${item.badge}</span>
          <h2 class="modal-title" id="modalProductTitle">${item.title}</h2>
          <p class="modal-desc">${item.description}</p>
          
          <table class="modal-specs-table">
            <tbody>
              <tr>
                <td>Craft Technique</td>
                <td><strong>${item.craftTechnique}</strong></td>
              </tr>
              <tr>
                <td>Primary Material</td>
                <td>${item.material}</td>
              </tr>
              <tr>
                <td>Standard Dimensions</td>
                <td>${item.dimensions}</td>
              </tr>
              <tr>
                <td>Surface Finish</td>
                <td>${item.finish}</td>
              </tr>
              <tr>
                <td>Artisan Provenance</td>
                <td><i class="fa-solid fa-map-pin" style="color: var(--primary);"></i> ${item.origin}</td>
              </tr>
              <tr>
                <td>Export Status</td>
                <td><span style="color: #15803d; font-weight: 600;"><i class="fa-solid fa-circle-check"></i> ${item.inStock}</span></td>
              </tr>
            </tbody>
          </table>

          <div class="modal-action-btns">
            <a href="https://wa.me/919312534844?text=${encodeURIComponent('Hello Azmira Industries, I would like to inquire about: ' + item.title + ' (Code: ' + item.id + ')')}" 
               target="_blank" 
               rel="noopener noreferrer" 
               class="btn btn-gold btn-sm">
              <i class="fa-brands fa-whatsapp"></i> Inquire on WhatsApp
            </a>
            <button class="btn btn-outline-gold btn-sm" id="modalFillFormBtn" data-title="${item.title}">
              <i class="fa-solid fa-envelope"></i> Fill Inquiry Form
            </button>
          </div>
        </div>
      </div>
    `;

    productModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    // Hook up modal internal inquiry button
    const modalFormBtn = document.getElementById('modalFillFormBtn');
    if (modalFormBtn) {
      modalFormBtn.addEventListener('click', () => {
        closeProductModalView();
        handleProductInquiry(item.title);
      });
    }
  }

  function closeProductModalView() {
    if (productModal) {
      productModal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  }

  if (closeProductModal) closeProductModal.addEventListener('click', closeProductModalView);
  if (closeModalOverlay) closeModalOverlay.addEventListener('click', closeProductModalView);

  // =========================================================================
  // 6. Visual Gallery Lightbox
  // =========================================================================
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      const title = item.getAttribute('data-title') || '';
      const desc = item.getAttribute('data-desc') || '';

      if (lightboxModal && img) {
        lightboxImg.src = img.src;
        lightboxImg.alt = title;
        lightboxTitle.textContent = title;
        lightboxDesc.textContent = desc;
        lightboxModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
      }
    });
  });

  function closeLightboxView() {
    if (lightboxModal) {
      lightboxModal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  }

  if (closeLightboxBtn) closeLightboxBtn.addEventListener('click', closeLightboxView);
  if (closeLightboxOverlay) closeLightboxOverlay.addEventListener('click', closeLightboxView);

  // Close modals on Escape key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProductModalView();
      closeLightboxView();
      closeMobileDrawer();
    }
  });

  // =========================================================================
  // 7. Contact / Inquiry Form Handling
  // =========================================================================
  function handleProductInquiry(productTitle) {
    if (interestedProductInput) {
      interestedProductInput.value = productTitle;
    }
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    showToast(`Selected "${productTitle}" for your inquiry.`, 'info');
  }

  if (inquiryForm) {
    inquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const fullName = document.getElementById('fullName').value.trim();
      const phone = document.getElementById('contactPhone').value.trim();
      const email = document.getElementById('contactEmail').value.trim();
      const inquiryType = document.getElementById('inquiryType').value;
      const productRef = document.getElementById('interestedProduct').value.trim();
      const message = document.getElementById('message').value.trim();

      // Basic Validation
      if (!fullName || !phone || !email || !message) {
        showFormNotification('Please fill in all mandatory fields (Name, Phone, Email, and Message).', 'error');
        return;
      }

      // Email format test
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        showFormNotification('Please provide a valid email address.', 'error');
        return;
      }

      // Simulate Successful Submission
      showFormNotification(
        `Thank you, <strong>${fullName}</strong>! Your inquiry regarding <em>${productRef || inquiryType}</em> has been securely submitted to Azmira Industries (Hasanpur, Amroha). Our artisan representative will contact you via ${phone} or ${email} shortly.`,
        'success'
      );

      showToast('Inquiry sent successfully to Azmira Industries!', 'success');
      inquiryForm.reset();
    });
  }

  // Send Direct via WhatsApp button
  if (whatsappDirectBtn) {
    whatsappDirectBtn.addEventListener('click', () => {
      const fullName = document.getElementById('fullName').value.trim();
      const phone = document.getElementById('contactPhone').value.trim();
      const inquiryType = document.getElementById('inquiryType').value;
      const productRef = document.getElementById('interestedProduct').value.trim();
      const message = document.getElementById('message').value.trim();

      let text = `Hello Azmira Industries,%0A`;
      text += `My name is: ${fullName || 'A Prospective Client'}%0A`;
      if (phone) text += `Contact No: ${phone}%0A`;
      text += `Requirement Type: ${inquiryType}%0A`;
      if (productRef) text += `Interested Product: ${productRef}%0A`;
      if (message) text += `Message: ${message}%0A`;
      text += `Address/Dispatch: Hasanpur / Pan-India / Export Inquiry`;

      const whatsappUrl = `https://wa.me/919312534844?text=${text}`;
      window.open(whatsappUrl, '_blank');
    });
  }

  function showFormNotification(msg, type) {
    if (!formNotification) return;
    formNotification.innerHTML = msg;
    formNotification.className = `form-notification ${type}`;
    formNotification.style.display = 'block';

    if (type === 'success') {
      setTimeout(() => {
        formNotification.style.display = 'none';
      }, 10000);
    }
  }

  // =========================================================================
  // 8. Mobile Drawer Menu
  // =========================================================================
  function openMobileDrawer() {
    if (mobileDrawer && mobileOverlay) {
      mobileDrawer.classList.add('active');
      mobileOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeMobileDrawer() {
    if (mobileDrawer && mobileOverlay) {
      mobileDrawer.classList.remove('active');
      mobileOverlay.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  }

  if (mobileToggle) mobileToggle.addEventListener('click', openMobileDrawer);
  if (closeDrawer) closeDrawer.addEventListener('click', closeMobileDrawer);
  if (mobileOverlay) mobileOverlay.addEventListener('click', closeMobileDrawer);

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMobileDrawer);
  });

  // =========================================================================
  // 9. Sticky Header & Back-To-Top Button
  // =========================================================================
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    // Header styling
    if (header) {
      if (scrollPos > 60) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    // Back to top button
    if (backToTopBtn) {
      if (scrollPos > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToBackToTopBtn();
      }
    }

    // Scrollspy active state for nav links
    updateScrollspy();
  });

  function backToBackToTopBtn() {
    if (backToTopBtn) backToTopBtn.classList.remove('visible');
  }

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Simple Scrollspy
  function updateScrollspy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  // =========================================================================
  // 10. Toast Notification System
  // =========================================================================
  function showToast(message, type = 'info') {
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    let icon = 'fa-info-circle';
    if (type === 'success') icon = 'fa-circle-check';
    if (type === 'error') icon = 'fa-triangle-exclamation';

    toast.innerHTML = `
      <i class="fa-solid ${icon}" style="font-size: 1.2rem; color: var(--gold-dark);"></i>
      <span>${message}</span>
    `;

    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }

  // Expose toast helper globally if needed
  window.azmiraToast = showToast;
});
