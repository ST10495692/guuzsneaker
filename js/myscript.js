// Hamburger Menu Toggle
(document.getElementById('menu-toggle')).addEventListener('click', () => {
  (document.getElementById('nav-links')).classList.toggle('active');
});

// Fade-in Animation
window.addEventListener('scroll', () => {
  document.querySelectorAll('.fade-in').forEach(el => {
    const rect = el.getBoundingClientRect();
    if(rect.top < window.innerHeight - 100) el.classList.add('show');
  });
});

// Dynamic Products
const products = [
  {
    title: "Nike Air Force",
    desc1: "Lightweight. Breathable. Stylish.",
    desc2: "Designed by Bruce Kilgore and introduced in 1982, the Air Force 1 was the first-ever basketball shoe to feature Nike Air technology, revolutionising the game and sneaker culture forever.",
    img: "img/sneaker1.jpg"
  },
  {
    title: "Nike Jordans",
    desc1: "Everyday comfort, premium feel.",
    desc2: "Air Jordan is a type or brand of basketball shoes produced by Nike, Inc. since 1984. In the name “Air” means air cushion technology. “Jordan” means Michael Jordan who is an NBA basketball player.",
    img: "img/sneaker2.jpg"
  },
  {
    title: "Adidas",
    desc1: "Perfect balance of speed and stability.",
    desc2: "Adidas Originals covers sports fashion styles with references to the decades between the 1940s and the 1990s. The brand has a distinctively retro old school feel.",
    img: "img/sneaker3.jpg"
  },
  {
    title: "New Balance",
    desc1: "Wide variety of athletic and casual footwear.",
    desc2: "New Balance produces a wide variety of athletic and casual footwear and apparel for men, women, and children.",
    img: "img/sneaker4.jpg"
  }
];

const productGrid = document.getElementById('product-grid');
products.forEach(p => {
  const card = document.createElement('div');
  card.classList.add('product-card');
  card.innerHTML = `
    <img src="${p.img}" alt="${p.title}" class="lightbox-thumb">
    <p class="product-title">${p.title}</p>
    <p>${p.desc1}</p>
    <p>${p.desc2}</p>
  `;
  productGrid.appendChild(card);
});

// Lightbox
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
lightbox.innerHTML = `<span class="close">&times;</span><img class="lightbox-img">`;
document.body.appendChild(lightbox);

const lightboxImg = lightbox.querySelector('.lightbox-img');
document.querySelectorAll('.lightbox-thumb').forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'block';
    lightboxImg.src = img.src;
  });
});
lightbox.querySelector('.close').addEventListener('click', () => lightbox.style.display = 'none');
window.addEventListener('click', e => { if(e.target === lightbox) lightbox.style.display = 'none'; });
// Hamburger Menu Toggle (shared)
(document.getElementById('menu-toggle')).addEventListener('click', () => (document.getElementById('nav-links')).classList.toggle('active'));

// Scroll fade-in animation (shared)
window.addEventListener('scroll', () => {
  document.querySelectorAll('.fade-in').forEach(el => {
    const rect = el.getBoundingClientRect();
    if(rect.top < window.innerHeight - 100) el.classList.add('show');
  });
});

// Shop products
const shopProducts = [
  {title:"Nike Air Force", price:"R2500", img:"img/sneaker1.jpg"},
  {title:"Nike Jordans", price:"R3500", img:"img/sneaker2.jpg"},
  {title:"Adidas Classic", price:"R4500", img:"img/sneaker3.jpg"},
  {title:"New Balance", price:"R1800", img:"img/sneaker4.jpg"}
];

const shopGrid = document.getElementById('shop-grid');

function displayShopProducts(products) {
  shopGrid.innerHTML = "";
  products.forEach(p => {
    const card = document.createElement('div');
    card.classList.add('product-card');
    card.innerHTML = `
      <img src="${p.img}" alt="${p.title}" class="lightbox-thumb">
      <p class="product-title">${p.title}</p>
      <p class="price">${p.price}</p>
      <a href="product.html">View Product</a>
    `;
    shopGrid.appendChild(card);
  });
  addLightbox(); // Attach lightbox to new images
}

// Initial display
displayShopProducts(shopProducts);

