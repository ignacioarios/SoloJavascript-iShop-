

let carroproducts
let carroproductslocal = localStorage.getItem("carroproducts")
if(carroproductslocal){
    carroproducts = JSON.parse(carroproductslocal)
}
else {
    carroproducts = []
}

let productscontainer = document.getElementById("products-container")

fetch("./db/data.json")
    .then(response => response.json())
    .then(data => {
        data.forEach(product => {
            const card = document.createElement("div")
            card.innerHTML = `<img src='${product.img}'></img>
                            <h4> ${product.nombre}</h4>
                            <p> ${product.precio}</p>
                            <button class="productoAgregar" id="${product.id}"> Agregar </button> `
            productscontainer.appendChild(card)
        })
        addCarrito()
    })

    function addCarrito (){
        let addbutton = document.querySelectorAll (".productoAgregar")
        addbutton.forEach(button =>{
            button.onclick = (e) => {
                const productId = e.currentTarget.id
                const selectedProducts = productos.find(product => product.id == ProductId)
                carroproducts.push(selectedProducts)
                console.log(carroproducts)
            }
    
        } )
    
    }