// Données des produits (source unique)
const products = [
  {
    id: 1,
    name: "Bouteille réutilisable",
    price: 24.99,
    category: "Maison",
    description: "Bouteille en acier inoxydable, sans BPA, idéale pour réduire les déchets plastiques.",
    image: "images/bouteille.jpg",
    sustainabilityScore: 95,
    featured: true,
    stock: 15,
    specifications: {
      matériau: "Acier inoxydable 18/8",
      capacité: "750 ml",
      dimensions: "24 cm x 7 cm (H x Ø)",
      poids: "350 g",
      isolation: "Double paroi sous vide",
      origine: "Fabriqué en France",
    },
  },
  {
    id: 2,
    name: "T-shirt en coton bio",
    price: 29.99,
    category: "Mode éthique",
    description: "T-shirt fabriqué en coton biologique certifié, teint avec des colorants naturels.",
    image: "images/t-shirt1.jpg",
    sustainabilityScore: 85,
    featured: true,
    stock: 8,
    specifications: {
      matériau: "100% coton biologique",
      tailles: "S, M, L, XL",
      couleurs: "Blanc, Noir, Bleu",
      certification: "GOTS",
      entretien: "Lavage à 30°C",
      origine: "Fabriqué au Portugal",
    },
  },
  {
    id: 3,
    name: "Savon solide naturel",
    price: 8.99,
    category: "Cosmétiques naturels",
    description: "Savon artisanal fabriqué à partir d'ingrédients naturels et biologiques, sans emballage plastique.",
    image: "images/savon-solide.jpg",
    sustainabilityScore: 90,
    featured: true,
    stock: 20,
    specifications: {
      ingrédients: "Huile d'olive, huile de coco, beurre de karité",
      poids: "100g",
      parfum: "Lavande",
      certification: "Cosmétique Bio",
      conservation: "12 mois",
      origine: "Fabriqué en France",
    },
  },
  {
    id: 4,
    name: "Sac à provisions en toile",
    price: 12.99,
    category: "Mode éthique",
    description: "Sac en coton biologique robuste et durable, parfait pour remplacer les sacs plastiques.",
    image: "images/sac1.jpg",
    sustainabilityScore: 88,
    featured: true,
    stock: 12,
    specifications: {
      matériau: "Coton biologique",
      dimensions: "40 x 35 x 10 cm",
      capacité: "15 kg",
      lavable: "Machine à 40°C",
      certification: "GOTS",
      origine: "Fabriqué en Inde",
    },
  },
  {
    id: 5,
    name: "Brosse à dents en bambou",
    price: 6.99,
    category: "Maison",
    description: "Brosse à dents écologique avec manche en bambou biodégradable et poils recyclables.",
    image: "images/brosse-a-dents.jpg",
    sustainabilityScore: 92,
    featured: false,
    stock: 25,
    specifications: {
      matériau: "Bambou et nylon",
      dimensions: "18 cm",
      poils: "Souples",
      biodégradable: "Manche 100% biodégradable",
      durée_de_vie: "3 mois",
      origine: "Fabriqué en Chine",
    },
  },
  {
    id: 6,
    name: "Shampoing solide",
    price: 11.99,
    category: "Cosmétiques naturels",
    description: "Shampoing solide sans sulfates ni parabens, emballage zéro déchet.",
    image: "images/shampoing.jpg",
    sustainabilityScore: 94,
    featured: false,
    stock: 18,
    specifications: {
      ingrédients: "Huiles végétales, beurre de karité, huiles essentielles",
      poids: "55g",
      parfum: "Agrumes",
      équivalent: "2-3 bouteilles liquides",
      certification: "Cosmétique Bio",
      origine: "Fabriqué en France",
    },
  },
  {
    id: 7,
    name: "Sac à dos en matériaux recyclés",
    price: 59.99,
    category: "Mode éthique",
    description: "Sac à dos fabriqué à partir de bouteilles plastiques recyclées, résistant à l'eau.",
    image: "images/sac3.jpg",
    sustainabilityScore: 87,
    featured: false,
    stock: 10,
    specifications: {
      matériau: "Polyester recyclé",
      dimensions: "45 x 30 x 15 cm",
      capacité: "25 litres",
      poches: "3 compartiments",
      résistance: "Imperméable",
      origine: "Fabriqué en Italie",
    },
  },
  {
    id: 8,
    name: "Pailles en inox réutilisables",
    price: 14.99,
    category: "Maison",
    description:
      "Lot de 6 pailles en acier inoxydable avec brosse de nettoyage, alternative durable aux pailles jetables.",
    image: "images/paille.jpg",
    sustainabilityScore: 89,
    featured: false,
    stock: 30,
    specifications: {
      matériau: "Acier inoxydable 304",
      dimensions: "21.5 cm x 0.6 cm",
      quantité: "Lot de 6 + brosse de nettoyage",
      entretien: "Lave-vaisselle",
      durabilité: "Réutilisable à vie",
      origine: "Fabriqué en Allemagne",
    },
  },
  {
    id: 9,
    name: "Café bio équitable",
    price: 9.99,
    category: "Alimentation bio",
    description:
      "Café issu de l'agriculture biologique et du commerce équitable, torréfié artisanalement pour préserver ses arômes.",
    image: "images/café.jpg",
    sustainabilityScore: 91,
    featured: false,
    stock: 22,
    specifications: {
      origine: "Éthiopie",
      torréfaction: "Moyenne",
      certification: "Bio et Commerce Équitable",
      conditionnement: "250g",
      arômes: "Notes de fruits rouges et de chocolat",
      conservation: "6 mois",
    },
  },
  {
    id: 10,
    name: "Beeswrap",
    price: 18.99,
    category: "Maison",
    description: "Alternative écologique au film plastique, fabriquée à partir de coton bio et de cire d'abeille.",
    image: "images/beeswrap.jpg",
    sustainabilityScore: 93,
    featured: false,
    stock: 15,
    specifications: {
      matériau: "Coton bio, cire d'abeille, huile de jojoba",
      dimensions: "Set de 3 tailles (S, M, L)",
      lavable: "À l'eau froide avec savon doux",
      réutilisable: "Jusqu'à 1 an",
      biodégradable: "100% compostable",
      origine: "Fabriqué en France",
    },
  },
  {
    id: 11,
    name: "Crème hydratante naturelle",
    price: 22.99,
    category: "Cosmétiques naturels",
    description: "Crème hydratante à base d'ingrédients naturels et biologiques, sans conservateurs chimiques.",
    image: "images/crème.jpg",
    sustainabilityScore: 86,
    featured: false,
    stock: 18,
    specifications: {
      ingrédients: "Beurre de karité, huile d'amande douce, eau florale de rose",
      contenance: "50ml",
      type_de_peau: "Tous types de peau",
      certification: "Cosmétique Bio",
      sans: "Parabens, silicones, huiles minérales",
      origine: "Fabriqué en France",
    },
  },
  {
    id: 12,
    name: "Thé vert bio",
    price: 7.99,
    category: "Alimentation bio",
    description:
      "Thé vert cultivé sans pesticides, riche en antioxydants et conditionné dans un emballage compostable.",
    image: "images/thé.jpg",
    sustainabilityScore: 90,
    featured: false,
    stock: 25,
    specifications: {
      origine: "Japon",
      variété: "Sencha",
      certification: "Agriculture Biologique",
      conditionnement: "100g",
      emballage: "Sachet compostable",
      conservation: "12 mois",
    },
  },
  // Produits supplémentaires
  {
    id: 13,
    name: "Gourde pliable en silicone",
    price: 19.99,
    category: "Maison",
    description: "Gourde pliable en silicone alimentaire, sans BPA, pratique pour les déplacements.",
    image: "images/gourde.jpg",
    sustainabilityScore: 88,
    featured: false,
    stock: 20,
    specifications: {
      matériau: "Silicone alimentaire sans BPA",
      capacité: "600 ml",
      dimensions: "24 cm x 7 cm (déplié)",
      pliable: "Se réduit à 1/3 de sa taille",
      passe_au: "Lave-vaisselle",
      origine: "Fabriqué aux Pays-Bas",
    },
  },
  {
    id: 14,
    name: "Chaussettes en bambou",
    price: 12.99,
    category: "Mode éthique",
    description: "Chaussettes fabriquées à partir de fibres de bambou, naturellement antibactériennes et respirantes.",
    image: "images/chaussettes.jpg",
    sustainabilityScore: 85,
    featured: false,
    stock: 30,
    specifications: {
      matériau: "70% bambou, 25% coton bio, 5% élasthanne",
      tailles: "36-40, 41-45",
      propriétés: "Antibactériennes, anti-transpirantes",
      entretien: "Lavage à 30°C",
      certification: "OEKO-TEX",
      origine: "Fabriqué au Portugal",
    },
  },
  {
    id: 15,
    name: "Dentifrice solide",
    price: 8.49,
    category: "Cosmétiques naturels",
    description: "Dentifrice solide naturel, sans emballage plastique, pour une hygiène bucco-dentaire écologique.",
    image: "images/dentifrice.jpg",
    sustainabilityScore: 92,
    featured: false,
    stock: 22,
    specifications: {
      ingrédients: "Argile blanche, carbonate de calcium, huiles essentielles",
      poids: "20g",
      équivalent: "2 tubes de dentifrice liquide",
      goût: "Menthe poivrée",
      certification: "Cosmétique Bio",
      origine: "Fabriqué en France",
    },
  },
  {
    id: 16,
    name: "Chocolat noir bio",
    price: 4.99,
    category: "Alimentation bio",
    description: "Chocolat noir 70% issu de l'agriculture biologique et du commerce équitable.",
    image: "images/chocolat.jpg",
    sustainabilityScore: 89,
    featured: false,
    stock: 35,
    specifications: {
      cacao: "70% minimum",
      origine: "Pérou",
      certification: "Bio et Commerce Équitable",
      poids: "100g",
      ingrédients: "Pâte de cacao, sucre de canne, beurre de cacao",
      emballage: "Papier recyclable",
    },
  },
  {
    id: 17,
    name: "Éponge lavable",
    price: 7.99,
    category: "Maison",
    description: "Éponge lavable et réutilisable en fibres naturelles, alternative durable aux éponges jetables.",
    image: "images/eponge.jpg",
    sustainabilityScore: 91,
    featured: false,
    stock: 28,
    specifications: {
      matériau: "Coton bio et fibre de sisal",
      dimensions: "12 x 8 x 2 cm",
      lavable: "Machine à 60°C",
      durabilité: "6-12 mois d'utilisation",
      biodégradable: "100% compostable en fin de vie",
      origine: "Fabriqué en France",
    },
  },
  {
    id: 18,
    name: "Écharpe en laine recyclée",
    price: 34.99,
    category: "Mode éthique",
    description: "Écharpe chaude et douce fabriquée à partir de laine recyclée, teinte avec des colorants naturels.",
    image: "images/echape.jpg",
    sustainabilityScore: 87,
    featured: false,
    stock: 15,
    specifications: {
      matériau: "80% laine recyclée, 20% fibres naturelles",
      dimensions: "180 x 30 cm",
      colorants: "Teintures naturelles",
      entretien: "Lavage à la main",
      certification: "Global Recycled Standard",
      origine: "Fabriqué en Italie",
    },
  },
  {
    id: 19,
    name: "Déodorant naturel",
    price: 9.99,
    category: "Cosmétiques naturels",
    description: "Déodorant naturel sans aluminium ni parabens, efficace et respectueux de la peau.",
    image: "images/déodorant.jpg",
    sustainabilityScore: 90,
    featured: false,
    stock: 20,
    specifications: {
      ingrédients: "Bicarbonate de soude, huile de coco, beurre de karité",
      contenance: "50g",
      parfum: "Palmarosa et sauge",
      sans: "Aluminium, parabens, alcool",
      certification: "Cosmétique Bio",
      origine: "Fabriqué en France",
    },
  },
  {
    id: 20,
    name: "Miel de forêt bio",
    price: 12.99,
    category: "Alimentation bio",
    description: "Miel de forêt issu de l'apiculture biologique, récolté dans des zones préservées.",
    image: "images/miel.jpg",
    sustainabilityScore: 93,
    featured: false,
    stock: 18,
    specifications: {
      origine: "Forêts françaises",
      récolte: "Non chauffé, extraction à froid",
      certification: "Agriculture Biologique",
      contenance: "250g",
      type: "Polyfloral",
      conditionnement: "Pot en verre",
    },
  },
  {
    id: 21,
    name: "Couverts en bambou",
    price: 15.99,
    category: "Maison",
    description: "Set de couverts en bambou réutilisables, légers et pratiques pour les déplacements.",
    image: "images/couverts.jpg",
    sustainabilityScore: 89,
    featured: false,
    stock: 25,
    specifications: {
      matériau: "Bambou 100% naturel",
      contenu: "Couteau, fourchette, cuillère, paille, brosse",
      dimensions: "20 cm",
      étui: "Coton bio",
      entretien: "Lavage à la main",
      origine: "Fabriqué au Vietnam",
    },
  },
  {
    id: 22,
    name: "Baskets éco-responsables",
    price: 79.99,
    category: "Mode éthique",
    description: "Baskets fabriquées à partir de matériaux recyclés et de caoutchouc naturel.",
    image: "images/baskets.jpg",
    sustainabilityScore: 86,
    featured: false,
    stock: 12,
    specifications: {
      matériau: "Bouteilles plastiques recyclées, caoutchouc naturel",
      semelle: "Caoutchouc naturel FSC",
      doublure: "Coton bio",
      tailles: "36-45",
      certification: "Global Recycled Standard",
      origine: "Fabriqué au Portugal",
    },
  },
  {
    id: 23,
    name: "Huile de coco bio",
    price: 8.99,
    category: "Cosmétiques naturels",
    description: "Huile de coco vierge biologique, polyvalente pour la cuisine et les soins corporels.",
    image: "images/huile.jpg",
    sustainabilityScore: 92,
    featured: false,
    stock: 30,
    specifications: {
      type: "Vierge, première pression à froid",
      contenance: "250ml",
      certification: "Agriculture Biologique",
      utilisations: "Cuisine, soins capillaires, soins corporels",
      conditionnement: "Pot en verre",
      origine: "Sri Lanka",
    },
  },
  {
    id: 24,
    name: "Pâtes complètes bio",
    price: 3.49,
    category: "Alimentation bio",
    description: "Pâtes complètes issues de l'agriculture biologique, riches en fibres et en nutriments.",
    image: "images/pates.jpg",
    sustainabilityScore: 88,
    featured: false,
    stock: 40,
    specifications: {
      ingrédients: "Farine de blé complet biologique",
      poids: "500g",
      certification: "Agriculture Biologique",
      temps_de_cuisson: "8-10 minutes",
      emballage: "Carton recyclable",
      origine: "Fabriqué en Italie",
    },
  },
];

