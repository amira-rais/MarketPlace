const products = [
  {
    id: 1,
    name: "Bouteille réutilisable",
    price: 24.99,
    category: "Maison",
    description: "Bouteille en acier inoxydable, sans BPA, idéale pour réduire les déchets plastiques.",
    image: "images/bouteille.png", // Ajout du dossier images/
    sustainabilityScore: 95,
    featured: true
  },
  {
    id: 2,
    name: "T-shirt en coton bio",
    price: 29.99,
    category: "Mode éthique",
    description: "T-shirt fabriqué en coton biologique certifié, teint avec des colorants naturels.",
    image: "images/t-shirt1.png", // Uniformisation en minuscules
    sustainabilityScore: 85,
    featured: true
  },
  {
    id: 3,
    name: "Savon solide naturel",
    price: 8.99,
    category: "Cosmétiques naturels",
    description: "Savon artisanal fabriqué à partir d'ingrédients naturels et biologiques, sans emballage plastique.",
    image: "images/savon1.png",
    sustainabilityScore: 90,
    featured: true
  },
  {
    id: 4,
    name: "Sac à provisions en toile",
    price: 12.99,
    category: "Accessoires",
    description: "Sac en coton biologique robuste et durable, parfait pour remplacer les sacs plastiques.",
    image: "images/sac1.png",
    sustainabilityScore: 88,
    featured: true
  },
  {
    id: 7,
    name: "T-shirt en coton bio 100%",
    price: 30,
    category: "Mode éthique",
    description: "T-shirt fabriqué en coton biologique certifié, teint avec des colorants naturels.",
    image: "images/t-shirt2.png", // Uniformisation en minuscules
    sustainabilityScore: 89,
    featured: true
  },
  {
    id: 8,
    name: "Savon solide naturel",
    price: 10,
    category: "Cosmétiques naturels",
    description: "Savon artisanal fabriqué à partir d'ingrédients naturels et biologiques, sans emballage plastique.",
    image: "images/savon2.png",
    sustainabilityScore: 97,
    featured: true
  },
  {
    id: 9,
    name: "Brosse à Dents Bambou",
    price: 4.90,
    category: "Hygiène",
    description: "Brosse à dents écologique avec manche en bambou et poils en nylon recyclable.",
    image: "images/brosse-a-dents.png",
    sustainabilityScore: 92, // J'ai uniformisé le nom de la propriété
    featured: false
  },
  {
    id: 12,
    name: "Déodorant Solide Citron-Verveine",
    price: 7.50,
    category: "Cosmétiques naturels",
    description: "Déodorant 100% naturel sans aluminium. Formule vegan à base d'huiles essentielles purifiantes et d'actifs minéraux.",
    image: "images/Déodorant solide.png", // Nom de fichier simplifié
    sustainabilityScore: 69, 
    featured: true
  }
];
function renderProduct(product) {
  return `
    <div class="product-card">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" 
             onerror="this.onerror=null;this.src='images/placeholder.png'">
      </div>
      <div class="product-info">
        <h3>${product.name}</h3>
        <p class="product-category">${product.category}</p>
        <div class="product-sustainability">
          ${getSustainabilityStars(product.sustainabilityScore)}
        </div>
        <div class="product-footer">
          <span class="product-price">${product.price.toFixed(2)} €</span>
          <button class="add-to-cart" data-id="${product.id}">
            <i class="fas fa-shopping-cart"></i>
          </button>
        </div>
      </div>
    </div>
  `;
}