// Search functionality
const searchInput = document.getElementById('product-search');
searchInput.addEventListener('input', e => {
  const query = e.target.value.toLowerCase();
  const filtered = shopProducts.filter(p => p.title.toLowerCase().includes(query));
  displayShopProducts(filtered);
});

// Lightbox (shared)
function addLightbox() {
  let lightbox = document.getElementById('lightbox');
  if(!lightbox) {
    lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.innerHTML = `<span class="close">&times;</span><img class="lightbox-img">`;
    document.body.appendChild(lightbox);
  }
  const lightboxImg = lightbox.querySelector('.lightbox-img');
  document.querySelectorAll('.lightbox-thumb').forEach(img => {
    img.addEventListener('click', () => {
      lightbox.style.display = 'block';
      lightboxImg.src = img.src;
    });
  });
  lightbox.querySelector('.close').addEventListener('click', () => lightbox.style.display = 'none');
  window.addEventListener('click', e => { if(e.target === lightbox) lightbox.style.display = 'none'; });
}
// Hamburger Menu Toggle (shared)
(document.getElementById('menu-toggle')).addEventListener('click', () => (document.getElementById('nav-links')).classList.toggle('active'));

// Scroll fade-in animation (shared)
window.addEventListener('scroll', () => {
  document.querySelectorAll('.fade-in').forEach(el => {
    const rect = el.getBoundingClientRect();
    if(rect.top < window.innerHeight - 100) el.classList.add('show');
  });
});

// Accordion for Mission & Vision
document.querySelectorAll('.accordion-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
    btn.classList.toggle('active');
  });
});
// Hamburger Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
(document.getElementById('menu-toggle')).addEventListener('click', () => (document.getElementById('nav-links')).classList.toggle('active'));

// Scroll fade-in animation
window.addEventListener('scroll', () => {
  document.querySelectorAll('.fade-in').forEach(el => {
    const rect = el.getBoundingClientRect();
    if(rect.top < window.innerHeight - 100) el.classList.add('show');
  });
});

// Contact Form Validation & AJAX Simulation
const contactForm = document.getElementById('contactForm');
if(contactForm){
  contactForm.addEventListener('submit', function(e){
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const response = document.getElementById('formResponse');

    if(name === "" || email === "" || message === ""){
      response.style.color = 'red';
      response.textContent = "Please fill in all fields.";
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if(!emailRegex.test(email)){
      response.style.color = 'red';
      response.textContent = "Please enter a valid email.";
      return;
    }

    // Simulate AJAX
    setTimeout(() => {
      response.style.color = 'green';
      response.textContent = "Thank you! Your message has been sent.";
      contactForm.reset();
    }, 1000);
  });
}
let cart = [];

function addToCart(name, price, inputId) {
  const qtyInput = document.getElementById(`qty-${inputId}`);
  const quantity = parseInt(qtyInput.value);

  // Check if item already exists
  const existingItem = cart.find(item => item.name === name);
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({ name, price, quantity });
  }

  renderCart();
  openCart();
}

function renderCart() {
  const cartItemsDiv = document.getElementById("cart-items");
  const cartCount = document.getElementById("cart-count");
  const cartTotal = document.getElementById("cart-total");

  if (cart.length === 0) {
    cartItemsDiv.innerHTML = "Cart is empty";
    cartCount.textContent = 0;
    cartTotal.textContent = 0;
  } else {
    cartItemsDiv.innerHTML = "";
    let totalItems = 0;
    let totalPrice = 0;

    cart.forEach(item => {
      const div = document.createElement("div");
      div.className = "cart-item";
      div.textContent = `${item.name} x${item.quantity} - R${item.price * item.quantity}`;
      cartItemsDiv.appendChild(div);

      totalItems += item.quantity;
      totalPrice += item.price * item.quantity;
    });

    cartCount.textContent = totalItems;
    cartTotal.textContent = totalPrice;
  }
}

function openCart() {
  document.getElementById("cartModal").style.display = "block";
}

function closeCart() {
  document.getElementById("cartModal").style.display = "none";
}

// Close modal if clicking outside
window.onclick = function(event) {
  const modal = document.getElementById("cartModal");
  if (event.target == modal) modal.style.display = "none";
}