// Codes promo
const promoCodes = {
  ECO10: { discount: 0.1, description: "10% de réduction" },
  BIENVENUE: { discount: 0.15, description: "15% de réduction pour les nouveaux clients" },
  FREESHIP: { discount: 0, freeShipping: true, description: "Livraison gratuite" },
};

// Utilisateurs (simulés)
const users = JSON.parse(localStorage.getItem("users")) || [
  {
    id: 1,
    name: "Utilisateur Test",
    email: "test@example.com",
    password: "password123", // Dans une vraie application, les mots de passe seraient hachés
    orders: [],
  },
];

// Utilisateur actuel
let currentUser = JSON.parse(localStorage.getItem("currentUser")) || null;

// Panier
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Produit sélectionné pour l'ajout au panier
let selectedProduct = null;

// Produits filtrés pour la page produits
let filteredProducts = [...products];

// Fonction pour obtenir les paramètres d'URL
function getUrlParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

// Fonction pour déterminer la classe du score
function getScoreClass(score) {
  if (score >= 90) return "score-excellent";
  if (score >= 70) return "score-good";
  if (score >= 50) return "score-average";
  return "score-poor";
}

// Fonction pour afficher une notification
function showNotification(message, type = "success") {
  // Créer l'élément de notification
  const notification = document.createElement("div");
  notification.className = `notification ${type}`;
  notification.textContent = message;

  // Styles
  notification.style.position = "fixed";
  notification.style.bottom = "20px";
  notification.style.right = "20px";
  notification.style.backgroundColor = type === "error" ? "var(--error)" : "var(--primary)";
  notification.style.color = "white";
  notification.style.padding = "10px 20px";
  notification.style.borderRadius = "var(--radius)";
  notification.style.boxShadow = "var(--shadow)";
  notification.style.zIndex = "1000";
  notification.style.opacity = "0";
  notification.style.transform = "translateY(20px)";
  notification.style.transition = "opacity 0.3s, transform 0.3s";

  // Ajouter au DOM
  document.body.appendChild(notification);

  // Déclencher l'animation
  setTimeout(() => {
    notification.style.opacity = "1";
    notification.style.transform = "translateY(0)";
  }, 10);

  // Supprimer après 3 secondes
  setTimeout(() => {
    notification.style.opacity = "0";
    notification.style.transform = "translateY(20px)";

    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
}

// Fonction pour mettre à jour le compteur du panier
function updateCartCount() {
  const cartCountElement = document.querySelector(".cart-count");
  if (cartCountElement) {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    cartCountElement.textContent = count;
  }
}

// Fonction pour ajouter un produit au panier
function addToCart(productId, quantity = 1, notes = "") {
  const product = products.find((p) => p.id === productId);
  if (!product) return;

  const existingItemIndex = cart.findIndex((item) => item.id === productId);

  if (existingItemIndex !== -1) {
    cart[existingItemIndex].quantity += quantity;
    cart[existingItemIndex].notes = notes || cart[existingItemIndex].notes;
  } else {
    cart.push({
      id: productId,
      quantity: quantity,
      notes: notes,
    });
  }

  // Sauvegarder le panier dans localStorage
  localStorage.setItem("cart", JSON.stringify(cart));

  // Mettre à jour le compteur du panier
  updateCartCount();

  // Afficher une notification
  showNotification(`${product.name} ajouté au panier`, "success");
}

// Fonction pour vérifier le mode sombre
function checkDarkMode() {
  const isDarkMode = localStorage.getItem("darkMode") === "true";
  if (isDarkMode) {
    document.body.classList.add("dark-mode");
    const themeToggle = document.querySelector(".theme-toggle");
    if (themeToggle) {
      themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
  }
}

// Fonction pour basculer le mode sombre
function toggleDarkMode() {
  const isDarkMode = document.body.classList.toggle("dark-mode");
  localStorage.setItem("darkMode", isDarkMode);

  const themeToggle = document.querySelector(".theme-toggle");
  if (themeToggle) {
    themeToggle.innerHTML = isDarkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
  }
}

// Fonction pour vérifier le statut de l'utilisateur
function checkUserStatus() {
  const profileIcon = document.getElementById("profile-icon");

  if (profileIcon) {
    if (currentUser) {
      profileIcon.innerHTML = '<i class="fas fa-user-check"></i>';
      profileIcon.title = `Connecté en tant que ${currentUser.name}`;
    } else {
      profileIcon.innerHTML = '<i class="fas fa-user"></i>';
      profileIcon.title = "Se connecter";
    }
  }
}

// Fonction pour fermer un modal
function closeModal(modal) {
  modal.style.display = "none";
}

// Fonction pour afficher le modal de connexion
function showLoginModal() {
  const loginModal = document.getElementById("login-modal");
  if (loginModal) {
    loginModal.style.display = "flex";
  }
}

// Fonction pour afficher le modal du profil
function showProfileModal() {
  const profileModal = document.getElementById("profile-modal");
  if (profileModal) {
    // Mettre à jour les informations du profil
    document.getElementById("profile-name-display").textContent = currentUser.name;
    document.getElementById("profile-email-display").textContent = currentUser.email;

    // Afficher la section connectée
    document.getElementById("profile-logged-in").classList.remove("hidden");
    document.getElementById("profile-logged-out").classList.add("hidden");

    profileModal.style.display = "flex";
  }
}

// Fonction pour afficher le modal du panier
function showCartModal() {
  const cartModal = document.getElementById("cart-modal");
  if (cartModal) {
    // Mettre à jour le contenu du panier
    updateCartContent();

    // Afficher le modal
    cartModal.style.display = "flex";
  }
}

// Fonction pour mettre à jour le contenu du panier
function updateCartContent() {
  const cartItemsContainer = document.getElementById("cart-items");
  const cartEmptyMessage = document.getElementById("cart-empty");
  const cartSummary = document.getElementById("cart-summary");
  const cartTotalPrice = document.getElementById("cart-total-price");

  if (!cartItemsContainer) return;

  if (cart.length === 0) {
    cartEmptyMessage.classList.remove("hidden");
    cartSummary.classList.add("hidden");
    cartItemsContainer.innerHTML = "";
    return;
  }

  cartEmptyMessage.classList.add("hidden");
  cartSummary.classList.remove("hidden");

  let totalPrice = 0;

  cartItemsContainer.innerHTML = cart
    .map((item) => {
      const product = products.find((p) => p.id === item.id);
      if (!product) return "";

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
          ${item.notes ? `<p class="cart-item-notes">Notes: ${item.notes}</p>` : ""}
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
    })
    .join("");

  // Mettre à jour le prix total
  cartTotalPrice.textContent = `${totalPrice.toFixed(2)} €`;

  // Ajouter les écouteurs d'événements pour les boutons de quantité et de suppression
  document.querySelectorAll(".decrease-cart-quantity").forEach((button) => {
    button.addEventListener("click", function () {
      const productId = Number.parseInt(this.getAttribute("data-id"));
      updateCartItemQuantity(productId, -1);
    });
  });

  document.querySelectorAll(".increase-cart-quantity").forEach((button) => {
    button.addEventListener("click", function () {
      const productId = Number.parseInt(this.getAttribute("data-id"));
      updateCartItemQuantity(productId, 1);
    });
  });

  document.querySelectorAll(".cart-item-remove").forEach((button) => {
    button.addEventListener("click", function () {
      const productId = Number.parseInt(this.getAttribute("data-id"));
      removeCartItem(productId);
    });
  });
}

// Fonction pour mettre à jour la quantité d'un article dans le panier
function updateCartItemQuantity(productId, change) {
  const itemIndex = cart.findIndex((item) => item.id === productId);
  if (itemIndex === -1) return;

  cart[itemIndex].quantity += change;

  if (cart[itemIndex].quantity < 1) {
    cart[itemIndex].quantity = 1;
  }

  // Sauvegarder le panier dans localStorage
  localStorage.setItem("cart", JSON.stringify(cart));

  // Mettre à jour le compteur du panier
  updateCartCount();

  // Mettre à jour le contenu du panier
  updateCartContent();
}

// Fonction pour supprimer un article du panier
function removeCartItem(productId) {
  cart = cart.filter((item) => item.id !== productId);

  // Sauvegarder le panier dans localStorage
  localStorage.setItem("cart", JSON.stringify(cart));

  // Mettre à jour le compteur du panier
  updateCartCount();

  // Mettre à jour le contenu du panier
  updateCartContent();
}

// Fonction pour vider le panier
function clearCart() {
  cart = [];

  // Sauvegarder le panier dans localStorage
  localStorage.setItem("cart", JSON.stringify(cart));

  // Mettre à jour le compteur du panier
  updateCartCount();

  // Mettre à jour le contenu du panier
  updateCartContent();
}

// Fonction pour se connecter
function login(email, password) {
  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    showNotification("Email ou mot de passe incorrect", "error");
    return;
  }

  // Connecter l'utilisateur
  currentUser = {
    id: user.id,
    name: user.name,
    email: user.email,
  };

  // Sauvegarder dans localStorage
  localStorage.setItem("currentUser", JSON.stringify(currentUser));

  // Fermer le modal
  const loginModal = document.getElementById("login-modal");
  if (loginModal) {
    closeModal(loginModal);
  }

  // Afficher une notification
  showNotification(`Bienvenue, ${user.name}!`, "success");

  // Mettre à jour l'interface
  checkUserStatus();
}

// Fonction pour s'inscrire
function register(name, email, password) {
  // Vérifier si l'email existe déjà
  if (users.some((u) => u.email === email)) {
    showNotification("Cet email est déjà utilisé", "error");
    return;
  }

  // Créer un nouvel utilisateur
  const newUser = {
    id: users.length + 1,
    name,
    email,
    password,
    orders: [],
  };

  // Ajouter à la liste des utilisateurs
  users.push(newUser);

  // Sauvegarder dans localStorage
  localStorage.setItem("users", JSON.stringify(users));

  // Connecter l'utilisateur
  currentUser = {
    id: newUser.id,
    name: newUser.name,
    email: newUser.email,
  };

  // Sauvegarder dans localStorage
  localStorage.setItem("currentUser", JSON.stringify(currentUser));

  // Fermer le modal
  const loginModal = document.getElementById("login-modal");
  if (loginModal) {
    closeModal(loginModal);
  }

  // Afficher une notification
  showNotification("Inscription réussie!", "success");

  // Mettre à jour l'interface
  checkUserStatus();
}

// Fonction pour se déconnecter
function logout() {
  // Déconnecter l'utilisateur
  currentUser = null;

  // Supprimer de localStorage
  localStorage.removeItem("currentUser");

  // Fermer le modal de profil
  const profileModal = document.getElementById("profile-modal");
  if (profileModal) {
    closeModal(profileModal);
  }

  // Afficher une notification
  showNotification("Vous êtes déconnecté", "success");

  // Mettre à jour l'interface
  checkUserStatus();
}

// Fonction pour ouvrir l'overlay de recherche
function openSearchOverlay() {
  const searchOverlay = document.getElementById("search-overlay");
  if (searchOverlay) {
    searchOverlay.style.display = "block";
    document.getElementById("search-input").focus();
    document.body.style.overflow = "hidden";
  }
}

// Fonction pour fermer l'overlay de recherche
function closeSearchOverlay() {
  const searchOverlay = document.getElementById("search-overlay");
  if (searchOverlay) {
    searchOverlay.style.display = "none";
    document.getElementById("search-input").value = "";
    document.getElementById("search-results").innerHTML = "";
    document.body.style.overflow = "";
  }
}

// Fonction pour rechercher des produits
function searchProducts(query) {
  const resultsContainer = document.getElementById("search-results");
  if (!resultsContainer) return;

  // Filtrer les produits
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase())
  );

  // Afficher les résultats
  if (filteredProducts.length > 0) {
    resultsContainer.innerHTML = filteredProducts
      .map(
        (product) => `
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
      `
      )
      .join("");

    // Ajouter les écouteurs d'événements
    document.querySelectorAll(".search-result-item").forEach((item) => {
      item.addEventListener("click", function () {
        const productId = Number.parseInt(this.getAttribute("data-id"));
        // Rediriger vers la page de détail du produit
        window.location.href = `product-detail.html?id=${productId}`;
      });
    });
  } else {
    resultsContainer.innerHTML = '<p class="no-results">Aucun produit trouvé</p>';
  }
}

