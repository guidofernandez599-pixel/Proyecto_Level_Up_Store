// â”€â”€ 1. OBJETO LITERAL â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
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

// â”€â”€ 2. DESTRUCTURING â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const { nombre, precio } = productoDestacado;
console.log(`${nombre} cuesta Bs ${precio}`);

const productoOferta = { ...productoDestacado, precio: 12.0, nombre: "Cuaderno Anillado (Oferta)" };
console.log(productoOferta);

// â”€â”€ 3. ARREGLO DE OBJETOS CATEGORIZADOS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const productos = [
  // â”€â”€ ESCOLARES Y LIBRERÃA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  { nombre: "BolÃ­grafos Sabonis punta fina (Azul / Negro / Rojo)", precio: 1.5, categoria: "escolares", stock: 65, disponible: true, imagen: "imagenes/utiles_escolares.jpg", unidad: "unidad" },
  { nombre: "BolÃ­grafos Faber-Castell / Pilot / Monami / Orion", precio: 2.5, categoria: "escolares", stock: 45, disponible: true, imagen: "imagenes/utiles_escolares.jpg", unidad: "unidad" },
  { nombre: "Marcadores Sabonis x12 colores al agua", precio: 25.0, categoria: "escolares", stock: 15, disponible: true, imagen: "imagenes/utiles_escolares.jpg", unidad: "estuche" },
  { nombre: "Marcadores gruesos de agua y de alcohol (Milcar)", precio: 30.0, categoria: "escolares", stock: 12, disponible: true, imagen: "imagenes/utiles_escolares.jpg", unidad: "estuche" },
  { nombre: "Marcadores doble punta para dibujo", precio: 32.0, categoria: "escolares", stock: 10, disponible: true, imagen: "imagenes/utiles_escolares.jpg", unidad: "estuche" },
  { nombre: "Marcadores resaltadores fosforescentes", precio: 14.0, categoria: "escolares", stock: 18, disponible: true, imagen: "imagenes/utiles_escolares.jpg", unidad: "paquete" },
  { nombre: "Caja de colores Faber-Castell x12", precio: 18.0, categoria: "escolares", stock: 20, disponible: true, imagen: "imagenes/utiles_escolares.jpg", unidad: "caja" },
  { nombre: "Colores escolares Nataraj / Milcar x12", precio: 12.0, categoria: "escolares", stock: 15, disponible: true, imagen: "imagenes/utiles_escolares.jpg", unidad: "caja" },
  { nombre: "Cuadernos empastados tamaÃ±o carta", precio: 18.0, categoria: "escolares", stock: 30, disponible: true, imagen: "imagenes/materiales.jfif", unidad: "unidad" },
  { nombre: "Cuadernos empastados tamaÃ±o oficio", precio: 24.0, categoria: "escolares", stock: 16, disponible: true, imagen: "imagenes/materiales.jfif", unidad: "unidad" },
  { nombre: "Cuadernos normales tamaÃ±o cuaderno", precio: 10.0, categoria: "escolares", stock: 25, disponible: true, imagen: "imagenes/materiales.jfif", unidad: "unidad" },
  { nombre: "Hojas Bond tamaÃ±o carta 75g (paquete 500 hjs)", precio: 35.0, categoria: "escolares", stock: 14, disponible: true, imagen: "imagenes/utiles_escolares.jpg", unidad: "paquete" },
  { nombre: "Hojas Bond tamaÃ±o oficio 75g (paquete 500 hjs)", precio: 40.0, categoria: "escolares", stock: 8, disponible: true, imagen: "imagenes/utiles_escolares.jpg", unidad: "paquete" },
  { nombre: "Hojas de color surtidas (carta y oficio)", precio: 0.5, categoria: "escolares", stock: 150, disponible: true, imagen: "imagenes/utiles_escolares.jpg", unidad: "hoja" },
  { nombre: "Hojas cuadriculadas para carpeta (LÃ­der / ABC)", precio: 15.0, categoria: "escolares", stock: 22, disponible: true, imagen: "imagenes/materiales.jfif", unidad: "paquete" },
  { nombre: "Hojas Trapper cuadriculadas carta y oficio", precio: 16.5, categoria: "escolares", stock: 18, disponible: true, imagen: "imagenes/materiales.jfif", unidad: "paquete" },
  { nombre: "Archivadores de palanca tamaÃ±o carta y oficio", precio: 22.0, categoria: "escolares", stock: 15, disponible: true, imagen: "imagenes/materiales.jfif", unidad: "unidad" },
  { nombre: "Tapas de carpeta plÃ¡sticas y folders color crema", precio: 3.5, categoria: "escolares", stock: 40, disponible: true, imagen: "imagenes/materiales.jfif", unidad: "unidad" },
  { nombre: "Tapas para anillado (plÃ¡sticas transparentes/color)", precio: 4.0, categoria: "escolares", stock: 0, disponible: false, imagen: "imagenes/materiales.jfif", unidad: "par" },
  { nombre: "Pegamento UHU / Isocola / Merleto / Carpicola", precio: 6.0, categoria: "escolares", stock: 25, disponible: true, imagen: "imagenes/materiales.jfif", unidad: "unidad" },
  { nombre: "LÃ¡pices de grafito HB, 2B y 8B (Faber-Castell)", precio: 2.0, categoria: "escolares", stock: 50, disponible: true, imagen: "imagenes/utiles_escolares.jpg", unidad: "unidad" },
  { nombre: "LÃ¡pices rojos de chequeo", precio: 2.5, categoria: "escolares", stock: 30, disponible: true, imagen: "imagenes/utiles_escolares.jpg", unidad: "unidad" },
  { nombre: "Corrector lÃ­quido y en cinta Radex", precio: 5.0, categoria: "escolares", stock: 20, disponible: true, imagen: "imagenes/utiles_escolares.jpg", unidad: "unidad" },
  { nombre: "Notas adhesivas de colores (Post-its)", precio: 5.0, categoria: "escolares", stock: 25, disponible: true, imagen: "imagenes/utiles_escolares.jpg", unidad: "paquete" },
  { nombre: "Tijeras escolares punta roma y punta fina", precio: 6.5, categoria: "escolares", stock: 20, disponible: true, imagen: "imagenes/materiales.jfif", unidad: "unidad" },
  { nombre: "Goma de borrar Sabonis y borrador miga de pan", precio: 2.0, categoria: "escolares", stock: 45, disponible: true, imagen: "imagenes/utiles_escolares.jpg", unidad: "unidad" },
  { nombre: "Tajadores metÃ¡licos y tajadores con formas", precio: 3.5, categoria: "escolares", stock: 35, disponible: true, imagen: "imagenes/utiles_escolares.jpg", unidad: "unidad" },
  { nombre: "Papel lustroso, mosaicos, 3D y papel estaÃ±ado", precio: 1.5, categoria: "escolares", stock: 60, disponible: true, imagen: "imagenes/materiales.jfif", unidad: "pliego" },
  { nombre: "Papel de regalo y papel coreano para ramos", precio: 3.0, categoria: "escolares", stock: 40, disponible: true, imagen: "imagenes/peluche_regalo.jpg", unidad: "pliego" },
  { nombre: "Clips y sujeta papeles Flips", precio: 4.5, categoria: "escolares", stock: 25, disponible: true, imagen: "imagenes/utiles_escolares.jpg", unidad: "caja" },

  // â”€â”€ REGALOS Y NOVEDADES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  { nombre: "Peluche tierno de Stitch", precio: 45.0, categoria: "regalos", stock: 6, disponible: true, imagen: "imagenes/peluches_stitch_capibara.jpg", unidad: "unidad" },
  { nombre: "Peluche de Snoopy clÃ¡sico", precio: 40.0, categoria: "regalos", stock: 5, disponible: true, imagen: "imagenes/peluches_stitch_capibara.jpg", unidad: "unidad" },
  { nombre: "Peluche de Capibara con mochilita", precio: 48.0, categoria: "regalos", stock: 7, disponible: true, imagen: "imagenes/peluches_stitch_capibara.jpg", unidad: "unidad" },
  { nombre: "Peluches de Emojis divertidos", precio: 25.0, categoria: "regalos", stock: 12, disponible: true, imagen: "imagenes/peluches_stitch_capibara.jpg", unidad: "unidad" },
  { nombre: "Osos de peluche gigantes con lazo (1 metro)", precio: 180.0, categoria: "regalos", stock: 3, disponible: true, imagen: "imagenes/peluche_regalo.jpg", unidad: "unidad" },
  { nombre: "Peluches medianos y pequeÃ±os para regalo", precio: 20.0, categoria: "regalos", stock: 10, disponible: true, imagen: "imagenes/peluche_regalo.jpg", unidad: "unidad" },
  { nombre: "Portafotos decorativos de madera y vidrio", precio: 15.0, categoria: "regalos", stock: 8, disponible: true, imagen: "imagenes/collares_portafotos.jpg", unidad: "unidad" },
  { nombre: "Tomatodos deportivos y juveniles", precio: 25.0, categoria: "regalos", stock: 14, disponible: true, imagen: "imagenes/collares_portafotos.jpg", unidad: "unidad" },
  { nombre: "Tazas decoradas con diseÃ±os especiales", precio: 20.0, categoria: "regalos", stock: 16, disponible: true, imagen: "imagenes/collares_portafotos.jpg", unidad: "unidad" },
  { nombre: "Adornos decorativos para habitaciÃ³n", precio: 18.0, categoria: "regalos", stock: 9, disponible: true, imagen: "imagenes/collares_portafotos.jpg", unidad: "unidad" },
  { nombre: "Billeteras para varÃ³n y para dama", precio: 30.0, categoria: "regalos", stock: 12, disponible: true, imagen: "imagenes/collares_portafotos.jpg", unidad: "unidad" },
  { nombre: "Relojes de mesa con formas y despertador", precio: 28.0, categoria: "regalos", stock: 8, disponible: true, imagen: "imagenes/collares_portafotos.jpg", unidad: "unidad" },
  { nombre: "Relojes de mano (digitales y elegantes)", precio: 35.0, categoria: "regalos", stock: 7, disponible: true, imagen: "imagenes/collares_portafotos.jpg", unidad: "unidad" },
  { nombre: "Bolas de cristal con nieve y mÃºsica", precio: 45.0, categoria: "regalos", stock: 6, disponible: true, imagen: "imagenes/peluche_regalo.jpg", unidad: "unidad" },
  { nombre: "LÃ¡mparas de mesa con formas decorativas", precio: 38.0, categoria: "regalos", stock: 8, disponible: true, imagen: "imagenes/collares_portafotos.jpg", unidad: "unidad" },

  // â”€â”€ COSMÃ‰TICOS Y BELLEZA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  { nombre: "Paletas de maquillaje y sombras de ojos", precio: 22.0, categoria: "cosmeticos", stock: 10, disponible: true, imagen: "imagenes/cosmeticos_perfumes.jpg", unidad: "estuche" },
  { nombre: "Delineadores de ojos lÃ­quidos y en lÃ¡piz", precio: 10.0, categoria: "cosmeticos", stock: 18, disponible: true, imagen: "imagenes/cosmeticos_perfumes.jpg", unidad: "unidad" },
  { nombre: "Brillos de colores y bÃ¡lsamos hidratantes", precio: 8.0, categoria: "cosmeticos", stock: 25, disponible: true, imagen: "imagenes/cosmeticos_perfumes.jpg", unidad: "unidad" },
  { nombre: "Perfumes y fragancias seleccionadas", precio: 28.0, categoria: "cosmeticos", stock: 11, disponible: true, imagen: "imagenes/cosmeticos_perfumes.jpg", unidad: "frasco" },
  { nombre: "Aretes decorativos de fantasÃ­a fina", precio: 12.0, categoria: "cosmeticos", stock: 20, disponible: true, imagen: "imagenes/collares_portafotos.jpg", unidad: "par" },
  { nombre: "Collares elegantes y gargantillas", precio: 16.0, categoria: "cosmeticos", stock: 14, disponible: true, imagen: "imagenes/collares_portafotos.jpg", unidad: "unidad" },
  { nombre: "Collares dÃºo magnÃ©ticos de pareja", precio: 35.5, categoria: "cosmeticos", stock: 8, disponible: true, imagen: "imagenes/collares_portafotos.jpg", unidad: "par" },
  { nombre: "Winchas para cabello decoradas", precio: 7.0, categoria: "cosmeticos", stock: 20, disponible: true, imagen: "imagenes/cosmeticos_perfumes.jpg", unidad: "unidad" },
  { nombre: "Ligas y colettes para cabello (pack)", precio: 4.0, categoria: "cosmeticos", stock: 35, disponible: true, imagen: "imagenes/cosmeticos_perfumes.jpg", unidad: "paquete" },

  // â”€â”€ INTERNET Y SERVICIOS DIGITALES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  { nombre: "1 hora de Internet de alta velocidad", precio: 2.0, categoria: "internet", stock: 15, disponible: true, imagen: "imagenes/internet_gaming.jpg", unidad: "hora" },
  { nombre: "PC Gamer 1 hora (videojuegos en red)", precio: 3.0, categoria: "internet", stock: 8, disponible: true, imagen: "imagenes/internet_gaming.jpg", unidad: "hora" },
  { nombre: "Impresiones a color (carta y oficio)", precio: 2.0, categoria: "internet", stock: 100, disponible: true, imagen: "imagenes/internet_gaming.jpg", unidad: "hoja" },
  { nombre: "Impresiones a blanco y negro", precio: 1.0, categoria: "internet", stock: 200, disponible: true, imagen: "imagenes/internet_gaming.jpg", unidad: "hoja" },
  { nombre: "Fotocopias blanco y negro", precio: 0.5, categoria: "internet", stock: 400, disponible: true, imagen: "imagenes/internet_gaming.jpg", unidad: "hoja" },
  { nombre: "Fotocopias a full color", precio: 1.5, categoria: "internet", stock: 150, disponible: true, imagen: "imagenes/internet_gaming.jpg", unidad: "hoja" },
  { nombre: "Transcripciones de trabajos escolares", precio: 4.0, categoria: "internet", stock: 50, disponible: true, imagen: "imagenes/internet_gaming.jpg", unidad: "hoja" },
  { nombre: "Anillados y plastificados de documentos", precio: 6.0, categoria: "internet", stock: 20, disponible: true, imagen: "imagenes/materiales.jfif", unidad: "trabajo" }
];

// â”€â”€ 4. LOS MÃ‰TODOS QUE IMPORTAN â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
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

// â”€â”€ 5. ENCADENAR â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
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

// â”€â”€ 6. CLASES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
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


