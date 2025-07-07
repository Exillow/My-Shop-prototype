let cart = []

function addToCart(name, price) {
  const existing = cart.find(item => item.name === name)
  if (existing) {
    existing.qty++
  } else {
    cart.push({ name, price, qty: 1 })
  }
  updateCart()
}

function updateCart() {
  const cartItemsEl = document.getElementById('cart-items')
  const cartCountEl = document.getElementById('cart-count')
  const cartTotalEl = document.getElementById('cart-total')

  cartItemsEl.innerHTML = ''
  let total = 0
  let count = 0

  cart.forEach(item => {
    const itemTotal = item.price * item.qty
    total += itemTotal
    count += item.qty

    const div = document.createElement('div')
    div.className = 'flex justify-between items-center border-b pb-2'
    div.innerHTML = `
      <div>
        <p class="font-medium">${item.name}</p>
        <p class="text-sm text-gray-600">$${item.price} × ${item.qty}</p>
      </div>
      <button class="text-red-500" onclick="removeFromCart('${item.name}')">✕</button>
    `
    cartItemsEl.appendChild(div)
  })

  cartTotalEl.textContent = total
  cartCountEl.textContent = count
}

function removeFromCart(name) {
  cart = cart.filter(item => item.name !== name)
  updateCart()
}

function toggleCart() {
  const cartEl = document.getElementById('cart')
  cartEl.classList.toggle('hidden')
}

function checkout() {
  alert('checkout successful (not really)')
  cart = []
  updateCart()
  toggleCart()
}
