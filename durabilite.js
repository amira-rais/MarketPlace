document.addEventListener('DOMContentLoaded', function() {
  // Éléments du DOM
  const cartCountElement = document.querySelector('.cart-count');
  const themeToggle = document.querySelector('.theme-toggle');
  const menuToggle = document.querySelector('.menu-toggle');
  const newsletterForm = document.querySelector('.newsletter-form');
  
  // Variables d'état
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
  // Initialisation
  init();
  
  // Fonctions
  function init() {
    updateCartCount();
    setupEventListeners();
    checkDarkMode();
    animateChartBars();
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
  
  function updateCartCount() {
    if (cartCountElement) {
      const count = cart.reduce((total, item) => total + item.quantity, 0);
      cartCountElement.textContent = count;
    }
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
  
  function animateChartBars() {
    const barFills = document.querySelectorAll('.bar-fill');
    
    if (barFills.length > 0) {
      // Initialiser les barres à hauteur zéro
      barFills.forEach(bar => {
        const targetHeight = bar.style.height;
        bar.style.height = '0%';
        
        // Animation des barres
        setTimeout(() => {
          bar.style.transition = 'height 1s ease-out';
          bar.style.height = targetHeight;
        }, 300);
      });
    }
  }
});