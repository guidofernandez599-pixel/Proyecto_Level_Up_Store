// ── 1. SELECTORES DEL DOM PARA CARGA REMOTA ─────────────────────────────
const $estado = document.querySelector("#estado");
const listaRemota = document.querySelector("#lista-remota");

// ── 2. JSON: PARSEO Y SERIALIZACIÓN ─────────────────────────────────────
// Ejemplo contextualizado con un producto representativo de Level Up Store
const textoJson = '{"nombre":"Cuaderno empastado tamaño carta","precio":18.00,"unidad":"unidad","disponible":true}';
const objeto = JSON.parse(textoJson);
console.log("Producto de librería parseado desde JSON:", objeto.nombre, "- Precio: Bs", objeto.precio);
console.log("Convertido de vuelta a JSON (serializado):", JSON.stringify(objeto));

// ── 3. GESTIÓN DE LOS TRES ESTADOS DE PETICIÓN (cargando, ok, error) ─────
function mostrarEstado(texto, tipo = "info") {
  if (!$estado) return;
  $estado.textContent = texto;
  $estado.className = tipo;
}

// ── 4. FUNCIÓN PARA PINTAR PRODUCTOS DEL CATÁLOGO REMOTO ────────────────
function pintarRemoto(productos) {
  if (!listaRemota) return;
  listaRemota.innerHTML = "";

  productos.forEach(p => {
    const art = document.createElement("article");
    art.classList.add("tarjeta");

    // Marca como agotado si no está disponible o el stock es cero
    if (!p.disponible || p.stock <= 0) {
      art.classList.add("agotado");
    }

    let imagenUrl = p.imagen || "imagenes/materiales.jfif";
    if (!imagenUrl.startsWith("imagenes/") && !imagenUrl.startsWith("http")) {
      imagenUrl = `imagenes/${imagenUrl}`;
    }
    const categoriaHtml = p.categoria ? `<p class="categoria"><strong>Categoría:</strong> ${p.categoria}</p>` : "";
    const proveedorHtml = p.proveedor ? `<p class="stock" style="font-size:0.8rem; color:var(--color-suave)">🏢 Proveedor: ${p.proveedor}</p>` : "";

    art.innerHTML = `
      <img src="${imagenUrl}" alt="${p.nombre}" onerror="this.src='imagenes/materiales.jfif'">
      <h3>${p.nombre}</h3>
      <p class="precio">Bs ${p.precio.toFixed(2)} <span style="font-size:0.85rem; font-weight:normal; color:var(--color-suave)">/ ${p.unidad || "unidad"}</span></p>
      ${categoriaHtml}
      <p class="stock">${p.disponible && p.stock > 0 ? `✅ ${p.stock} disponibles en tienda` : "⚠️ Agotado por el momento"}</p>
      ${proveedorHtml}
    `;

    listaRemota.append(art);
  });
}

// ── 5. CARGA ASÍNCRONA CON FETCH Y ASYNC/AWAIT ───────────────────────────
async function cargarConFetch(url = "datos.json") {
  mostrarEstado("Cargando catálogo de Level Up Store desde el servidor...", "cargando");

  try {
    const respuesta = await fetch(url);

    if (!respuesta.ok) {
      throw new Error(`El servidor respondió con código de error HTTP ${respuesta.status}`);
    }

    const datos = await respuesta.json();
    pintarRemoto(datos.productos);

    mostrarEstado(`✅ Se cargaron exitosamente ${datos.productos.length} productos y servicios de ${datos.negocio.nombre}`, "ok");

  } catch (error) {
    mostrarEstado(`No se pudieron cargar los datos remotos. ${error.message}`, "error");
    if (listaRemota) listaRemota.innerHTML = "";
  }
}

// Listeners con Fetch nativo
const btnFetch = document.querySelector("#cargar-fetch");
if (btnFetch) {
  btnFetch.addEventListener("click", () => cargarConFetch("datos.json"));
}

const btnRoto = document.querySelector("#cargar-roto");
if (btnRoto) {
  btnRoto.addEventListener("click", () => cargarConFetch("no-existe.json"));
}

// ── 6. CARGA ASÍNCRONA CON jQUERY ($.getJSON) ───────────────────────────
const $btnJquery = $("#cargar-jquery");
if ($btnJquery.length) {
  $btnJquery.on("click", function () {
    mostrarEstado("Cargando catálogo con jQuery...", "cargando");

    $.getJSON("datos.json")
      .done(function (datos) {
        pintarRemoto(datos.productos);
        mostrarEstado(`✅ Se cargaron ${datos.productos.length} artículos de ${datos.negocio.nombre} (mediante jQuery)`, "ok");
      })
      .fail(function (jqXHR) {
        mostrarEstado(`Falló la petición con jQuery: Código HTTP ${jqXHR.status}`, "error");
        if (listaRemota) listaRemota.innerHTML = "";
      })
      .always(function () {
        console.log("Petición remota de Level Up Store finalizada.");
      });
  });
}

// ── 7. CONCEPTOS CLAVE: ¿QUÉ ES UNA PROMESA? ────────────────────────────
// Una Promesa en JavaScript es un objeto que representa la eventual finalización
// (con éxito o con fallo) de una operación asíncrona (como solicitar un archivo JSON).
// Posee 3 estados:
// 1. Pending (pendiente): La petición está viajando por la red hacia datos.json.
// 2. Fulfilled (cumplida): El servidor respondió y entrega los datos.
// 3. Rejected (rechazada): Ocurrió un error (ej. archivo no existe, sin conexión).

// ── 8. INSPECCIÓN EN LA PESTAÑA NETWORK (RED) ───────────────────────────
// Al abrir las DevTools (F12) -> pestaña "Network" o "Red":
// - Al presionar "Cargar con fetch" o "Cargar con jQuery", se observa la solicitud GET a 'datos.json' con Status 200 OK.
// - Al presionar "Probar un error", se observa la solicitud a 'no-existe.json' con Status 404 Not Found.
// - Se puede inspeccionar el Headers (Content-Type: application/json), la vista previa (Preview) y la Respuesta (Response).