// Fonction pour afficher le modal d'ajout au panier
function showAddToCartModal(product) {
  const addToCartModal = document.getElementById("add-to-cart-modal");
  if (!addToCartModal) return;

  // Réinitialiser le formulaire
  document.getElementById("product-quantity").value = 1;
  document.getElementById("product-notes").value = "";

  // Afficher les informations du produit
  const productInfoContainer = document.getElementById("add-to-cart-product-info");
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
  addToCartModal.style.display = "flex";
}

// Fonction pour basculer le menu mobile
function toggleMobileMenu() {
  // Créer le menu mobile s'il n'existe pas
  let mobileMenu = document.querySelector(".mobile-menu");

  if (!mobileMenu) {
    mobileMenu = document.createElement("div");
    mobileMenu.className = "mobile-menu";

    // Cloner les liens de navigation
    const navLinks = document.querySelector(".nav-links");
    const navLinksClone = navLinks.cloneNode(true);

    // Créer l'en-tête du menu mobile
    const mobileMenuHeader = document.createElement("div");
    mobileMenuHeader.className = "mobile-menu-header";

    const closeButton = document.createElement("button");
    closeButton.className = "mobile-menu-close";
    closeButton.innerHTML = '<i class="fas fa-times"></i>';
    closeButton.addEventListener("click", () => {
      document.body.classList.remove("menu-open");
    });

    mobileMenuHeader.appendChild(closeButton);

    // Assembler le menu mobile
    mobileMenu.appendChild(mobileMenuHeader);
    mobileMenu.appendChild(navLinksClone);

    // Ajouter au DOM
    document.body.appendChild(mobileMenu);

    // Ajouter des styles au menu mobile
    mobileMenu.style.position = "fixed";
    mobileMenu.style.top = "0";
    mobileMenu.style.left = "0";
    mobileMenu.style.width = "80%";
    mobileMenu.style.maxWidth = "300px";
    mobileMenu.style.height = "100%";
    mobileMenu.style.backgroundColor = "var(--background)";
    mobileMenu.style.zIndex = "1000";
    mobileMenu.style.boxShadow = "2px 0 10px rgba(0, 0, 0, 0.1)";
    mobileMenu.style.transform = "translateX(-100%)";
    mobileMenu.style.transition = "transform 0.3s ease";
    mobileMenu.style.padding = "20px";

    mobileMenuHeader.style.display = "flex";
    mobileMenuHeader.style.justifyContent = "flex-end";
    mobileMenuHeader.style.marginBottom = "20px";

    closeButton.style.background = "none";
    closeButton.style.border = "none";
    closeButton.style.fontSize = "1.5rem";
    closeButton.style.cursor = "pointer";

    // Styles pour les liens dans le menu mobile
    const mobileLinks = mobileMenu.querySelectorAll("a");
    mobileLinks.forEach((link) => {
      link.style.display = "block";
      link.style.padding = "10px 0";
      link.style.borderBottom = "1px solid var(--border)";
    });
  }

  // Toggle la classe pour ouvrir/fermer le menu
  document.body.classList.toggle("menu-open");

  // Ajouter un style pour le body quand le menu est ouvert
  if (document.body.classList.contains("menu-open")) {
    mobileMenu.style.transform = "translateX(0)";

    // Ajouter un overlay
    let overlay = document.querySelector(".mobile-menu-overlay");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.className = "mobile-menu-overlay";
      overlay.style.position = "fixed";
      overlay.style.top = "0";
      overlay.style.left = "0";
      overlay.style.width = "100%";
      overlay.style.height = "100%";
      overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
      overlay.style.zIndex = "999";
      overlay.style.opacity = "0";
      overlay.style.transition = "opacity 0.3s ease";

      overlay.addEventListener("click", function () {
        document.body.classList.remove("menu-open");
        this.style.opacity = "0";
        mobileMenu.style.transform = "translateX(-100%)";

        setTimeout(() => {
          this.remove();
        }, 300);
      });

      document.body.appendChild(overlay);

      setTimeout(() => {
        overlay.style.opacity = "1";
      }, 10);
    }
  } else {
    mobileMenu.style.transform = "translateX(-100%)";

    const overlay = document.querySelector(".mobile-menu-overlay");
    if (overlay) {
      overlay.style.opacity = "0";

      setTimeout(() => {
        overlay.remove();
      }, 300);
    }
  }
}

