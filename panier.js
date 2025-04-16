document.addEventListener('DOMContentLoaded', function() {
    // Données des produits
    const products = [
      {
        id: 1,
        name: "Bouteille réutilisable",
        price: 24.99,
        category: "Maison",
        image: "bouteille.png",
        sustainability: 4.8,
        ecoPackaging: true
      },
      {
        id: 2,
        name: "T-shirt en coton bio",
        price: 29.99,
        category: "Mode éthique",
        image: "./images/t-shirt1.png",
        sustainability: 4.3,
        ecoPackaging: true
      },
      {
        id: 3,
        name: "Savon solide naturel",
        price: 8.99,
        category: "Cosmétiques naturels",
        image: "./images/savon1.png",
        sustainability: 4.5,
        ecoPackaging: true
      },
      {
        id: 4,
        name: "Sac à provisions en toile",
        price: 12.99,
        category: "Accessoires",
        image: "./images/sac1.png",
        sustainability: 4.4,
        ecoPackaging: true
      },
      {
        id: 5,
        name: "Brosse à dents en bambou",
        price: 4.99,
        category: "Maison",
        image: "./images/brosse-a-dents.png",
        sustainability: 4.6,
        ecoPackaging: true
      },
      {
        id: 6,
        name: "Shampoing solide",
        price: 11.99,
        category: "Cosmétiques naturels",
        image: "./images/shampoing-solide.jpg",
        sustainability: 4.35,
        ecoPackaging: true
      },
      {
        id: 12,
        name: "Déodorant Solide Citron-Verveine",
        price: 7.50,
        category: "Cosmétiques naturels",
        description: "Déodorant 100% naturel sans aluminium.",
        image: "./images/deodorant-solide.png",
        sustainability: 4.2, 
        ecoPackaging: true
      }
    ];
  
    // Éléments du DOM
    const cartItemsContainer = document.getElementById('cart-items');
    const emptyCartElement = document.getElementById('empty-cart');
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
  
    // Variables d'état
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let promoDiscount = 0;
  
    // Initialisation
    init();
  
    function init() {
      loadCart();
      updateCartSummary();
      loadRecommendedProducts();
      setupEventListeners();
    }
  
    function setupEventListeners() {
      applyPromoButton.addEventListener('click', applyPromoCode);
      checkoutButton.addEventListener('click', proceedToCheckout);
    }
  
    function loadCart() {
      cartItemsContainer.innerHTML = '';
  
      if (cart.length === 0) {
        emptyCartElement.style.display = 'flex';
        checkoutButton.disabled = true;
        return;
      }
  
      emptyCartElement.style.display = 'none';
      checkoutButton.disabled = false;
  
      cart.forEach((item, index) => {
        const product = products.find(p => p.id === item.id);
        if (!product) return;
  
        const cartItemElement = document.createElement('div');
        cartItemElement.className = 'cart-item';
        cartItemElement.innerHTML = `
          <div class="item-image">
            <img src="${product.image}" alt="${product.name}" onerror="this.src='./images/placeholder.png'">
          </div>
          <div class="item-details">
            <h3 class="item-name">${product.name}</h3>
            <p class="item-category">${product.category}</p>
            <div class="item-sustainability">
              <span>Durabilité:</span>
              <div class="sustainability-stars">
                ${getSustainabilityStars(product.sustainability)}
              </div>
            </div>
            <div class="item-packaging">
              <i class="fas ${product.ecoPackaging ? 'fa-check-circle' : 'fa-times-circle'}"></i>
              <span>Emballage ${product.ecoPackaging ? 'écologique' : 'non écologique'}</span>
            </div>
          </div>
          <div class="item-price">
            <span class="price">${product.price.toFixed(2)} €</span>
          </div>
          <div class="item-quantity">
            <button class="quantity-btn minus" data-index="${index}">-</button>
            <span class="quantity">${item.quantity}</span>
            <button class="quantity-btn plus" data-index="${index}">+</button>
          </div>
          <div class="item-subtotal">
            <span>${(product.price * item.quantity).toFixed(2)} €</span>
          </div>
          <button class="item-remove" data-index="${index}">
            <i class="fas fa-trash"></i>
          </button>
        `;
        cartItemsContainer.appendChild(cartItemElement);
      });
  
      document.querySelectorAll('.quantity-btn').forEach(btn => {
        btn.addEventListener('click', function() {
          const index = parseInt(this.getAttribute('data-index'));
          if (this.classList.contains('minus')) {
            updateQuantity(index, -1);
          } else {
            updateQuantity(index, 1);
          }
        });
      });
  
      document.querySelectorAll('.item-remove').forEach(btn => {
        btn.addEventListener('click', function() {
          const index = parseInt(this.getAttribute('data-index'));
          removeItem(index);
        });
      });
  
      updateCartCount();
    }
  
    function updateQuantity(index, change) {
      if (index >= 0 && index < cart.length) {
        cart[index].quantity += change;
  
        if (cart[index].quantity <= 0) {
          cart.splice(index, 1);
        }
  
        saveCart();
        loadCart();
        updateCartSummary();
      }
    }
  
    function removeItem(index) {
      if (index >= 0 && index < cart.length) {
        cart.splice(index, 1);
        saveCart();
        loadCart();
        updateCartSummary();
      }
    }
  
    function saveCart() {
      localStorage.setItem('cart', JSON.stringify(cart));
      updateCartCount();
    }
  
    function updateCartCount() {
      const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
      cartCountElement.textContent = totalItems;
    }
  
    function updateCartSummary() {
      if (cart.length === 0) {
        subtotalElement.textContent = '0,00 €';
        shippingElement.textContent = '0,00 €';
        taxElement.textContent = '0,00 €';
        totalElement.textContent = '0,00 €';
        avgSustainabilityElement.style.width = '0%';
        avgSustainabilityValueElement.textContent = '0';
        ecoPackagingElement.textContent = 'Aucun produit dans votre panier';
        return;
      }
  
      // Calcul du sous-total
      const subtotal = cart.reduce((sum, item) => {
        const product = products.find(p => p.id === item.id);
        return product ? sum + (product.price * item.quantity) : sum;
      }, 0);
  
      // Frais de livraison
      const shipping = subtotal >= 50 ? 0 : 4.99;
  
      // Calcul TVA (20% du sous-total)
      const tax = subtotal * 0.2;
  
      // Total avec réduction promo
      const totalBeforeDiscount = subtotal + shipping;
      const total = totalBeforeDiscount * (1 - promoDiscount);
  
      // Mise à jour de l'affichage
      subtotalElement.textContent = subtotal.toFixed(2) + ' €';
      shippingElement.textContent = shipping.toFixed(2) + ' €';
      taxElement.textContent = tax.toFixed(2) + ' €';
      totalElement.textContent = total.toFixed(2) + ' €';
  
      // Calcul du score écologique moyen
      const totalSustainability = cart.reduce((sum, item) => {
        const product = products.find(p => p.id === item.id);
        return product ? sum + (product.sustainability * item.quantity) : sum;
      }, 0);
  
      const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
      const avgSustainability = totalSustainability / totalQuantity;
      
      const sustainabilityPercentage = (avgSustainability / 5) * 100;
      avgSustainabilityElement.style.width = sustainabilityPercentage + '%';
      avgSustainabilityValueElement.textContent = avgSustainability.toFixed(1);
  
      // Vérification emballage écologique
      const allEcoPackaging = cart.every(item => {
        const product = products.find(p => p.id === item.id);
        return product ? product.ecoPackaging : false;
      });
  
      ecoPackagingElement.textContent = allEcoPackaging 
        ? 'Tous les produits utilisent un emballage écologique' 
        : 'Certains produits n\'utilisent pas d\'emballage écologique';
    }
  
    function getSustainabilityStars(rating) {
      let stars = '';
      for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
          stars += '<i class="fas fa-star"></i>';
        } else if (i - 0.5 <= rating) {
          stars += '<i class="fas fa-star-half-alt"></i>';
        } else {
          stars += '<i class="far fa-star"></i>';
        }
      }
      return stars;
    }
  
    function applyPromoCode() {
      const code = promoInput.value.trim();
      if (code === 'ECOSHOP10') {
        promoDiscount = 0.1;
        alert('Code promo appliqué : 10% de réduction !');
      } else if (code) {
        promoDiscount = 0;
        alert('Code promo invalide');
      }
      updateCartSummary();
    }
  
    function proceedToCheckout() {
      if (cart.length > 0) {
        alert('Redirection vers la page de paiement...');
        // window.location.href = 'checkout.html';
      }
    }
  
    function loadRecommendedProducts() {
      const recommended = products
        .filter(product => !cart.some(item => item.id === product.id))
        .slice(0, 3);
      
      recommendedProductsContainer.innerHTML = '';
      
      recommended.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product-card';
        productElement.innerHTML = `
          <div class="product-image">
            <img src="${product.image}" alt="${product.name}">
          </div>
          <div class="product-info">
            <h3>${product.name}</h3>
            <p class="product-category">${product.category}</p>
            <div class="product-sustainability">
              ${getSustainabilityStars(product.sustainability)}
            </div>
            <div class="product-footer">
              <span class="product-price">${product.price.toFixed(2)} €</span>
              <button class="add-to-cart" data-id="${product.id}">
                <i class="fas fa-shopping-cart"></i>
              </button>
            </div>
          </div>
        `;
        recommendedProductsContainer.appendChild(productElement);
      });
  
      document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', function() {
          const productId = parseInt(this.getAttribute('data-id'));
          addToCart(productId);
        });
      });
    }
  
    function addToCart(productId) {
      const product = products.find(p => p.id === productId);
      if (!product) return;
  
      const existingItem = cart.find(item => item.id === productId);
      
      if (existingItem) {
        existingItem.quantity++;
      } else {
        cart.push({
          id: productId,
          quantity: 1
        });
      }
      
      saveCart();
      loadCart();
      updateCartSummary();
      loadRecommendedProducts();
      alert(`${product.name} a été ajouté à votre panier !`);
    }
    function proceedToCheckout() {
        if (cart.length > 0) {
            // Sauvegarder les infos nécessaires pour la page de paiement
            const checkoutData = {
                items: cart,
                subtotal: calculateSubtotal(),
                shipping: calculateShipping(),
                tax: calculateTax(),
                total: calculateTotal()
            };
            localStorage.setItem('checkoutData', JSON.stringify(checkoutData));
            
            // Redirection vers la page de paiement
            window.location.href = 'paiement.html';
        } else {
            alert('Votre panier est vide');
        }
    }
    
    function calculateSubtotal() {
        return cart.reduce((sum, item) => {
            const product = products.find(p => p.id === item.id);
            return product ? sum + (product.price * item.quantity) : sum;
        }, 0);
    }
    
    function calculateShipping() {
        return calculateSubtotal() >= 50 ? 0 : 4.99;
    }
    
    function calculateTax() {
        return calculateSubtotal() * 0.2;
    }
    
    function calculateTotal() {
        return (calculateSubtotal() + calculateShipping()) * (1 - promoDiscount);
    }
  });