// Données des produits
const products = [
  {
    id: 1,
    name: "Bouteille réutilisable",
    price: 24.99,
    category: "Maison",
    description: "Bouteille en acier inoxydable, sans BPA, idéale pour réduire les déchets plastiques.",
    image: "images/bouteille.png",
    sustainabilityScore: 95,
    featured: true
  },
  {
    id: 2,
    name: "T-shirt en coton bio",
    price: 29.99,
    category: "Mode éthique",
    description: "T-shirt fabriqué en coton biologique certifié, teint avec des colorants naturels.",
    image: "images/t-shirt1.png",
    sustainabilityScore: 85,
    featured: true
  },
  {
    id: 3,
    name: "Savon solide naturel",
    price: 8.99,
    category: "Cosmétiques naturels",
    description: "Savon artisanal fabriqué à partir d'ingrédients naturels et biologiques, sans emballage plastique.",
    image: "images/savon-solide.png",
    sustainabilityScore: 90,
    featured: true
  },
  {
    id: 4,
    name: "Sac à provisions en toile",
    price: 12.99,
    category: "Mode éthique",
    description: "Sac en coton biologique robuste et durable, parfait pour remplacer les sacs plastiques.",
    image: "images/sac1.png",
    sustainabilityScore: 88,
    featured: true
  },
  {
    id: 5,
    name: "Brosse à dents en bambou",
    price: 6.99,
    category: "Maison",
    description: "Brosse à dents écologique avec manche en bambou biodégradable et poils recyclables.",
    image: "images/brosse-a-dents.png",
    sustainabilityScore: 92,
    featured: false
  },
  {
    id: 6,
    name: "Shampoing solide",
    price: 11.99,
    category: "Cosmétiques naturels",
    description: "Shampoing solide sans sulfates ni parabens, emballage zéro déchet.",
    image: "images/shampoing.png",
    sustainabilityScore: 94,
    featured: false
  },
  {
    id: 7,
    name: "Sac à dos en matériaux recyclés",
    price: 59.99,
    category: "Mode éthique",
    description: "Sac à dos fabriqué à partir de bouteilles plastiques recyclées, résistant à l'eau.",
    image: "images/sac3.png",
    sustainabilityScore: 87,
    featured: false
  },
  {
    id: 8,
    name: "Pailles en inox réutilisables",
    price: 14.99,
    category: "Maison",
    description: "Lot de 6 pailles en acier inoxydable avec brosse de nettoyage, alternative durable aux pailles jetables.",
    image: "images/paille.png",
    sustainabilityScore: 89,
    featured: false
  },
  {
    id: 9,
    name: "Café bio équitable",
    price: 9.99,
    category: "Alimentation bio",
    description: "Café issu de l'agriculture biologique et du commerce équitable, torréfié artisanalement pour préserver ses arômes.",
    image: "images/café.png",
    sustainabilityScore: 91,
    featured: false
  },
  {
    id: 10,
    name: "Beeswrap",
    price: 18.99,
    category: "Maison",
    description: "Alternative écologique au film plastique, fabriquée à partir de coton bio et de cire d'abeille.",
    image: "images/beeswrap.png",
    sustainabilityScore: 93,
    featured: false
  },
  {
    id: 11,
    name: "Crème hydratante naturelle",
    price: 22.99,
    category: "Cosmétiques naturels",
    description: "Crème hydratante à base d'ingrédients naturels et biologiques, sans conservateurs chimiques.",
    image: "images/crème.png",
    sustainabilityScore: 86,
    featured: false
  },
  {
    id: 12,
    name: "Thé vert bio",
    price: 7.99,
    category: "Alimentation bio",
    description: "Thé vert cultivé sans pesticides, riche en antioxydants et conditionné dans un emballage compostable.",
    image: "images/thé.png",
    sustainabilityScore: 90,
    featured: false
  },
  // Produits supplémentaires
  {
    id: 13,
    name: "Gourde pliable en silicone",
    price: 19.99,
    category: "Maison",
    description: "Gourde pliable en silicone alimentaire, sans BPA, pratique pour les déplacements.",
    image: "images/gourde.png",
    sustainabilityScore: 88,
    featured: false
  },
  {
    id: 14,
    name: "Chaussettes en bambou",
    price: 12.99,
    category: "Mode éthique",
    description: "Chaussettes fabriquées à partir de fibres de bambou, naturellement antibactériennes et respirantes.",
    image: "images/chaussettes.png",
    sustainabilityScore: 85,
    featured: false
  },
  {
    id: 15,
    name: "Dentifrice solide",
    price: 8.49,
    category: "Cosmétiques naturels",
    description: "Dentifrice solide naturel, sans emballage plastique, pour une hygiène bucco-dentaire écologique.",
    image: "images/dentifrice.png",
    sustainabilityScore: 92,
    featured: false
  },
  {
    id: 16,
    name: "Chocolat noir bio",
    price: 4.99,
    category: "Alimentation bio",
    description: "Chocolat noir 70% issu de l'agriculture biologique et du commerce équitable.",
    image: "images/chocolat.png",
    sustainabilityScore: 89,
    featured: false
  },
  {
    id: 17,
    name: "Éponge lavable",
    price: 7.99,
    category: "Maison",
    description: "Éponge lavable et réutilisable en fibres naturelles, alternative durable aux éponges jetables.",
    image: "images/eponge.png",
    sustainabilityScore: 91,
    featured: false
  },
  {
    id: 18,
    name: "Écharpe en laine recyclée",
    price: 34.99,
    category: "Mode éthique",
    description: "Écharpe chaude et douce fabriquée à partir de laine recyclée, teinte avec des colorants naturels.",
    image: "images/echape.png",
    sustainabilityScore: 87,
    featured: false
  },
  {
    id: 19,
    name: "Déodorant naturel",
    price: 9.99,
    category: "Cosmétiques naturels",
    description: "Déodorant naturel sans aluminium ni parabens, efficace et respectueux de la peau.",
    image: "images/déodorant.png",
    sustainabilityScore: 90,
    featured: false
  },
  {
    id: 20,
    name: "Miel de forêt bio",
    price: 12.99,
    category: "Alimentation bio",
    description: "Miel de forêt issu de l'apiculture biologique, récolté dans des zones préservées.",
    image: "images/miel.png",
    sustainabilityScore: 93,
    featured: false
  },
  {
    id: 21,
    name: "Couverts en bambou",
    price: 15.99,
    category: "Maison",
    description: "Set de couverts en bambou réutilisables, légers et pratiques pour les déplacements.",
    image: "images/couverts.png",
    sustainabilityScore: 89,
    featured: false
  },
  {
    id: 22,
    name: "Baskets éco-responsables",
    price: 79.99,
    category: "Mode éthique",
    description: "Baskets fabriquées à partir de matériaux recyclés et de caoutchouc naturel.",
    image: "images/baskets.png",
    sustainabilityScore: 86,
    featured: false
  },
  {
    id: 23,
    name: "Huile de coco bio",
    price: 8.99,
    category: "Cosmétiques naturels",
    description: "Huile de coco vierge biologique, polyvalente pour la cuisine et les soins corporels.",
    image: "images/huile.png",
    sustainabilityScore: 92,
    featured: false
  },
  {
    id: 24,
    name: "Pâtes complètes bio",
    price: 3.49,
    category: "Alimentation bio",
    description: "Pâtes complètes issues de l'agriculture biologique, riches en fibres et en nutriments.",
    image: "images/pates.png",
    sustainabilityScore: 88,
    featured: false
  }
];

