 
/* OBJETOS */

const productos = [
    {
      nombre: "Zapatillas Rosas",
      precio: 200,
      precioUnidad: 100,
      img: "./fotos/9052-11-d1ba72d7a0ac5f90f216044627959511-640-0.jpg",
      cantidad: 1,
      id: 0,
    },
    {
      nombre: "Zapatillas despnike",
      precio: 200,
      precioUnidad: 150,
      img: "./fotos/download-3.jpg",
      cantidad: 1,
      id: 1,
    },
    {
      nombre: "Zapatillas air force",
      precio: 300,
      precioUnidad: 175,
      img: "./fotos/download-4.jpg",
      cantidad: 1,
      id: 2,
    },
    {
      nombre: "Zapatillas Jordan",
      precio: 500,
      precioUnidad: 135,
      img: "./fotos/download-5.jpg",
      cantidad: 1,
      id: 3,
    },
    {
      nombre: "Nike Black",
      precio: 150,
      precioUnidad: 135,
      img: "./fotos/download-6.jpg",
      cantidad: 1,
      id: 4,
    },
    {
      nombre: "Puma White",
      precio: 250,
      precioUnidad: 135,
      img: "./fotos/download-8.jpg",
      cantidad: 1,
      id: 5,
    },
    {
      nombre: "Puma ferrari",
      precio: 150,
      precioUnidad: 135,
      img: "./fotos/download.jpg",
      cantidad: 1,
      id: 6,
    },{
      nombre: "Botines Puma",
      precio: 400,
      precioUnidad: 100,
      img: "./fotos/download-2.jpg",
      cantidad: 1,
      id: 7,
    },
    {
      nombre: "Zapatillas puma",
      precio: 500,
      precioUnidad: 150,
      img: "./fotos/download-6.jpg",
      cantidad: 1,
      id: 8,
    },
    {
      nombre: "Puma Blue",
      precio: 200,
      precioUnidad: 175,
      img: "./fotos/download-9.jpg",
      cantidad: 1,
      id: 9,
    }
  ];
  
  
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  let miDiv = document.querySelector("#catalogo");
  let sidebar = document.querySelector(".carrito");
  
  
  /* INSERTAMOS CATALOGO */
  
  const inyectarCards = () => {
    productos.forEach((element) => {
      miDiv.innerHTML += `<div class="card">
        <img src="${element.img}" style="width:100%">
        <h5>${element.nombre}</h5>
        <h4> $<span>${element.precio}</span></h4>
        <button class="btn-buy" data-id="${element.id}">AGREGAR</button>
      </div>
      `;
    });
  
  /* ENVIAMOS AL CARRITO */
  
    let btnBuy = document.querySelectorAll(".btn-buy");
  
    btnBuy.forEach((element) => {
      element.addEventListener("click", (event) => {
        enviarAlCarrito(event.target.parentElement);
      });
    });
  };
  
  const enviarAlCarrito = (datosProductos) => {
    let productoAlCarrito = {
      imagen: datosProductos.querySelector("img").src,
      nombre: datosProductos.querySelector("h5").textContent,
      precioPorUnidad: Number(
        datosProductos.querySelector("h4 span").textContent
      ),
      precioTotal: Number(datosProductos.querySelector("h4 span").textContent),
      cantidad: 1,
      id: Number(datosProductos.querySelector("button").getAttribute("data-id")),
    };
  
    let existeProducto = carrito.some(
      (element) => element.id === productoAlCarrito.id
    );
  
    if (existeProducto) {
      carrito = carrito.map((element) => {
        if (element.id === productoAlCarrito.id) {
          element.cantidad++;
          element.precioTotal = element.precioPorUnidad * element.cantidad;
          return element;
        } else {
          return element;
        }
      });
    } else {
      carrito.push(productoAlCarrito);
    }
    localStorage.setItem("carrito", JSON.stringify(carrito));
    inyectarHTMLcarrito();
  };
  
  
  /* CARRITO */
  
  const inyectarHTMLcarrito = () => {
    sidebar.innerHTML = "";
    carrito.forEach((element) => {
      sidebar.innerHTML += `<div>
      <h5>${element.nombre}</h5>
      <p>$${element.precioTotal}</p>
      <h4>Unidades: ${element.cantidad}</h4>
      <img src="${element.imagen}" style="width:50%">
      <button class="btn-menos" data-id=${element.id}> - </button>
      <button class="btn-borrar" data-id=${element.id}> Eliminar </button>
      <hr>
      </div>`;
    });
    let divTotal = document.createElement("div");
    let miTotal = totalDelCarrito();
    divTotal.innerHTML = `<h7>TOTAL:$ ${miTotal}<h7>`;
    sidebar.appendChild(divTotal);
  };
  
  const restarProducto = (event) => {
    let idProducto = Number(event.target.getAttribute("data-id"));
  
    carrito = carrito.map((element) => {
      if (element.id === idProducto) {
        element.cantidad--;
        element.precioTotal = element.precioTotal - element.precioPorUnidad;
        if (element.cantidad === 0) {
          element.cantidad = 1;
          element.precioTotal = element.precioPorUnidad;
        }
        return element;
      } else {
        return element;
      }
    });
    localStorage.setItem("carrito", JSON.stringify(carrito));
    inyectarHTMLcarrito();
  };
  
  /* BORRAR PRODUCTOS */
  
  const borrarProducto = (event) => {
    let idProducto = Number(event.target.getAttribute("data-id"));
    carrito = carrito.filter((element) => element.id != idProducto);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    inyectarHTMLcarrito();
  };
  
  sidebar.addEventListener("click", (event) => {
    if (event.target.classList.contains("btn-menos")) {
      restarProducto(event);
    }
    if (event.target.classList.contains("btn-borrar")) {
      borrarProducto(event);
    }
  });
  
  const totalDelCarrito = () => {
    let miTotal = carrito.reduce(
      (acumulador, iterador) => acumulador + iterador.precioTotal,
      0
    );
    return miTotal;
  };
  
  inyectarCards();
  inyectarHTMLcarrito();
  