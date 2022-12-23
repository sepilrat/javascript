// const productos = [
//   { id: 1, nombre: "Arroz", precio: 123 },
//   { id: 2, nombre: "Papa", precio: 90 },
//   { id: 3, nombre: "Tomate", precio: 123 },
//   { id: 4, nombre: "Morron", precio: 123 },
//   { id: 5, nombre: "Pan", precio: 123 },
//   { id: 6, nombre: "Fideos", precio: 123 },
//   { id: 7, nombre: "Lentejas", precio: 123 },
//   { id: 8, nombre: "Arbejas", precio: 123 },
//   { id: 9, nombre: "Poroto", precio: 123 },
// ];

//información guardada en almacenamiento local

let carrito = [];
let productos = [];
let subtotal = 0;
let cantidad = 0;
const lista = document.querySelector("#ItemsCarrito");

// function vaciarCarrito()
// {
//     //recorrer la variable local para vaciar el carrito
//     let saludos = localStorage.getItem("carrito");
//     car =
//     localStorage.removeItem()
// }

//pasar objetos a jason
//let VarJson = JSON.stringify(carrito[0]);
class producto {
  constructor(id, nombre, precio, cantidad) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
  }
}

//agrega un producto al carrito
const agregarAlCarrito = (id) => {
  const producto = productos.find((producto) => producto.id === id);
  const productoEnCarrito = carrito.find((producto) => producto.id === id);
  if (productoEnCarrito) {
    productoEnCarrito.cantidad++;
  } else {
    carrito.push(producto);
  }
  cantidad++;
  subtotal += producto.precio;
  //actualizarCarrito();
};

//elimina un producto del carrito
const eliminaUnoDelCarrito = (id) => {
  const producto = productos.find((producto) => producto.id === id);
  const productoEnCarrito = carrito.find((producto) => producto.id === id);

  carrito.splice(carrito.indexOf(producto), 1);

  cantidad--;

  subtotal -= producto.precio;
  //actualizarCarrito();
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
        " <input  type= button value=Agregar onclick=agregarCarrito(" +
        producto +
        ")> <br>";
    }
  }
}
//console.log(listaDeProductos);
//document.getElementById("contenedor").innerHTML = listaDeProductos;

//cargo la lista de productos
productos.push(new producto(1, "Arroz", 123, 1));

productos.push(new producto(2, "Papa", 13, 1));
productos.push(new producto(3, "Batata", 1823, 1));

//cargo items al carrito
agregarAlCarrito(1);
agregarAlCarrito(1);
agregarAlCarrito(2);
agregarAlCarrito(3);

console.log("productos seleccionados:");
//console.log(carrito);
for (const item of carrito) {
  const li = document.createElement("li");
  li.innerHTML = item;
  lista.appendChild(li);
  console.log(item.nombre);
}
console.log("Total $" + subtotal);
console.log("cantidad de productos" + cantidad);

console.log("Elimino un producto");

eliminaUnoDelCarrito(3);

for (const item of carrito) {
  const li = document.createElement("li");
  li.innerHTML = item.nombre;
  lista.appendChild(li);
  console.log(item.cantidad + " " + item.nombre);
}
console.log("Total $" + subtotal);
console.log("cantidad de productos " + cantidad);
// console.log (document.getElementById("contenedor").innerText);
