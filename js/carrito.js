
function rendercarrito(carritoitems) {
    const contenedorCarrito = document.getElementById("seccioncarrito");
    contenedorCarrito.innerHTML = '';

    carritoitems.forEach(producto => {
        const cart = document.createElement("div");
        cart.className = "cart-item";
        cart.innerHTML = `<h3>${producto.nombre} x${producto.cantidad}</h3>
                        <p>${producto.precio}</p>`;
        contenedorCarrito.appendChild(cart);
    });

    const total = carritoitems.reduce((total, producto) => total + producto.precio * producto.cantidad, 0);
    const totalElement = document.createElement("div");
    totalElement.className = "cart-total";
    totalElement.innerHTML = `<h3>Total: $${total}</h3>`;
    contenedorCarrito.appendChild(totalElement);
}