// ==================== FONCTIONS SPÉCIFIQUES À LA PAGE D'ACCUEIL ====================

// Fonction pour charger les produits en vedette0
function loadFeaturedProducts() {
  const featuredProductsContainer = document.getElementById("featured-products");
  if (!featuredProductsContainer) return;

  const featuredProducts = products.filter((product) => product.featured);

  featuredProductsContainer.innerHTML = featuredProducts
    .map((product) => {
      // Déterminer la classe du score
      const scoreClass = getScoreClass(product.sustainabilityScore);

      return `
      <div class="product-card">
        <a href="product-detail.html?id=${product.id}" class="product-link">
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
          </div>
        </a>
        <button class="product-button" data-id="${product.id}">
          <i class="fas fa-shopping-cart"></i> Ajouter au panier
        </button>
      </div>
    `;
    })
    .join("");

  // Ajouter les écouteurs d'événements pour les boutons d'ajout au panier
  addToCartListeners();
}

// Fonction pour configurer la FAQ
function setupFAQ() {
  const faqItems = document.querySelectorAll(".faq-item");
  if (faqItems.length === 0) return;

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    const toggle = item.querySelector(".faq-toggle");
    const answer = item.querySelector(".faq-answer");

    question.addEventListener("click", () => {
      // Fermer tous les autres éléments
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.querySelector(".faq-answer").classList.remove("active");
          otherItem.querySelector(".faq-toggle").classList.remove("active");
        }
      });

      // Basculer l'état actuel
      answer.classList.toggle("active");
      toggle.classList.toggle("active");
    });
  });
}

