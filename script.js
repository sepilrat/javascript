//información guardada en almacenamiento local

let carrito = [];
let productos = [];
let subtotal = 0;
let cantidad = 0;

const lista = document.querySelector("#ItemsCarrito");
const itemsTotal = document.querySelector("#ItemsTotal"); // contenedor de todos los productos
const itemsCarritoLocal = document.querySelector("#ItemsCarritoTotal");
let listaDeProductos;

//pasar objetos a json
//let VarJson = JSON.stringify(carrito[0]);
class producto {
  constructor(id, nombre, precio, cantidad) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
  }
}
function actualizarCarritoLocal() {
  localStorage.setItem("carritoLocal", JSON.stringify(carrito));

  for (const item of localStorage.getItem("carritoLocal")) {
    const li = document.createElement("li");
    li.innerHTML =
      item.nombre +
      " <input  type= button value=Eliminar onclick=eliminaUnoDelCarrito(" +
      item.id +
      ")> <br>";
    lista.appendChild(li);
  }
}
function actualizarCarrito() {
  for (const item of carrito) {
    const li = document.createElement("li");
    li.innerHTML =
      item.nombre +
      " <input  type= button value=Eliminar onclick=eliminaUnoDelCarrito(" +
      item.id +
      ")> <br>";
    lista.appendChild(li);
  }
}
//agrega un producto al carrito
const agregarAlCarrito = (id) => {
  const producto = productos.find((producto) => producto.id === id);
  const productoEnCarrito = carrito.find((producto) => producto.id === id);
  productoEnCarrito ? productoEnCarrito.cantidad++ : carrito.push(producto);
  cantidad++;
  subtotal += producto.precio;
  actualizarCarrito();
  actualizarCarritoLocal();
};

//elimina un producto del carrito
const eliminaUnoDelCarrito = (id) => {
  const producto = productos.find((producto) => producto.id === id);
  const productoEnCarrito = carrito.find((producto) => producto.id === id);
  carrito.splice(carrito.indexOf(producto), 1);
  cantidad--;
  subtotal -= producto.precio;
  actualizarCarrito();
};

//imprime los items que fueron ingresados al carrito
function imprimirCarrito() {
  for (const producto of productos) {
    if (producto.nombre !== "undefined") {
      //arma el string para listar los productos
      listaDeProductos +=
        producto.nombre +
        " $" +
        producto.precio +
        " <input  type= button value=Agregar onclick=agregarAlCarrito(" +
        producto.id +
        ")> <br>";
    }
  }
}

//Lista todos los productos
function listarProductos() {
  for (const producto of productos) {
    if (producto.nombre !== "undefined") {
      //arma el string para listar los productos
      listaDeProductos +=
        producto.nombre +
        " $" +
        producto.precio +
        " <input  type= button value=Agregar onclick=agregarAlCarrito(" +
        producto.id +
        ")> <br>";
    }
  }
  itemsTotal.innerHTML = listaDeProductos;
}

//cargo la lista de productos
productos.push(new producto(1, "Arroz", 123, 1));
productos.push(new producto(2, "Papa", 13, 1));
productos.push(new producto(3, "Batata", 1823, 1));
listarProductos(productos);

// for (const item of carrito) {
//   const li = document.createElement("li");
//   li.innerHTML = item.nombre;
//   lista.appendChild(li);

// }

// for (const item of carrito) {
//   const li = document.createElement("li");
//   li.innerHTML = item.nombre;
//   lista.appendChild(li);
//   console.log(item.cantidad + " " + item.nombre);
// }
// console.log("Total $" + subtotal);
// console.log("cantidad de productos " + cantidad);
// console.log (document.getElementById("contenedor").innerText);
