document.addEventListener('DOMContentLoaded', function() {
  // Thumbnail image click handler
  const thumbnails = document.querySelectorAll('.thumbnail');
  const mainImage = document.getElementById('main-product-image');
  
  thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
      // Remove active class from all thumbnails
      thumbnails.forEach(t => t.classList.remove('active'));
      
      // Add active class to clicked thumbnail
      this.classList.add('active');
      
      // Update main image
      mainImage.src = this.src;
      mainImage.alt = this.alt;
    });
  });
  
  // Quantity selector
  const quantityInput = document.getElementById('product-quantity');
  const decreaseBtn = document.querySelector('.quantity-btn.decrease');
  const increaseBtn = document.querySelector('.quantity-btn.increase');
  
  decreaseBtn.addEventListener('click', function() {
    let value = parseInt(quantityInput.value);
    if (value > 1) {
      quantityInput.value = value - 1;
    }
  });
  
  increaseBtn.addEventListener('click', function() {
    let value = parseInt(quantityInput.value);
    if (value < parseInt(quantityInput.max)) {
      quantityInput.value = value + 1;
    }
  });
  
  // Tab switching
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');
  
  tabButtons.forEach(button => {
    button.addEventListener('click', function() {
      const tabId = this.getAttribute('data-tab');
      
      // Remove active class from all buttons and panels
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabPanels.forEach(panel => panel.classList.remove('active'));
      
      // Add active class to clicked button and corresponding panel
      this.classList.add('active');
      document.getElementById(tabId).classList.add('active');
    });
  });
  
  // Rating stars
  const ratingStars = document.querySelectorAll('.rating-stars i');
  const ratingInput = document.getElementById('review-rating');
  
  ratingStars.forEach(star => {
    star.addEventListener('click', function() {
      const rating = parseInt(this.getAttribute('data-rating'));
      ratingInput.value = rating;
      
      // Update star display
      ratingStars.forEach((s, index) => {
        if (index < rating) {
          s.classList.add('active');
          s.classList.remove('far');
          s.classList.add('fas');
        } else {
          s.classList.remove('active');
          s.classList.remove('fas');
          s.classList.add('far');
        }
      });
    });
    
    star.addEventListener('mouseover', function() {
      const rating = parseInt(this.getAttribute('data-rating'));
      
      ratingStars.forEach((s, index) => {
        if (index < rating) {
          s.classList.add('hover');
        } else {
          s.classList.remove('hover');
        }
      });
    });
    
    star.addEventListener('mouseout', function() {
      ratingStars.forEach(s => s.classList.remove('hover'));
    });
  });
  
  // Load related products
  loadRelatedProducts();
  
  function loadRelatedProducts() {
    const relatedProductsContainer = document.getElementById('related-products');
    if (!relatedProductsContainer) return;
    
    // Filter related products (same category, excluding current product)
    const currentProductId = 1; // This should be dynamic based on the actual product
    const currentCategory = 'Maison';
    
    const relatedProducts = products.filter(
      product => product.category === currentCategory && product.id !== currentProductId
    ).slice(0, 4); // Get up to 4 related products
    
    if (relatedProducts.length === 0) {
      relatedProductsContainer.innerHTML = '<p class="no-results">Aucun produit similaire trouvé</p>';
      return;
    }
    
    relatedProductsContainer.innerHTML = relatedProducts.map(product => {
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
            <a href="product-detail.html?id=${product.id}" class="product-button">
              <i class="fas fa-shopping-cart"></i> Voir le produit
            </a>
          </div>
        </div>
      `;
    }).join('');
  }
  
  function getScoreClass(score) {
    if (score >= 90) return 'score-excellent';
    if (score >= 70) return 'score-good';
    if (score >= 50) return 'score-average';
    return 'score-poor';
  }
  
  // Add to cart form submission
  const addToCartForm = document.querySelector('.add-to-cart-form');
  if (addToCartForm) {
    addToCartForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const quantity = parseInt(quantityInput.value);
      const productId = 1; // This should be dynamic based on the actual product
      
      // Find the product in the products array
      const product = products.find(p => p.id === productId);
      if (!product) return;
      
      // Add to cart
      addToCart(productId, quantity);
      
      // Show success message
      showNotification(`${product.name} ajouté au panier`, 'success');
    });
  }
  
  // This function should be in your main script.js
  function addToCart(productId, quantity = 1) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItemIndex = cart.findIndex(item => item.id === productId);
    
    if (existingItemIndex !== -1) {
      cart[existingItemIndex].quantity += quantity;
    } else {
      cart.push({
        id: productId,
        quantity: quantity
      });
    }
    
    // Save to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Update cart count
    updateCartCount();
  }
  
  function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    const cartCountElement = document.querySelector('.cart-count');
    if (cartCountElement) {
      cartCountElement.textContent = count;
    }
  }
  
  function showNotification(message, type = 'success') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Styles
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.right = '20px';
    notification.style.backgroundColor = type === 'error' ? 'var(--error)' : 'var(--primary)';
    notification.style.color = 'white';
    notification.style.padding = '10px 20px';
    notification.style.borderRadius = 'var(--radius)';
    notification.style.boxShadow = 'var(--shadow)';
    notification.style.zIndex = '1000';
    notification.style.opacity = '0';
    notification.style.transform = 'translateY(20px)';
    notification.style.transition = 'opacity 0.3s, transform 0.3s';
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Trigger animation
    setTimeout(() => {
      notification.style.opacity = '1';
      notification.style.transform = 'translateY(0)';
    }, 10);
    
    // Remove after 3 seconds
    setTimeout(() => {
      notification.style.opacity = '0';
      notification.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, 3000);
  }
});