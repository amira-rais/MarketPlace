document.addEventListener('DOMContentLoaded', function() {
  // Données des produits
  const products = [
    {
      id: 1,
      name: "Bouteille réutilisable",
      price: 24.99,
      category: "Maison",
      description: "Bouteille en acier inoxydable, sans BPA, idéale pour réduire les déchets plastiques.",
      image: "https://via.placeholder.com/300",
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
      image: "https://via.placeholder.com/300",
      sustainabilityScore: 90,
      featured: true
    },
    {
      id: 4,
      name: "Sac à provisions en toile",
      price: 12.99,
      category: "Accessoires",
      description: "Sac en coton biologique robuste et durable, parfait pour remplacer les sacs plastiques.",
      image: "https://via.placeholder.com/300",
      sustainabilityScore: 88,
      featured: true
    },
    {
      id: 5,
      name: "Brosse à dents en bambou",
      price: 4.99,
      category: "Maison",
      description: "Brosse à dents avec manche en bambou biodégradable et poils recyclables.",
      image: "https://via.placeholder.com/300",
      sustainabilityScore: 92,
      featured: false
    },
    {
      id: 6,
      name: "Shampoing solide",
      price: 11.99,
      category: "Cosmétiques naturels",
      description: "Shampoing solide sans sulfates ni parabènes, avec des ingrédients naturels.",
      image: "https://via.placeholder.com/300",
      sustainabilityScore: 87,
      featured: false
    }
  ];
  
  // Éléments du DOM
  const cartItemsContainer = document.getElementById('cart-items');
  const emptyCartElement = document.getElementById('empty-cart');
  const cartSummaryElement = document.getElementById('cart-summary');
  const subtotalElement = document.getElementById('subtotal');
  const shippingElement = document.getElementById('shipping');
  const taxElement = document.getElementById('tax');
  const totalElement = document.getElementById('total');
  const avgSustainabilityElement = document.getElementById('avg-sustainability');
  const avgSustainabilityValueElement = document.getElementById('avg-sustainability-value');
  const ecoPackagingElement = document.getElementById('eco-packaging');
  const checkoutButton = document.getElementById('checkout-btn');
  const promoInput = document.getElementById('promo-input');
  const applyPromoButton = document.getElementById('apply-promo');
  const recommendedProductsContainer = document.getElementById('recommended-products');
  const cartCountElement = document.querySelector('.cart-count');
  const themeToggle = document.querySelector('.theme-toggle');
  const menuToggle = document.querySelector('.menu-toggle');
  const newsletterForm = document.querySelector('.newsletter-form');
  
  // Variables d'état
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let promoApplied = false;
  let promoDiscount = 0;
  
  // Initialisation
  init();
  
  // Fonctions
  function init() {
    loadCart();
    updateCartSummary();
    loadRecommendedProducts();
    setupEventListeners();
    checkDarkMode();
  }
  
  function setupEventListeners() {
    // Appliquer un code promo
    if (applyPromoButton) {
      applyPromoButton.addEventListener('click', function() {
        applyPromoCode();
      });
    }
    
    // Procéder au paiement
    if (checkoutButton) {
      checkoutButton.addEventListener('click', function() {
        if (cart.length > 0) {
          showNotification('Redirection vers la page de paiement...');
          // Ici, vous redirigeriez normalement vers une page de paiement
        }
      });
    }
    
    // Toggle menu mobile
    if (menuToggle) {
      menuToggle.addEventListener('click', function() {
        document.body.classList.toggle('menu-open');
      });
    }
    
    // Toggle thème sombre
    if (themeToggle) {
      themeToggle.addEventListener('click', toggleDarkMode);
    }
    
    // Formulaire de newsletter
    if (newsletterForm) {
      newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const emailInput = this.querySelector('input[type="email"]');
        if (emailInput && emailInput.value) {
          showNotification('Merci de vous être inscrit à notre newsletter!');
          emailInput.value = '';
        }
      });
    }
  }
  
  function loadCart() {
    if (!cartItemsContainer) return;
    
    if (cart.length === 0) {
      // Afficher le message de panier vide
      if (emptyCartElement) emptyCartElement.style.display = 'block';
      if (cartSummaryElement) cartSummaryElement.style.opacity = '0.5';
      if (checkoutButton) checkoutButton.disabled = true;
      return;
    }
    
    // Masquer le message de panier vide
    if (emptyCartElement) emptyCartElement.style.display = 'none';
    if (cartSummaryElement) cartSummaryElement.style.opacity = '1';
    if (checkoutButton) checkoutButton.disabled = false;
    
    // Vider le conteneur
    cartItemsContainer.innerHTML = '';
    
    // Ajouter chaque article du panier
    cart.forEach(cartItem => {
      const product = products.find(p => p.id === cartItem.id);
      if (!product) return;
      
      // Déterminer la classe du score
      let scoreClass = '';
      if (product.sustainabilityScore >= 90) {
        scoreClass = 'score-excellent';
      } else if (product.sustai