// Fonction pour animer les barres de graphique
function animateChartBars() {
  const barFills = document.querySelectorAll(".bar-fill");
  if (barFills.length === 0) return;

  // Initialiser les barres à hauteur zéro
  barFills.forEach((bar) => {
    const targetHeight = bar.style.height;
    bar.style.height = "0%";

    // Animation des barres
    setTimeout(() => {
      bar.style.transition = "height 1s ease-out";
      bar.style.height = targetHeight;
    }, 300);
  });
}

// Fonction pour ajouter les écouteurs d'événements pour les boutons d'ajout au panier
function addToCartListeners() {
  document.querySelectorAll(".product-button").forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      
      const productId = Number.parseInt(this.getAttribute("data-id"));

      // Vérifier si l'utilisateur est connecté
      if (!currentUser) {
        showNotification("Veuillez vous connecter pour ajouter des produits au panier", "error");
        showLoginModal();
        return;
      }

      // Trouver le produit
      const product = products.find((p) => p.id === productId);
      if (!product) return;

      // Ajouter directement au panier avec quantité 1
      addToCart(productId, 1);
    });
  });
}

// ==================== FONCTIONS SPÉCIFIQUES À LA PAGE PRODUITS ====================

// Fonction pour charger les produits par catégorie
function loadCategoryProducts(categorySlug, categoryName, limit = 3) {
  const productsContainer = document.getElementById(`${categorySlug}-products`);
  if (!productsContainer) return;

  const categoryProducts = filteredProducts.filter((product) => {
    if (categorySlug === "maison") return product.category === "Maison";
    if (categorySlug === "mode") return product.category === "Mode éthique";
    if (categorySlug === "cosmetiques") return product.category === "Cosmétiques naturels";
    if (categorySlug === "alimentation") return product.category === "Alimentation bio";
    return false;
  });

  const productsToShow = categoryProducts.slice(0, limit);

  productsContainer.innerHTML = productsToShow
    .map((product) => {
      // Déterminer la classe du score
      const scoreClass = getScoreClass(product.sustainabilityScore);

      return `
      <div class="product-card">
        <a href="product-detail.html?id=${product.id}" class="product-link">
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
          </div>
        </a>
        <button class="product-button" data-id="${product.id}">
          <i class="fas fa-shopping-cart"></i> Ajouter au panier
        </button>
      </div>
    `;
    })
    .join("");

  // Mettre à jour le bouton "Voir plus"
  const viewMoreBtn = document.querySelector(`.view-more[data-category="${categorySlug}"]`);
  if (viewMoreBtn) {
    if (categoryProducts.length <= limit) {
      viewMoreBtn.style.display = "none";
    } else {
      viewMoreBtn.style.display = "block";
    }
  }

  // Ajouter les écouteurs d'événements pour les boutons d'ajout au panier
  addToCartListeners();
}

