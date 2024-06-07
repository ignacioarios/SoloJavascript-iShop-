let carrito = [];
let carritoLS = localStorage.getItem("carrito");
if (carritoLS) {
    carrito = JSON.parse(carritoLS);
}
let contenedordeproductos = document.getElementById("contenedordeproductos");

fetch("./db/data.json")
    .then(response => response.json())
    .then(data => {
        data.forEach(producto => {
            const card = document.createElement("div");
            card.className = "product-card";
            card.innerHTML = `
            <img class= "img "src=${producto.img} alt=${producto.alt}></img>
                <h3>${producto.nombre}</h3>
                <p>${producto.precio}$USD</p>
                <div>
                    <button class="Agregar" id="add-${producto.id}">+</button>
                    <button class="Remover" id="remove-${producto.id}">-</button>
                </div>
            `;
            contenedordeproductos.appendChild(card);
        });

        addtocartbutton(data);
        removebutton(data);
        rendercarrito(carrito);
    });

function addtocartbutton(productos) {
    let addbutton = document.querySelectorAll(".Agregar");
    addbutton.forEach(button => {
        button.onclick = (e) => {
            const productoid = e.currentTarget.id.replace('add-', '');
            const productoseleccionado = productos.find(producto => producto.id == productoid);
            if (productoseleccionado) {
                const productInCart = carrito.find(producto => producto.id == productoid);
                if (productInCart) {
                    productInCart.cantidad += 1;
                } else {
                    productoseleccionado.cantidad = 1;
                    carrito.push(productoseleccionado);
                }
                localStorage.setItem("carrito", JSON.stringify(carrito));
                rendercarrito(carrito);
            }
        };
    });
}

function removebutton() {
    let removebutton = document.querySelectorAll(".Remover");
    removebutton.forEach(button => {
        button.onclick = (e) => {
            const productoid = e.currentTarget.id.replace('remove-', '');
            const productIndex = carrito.findIndex(producto => producto.id == productoid);
            if (productIndex !== -1) {
                carrito[productIndex].cantidad -= 1;
                if (carrito[productIndex].cantidad === 0) {
                    carrito.splice(productIndex, 1);
                }
                localStorage.setItem("carrito", JSON.stringify(carrito));
                rendercarrito(carrito);
            }
        };
    });
}

function rendercarrito(carrito) {
    const subtotal = carrito.reduce((sum, producto) => sum + producto.precio * producto.cantidad, 0);
    const totalPrice = subtotal;

    document.getElementById("subtotal").innerText = `${subtotal}$USD`;
    document.getElementById("total-price").innerText = `${totalPrice}$USD`;
}

document.getElementById("checkout").onclick = finalizarCompra;

function finalizarCompra() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
    Swal.fire({
        title: "Compra ejecutada",
        text: "Gracias por su confianza",
        icon: "success"
    });
    carrito = [];
    localStorage.setItem("carrito", JSON.stringify(carrito));
    rendercarrito(carrito);
}
