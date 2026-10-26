// ── 1. OBJETO LITERAL ───────────────────────────────────────────────────
const productoDestacado = {
  nombre: "Cuaderno Anillado T. Carta",
  precio: 15.0,
  categoria: "escolares",
  stock: 40,
  disponible: true,
};

console.log(productoDestacado.nombre);

const propiedad = "precio";
console.log(productoDestacado[propiedad]);

productoDestacado.stock = 35;
productoDestacado.tapaDura = true;
delete productoDestacado.tapaDura;

// ── 2. DESTRUCTURING ────────────────────────────────────────────────────
const { nombre, precio } = productoDestacado;
console.log(`${nombre} cuesta Bs ${precio}`);

const productoOferta = { ...productoDestacado, precio: 12.0, nombre: "Cuaderno Anillado (Oferta)" };
console.log(productoOferta);

// ── 3. ARREGLO DE OBJETOS ───────────────────────────────────────────────
const productos = [
  { nombre: "empastados T. carta",   precio: 18.0,  categoria: "escolares",     stock: 20, disponible: true, imagen: "utiles_escolares.jpg" },
  { nombre: "marcadores sabonis",  precio: 25.0,  categoria: "escolares",     stock: 10, disponible: true, imagen: "utiles_escolares.jpg" },
  { nombre: "peluches pequeños",  precio: 20.0, categoria: "regalos",     stock: 8,  disponible: true, imagen: "peluche_regalo.jpg" },
  { nombre: "collares duo",      precio: 35.5,  categoria: "regalos",   stock: 5,  disponible: true, imagen: "collares_portafotos.jpg" },
  { nombre: "maquillaje",        precio: 12.0,  categoria: "cosmeticos",   stock: 10, disponible: true, imagen: "cosmeticos_perfumes.jpg" },
  { nombre: "perfumes", precio: 20.0, categoria: "cosmeticos",  stock: 8,  disponible: true, imagen: "cosmeticos_perfumes.jpg" },
  { nombre: "peluches grandes",       precio: 180.0,  categoria: "regalos",    stock: 3, disponible: true, imagen: "peluche_regalo.jpg" },
  { nombre: "portafotos",      precio: 12.0,  categoria: "regalos",    stock: 5,  disponible: true, imagen: "collares_portafotos.jpg" },
];

// ── 4. LOS MÉTODOS QUE IMPORTAN ─────────────────────────────────────────
productos.forEach(p => console.log(p.nombre));

const nombres = productos.map(p => p.nombre);
console.log(nombres);

const disponibles = productos.filter(p => p.disponible);
console.log(disponibles.length, "de", productos.length, "disponibles");

const caro = productos.find(p => p.precio > 40);
console.log(caro);

console.log(nombres.includes("marcadores sabonis"));
console.log(productos.some(p => p.stock === 0));
console.log(productos.every(p => p.precio > 0));

const porPrecio = [...productos].sort((a, b) => a.precio - b.precio);
console.log(porPrecio.map(p => p.nombre));

const valorInventario = productos.reduce((acumulador, p) => acumulador + p.precio * p.stock, 0);
console.log("Valor del inventario: Bs", valorInventario.toFixed(2));

// ── 5. ENCADENAR ────────────────────────────────────────────────────────
const nombresDisponibles = productos
  .filter(p => p.disponible)
  .map(p => p.nombre);
console.log(nombresDisponibles);

const totalEscolaresEnStock = productos
  .filter(p => p.categoria === "escolares" && p.disponible)
  .reduce((total, p) => total + p.precio * p.stock, 0);
console.log("Escolares en stock: Bs", totalEscolaresEnStock.toFixed(2));

const porCategoria = productos.reduce((grupos, p) => {
  if (!grupos[p.categoria]) grupos[p.categoria] = [];
  grupos[p.categoria].push(p.nombre);
  return grupos;
}, {});
console.log(porCategoria);

// ── 6. CLASES ───────────────────────────────────────────────────────────
class Producto {
  constructor(nombre, precio, stock) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
  }

  estaDisponible() {
    return this.stock > 0;
  }

  valorEnStock() {
    return this.precio * this.stock;
  }
}

const archivador = new Producto("Archivador de Palanca", 22.0, 15);
console.log(archivador.nombre, archivador.estaDisponible(), archivador.valorEnStock());

class ProductoConDescuento extends Producto {
  constructor(nombre, precio, stock, descuento) {
    super(nombre, precio, stock);
    this.descuento = descuento;
  }

  precioFinal() {
    return this.precio * (1 - this.descuento / 100);
  }
}

const mochila = new ProductoConDescuento("Mochila Escolar", 85.0, 10, 20);
console.log("Precio final con descuento:", mochila.precioFinal(), "| Disponible:", mochila.estaDisponible());
