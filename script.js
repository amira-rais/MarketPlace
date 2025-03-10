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
    image: "https://via.placeholder.com/300",
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
  }
];

// Panier
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
  // Éléments du DOM
  const featuredProductsContainer = document.getElementById('featured-products');
  const cartCountElement = document.querySelector('.cart-count');
  const menuToggle = document.querySelector('.menu-toggle');
  const themeToggle = document.querySelector('.theme-toggle');
  const tabButtons = document.querySelectorAll('.tab-btn');
  const newsletterForm = document.querySelector('.newsletter-form');
  
  // Initialisation
  init();
  
  // Fonctions
  function init() {
    loadFeaturedProducts();
    updateCartCount();
    setupEventListeners();
    checkDarkMode();
  }
  
  function loadFeaturedProducts() {
    if (featuredProductsContainer) {
      const featuredProducts = products.filter(product => product.featured);
      
      featuredProductsContainer.innerHTML = featuredProducts.map(product => {
        // Déterminer la classe du score
        let scoreClass = '';
        if (product.sustainabilityScore >= 90) {
          scoreClass = 'score-excellent';
        } else if (product.sustainabilityScore >= 70) {
          scoreClass = 'score-good';
        } else if (product.sustainabilityScore >= 50) {
          scoreClass = 'score-average';
        } else {
          scoreClass = 'score-poor';
        }
        
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
      document.querySelectorAll('.product-button').forEach(button => {
        button.addEventListener('click', function() {
          const productId = parseInt(this.getAttribute('data-id'));
          addToCart(productId);
        });
      });
    }
  }
  
  function setupEventListeners() {
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
    
    // Onglets
    if (tabButtons) {
      tabButtons.forEach(button => {
        button.addEventListener('click', function() {
          const tabId = this.getAttribute('data-tab');
          
          // Supprimer la classe active de tous les boutons et panneaux
          document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
          });
          document.querySelectorAll('.tab-panel').forEach(panel => {
            panel.classList.remove('active');
          });
          
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
          showNotification('Merci de vous être inscrit à notre newsletter!');
          emailInput.value = '';
        }
      });
    }
  }
  
  function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({
        id: productId,
        quantity: 1
      });
    }
    
    // Sauvegarder le panier dans localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Mettre à jour le compteur du panier
    updateCartCount();
    
    // Afficher une notification
    showNotification(`${product.name} ajouté au panier`);
  }
  
  function updateCartCount() {
    if (cartCountElement) {
      const count = cart.reduce((total, item) => total + item.quantity, 0);
      cartCountElement.textContent = count;
    }
  }
  
  function showNotification(message) {
    // Créer l'élément de notification
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    // Styles
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.right = '20px';
    notification.style.backgroundColor = 'var(--primary)';
    notification.style.color = 'white';
    notification.style.padding = '10px 20px';
    notification.style.borderRadius = 'var(--radius)';
    notification.style.boxShadow = 'var(--shadow)';
    notification.style.zIndex = '1000';
    notification.style.opacity = '0';
    notification.style.transform = 'translateY(20px)';
    notification.style.transition = 'opacity 0.3s, transform 0.3s';
    
    // Ajouter au DOM
    document.body.appendChild(notification);
    
    // Déclencher l'animation
    setTimeout(() => {
      notification.style.opacity = '1';
      notification.style.transform = 'translateY(0)';
    }, 10);
    
    // Supprimer après 3 secondes
    setTimeout(() => {
      notification.style.opacity = '0';
      notification.style.transform = 'translateY(20px)';
      
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
});