// Fonction pour charger plus de produits par catégorie
function loadMoreCategoryProducts(categorySlug) {
  const productsContainer = document.getElementById(`${categorySlug}-products`);
  if (!productsContainer) return;

  const currentProducts = productsContainer.querySelectorAll(".product-card").length;
  const limit = currentProducts + 3;

  let categoryName = "";
  if (categorySlug === "maison") categoryName = "Maison";
  if (categorySlug === "mode") categoryName = "Mode éthique";
  if (categorySlug === "cosmetiques") categoryName = "Cosmétiques naturels";
  if (categorySlug === "alimentation") categoryName = "Alimentation bio";

  loadCategoryProducts(categorySlug, categoryName, limit);
}

// Fonction pour trier les produits
function sortProducts(sortValue) {
  // Trier les produits filtrés
  switch (sortValue) {
    case "price-asc":
      filteredProducts.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      filteredProducts.sort((a, b) => b.price - a.price);
      break;
    case "name-asc":
      filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "name-desc":
      filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case "sustainability-desc":
      filteredProducts.sort((a, b) => b.sustainabilityScore - a.sustainabilityScore);
      break;
    case "default":
    default:
      // Par défaut, trier par ID (ordre original)
      filteredProducts.sort((a, b) => a.id - b.id);
      break;
  }

  // Recharger les catégories avec les produits triés
  loadCategoryProducts("maison", "Maison");
  loadCategoryProducts("mode", "Mode éthique");
  loadCategoryProducts("cosmetiques", "Cosmétiques naturels");
  loadCategoryProducts("alimentation", "Alimentation bio");
}

// Fonction pour appliquer les filtres
function applyFilters() {
  // Récupérer les valeurs des filtres
  const selectedCategories = Array.from(document.querySelectorAll('input[name="category"]:checked')).map(
    (checkbox) => checkbox.value
  );
  const maxPrice = Number.parseInt(document.getElementById("price-range").value);
  const selectedSustainability = Array.from(document.querySelectorAll('input[name="sustainability"]:checked')).map(
    (checkbox) => checkbox.value
  );

  // Filtrer les produits
  filteredProducts = products.filter((product) => {
    // Filtre de catégorie
    const categoryMatch =
      selectedCategories.length === 0 ||
      selectedCategories.some((category) => {
        switch (category) {
          case "maison":
            return product.category === "Maison";
          case "mode":
            return product.category === "Mode éthique";
          case "cosmetiques":
            return product.category === "Cosmétiques naturels";
          case "alimentation":
            return product.category === "Alimentation bio";
          default:
            return false;
        }
      });

    // Filtre de prix
    const priceMatch = product.price <= maxPrice;

    // Filtre de durabilité
    const sustainabilityMatch =
      selectedSustainability.length === 0 ||
      selectedSustainability.some((level) => {
        switch (level) {
          case "excellent":
            return product.sustainabilityScore >= 90;
          case "good":
            return product.sustainabilityScore >= 70 && product.sustainabilityScore < 90;
          case "average":
            return product.sustainabilityScore >= 50 && product.sustainabilityScore < 70;
          case "poor":
            return product.sustainabilityScore < 50;
          default:
            return false;
        }
      });

    return categoryMatch && priceMatch && sustainabilityMatch;
  });

  // Mettre à jour le compteur de produits
  const productsCount = document.getElementById("products-count");
  if (productsCount) {
    productsCount.textContent = filteredProducts.length;
  }

  // Recharger les catégories avec les produits filtrés
  loadCategoryProducts("maison", "Maison");
  loadCategoryProducts("mode", "Mode éthique");
  loadCategoryProducts("cosmetiques", "Cosmétiques naturels");
  loadCategoryProducts("alimentation", "Alimentation bio");

  // Appliquer le tri actuel
  const sortSelect = document.getElementById("sort-select");
  if (sortSelect) {
    sortProducts(sortSelect.value);
  }
}

// Fonction pour réinitialiser les filtres
function resetFilters() {
  // Réinitialiser les cases à cocher
  document.querySelectorAll('input[name="category"]').forEach((checkbox) => {
    checkbox.checked = false;
  });

  document.querySelectorAll('input[name="sustainability"]').forEach((checkbox) => {
    checkbox.checked = false;
  });

  // Réinitialiser le curseur de prix
  const priceRange = document.getElementById("price-range");
  const priceValue = document.getElementById("price-value");
  if (priceRange && priceValue) {
    priceRange.value = 100;
    priceValue.textContent = "100";
  }

  // Réinitialiser les produits
  filteredProducts = [...products];

  // Mettre à jour le compteur de produits
  const productsCount = document.getElementById("products-count");
  if (productsCount) {
    productsCount.textContent = products.length;
  }

  // Recharger les catégories avec tous les produits
  loadCategoryProducts("maison", "Maison");
  loadCategoryProducts("mode", "Mode éthique");
  loadCategoryProducts("cosmetiques", "Cosmétiques naturels");
  loadCategoryProducts("alimentation", "Alimentation bio");

  // Réinitialiser le tri
  const sortSelect = document.getElementById("sort-select");
  if (sortSelect) {
    sortSelect.value = "default";
  }
}

// ==================== FONCTIONS SPÉCIFIQUES À LA PAGE DÉTAIL PRODUIT ====================

