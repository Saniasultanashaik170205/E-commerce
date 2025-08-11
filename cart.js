// Load cart items from localStorage and display them
function loadCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartItems = document.getElementById("cartItems");
  const totalPrice = document.getElementById("totalPrice");

  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    const subtotal = item.price * item.quantity;

    li.innerHTML = `
  <div class="item-info">${item.name} - ₹${item.price} × ${item.quantity} = ₹${subtotal}</div>
  <div class="quantity-buttons">
    <button onclick="increase(${index})">+</button>
    <button onclick="decrease(${index})">-</button>
  </div>
`;


    cartItems.appendChild(li);
    total += subtotal;
  });

  totalPrice.textContent = total;
}

// Increase quantity
function increase(index) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart[index].quantity += 1;
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

// Decrease quantity or remove item
function decrease(index) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (cart[index].quantity > 1) {
    cart[index].quantity -= 1;
  } else {
    cart.splice(index, 1);
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

// Clear all items
function clearCart() {
  localStorage.removeItem("cart");
  loadCart();
}

// Checkout
function checkout() {
  alert("Thank you for your purchase!");
  localStorage.removeItem("cart");
  loadCart();
}

window.onload = loadCart;
