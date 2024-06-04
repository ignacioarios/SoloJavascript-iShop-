let cartstorage = localStorage.getItem("cartProducts")
cartstorage = JSON.parse(cartstorage)

let cartContainer = document.getElementById("cart-section")

function renderCarrito (cartItems){
    cartItems.forEach(producto => {
    const cart = document.createElement("div")
    cart.innerHTML =`<h3> ${product.nombre}</h3>
                     <p> ${product.precio}</p>`
    cartContainer.appendChild(cart)    
    });
}
renderCarrito (cartstorage)