// Fonction pour charger les détails du produit
function loadProductDetail() {
  // Récupérer l'ID du produit depuis l'URL
  const productId = Number.parseInt(getUrlParameter("id"));

  // Si aucun ID n'est fourni, rediriger vers la page des produits
  if (!productId) {
    window.location.href = "produits.html";
    return;
  }

  // Trouver le produit dans les données
  const product = products.find((p) => p.id === productId);

  // Si le produit n'est pas trouvé, rediriger vers la page des produits
  if (!product) {
    window.location.href = "produits.html";
    return;
  }

  // Mettre à jour le titre de la page
  document.title = `${product.name} - EcoShop`;

  // Mettre à jour le fil d'Ariane
  const breadcrumbList = document.querySelector(".breadcrumb ul");
  if (breadcrumbList) {
    breadcrumbList.innerHTML = `
      <li><a href="index.html">Accueil</a></li>
      <li><a href="produits.html">Produits</a></li>
      <li><a href="produits.html#${product.category.toLowerCase().replace(" ", "-")}">${product.category}</a></li>
      <li>${product.name}</li>
    `;
  }

  // Mettre à jour les images du produit
  const mainImage = document.getElementById("main-product-image");
  if (mainImage) {
    mainImage.src = product.image;
    mainImage.alt = product.name;
  }

  // Mettre à jour les informations du produit
  const categoryElement = document.querySelector(".product-category");
  if (categoryElement) categoryElement.textContent = product.category;

  const titleElement = document.querySelector(".product-title");
  if (titleElement) titleElement.textContent = product.name;

  const priceElement = document.querySelector(".product-price");
  if (priceElement) priceElement.textContent = `${product.price.toFixed(2)} €`;

  // Mettre à jour la disponibilité
  const availabilityElement = document.querySelector(".availability");
  if (availabilityElement) {
    if (product.stock > 10) {
      availabilityElement.className = "availability in-stock";
      availabilityElement.innerHTML = `<i class="fas fa-check-circle"></i> En stock (${product.stock} disponibles)`;
    } else if (product.stock > 0) {
      availabilityElement.className = "availability low-stock";
      availabilityElement.innerHTML = `<i class="fas fa-exclamation-circle"></i> Stock limité (${product.stock} restants)`;
    } else {
      availabilityElement.className = "availability out-of-stock";
      availabilityElement.innerHTML = `<i class="fas fa-times-circle"></i> Rupture de stock`;
    }
  }

  // Mettre à jour le score de durabilité
  const scoreElement = document.querySelector(".score-fill");
  if (scoreElement) {
    const scoreClass = getScoreClass(product.sustainabilityScore);
    scoreElement.className = `score-fill ${scoreClass}`;
    scoreElement.style.width = `${product.sustainabilityScore}%`;

    const scoreValueElement = document.querySelector(".score-value");
    if (scoreValueElement) scoreValueElement.textContent = product.sustainabilityScore;
  }

  // Mettre à jour la description du produit
  const descriptionElement = document.querySelector(".product-description p");
  if (descriptionElement) descriptionElement.textContent = product.description;

  // Mettre à jour la description détaillée
  const descriptionPanel = document.getElementById("description");
  if (descriptionPanel) {
    const descriptionParagraph = descriptionPanel.querySelector("p");
    if (descriptionParagraph) descriptionParagraph.textContent = product.description;
  }

  // Mettre à jour les spécifications
  const specificationsPanel = document.getElementById("specifications");
  if (specificationsPanel && product.specifications) {
    const table = specificationsPanel.querySelector("table");
    if (table) {
      table.innerHTML = "";

      for (const [key, value] of Object.entries(product.specifications)) {
        const formattedKey = key.charAt(0).toUpperCase() + key.slice(1).replace("_", " ");
        table.innerHTML += `
          <tr>
            <th>${formattedKey}</th>
            <td>${value}</td>
          </tr>
        `;
      }
    }
  }

  // Mettre à jour la quantité maximale du formulaire
  const quantityInput = document.getElementById("product-quantity");
  if (quantityInput) {
    quantityInput.max = product.stock;
  }

  // Désactiver le bouton d'ajout au panier si le produit est en rupture de stock
  const addToCartBtn = document.querySelector(".add-to-cart-btn");
  if (addToCartBtn) {
    if (product.stock <= 0) {
      addToCartBtn.disabled = true;
      addToCartBtn.innerHTML = '<i class="fas fa-times-circle"></i> Indisponible';
    }
  }

  // Charger les produits similaires
  loadRelatedProducts(product);
}

// Fonction pour configurer les onglets
function setupTabs() {
  const tabButtons = document.querySelectorAll(".tab-btn");
  if (tabButtons.length === 0) return;

  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Supprimer la classe active de tous les boutons et panneaux
      document.querySelectorAll(".tab-btn").forEach((btn) => btn.classList.remove("active"));
      document.querySelectorAll(".tab-panel").forEach((panel) => panel.classList.remove("active"));

      // Ajouter la classe active au bouton cliqué
      this.classList.add("active");

      // Récupérer l'ID de l'onglet et activer le panneau correspondant
      const tabId = this.getAttribute("data-tab");
      document.getElementById(tabId).classList.add("active");
    });
  });
}

// Fonction pour configurer le sélecteur de quantité
function setupQuantitySelector() {
  const decreaseBtn = document.querySelector(".quantity-btn.decrease");
  const increaseBtn = document.querySelector(".quantity-btn.increase");
  const quantityInput = document.getElementById("product-quantity");

  if (decreaseBtn && increaseBtn && quantityInput) {
    decreaseBtn.addEventListener("click", () => {
      const value = Number.parseInt(quantityInput.value);
      if (value > 1) {
        quantityInput.value = value - 1;
      }
    });

    increaseBtn.addEventListener("click", () => {
      const value = Number.parseInt(quantityInput.value);
      const maxValue = Number.parseInt(quantityInput.max) || 10;
      if (value < maxValue) {
        quantityInput.value = value + 1;
      }
    });
  }
}

// Fonction pour configurer le formulaire d'ajout au panier
function setupAddToCartForm() {
  const addToCartForm = document.querySelector(".add-to-cart-form");
  if (!addToCartForm) return;

  addToCartForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Récupérer l'ID du produit depuis l'URL
    const productId = Number.parseInt(getUrlParameter("id"));
    if (!productId) return;

    // Récupérer la quantité
    const quantityInput = document.getElementById("product-quantity");
    const quantity = Number.parseInt(quantityInput.value);

    // Trouver le produit
    const product = products.find((p) => p.id === productId);
    if (!product) return;

    // Vérifier si l'utilisateur est connecté
    if (!currentUser) {
      showNotification("Veuillez vous connecter pour ajouter des produits au panier", "error");
      showLoginModal();
      return;
    }

    // Ajouter au panier
    addToCart(productId, quantity);

    // Afficher une notification de succès
    showNotification(`${product.name} ajouté au panier`, "success");
  });
}

// Fonction pour charger les produits similaires
function loadRelatedProducts(currentProduct) {
  if (!currentProduct) {
    // Si le produit n'est pas fourni, essayer de le récupérer depuis l'URL
    const productId = Number.parseInt(getUrlParameter("id"));
    currentProduct = products.find((p) => p.id === productId);
    if (!currentProduct) return;
  }

  // Trouver les produits de la même catégorie
  const relatedProducts = products
    .filter((p) => p.category === currentProduct.category && p.id !== currentProduct.id)
    .slice(0, 3); // Limiter à 3 produits similaires

  // Générer le HTML pour les produits similaires
  const relatedProductsHTML = relatedProducts
    .map((product) => {
      const scoreClass = getScoreClass(product.sustainabilityScore);

      return `
      <div class="product-card">
        <a href="product-detail.html?id=${product.id}" class="product-link">
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
          </div>
        </a>
        <button class="product-button" data-id="${product.id}">
          <i class="fas fa-shopping-cart"></i> Ajouter au panier
        </button>
      </div>
    `;
    })
    .join("");

  // Insérer les produits similaires dans le conteneur
  const relatedProductsContainer = document.getElementById("related-products");
  if (relatedProductsContainer) {
    relatedProductsContainer.innerHTML = relatedProductsHTML;
  }

  // Ajouter les écouteurs d'événements pour les boutons d'ajout au panier
  addToCartListeners();
}

// ==================== INITIALISATION ====================

