// ── 1. SELECCIONAR ELEMENTOS DEL DOM ───────────────────────────────────
const contenedor = document.querySelector("#lista-productos");
const titulos = document.querySelectorAll("h2");

console.log("El contenedor de productos existe:", contenedor !== null);
console.log("Hay", titulos.length, "secciones secundarias h2 en la página");

// ── 2. METADATOS DE CATEGORÍAS DE LEVEL UP STORE ─────────────────────────
const INFO_CATEGORIAS = {
  escolares: {
    titulo: "Materiales Escolares y Papelería",
    icono: "📚",
    descripcion: "Cuadernos empastados, marcadores Sabonis, hojas bond, carpetas y útiles escolares de calidad.",
    badge: "Escolares y Papelería"
  },
  regalos: {
    titulo: "Tienda de Regalos y Novedades",
    icono: "🎁",
    descripcion: "Peluches de Stitch, Snoopy y Capibara, portafotos, tazas, tomatodos y lámparas decorativas.",
    badge: "Regalos y Novedades"
  },
  cosmeticos: {
    titulo: "Cosméticos, Belleza y Accesorios",
    icono: "💄",
    descripcion: "Maquillaje, perfumes, delineadores, brillos, collares dúo magnéticos y cuidado personal.",
    badge: "Cosméticos y Belleza"
  },
  internet: {
    titulo: "Internet, Gaming y Servicios Digitales",
    icono: "💻",
    descripcion: "Horas de internet de alta velocidad, videojuegos en red PC Gamer, impresiones, copias y transcripciones.",
    badge: "Internet y Servicios"
  }
};

// ── 3. INTERACCIÓN DIRECTA: SELECCIONAR ARTÍCULO PARA EL PEDIDO ─────────
function seleccionarParaPedido(nombreProducto) {
  const selector = document.querySelector("#producto-pedido");
  const seccionPedidos = document.querySelector("#Pedidos");
  if (selector) {
    let optExistente = Array.from(selector.options).find(opt => opt.value === nombreProducto || opt.text === nombreProducto);
    if (!optExistente) {
      const nuevaOpcion = new Option(nombreProducto, nombreProducto, true, true);
      selector.add(nuevaOpcion);
      selector.value = nombreProducto;
    } else {
      optExistente.selected = true;
      selector.value = optExistente.value;
    }
  }
  if (seccionPedidos) {
    seccionPedidos.scrollIntoView({ behavior: "smooth" });
    const inputCant = document.querySelector("#cantidad");
    if (inputCant) {
      inputCant.focus();
    }
  }
}

// ── 4. PLANTILLA PARA CREAR TARJETAS EN EL CATÁLOGO ────────────────────
function crearTarjetaProducto(producto) {
  const articulo = document.createElement("article");
  articulo.classList.add("tarjeta");
  const agotado = !producto.disponible || producto.stock <= 0;
  if (agotado) {
    articulo.classList.add("agotado");
  }

  articulo.dataset.nombre = producto.nombre;
  articulo.dataset.categoria = producto.categoria;

  let imagenUrl = producto.imagen || "imagenes/materiales.jfif";
  if (!imagenUrl.startsWith("imagenes/") && !imagenUrl.startsWith("http")) {
    imagenUrl = `imagenes/${imagenUrl}`;
  }
  const unidad = producto.unidad ? `/ ${producto.unidad}` : "";
  const catInfo = INFO_CATEGORIAS[producto.categoria];
  const catTexto = catInfo ? catInfo.badge : producto.categoria;
  const nombreEscapado = producto.nombre.replace(/'/g, "\\'");

  articulo.innerHTML = `
    <div class="tarjeta-img-wrap">
      <img src="${imagenUrl}" alt="${producto.nombre}" loading="lazy" onerror="this.src='imagenes/materiales.jfif'">
      <span class="badge-stock ${agotado ? 'badge-agotado' : 'badge-disponible'}">
        ${agotado ? 'Agotado' : 'En stock'}
      </span>
    </div>
    <div class="tarjeta-cuerpo">
      <span class="categoria-etiqueta">${catTexto}</span>
      <h4 class="tarjeta-titulo">${producto.nombre}</h4>
      <div class="tarjeta-precio-fila">
        <p class="precio">Bs ${producto.precio.toFixed(2)} <span class="unidad-medida">${unidad}</span></p>
      </div>
      <p class="stock">${!agotado ? `Quedan ${producto.stock} unidades` : "⚠️ Agotado por el momento"}</p>
      <button type="button" class="btn-pedir" onclick="seleccionarParaPedido('${nombreEscapado}')" title="Hacer pedido de este producto">
        🛒 Pedir este artículo
      </button>
    </div>
  `;

  return articulo;
}

// Alias para compatibilidad con código anterior o de clase
const crearTarjetaPlato = crearTarjetaProducto;

// ── 5. FUNCIÓN DE RENDERIZADO CATEGORIZADO EN EL DOM ───────────────────
function render(lista) {
  if (!contenedor) return;
  contenedor.innerHTML = "";

  if (!lista || lista.length === 0) {
    contenedor.innerHTML = `
      <div class="estado-vacio">
        <p class="icono-vacio">🔍</p>
        <h3>No se encontraron productos</h3>
        <p>No hay artículos que coincidan con tu búsqueda. Prueba con otro término o selecciona "✨ Todos".</p>
      </div>
    `;
    return;
  }

  // Agrupar productos por su categoría
  const grupos = {};
  lista.forEach(producto => {
    const cat = producto.categoria || "escolares";
    if (!grupos[cat]) grupos[cat] = [];
    grupos[cat].push(producto);
  });

  const ordenCategorias = ["escolares", "regalos", "cosmeticos", "internet"];

  ordenCategorias.forEach(catClave => {
    if (grupos[catClave] && grupos[catClave].length > 0) {
      const info = INFO_CATEGORIAS[catClave] || {
        titulo: catClave.toUpperCase(),
        icono: "✨",
        descripcion: "",
        badge: catClave
      };

      const seccionCat = document.createElement("section");
      seccionCat.className = `bloque-categoria bloque-${catClave}`;
      seccionCat.innerHTML = `
        <header class="cabecera-categoria">
          <div class="titulo-cat-wrap">
            <span class="icono-categoria" aria-hidden="true">${info.icono}</span>
            <div>
              <h3 class="titulo-categoria">${info.titulo}</h3>
              <p class="desc-categoria">${info.descripcion}</p>
            </div>
          </div>
          <span class="badge-conteo">${grupos[catClave].length} ${grupos[catClave].length === 1 ? 'artículo' : 'artículos'}</span>
        </header>
        <div class="grid-productos-categoria"></div>
      `;

      const gridInterno = seccionCat.querySelector(".grid-productos-categoria");
      grupos[catClave].forEach(producto => {
        gridInterno.append(crearTarjetaProducto(producto));
      });

      contenedor.append(seccionCat);
    }
  });
}

// Aliases para llamadas existentes
const renderProductos = render;
const renderMenu = render;

// ── 6. EJECUTAR RENDERIZADO INICIAL ─────────────────────────────────────
if (typeof productos !== "undefined") {
  render(productos);
}

// ── 7. RECORRIDO DEL DOM ────────────────────────────────────────────────
const primeraTarjeta = document.querySelector(".tarjeta");
if (primeraTarjeta) {
  console.log("Contenedor padre:", primeraTarjeta.parentElement ? primeraTarjeta.parentElement.id : "sin padre");
  console.log("Producto destacado:", primeraTarjeta.dataset.nombre);
}
