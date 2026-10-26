// -- 1. SELECCIONAR ELEMENTOS DEL DOM -----------------------------------
const contenedor = document.querySelector("#lista-productos");
const titulos = document.querySelectorAll("h2");

console.log("El contenedor de productos existe:", contenedor !== null);
console.log("Hay", titulos.length, "secciones secundarias h2 en la página");

// -- 2. PLANTILLA PARA CREAR TARJETAS EN EL CATÁLOGO --------------------
function crearTarjetaProducto(producto) {
  const articulo = document.createElement("article");

  articulo.classList.add("tarjeta");
  if (!producto.disponible || producto.stock <= 0) {
    articulo.classList.add("agotado");
  }

  articulo.dataset.nombre = producto.nombre;
  articulo.dataset.categoria = producto.categoria;

  // Si no hay imagen o falla, carga materiales.jfif
  const imagenUrl = producto.imagen || "materiales.jfif";

  articulo.innerHTML = `
    <img src="${imagenUrl}" alt="${producto.nombre}" onerror="this.src='materiales.jfif'">
    <h3>${producto.nombre}</h3>
    <p class="precio">Bs ${producto.precio.toFixed(2)}</p>
    <p class="categoria"><strong>Categoría:</strong> ${producto.categoria}</p>
    <p class="stock">${producto.disponible && producto.stock > 0 ? `Quedan ${producto.stock} unidades` : "⚠️ Agotado por el momento"}</p>
  `;

  return articulo;
}

// Alias para compatibilidad con código anterior o de clase
const crearTarjetaPlato = crearTarjetaProducto;

// -- 3. FUNCIÓN DE RENDERIZADO EN EL DOM ---------------------------------
function render(lista) {
  if (!contenedor) return;
  contenedor.innerHTML = "";

  lista.forEach(producto => {
    contenedor.append(crearTarjetaProducto(producto));
  });
}

// Aliases para llamadas existentes
const renderProductos = render;
const renderMenu = render;

// -- 4. EJECUTAR RENDERIZADO ---------------------------------------------
// Usa el arreglo 'productos' definido previamente en datos.js
if (typeof productos !== "undefined") {
  render(productos);
}

// -- 5. RECORRIDO DEL DOM ------------------------------------------------
const primeraTarjeta = document.querySelector(".tarjeta");
if (primeraTarjeta) {
  console.log("Contenedor padre:", primeraTarjeta.parentElement ? primeraTarjeta.parentElement.id : "sin padre");
  console.log("Producto destacado:", primeraTarjeta.dataset.nombre);
}
