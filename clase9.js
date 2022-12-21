const productos = [
  { id: 1, nombre: "Arroz", precio: 123 },
  { id: 2, nombre: "Papa", precio: 90 },
  { id: 3, nombre: "Tomate", precio: 123 },
  { id: 4, nombre: "Morron", precio: 123 },
  { id: 5, nombre: "Pan", precio: 123 },
  { id: 6, nombre: "Fideos", precio: 123 },
  { id: 7, nombre: "Lentejas", precio: 123 },
  { id: 8, nombre: "Arbejas", precio: 123 },
  { id: 9, nombre: "Poroto", precio: 123 },
];

let carrito;

function agregarCarrito(producto) {
    alert();
 document.getElementById("carrito")= "se agrego el producto" + producto.nombre;
}
let listaDeProductos;
for (const producto of productos) {
  if (producto.nombre != "undefined") {
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
console.log(listaDeProductos);
document.getElementById("contenedor").innerHTML = listaDeProductos;
// console.log (document.getElementById("contenedor").innerText);