// Codes promo
const promoCodes = {
  "ECO10": { discount: 0.1, description: "10% de réduction" },
  "BIENVENUE": { discount: 0.15, description: "15% de réduction pour les nouveaux clients" },
  "FREESHIP": { discount: 0, freeShipping: true, description: "Livraison gratuite" }
};

// Utilisateurs (simulés)
let users = JSON.parse(localStorage.getItem('users')) || [
  {
    id: 1,
    name: "Utilisateur Test",
    email: "test@example.com",
    password: "password123", // Dans une vraie application, les mots de passe seraient hachés
    orders: []
  }
];

// Utilisateur actuel
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;

// Panier
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Produit sélectionné pour l'ajout au panier
let selectedProduct = null;

// Produits filtrés pour la page produits
let filteredProducts = [...products];

// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
  // Éléments du DOM communs
  const cartCountElement = document.querySelector('.cart-count');
  const menuToggle = document.querySelector('.menu-toggle');
  const themeToggle = document.querySelector('.theme-toggle');
  const searchIcon = document.getElementById('search-icon');
  const profileIcon = document.getElementById('profile-icon');
  const cartIcon = document.getElementById('cart-icon');
  const footerAccount = document.getElementById('footer-account');

  // Modals
  const loginModal = document.getElementById('login-modal');
  const cartModal = document.getElementById('cart-modal');
  const profileModal = document.getElementById('profile-modal');
  const addToCartModal = document.getElementById('add-to-cart-modal');
  const searchOverlay = document.getElementById('search-overlay');
  const closeModalButtons = document.querySelectorAll('.close-modal');
  const closeSearchButton = document.querySelector('.close-search');

  // Formulaires
  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');
  const addToCartForm = document.getElementById('add-to-cart-form');

  // Éléments spécifiques à la page
  const featuredProductsContainer = document.getElementById('featured-products');
  const tabButtons = document.querySelectorAll('.tab-btn');
  const newsletterForm = document.querySelector('.newsletter-form');

  // Éléments de la page produits
  const priceRange = document.getElementById('price-range');
  const priceValue = document.getElementById('price-value');
  const sortSelect = document.getElementById('sort-select');
  const resetFiltersBtn = document.getElementById('reset-filters');
  const applyFiltersBtn = document.getElementById('apply-filters');
  const viewMoreButtons = document.querySelectorAll('.view-more');
  const productsCount = document.getElementById('products-count');

  // Éléments du formulaire d'ajout au panier
  const decreaseQuantityBtn = document.getElementById('decrease-quantity');
  const increaseQuantityBtn = document.getElementById('increase-quantity');
  const productQuantityInput = document.getElementById('product-quantity');

  // Éléments du panier
  const cartItemsContainer = document.getElementById('cart-items');
  const cartTotalPrice = document.getElementById('cart-total-price');
  const cartEmptyMessage = document.getElementById('cart-empty');
  const cartSummary = document.getElementById('cart-summary');
  const clearCartBtn = document.getElementById('clear-cart');
  const checkoutBtn = document.getElementById('checkout');

  // Initialisation
  init();

  // Fonctions
  function init() {
    updateCartCount();
    setupEventListeners();
    checkDarkMode();
    checkUserStatus();
    
    // Initialiser les fonctionnalités spécifiques à la page
    if (featuredProductsContainer) loadFeaturedProducts();
    
    // Initialiser les catégories de produits sur la page produits
    if (document.getElementById('maison-products')) {
      // Réinitialiser les produits filtrés
      filteredProducts = [...products];
      
      // Mettre à jour le compteur de produits
      if (productsCount) {
        productsCount.textContent = products.length;
      }
      
      loadCategoryProducts('maison', 'Maison');
      loadCategoryProducts('mode', 'Mode éthique');
      loadCategoryProducts('cosmetiques', 'Cosmétiques naturels');
      loadCategoryProducts('alimentation', 'Alimentation bio');
    }
  }

  function setupEventListeners() {
    // Toggle thème sombre
    if (themeToggle) {
      themeToggle.addEventListener('click', toggleDarkMode);
    }
    
    // Menu mobile
    if (menuToggle) {
      menuToggle.addEventListener('click', toggleMobileMenu);
    }
    
    // Recherche
    if (searchIcon) {
      searchIcon.addEventListener('click', function(e) {
        e.preventDefault();
        openSearchOverlay();
      });
    }
    
    // Profil utilisateur
    if (profileIcon) {
      profileIcon.addEventListener('click', function(e) {
        e.preventDefault();
        if (currentUser) {
          showProfileModal();
        } else {
          showLoginModal();
        }
      });
    }
    
    // Panier
    if (cartIcon) {
      cartIcon.addEventListener('click', function(e) {
        e.preventDefault();
        showCartModal();
      });
    }
    
    if (footerAccount) {
      footerAccount.addEventListener('click', function(e) {
        e.preventDefault();
        if (currentUser) {
          showProfileModal();
        } else {
          showLoginModal();
        }
      });
    }
    
    // Fermer les modals
    closeModalButtons.forEach(button => {
      button.addEventListener('click', function() {
        const modal = this.closest('.modal');
        closeModal(modal);
      });
    });
    
    // Fermer les modals en cliquant en dehors
    window.addEventListener('click', function(e) {
      if (e.target.classList.contains('modal')) {
        closeModal(e.target);
      }
    });
    
    // Fermer la recherche
    if (closeSearchButton) {
      closeSearchButton.addEventListener('click', closeSearchOverlay);
    }
    
    // Onglets des modals
    const modalTabs = document.querySelectorAll('.modal-tab');
    if (modalTabs) {
      modalTabs.forEach(tab => {
        tab.addEventListener('click', function() {
          const tabId = this.getAttribute('data-tab');
          
          // Supprimer la classe active de tous les onglets et panneaux
          document.querySelectorAll('.modal-tab').forEach(t => t.classList.remove('active'));
          document.querySelectorAll('.modal-panel').forEach(p => p.classList.remove('active'));
          
          // Ajouter la classe active à l'onglet cliqué et au panneau correspondant
          this.classList.add('active');
          document.getElementById(`${tabId}-panel`).classList.add('active');
        });
      });
    }
    
    // Onglets de durabilité
    if (tabButtons) {
      tabButtons.forEach(button => {
        button.addEventListener('click', function() {
          const tabId = this.getAttribute('data-tab');
          
          // Supprimer la classe active de tous les boutons et panneaux
          document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
          document.querySelectorAll('.tab-panel').forEach(panel => panel.classList.remove('active'));
          
          // Ajouter la classe active au bouton cliqué et au panneau correspondant
          this.classList.add('active');
          document.getElementById(tabId).classList.add('active');
        });
      });
    }
    
    // Formulaire de newsletter
    if (newsletterForm) {
      newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const emailInput = this.querySelector('input[type="email"]');
        if (emailInput && emailInput.value) {
          showNotification('Merci de vous être inscrit à notre newsletter!', 'success');
          emailInput.value = '';
        }
      });
    }
    
    // Formulaire de connexion
    if (loginForm) {
      loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        
        login(email, password);
      });
    }
    
    // Formulaire d'inscription
    if (registerForm) {
      registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('register-name').value;
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;
        const confirmPassword = document.getElementById('register-confirm').value;
        
        if (password !== confirmPassword) {
          showNotification('Les mots de passe ne correspondent pas', 'error');
          return;
        }
        
        register(name, email, password);
      });
    }
    
    // Déconnexion
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', function(e) {
        e.preventDefault();
        logout();
      });
    }
    
    // Filtres de produits
    if (priceRange) {
      priceRange.addEventListener('input', function() {
        priceValue.textContent = this.value;
      });
    }
    
    if (sortSelect) {
      sortSelect.addEventListener('change', function() {
        sortProducts(this.value);
      });
    }
    
    if (resetFiltersBtn) {
      resetFiltersBtn.addEventListener('click', resetFilters);
    }
    
    if (applyFiltersBtn) {
      applyFiltersBtn.addEventListener('click', applyFilters);
    }
    
    // Boutons "Voir plus"
    if (viewMoreButtons) {
      viewMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
          const category = this.getAttribute('data-category');
          loadMoreCategoryProducts(category);
        });
      });
    }
    
    // Recherche
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    
    if (searchInput) {
      searchInput.addEventListener('input', function() {
        const query = this.value.trim();
        if (query.length >= 2) {
          searchProducts(query);
        } else {
          document.getElementById('search-results').innerHTML = '';
        }
      });
    }
    
    if (searchButton) {
      searchButton.addEventListener('click', function() {
        const query = searchInput.value.trim();
        if (query.length >= 2) {
          searchProducts(query);
        }
      });
    }
    
    // Formulaire d'ajout au panier
    if (addToCartForm) {
      addToCartForm.addEventListener('submit', function(e) {
        e.preventDefault();
        if (!selectedProduct) return;
        
        const quantity = parseInt(productQuantityInput.value);
        const notes = document.getElementById('product-notes').value;
        
        addToCart(selectedProduct.id, quantity, notes);
        closeModal(addToCartModal);
        selectedProduct = null;
      });
    }
    
    // Contrôles de quantité
    if (decreaseQuantityBtn) {
      decreaseQuantityBtn.addEventListener('click', function() {
        let quantity = parseInt(productQuantityInput.value);
        if (quantity > 1) {
          productQuantityInput.value = quantity - 1;
        }
      });
    }
    
    if (increaseQuantityBtn) {
      increaseQuantityBtn.addEventListener('click', function() {
        let quantity = parseInt(productQuantityInput.value);
        if (quantity < 10) {
          productQuantityInput.value = quantity + 1;
        }
      });
    }
    
    // Actions du panier
    if (clearCartBtn) {
      clearCartBtn.addEventListener('click', function() {
        clearCart();
      });
    }
    
    if (checkoutBtn) {
      checkoutBtn.addEventListener('click', function() {
        if (!currentUser) {
          showNotification('Veuillez vous connecter pour passer commande', 'error');
          closeModal(cartModal);
          showLoginModal();
          return;
        }
        
        // Simuler une commande
        showNotification('Commande passée avec succès!', 'success');
        clearCart();
        closeModal(cartModal);
      });
    }
  }

  function loadFeaturedProducts() {
    const featuredProducts = products.filter(product => product.featured);
    
    featuredProductsContainer.innerHTML = featuredProducts.map(product => {
      // Déterminer la classe du score
      let scoreClass = getScoreClass(product.sustainabilityScore);
      
      return `
        <div class="product-card">
          <div class="product-image">
            <img src="${product.image}" alt="${product.name}">
            <span class="product-category">${product.category}</span>
          </div>
          <div class="product-content">
            <h3 class="product-title">${product.name}</h3>
            <p class="product-price">${product.price.toFixed(2)} €</p>
            <div class="sustainability-score">
              <span class="score-label">Durabilité:</span>
              <div class="score-bar">
                <div class="score-fill ${scoreClass}" style="width: ${product.sustainabilityScore}%"></div>
              </div>
              <span class="score-value">${product.sustainabilityScore}</span>
            </div>
            <button class="product-button" data-id="${product.id}">
              <i class="fas fa-shopping-cart"></i> Ajouter au panier
            </button>
          </div>
        </div>
      `;
    }).join('');
    
    // Ajouter les écouteurs d'événements pour les boutons d'ajout au panier
    addToCartListeners();
  }

  function loadCategoryProducts(categorySlug, categoryName, limit = 3) {
    const categoryProducts = filteredProducts.filter(product => {
      if (categorySlug === 'maison') return product.category === 'Maison';
      if (categorySlug === 'mode') return product.category === 'Mode éthique';
      if (categorySlug === 'cosmetiques') return product.category === 'Cosmétiques naturels';
      if (categorySlug === 'alimentation') return product.category === 'Alimentation bio';
      return false;
    });
    
    const productsToShow = categoryProducts.slice(0, limit);
    const productsContainer = document.getElementById(`${categorySlug}-products`);
    
    if (!productsContainer) return;
    
    productsContainer.innerHTML = productsToShow.map(product => {
      // Déterminer la classe du score
      let scoreClass = getScoreClass(product.sustainabilityScore);
      
      return `
        <div class="product-card">
          <div class="product-image">
            <img src="${product.image}" alt="${product.name}">
            <span class="product-category">${product.category}</span>
          </div>
          <div class="product-content">
            <h3 class="product-title">${product.name}</h3>
            <p class="product-price">${product.price.toFixed(2)} €</p>
            <div class="sustainability-score">
              <span class="score-label">Durabilité:</span>
              <div class="score-bar">
                <div class="score-fill ${scoreClass}" style="width: ${product.sustainabilityScore}%"></div>
              </div>
              <span class="score-value">${product.sustainabilityScore}</span>
            </div>
            <button class="product-button" data-id="${product.id}">
              <i class="fas fa-shopping-cart"></i> Ajouter au panier
            </button>
          </div>
        </div>
      `;
    }).join('');
    
    // Mettre à jour le bouton "Voir plus"
    const viewMoreBtn = document.querySelector(`.view-more[data-category="${categorySlug}"]`);
    if (viewMoreBtn) {
      if (categoryProducts.length <= limit) {
        viewMoreBtn.style.display = 'none';
      } else {
        viewMoreBtn.style.display = 'block';
      }
    }
    
    // Ajouter les écouteurs d'événements pour les boutons d'ajout au panier
    addToCartListeners();
  }

  function loadMoreCategoryProducts(categorySlug) {
    const currentProducts = document.getElementById(`${categorySlug}-products`).querySelectorAll('.product-card').length;
    const limit = currentProducts + 3;
    
    let categoryName = '';
    if (categorySlug === 'maison') categoryName = 'Maison';
    if (categorySlug === 'mode') categoryName = 'Mode éthique';
    if (categorySlug === 'cosmetiques') categoryName = 'Cosmétiques naturels';
    if (categorySlug === 'alimentation') categoryName = 'Alimentation bio';
    
    loadCategoryProducts(categorySlug, categoryName, limit);
  }

  function sortProducts(sortValue) {
    // Trier les produits filtrés
    switch(sortValue) {
      case 'price-asc':
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'sustainability-desc':
        filteredProducts.sort((a, b) => b.sustainabilityScore - a.sustainabilityScore);
        break;
      case 'default':
      default:
        // Par défaut, trier par ID (ordre original)
        filteredProducts.sort((a, b) => a.id - b.id);
        break;
    }
    
    // Recharger les catégories avec les produits triés
    loadCategoryProducts('maison', 'Maison');
    loadCategoryProducts('mode', 'Mode éthique');
    loadCategoryProducts('cosmetiques', 'Cosmétiques naturels');
    loadCategoryProducts('alimentation', 'Alimentation bio');
  }

  function applyFilters() {
    // Récupérer les valeurs des filtres
    const selectedCategories = Array.from(document.querySelectorAll('input[name="category"]:checked')).map(checkbox => checkbox.value);
    const maxPrice = parseInt(document.getElementById('price-range').value);
    const selectedSustainability = Array.from(document.querySelectorAll('input[name="sustainability"]:checked')).map(checkbox => checkbox.value);
    
    // Filtrer les produits
    filteredProducts = products.filter(product => {
      // Filtre de catégorie
      const categoryMatch = selectedCategories.length === 0 || selectedCategories.some(category => {
        switch(category) {
          case 'maison':
            return product.category === 'Maison';
          case 'mode':
            return product.category === 'Mode éthique';
          case 'cosmetiques':
            return product.category === 'Cosmétiques naturels';
          case 'alimentation':
            return product.category === 'Alimentation bio';
          default:
            return false;
        }
      });
      
      // Filtre de prix
      const priceMatch = product.price <= maxPrice;
      
      // Filtre de durabilité
      const sustainabilityMatch = selectedSustainability.length === 0 || selectedSustainability.some(level => {
        switch(level) {
          case 'excellent':
            return product.sustainabilityScore >= 90;
          case 'good':
            return product.sustainabilityScore >= 70 && product.sustainabilityScore < 90;
          case 'average':
            return product.sustainabilityScore >= 50 && product.sustainabilityScore < 70;
          case 'poor':
            return product.sustainabilityScore < 50;
          default:
            return false;
        }
      });
      
      return categoryMatch && priceMatch && sustainabilityMatch;
    });
    
    // Mettre à jour le compteur de produits
    if (productsCount) {
      productsCount.textContent = filteredProducts.length;
    }
    
    // Recharger les catégories avec les produits filtrés
    loadCategoryProducts('maison', 'Maison');
    loadCategoryProducts('mode', 'Mode éthique');
    loadCategoryProducts('cosmetiques', 'Cosmétiques naturels');
    loadCategoryProducts('alimentation', 'Alimentation bio');
    
    // Appliquer le tri actuel
    if (sortSelect) {
      sortProducts(sortSelect.value);
    }
  }

  function resetFilters() {
    // Réinitialiser les cases à cocher
    document.querySelectorAll('input[name="category"]').forEach(checkbox => {
      checkbox.checked = false;
    });
    
    document.querySelectorAll('input[name="sustainability"]').forEach(checkbox => {
      checkbox.checked = false;
    });
    
    // Réinitialiser le curseur de prix
    if (priceRange) {
      priceRange.value = 100;
      priceValue.textContent = '100';
    }
    
    // Réinitialiser les produits
    filteredProducts = [...products];
    
    // Mettre à jour le compteur de produits
    if (productsCount) {
      productsCount.textContent = products.length;
    }
    
    // Recharger les catégories avec tous les produits
    loadCategoryProducts('maison', 'Maison');
    loadCategoryProducts('mode', 'Mode éthique');
    loadCategoryProducts('cosmetiques', 'Cosmétiques naturels');
    loadCategoryProducts('alimentation', 'Alimentation bio');
    
    // Réinitialiser le tri
    if (sortSelect) {
      sortSelect.value = 'default';
    }
  }

  function addToCartListeners() {
    document.querySelectorAll('.product-button').forEach(button => {
      button.addEventListener('click', function() {
        const productId = parseInt(this.getAttribute('data-id'));
        
        // Vérifier si l'utilisateur est connecté
        if (!currentUser) {
          showNotification('Veuillez vous connecter pour ajouter des produits au panier', 'error');
          showLoginModal();
          return;
        }
        
        // Trouver le produit
        const product = products.find(p => p.id === productId);
        if (!product) return;
        
        // Définir le produit sélectionné
        selectedProduct = product;
        
        // Afficher le modal d'ajout au panier
        showAddToCartModal(product);
      });
    });
  }

  function showAddToCartModal(product) {
    // Réinitialiser le formulaire
    document.getElementById('product-quantity').value = 1;
    document.getElementById('product-notes').value = '';
    
    // Afficher les informations du produit
    const productInfoContainer = document.getElementById('add-to-cart-product-info');
    productInfoContainer.innerHTML = `
      <div class="product-info-image">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="product-info-details">
        <h3>${product.name}</h3>
        <p class="product-price">${product.price.toFixed(2)} €</p>
        <p class="product-category">${product.category}</p>
      </div>
    `;
    
    // Afficher le modal
    addToCartModal.style.display = 'flex';
  }

  function addToCart(productId, quantity = 1, notes = '') {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItemIndex = cart.findIndex(item => item.id === productId);
    
    if (existingItemIndex !== -1) {
      cart[existingItemIndex].quantity += quantity;
      cart[existingItemIndex].notes = notes || cart[existingItemIndex].notes;
    } else {
      cart.push({
        id: productId,
        quantity: quantity,
        notes: notes
      });
    }
    
    // Sauvegarder le panier dans localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Mettre à jour le compteur du panier
    updateCartCount();
    
    // Afficher une notification
    showNotification(`${product.name} ajouté au panier`, 'success');
  }

  function updateCartCount() {
    if (cartCountElement) {
      const count = cart.reduce((total, item) => total + item.quantity, 0);
      cartCountElement.textContent = count;
    }
  }

  function showCartModal() {
    // Mettre à jour le contenu du panier
    updateCartContent();
    
    // Afficher le modal
    cartModal.style.display = 'flex';
  }

  function updateCartContent() {
    if (!cartItemsContainer) return;
    
    if (cart.length === 0) {
      cartEmptyMessage.classList.remove('hidden');
      cartSummary.classList.add('hidden');
      cartItemsContainer.innerHTML = '';
      return;
    }
    
    cartEmptyMessage.classList.add('hidden');
    cartSummary.classList.remove('hidden');
    
    let totalPrice = 0;
    
    cartItemsContainer.innerHTML = cart.map(item => {
      const product = products.find(p => p.id === item.id);
      if (!product) return '';
      
      const itemTotal = product.price * item.quantity;
      totalPrice += itemTotal;
      
      return `
        <div class="cart-item" data-id="${product.id}">
          <div class="cart-item-image">
            <img src="${product.image}" alt="${product.name}">
          </div>
          <div class="cart-item-details">
            <h3 class="cart-item-title">${product.name}</h3>
            <p class="cart-item-price">${product.price.toFixed(2)} € x ${item.quantity} = ${itemTotal.toFixed(2)} €</p>
            ${item.notes ? `<p class="cart-item-notes">Notes: ${item.notes}</p>` : ''}
          </div>
          <div class="cart-item-quantity">
            <button class="quantity-btn decrease-cart-quantity" data-id="${product.id}">-</button>
            <span class="quantity-value">${item.quantity}</span>
            <button class="quantity-btn increase-cart-quantity" data-id="${product.id}">+</button>
          </div>
          <div class="cart-item-remove" data-id="${product.id}">
            <i class="fas fa-trash"></i>
          </div>
        </div>
      `;
    }).join('');
    
    // Mettre à jour le prix total
    cartTotalPrice.textContent = `${totalPrice.toFixed(2)} €`;
    
    // Ajouter les écouteurs d'événements pour les boutons de quantité et de suppression
    document.querySelectorAll('.decrease-cart-quantity').forEach(button => {
      button.addEventListener('click', function() {
        const productId = parseInt(this.getAttribute('data-id'));
        updateCartItemQuantity(productId, -1);
      });
    });
    
    document.querySelectorAll('.increase-cart-quantity').forEach(button => {
      button.addEventListener('click', function() {
        const productId = parseInt(this.getAttribute('data-id'));
        updateCartItemQuantity(productId, 1);
      });
    });
    
    document.querySelectorAll('.cart-item-remove').forEach(button => {
      button.addEventListener('click', function() {
        const productId = parseInt(this.getAttribute('data-id'));
        removeCartItem(productId);
      });
    });
  }

  function updateCartItemQuantity(productId, change) {
    const itemIndex = cart.findIndex(item => item.id === productId);
    if (itemIndex === -1) return;
    
    cart[itemIndex].quantity += change;
    
    if (cart[itemIndex].quantity < 1) {
      cart[itemIndex].quantity = 1;
    }
    
    // Sauvegarder le panier dans localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Mettre à jour le compteur du panier
    updateCartCount();
    
    // Mettre à jour le contenu du panier
    updateCartContent();
  }

  function removeCartItem(productId) {
    cart = cart.filter(item => item.id !== productId);
    
    // Sauvegarder le panier dans localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Mettre à jour le compteur du panier
    updateCartCount();
    
    // Mettre à jour le contenu du panier
    updateCartContent();
  }

  function clearCart() {
    cart = [];
    
    // Sauvegarder le panier dans localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Mettre à jour le compteur du panier
    updateCartCount();
    
    // Mettre à jour le contenu du panier
    updateCartContent();
  }

  function showNotification(message, type = 'success') {
    // Créer l'élément de notification
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Ajouter au DOM
    document.body.appendChild(notification);
    
    // Afficher la notification
    setTimeout(() => {
      notification.classList.add('show');
    }, 10);
    
    // Supprimer après 3 secondes
    setTimeout(() => {
      notification.classList.remove('show');
      
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, 3000);
  }

  function checkDarkMode() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      if (themeToggle) {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
      }
    }
  }

  function toggleDarkMode() {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
    
    if (themeToggle) {
      themeToggle.innerHTML = isDarkMode ? 
        '<i class="fas fa-sun"></i>' : 
        '<i class="fas fa-moon"></i>';
    }
  }

  function toggleMobileMenu() {
    // Créer le menu mobile s'il n'existe pas
    let mobileMenu = document.querySelector('.mobile-menu');
    
    if (!mobileMenu) {
      mobileMenu = document.createElement('div');
      mobileMenu.className = 'mobile-menu';
      
      // Cloner les liens de navigation
      const navLinks = document.querySelector('.nav-links');
      const navLinksClone = navLinks.cloneNode(true);
      
      // Créer l'en-tête du menu mobile
      const mobileMenuHeader = document.createElement('div');
      mobileMenuHeader.className = 'mobile-menu-header';
      
      const closeButton = document.createElement('button');
      closeButton.className = 'mobile-menu-close';
      closeButton.innerHTML = '<i class="fas fa-times"></i>';
      closeButton.addEventListener('click', function() {
        document.body.classList.remove('menu-open');
      });
      
      mobileMenuHeader.appendChild(closeButton);
      
      // Assembler le menu mobile
      mobileMenu.appendChild(mobileMenuHeader);
      mobileMenu.appendChild(navLinksClone);
      
      // Ajouter au DOM
      document.body.appendChild(mobileMenu);
      
      // Ajouter des styles au menu mobile
      mobileMenu.style.position = 'fixed';
      mobileMenu.style.top = '0';
      mobileMenu.style.left = '0';
      mobileMenu.style.width = '80%';
      mobileMenu.style.maxWidth = '300px';
      mobileMenu.style.height = '100%';
      mobileMenu.style.backgroundColor = 'var(--background)';
      mobileMenu.style.zIndex = '1000';
      mobileMenu.style.boxShadow = '2px 0 10px rgba(0, 0, 0, 0.1)';
      mobileMenu.style.transform = 'translateX(-100%)';
      mobileMenu.style.transition = 'transform 0.3s ease';
      mobileMenu.style.padding = '20px';
      
      mobileMenuHeader.style.display = 'flex';
      mobileMenuHeader.style.justifyContent = 'flex-end';
      mobileMenuHeader.style.marginBottom = '20px';
      
      closeButton.style.background = 'none';
      closeButton.style.border = 'none';
      closeButton.style.fontSize = '1.5rem';
      closeButton.style.cursor = 'pointer';
      
      // Styles pour les liens dans le menu mobile
      const mobileLinks = mobileMenu.querySelectorAll('a');
      mobileLinks.forEach(link => {
        link.style.display = 'block';
        link.style.padding = '10px 0';
        link.style.borderBottom = '1px solid var(--border)';
      });
    }
    
    // Toggle la classe pour ouvrir/fermer le menu
    document.body.classList.toggle('menu-open');
    
    // Ajouter un style pour le body quand le menu est ouvert
    if (document.body.classList.contains('menu-open')) {
      mobileMenu.style.transform = 'translateX(0)';
      
      // Ajouter un overlay
      let overlay = document.querySelector('.mobile-menu-overlay');
      if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'mobile-menu-overlay';
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        overlay.style.zIndex = '999';
        overlay.style.opacity = '0';
        overlay.style.transition = 'opacity 0.3s ease';
        
        overlay.addEventListener('click', function() {
          document.body.classList.remove('menu-open');
          this.style.opacity = '0';
          mobileMenu.style.transform = 'translateX(-100%)';
          
          setTimeout(() => {
            this.remove();
          }, 300);
        });
        
        document.body.appendChild(overlay);
        
        setTimeout(() => {
          overlay.style.opacity = '1';
        }, 10);
      }
    } else {
      mobileMenu.style.transform = 'translateX(-100%)';
      
      const overlay = document.querySelector('.mobile-menu-overlay');
      if (overlay) {
        overlay.style.opacity = '0';
        
        setTimeout(() => {
          overlay.remove();
        }, 300);
      }
    }
  }

  function openSearchOverlay() {
    searchOverlay.style.display = 'block';
    document.getElementById('search-input').focus();
    document.body.style.overflow = 'hidden';
  }

  function closeSearchOverlay() {
    searchOverlay.style.display = 'none';
    document.getElementById('search-input').value = '';
    document.getElementById('search-results').innerHTML = '';
    document.body.style.overflow = '';
  }

  function searchProducts(query) {
    const resultsContainer = document.getElementById('search-results');
    
    // Filtrer les produits
    const filteredProducts = products.filter(product => 
      product.name.toLowerCase().includes(query.toLowerCase()) || 
      product.description.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase())
    );
    
    // Afficher les résultats
    if (filteredProducts.length > 0) {
      resultsContainer.innerHTML = filteredProducts.map(product => `
        <div class="search-result-item" data-id="${product.id}">
          <div class="search-result-image">
            <img src="${product.image}" alt="${product.name}">
          </div>
          <div class="search-result-details">
            <h3 class="search-result-title">${product.name}</h3>
            <p class="search-result-price">${product.price.toFixed(2)} €</p>
            <span class="search-result-category">${product.category}</span>
          </div>
        </div>
      `).join('');
      
      // Ajouter les écouteurs d'événements
      document.querySelectorAll('.search-result-item').forEach(item => {
        item.addEventListener('click', function() {
          const productId = parseInt(this.getAttribute('data-id'));
          const product = products.find(p => p.id === productId);
          
          if (!currentUser) {
            showNotification('Veuillez vous connecter pour ajouter des produits au panier', 'error');
            closeSearchOverlay();
            showLoginModal();
            return;
          }
          
          selectedProduct = product;
          closeSearchOverlay();
          showAddToCartModal(product);
        });
      });
    } else {
      resultsContainer.innerHTML = '<p class="no-results">Aucun produit trouvé</p>';
    }
  }

  function showLoginModal() {
    loginModal.style.display = 'flex';
  }

  function showProfileModal() {
    // Mettre à jour les informations du profil
    document.getElementById('profile-name-display').textContent = currentUser.name;
    document.getElementById('profile-email-display').textContent = currentUser.email;
    
    // Afficher la section connectée
    document.getElementById('profile-logged-in').classList.remove('hidden');
    document.getElementById('profile-logged-out').classList.add('hidden');
    
    profileModal.style.display = 'flex';
  }

  function closeModal(modal) {
    modal.style.display = 'none';
  }

  function login(email, password) {
    const user = users.find(u => u.email === email && u.password === password);
    
    if (!user) {
      showNotification('Email ou mot de passe incorrect', 'error');
      return;
    }
    
    // Connecter l'utilisateur
    currentUser = {
      id: user.id,
      name: user.name,
      email: user.email
    };
    
    // Sauvegarder dans localStorage
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    
    // Fermer le modal
    closeModal(loginModal);
    
    // Afficher une notification
    showNotification(`Bienvenue, ${user.name}!`, 'success');
    
    // Mettre à jour l'interface
    checkUserStatus();
  }

  function register(name, email, password) {
    // Vérifier si l'email existe déjà
    if (users.some(u => u.email === email)) {
      showNotification('Cet email est déjà utilisé', 'error');
      return;
    }
    
    // Créer un nouvel utilisateur
    const newUser = {
      id: users.length + 1,
      name,
      email,
      password,
      orders: []
    };
    
    // Ajouter à la liste des utilisateurs
    users.push(newUser);
    
    // Sauvegarder dans localStorage
    localStorage.setItem('users', JSON.stringify(users));
    
    // Connecter l'utilisateur
    currentUser = {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email
    };
    
    // Sauvegarder dans localStorage
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    
    // Fermer le modal
    closeModal(loginModal);
    
    // Afficher une notification
    showNotification('Inscription réussie!', 'success');
    
    // Mettre à jour l'interface
    checkUserStatus();
  }

  function logout() {
    // Déconnecter l'utilisateur
    currentUser = null;
    
    // Supprimer de localStorage
    localStorage.removeItem('currentUser');
    
    // Fermer le modal de profil
    closeModal(profileModal);
    
    // Afficher une notification
    showNotification('Vous êtes déconnecté', 'success');
    
    // Mettre à jour l'interface
    checkUserStatus();
  }

  function checkUserStatus() {
    const profileIcon = document.getElementById('profile-icon');
    
    if (profileIcon) {
      if (currentUser) {
        profileIcon.innerHTML = '<i class="fas fa-user-check"></i>';
        profileIcon.title = `Connecté en tant que ${currentUser.name}`;
      } else {
        profileIcon.innerHTML = '<i class="fas fa-user"></i>';
        profileIcon.title = 'Se connecter';
      }
    }
  }

  function getScoreClass(score) {
    if (score >= 90) return 'score-excellent';
    if (score >= 70) return 'score-good';
    if (score >= 50) return 'score-average';
    return 'score-poor';
  }
});