// Attendre que le DOM soit chargé
document.addEventListener("DOMContentLoaded", () => {
  // Initialisation commune à toutes les pages
  updateCartCount();
  checkDarkMode();
  checkUserStatus();

  // Éléments du DOM communs
  const menuToggle = document.querySelector(".menu-toggle");
  const themeToggle = document.querySelector(".theme-toggle");
  const searchIcon = document.getElementById("search-icon");
  const profileIcon = document.getElementById("profile-icon");
  const cartIcon = document.getElementById("cart-icon");
  const footerAccount = document.getElementById("footer-account");
  const closeModalButtons = document.querySelectorAll(".close-modal");
  const closeSearchButton = document.querySelector(".close-search");

  // Écouteurs d'événements communs
  if (menuToggle) menuToggle.addEventListener("click", toggleMobileMenu);
  if (themeToggle) themeToggle.addEventListener("click", toggleDarkMode);
  if (searchIcon) searchIcon.addEventListener("click", (e) => { e.preventDefault(); openSearchOverlay(); });
  if (profileIcon) {
    profileIcon.addEventListener("click", (e) => {
      e.preventDefault();
      if (currentUser) {
        showProfileModal();
      } else {
        showLoginModal();
      }
    });
  }
  if (cartIcon) {
    cartIcon.addEventListener("click", (e) => {
      e.preventDefault();
      showCartModal();
    });
  }
  if (footerAccount) {
    footerAccount.addEventListener("click", (e) => {
      e.preventDefault();
      if (currentUser) {
        showProfileModal();
      } else {
        showLoginModal();
      }
    });
  }

  // Fermer les modals
  closeModalButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const modal = this.closest(".modal");
      closeModal(modal);
    });
  });

  // Fermer les modals en cliquant en dehors
  window.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) {
      closeModal(e.target);
    }
  });

  // Fermer la recherche
  if (closeSearchButton) {
    closeSearchButton.addEventListener("click", closeSearchOverlay);
  }

  // Formulaire de connexion
  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("login-email").value;
      const password = document.getElementById("login-password").value;
      login(email, password);
    });
  }

  // Formulaire d'inscription
  const registerForm = document.getElementById("register-form");
  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("register-name").value;
      const email = document.getElementById("register-email").value;
      const password = document.getElementById("register-password").value;
      const confirmPassword = document.getElementById("register-confirm").value;

      if (password !== confirmPassword) {
        showNotification("Les mots de passe ne correspondent pas", "error");
        return;
      }

      register(name, email, password);
    });
  }

  // Déconnexion
  const logoutBtn = document.getElementById("logout-btn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", (e) => {
      e.preventDefault();
      logout();
    });
  }

  // Recherche
  const searchInput = document.getElementById("search-input");
  const searchButton = document.getElementById("search-button");

  if (searchInput) {
    searchInput.addEventListener("input", function () {
      const query = this.value.trim();
      if (query.length >= 2) {
        searchProducts(query);
      } else {
        document.getElementById("search-results").innerHTML = "";
      }
    });
  }

  if (searchButton) {
    searchButton.addEventListener("click", () => {
      const query = searchInput.value.trim();
      if (query.length >= 2) {
        searchProducts(query);
      }
    });
  }

  // Actions du panier
  const clearCartBtn = document.getElementById("clear-cart");
  const checkoutBtn = document.getElementById("checkout");

  if (clearCartBtn) {
    clearCartBtn.addEventListener("click", clearCart);
  }

  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
      if (!currentUser) {
        showNotification("Veuillez vous connecter pour passer commande", "error");
        closeModal(document.getElementById("cart-modal"));
        showLoginModal();
        return;
      }

      // Simuler une commande
      showNotification("Commande passée avec succès!", "success");
      clearCart();
      closeModal(document.getElementById("cart-modal"));
    });
  }

  // Onglets des modals
  const modalTabs = document.querySelectorAll(".modal-tab");
  if (modalTabs.length > 0) {
    modalTabs.forEach((tab) => {
      tab.addEventListener("click", function () {
        const tabId = this.getAttribute("data-tab");

        // Supprimer la classe active de tous les onglets et panneaux
        document.querySelectorAll(".modal-tab").forEach((t) => t.classList.remove("active"));
        document.querySelectorAll(".modal-panel").forEach((p) => p.classList.remove("active"));

        // Ajouter la classe active à l'onglet cliqué et au panneau correspondant
        this.classList.add("active");
        document.getElementById(`${tabId}-panel`).classList.add("active");
      });
    });
  }

  // Détection de la page actuelle et initialisation spécifique
  const currentPage = window.location.pathname.split("/").pop();

  // Page d'accueil
  if (currentPage === "index.html" || currentPage === "") {
    const featuredProductsContainer = document.getElementById("featured-products");
    const faqItems = document.querySelectorAll(".faq-item");
    const barFills = document.querySelectorAll(".bar-fill");

    if (featuredProductsContainer) loadFeaturedProducts();
    if (faqItems.length > 0) setupFAQ();
    if (barFills.length > 0) animateChartBars();
  }

  // Page produits
  else if (currentPage === "produits.html") {
    const priceRange = document.getElementById("price-range");
    const priceValue = document.getElementById("price-value");
    const sortSelect = document.getElementById("sort-select");
    const resetFiltersBtn = document.getElementById("reset-filters");
    const applyFiltersBtn = document.getElementById("apply-filters");
    const viewMoreButtons = document.querySelectorAll(".view-more");
    const productsCount = document.getElementById("products-count");

    // Initialiser les catégories de produits
    if (document.getElementById("maison-products")) {
      // Réinitialiser les produits filtrés
      filteredProducts = [...products];

      // Mettre à jour le compteur de produits
      if (productsCount) {
        productsCount.textContent = products.length;
      }

      loadCategoryProducts("maison", "Maison");
      loadCategoryProducts("mode", "Mode éthique");
      loadCategoryProducts("cosmetiques", "Cosmétiques naturels");
      loadCategoryProducts("alimentation", "Alimentation bio");
    }

    // Filtres de produits
    if (priceRange) {
      priceRange.addEventListener("input", function () {
        priceValue.textContent = this.value;
      });
    }

    if (sortSelect) {
      sortSelect.addEventListener("change", function () {
        sortProducts(this.value);
      });
    }

    if (resetFiltersBtn) {
      resetFiltersBtn.addEventListener("click", resetFilters);
    }

    if (applyFiltersBtn) {
      applyFiltersBtn.addEventListener("click", applyFilters);
    }

    // Boutons "Voir plus"
    if (viewMoreButtons) {
      viewMoreButtons.forEach((button) => {
        button.addEventListener("click", function () {
          const category = this.getAttribute("data-category");
          loadMoreCategoryProducts(category);
        });
      });
    }

    // Gestion des ancres pour les catégories
    window.addEventListener("hashchange", () => {
      const activeCategory = window.location.hash.substring(1); // Gets #maison → "maison"
      document.querySelectorAll(".category-section").forEach((section) => {
        section.style.borderLeft = section.id === activeCategory ? "3px solid green" : "none";
      });
    });

    // Vérifier s'il y a une ancre dans l'URL au chargement
    if (window.location.hash) {
      const activeCategory = window.location.hash.substring(1);
      document.querySelectorAll(".category-section").forEach((section) => {
        section.style.borderLeft = section.id === activeCategory ? "3px solid green" : "none";
      });
    }
  }

  // Page détail produit
  else if (currentPage === "product-detail.html") {
    loadProductDetail();
    setupTabs();
    setupQuantitySelector();
    setupAddToCartForm();
  }
});

