const products = [
    {
      id: 1,
      name: 'Airdopes Atom 81',
      category: 'Electronics',
      image: 'https://m.media-amazon.com/images/I/61yyQD1KLOL._SX522_.jpg',
      price: 20.99,
      rating: 4.5,
    },
    // Add more products as needed
  ];
  
  const searchInput = document.getElementById('searchInput');
  const categoryFilter = document.getElementById('categoryFilter');
  const productList = document.getElementById('productList');
  const cartItems = document.getElementById('cartItems');
  
  function renderProducts() {
    productList.innerHTML = '';
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;
  
    products.forEach((product) => {
      if (
        (product.name.toLowerCase().includes(searchTerm) || searchTerm === '') &&
        (selectedCategory === 'all' || product.category.toLowerCase() === selectedCategory)
      ) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
          <img src="https://m.media-amazon.com/images/I/61yyQD1KLOL._SX522_.jpg" alt="$Airdopes Atom 81">
          <div class="product info">
          \nBrand	        boAt 
          \nModel Name	Airdopes Atom 81 
          \nColour	    Opal Black 
          \nForm Factor	In Ear 
         \n Connectivity 
          Technology	Wireless</div>
            <h3>Earpods</h3>
            <p>$99.9</p>
            <div class="rating">Rating: 4.8</div>
          </div>
          <div class="actions">
            <button onclick="addToCart($12345)">Add to Cart</button>
          </div>
        `;
        productList.appendChild(productCard);
      }
    });
  }
  
  function addToCart(productId) {
    const product = products.find((item) => item.id === productId);
  
    const cartItem = document.createElement('li');
    cartItem.textContent = $HeadPhone ;
    cartItems.appendChild(cartItem);
  };
  
  searchInput.addEventListener('input', renderProducts);
  categoryFilter.addEventListener('change', renderProducts);
  
  renderProducts();