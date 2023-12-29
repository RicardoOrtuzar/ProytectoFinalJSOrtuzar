const btnCart = document.querySelector('.container-cart-icon');
const containerCartProducts = document.querySelector(
    '.container-cart-products'
);


btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart');
});


/* ========================= */
const cartInfo = document.querySelector('.cart-product');
const rowProduct = document.querySelector('.row-product');


// Lista de todos los contenedores de productos
const productsList = document.querySelector('.container-items');


// Variable de arreglos de Productos
let allProducts = [];


const valorTotal = document.querySelector('.total-pagar');


const countProducts = document.querySelector('#contador-productos');


const cartEmpty = document.querySelector('.cart-empty');
const cartTotal = document.querySelector('.cart-total');


productsList.addEventListener('click', e => {
    if (e.target.classList.contains('btn-add-cart')) {
        const product = e.target.parentElement;


        const infoProduct = {
            quantity: 1,
            title: product.querySelector('h2').textContent,
            price: product.querySelector('p').textContent,
        };


        const exits = allProducts.some(
            product => product.title === infoProduct.title
        );


        if (exits) {
            const products = allProducts.map(product => {
                if (product.title === infoProduct.title) {
                    product.quantity++;
                    return product;
                } else {
                    return product;
                }
            });
            allProducts = [...products];
        } else {
            allProducts = [...allProducts, infoProduct];
        }


        showHTML();
    }
});


rowProduct.addEventListener('click', e => {
    if (e.target.classList.contains('icon-close')) {
        const product = e.target.parentElement;
        const title = product.querySelector('p').textContent;


        allProducts = allProducts.filter(
            product => product.title !== title
        );


        console.log(allProducts);


        showHTML();
    }
});







/*function ejecutarPrueba() {
    fetch('productos.json')
  .then(response => response.json())
  .then(data => {
    const publicgroupsTableBody = document.querySelector("prueba");
    // Borramos los datos antiguos
    publicgroupsTableBody.innerHTML = "";
    data.forEach(item => {
    const containerProduct = document.createElement('div');
    containerProduct.classList.add('card');
    containerProduct.innerHTML =  `
    <div class="info-cart-product">
    <span class="cantidad-producto-carrito">${item.item.cantidad}</span>
    <p class="titulo-producto-carrito">${product.title}</p>
    <span class="precio-producto-carrito">${product.price}</span>
    </div>
    <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="icon-close"
    >
    <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M6 18L18 6M6 6l12 12"
    />
    </svg>
   
    `;
    containerProduct.appendChild(card11);
      console.log('ID:', item.item.id);
      console.log('Producto:', item.item.producto);
      console.log('Modelo:', item.item.modelo);
      console.log('Color:', item.item.color);
      console.log('Imagen:', item.item.imagen);
      console.log('Alt:', item.item.alt);
      console.log('Precio:', item.item.precio);
      console.log('Cantidad:', item.item.cantidad);
      console.log('--------------'); // Separador entre elementos
    });


  })
  .catch(error => {
    console.error('Error:', error);
  });
}*/

/*function ejecutarPrueba2() {
    fetch('/ProyectoFinalOrtuzar/productos.json')
    .then(response => response.json())
    .then(data => {
        const publicgroupsTableBody = document.getElementById("prueba"); 
        data.forEach(item => {
            const containerProduct = document.createElement('div');
            containerProduct.classList.add('container-items');


            containerProduct.innerHTML = `
               
            <div class="container-items">
                <div class="item" id="item" data-product-name="${item.item.producto}">
				<figure>
					<img
						src="${item.item.imagen}"
						alt="producto"
					/>
				</figure>
				<div class="info-product">
					<h2>${item.item.producto} ${item.item.modelo}</h2>
					<p class="price">$${item.item.precio}</p>
					<button class="btn-add-cart">Añadir al carrito</button>
				</div>
			    </div>
            </div>    

            `;
 
            publicgroupsTableBody.append(containerProduct);


            console.log('ID:', item.item.id);
            console.log('Producto:', item.item.producto);
            console.log('Modelo:', item.item.modelo);
            console.log('Color:', item.item.color);
            console.log('Imagen:', item.item.imagen);
            console.log('Alt:', item.item.alt);
            console.log('Precio:', item.item.precio);
            console.log('Cantidad:', item.item.cantidad);
            console.log('--------------');
        });


    })
    .catch(error => {
        console.error('Error:', error);
    });
}*/


function ejecutarPrueba2() {
    fetch('/ProyectoFinalOrtuzar/productos.json')
    .then(response => response.json())
    .then(data => {
        const publicgroupsTableBody = document.getElementById("prueba");
        const searchInput = document.getElementById("searchInput");

        function renderProductos(productos) {
            publicgroupsTableBody.innerHTML = '';

            productos.forEach(item => {
                const containerProduct = document.createElement('div');
                containerProduct.classList.add('container-items');

                containerProduct.innerHTML = `
                    <div class="container-items">
                        <div class="item" id="item" data-product-name="${item.item.producto}">
                            <figure>
                                <img src="${item.item.imagen}" alt="producto" />
                            </figure>
                            <div class="info-product">
                                <h2>${item.item.producto} ${item.item.modelo}</h2>
                                <p class="price">$${item.item.precio}</p>
                                <button class="btn-add-cart">Añadir al carrito</button>
                            </div>
                        </div>
                    </div>
                `;

                publicgroupsTableBody.append(containerProduct);
            });
        }

        function filterProducts() {
            const term = searchInput.value.trim().toLowerCase();

            const productosFiltrados = data.filter(item => {
                const productName = item.item.modelo.toLowerCase();
                return productName.includes(term);
            });

            renderProductos(productosFiltrados);
        }

        // Event listener para el campo de búsqueda
        searchInput.addEventListener('input', filterProducts);

        // Mostrar todos los productos al principio
        renderProductos(data);

    })
    .catch(error => {
        console.error('Error:', error);
    });
}



function filterProducts() {
    // Obtén el valor de búsqueda
    var searchValue = document.getElementById("search").value.toLowerCase();


    // Obtén todos los elementos .item
    var items = document.querySelectorAll(".modelo");


    // Itera sobre cada elemento y muestra/oculta según la búsqueda
    items.forEach(function (item) {
        var productName = item.getAttribute("data-product-name").toLowerCase();
        var isVisible = productName.includes(searchValue);
        item.style.display = isVisible ? "block" : "none";
    });

}


// Funcion para mostrar  HTML
const showHTML = () => {
    if (!allProducts.length) {
        cartEmpty.classList.remove('hidden');
        rowProduct.classList.add('hidden');
        cartTotal.classList.add('hidden');
    } else {
        cartEmpty.classList.add('hidden');
        rowProduct.classList.remove('hidden');
        cartTotal.classList.remove('hidden');
    }


    // Limpiar HTML
    rowProduct.innerHTML = '';


    let total = 0;
    let totalOfProducts = 0;


    allProducts.forEach(product => {
        const containerProduct = document.createElement('div');
        containerProduct.classList.add('cart-product');


        containerProduct.innerHTML = `
            <div class="info-cart-product">
                <span class="cantidad-producto-carrito">${product.quantity}</span>
                <p class="titulo-producto-carrito">${product.title}</p>
                <span class="precio-producto-carrito">${product.price}</span>
            </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="icon-close"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>
        `;


        rowProduct.append(containerProduct);


        total =
            total + parseInt(product.quantity * product.price.slice(1));
        totalOfProducts = totalOfProducts + product.quantity;
    });


    valorTotal.innerText = `$${total}`;
    countProducts.innerText = totalOfProducts;          
};









