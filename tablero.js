/* ═════════════════════════════════════════════════════════════════════════
   DEMO DEL DÍA 14 - Canvas y Drag & Drop

   Dos cosas que no se parecen en nada, unidas en un solo ejercicio: un
   tablero donde se arrastran productos entre columnas, y un gráfico que se
   redibuja al soltar.

   Es el último día de contenido nuevo antes del segundo parcial, y el que
   más se disfruta.
   ═════════════════════════════════════════════════════════════════════════ */

// El estado del tablero: qué producto está en qué columna.
// El DOM muestra el estado; NO es el estado. Si se lee del DOM para saber qué
// hay dónde, cualquier cambio visual rompe la lógica.
const COLUMNAS = ["disponibles", "pedido"];
const CATEGORIAS_GRAFICO = [
  { clave: "escolares", etiqueta: "Escolares" },
  { clave: "regalos", etiqueta: "Regalos" },
  { clave: "cosmeticos", etiqueta: "Cosméticos" },
  { clave: "internet", etiqueta: "Internet" },
];

// Obtenemos los productos disponibles del catálogo de Level Up Store (datos.js)
const catalogoBase = (typeof productos !== "undefined" && Array.isArray(productos))
  ? productos.filter(p => p.disponible && p.stock > 0).map(p => ({
      nombre: p.nombre,
      precio: Number(p.precio) || 0,
      categoria: p.categoria || "escolares",
      imagen: p.imagen || "imagenes/materiales.jfif",
      unidad: p.unidad || "unidad",
    }))
  : [
      { nombre: "Cuadernos empastados tamaño carta", precio: 18.0, categoria: "escolares", imagen: "imagenes/materiales.jfif", unidad: "unidad" },
      { nombre: "Marcadores Sabonis x12 colores al agua", precio: 25.0, categoria: "escolares", imagen: "imagenes/utiles_escolares.jpg", unidad: "estuche" },
      { nombre: "Peluche tierno de Stitch", precio: 45.0, categoria: "regalos", imagen: "imagenes/peluches_stitch_capibara.jpg", unidad: "unidad" },
      { nombre: "Paletas de maquillaje y sombras de ojos", precio: 22.0, categoria: "cosmeticos", imagen: "imagenes/cosmeticos_perfumes.jpg", unidad: "estuche" },
    ];

let tablero = {
  disponibles: [...catalogoBase],
  pedido: [
    {
      nombre: "Cuadernos empastados tamaño carta",
      precio: 18.0,
      cantidad: 2,
      categoria: "escolares",
      imagen: "imagenes/materiales.jfif",
    },
    {
      nombre: "Peluche tierno de Stitch",
      precio: 45.0,
      cantidad: 1,
      categoria: "regalos",
      imagen: "imagenes/peluches_stitch_capibara.jpg",
    },
  ],
};

let textoFiltroDisponibles = "";

// ── FUNCIONES AUXILIARES DE ESTADO ──────────────────────────────────────
function agregarProductoABandeja(producto, cantidadSumar = 1) {
  if (!producto || !producto.nombre) return;
  const existente = tablero.pedido.find(item => item.nombre === producto.nombre);
  if (existente) {
    existente.cantidad += cantidadSumar;
  } else {
    tablero.pedido.push({
      nombre: producto.nombre,
      precio: Number(producto.precio) || 0,
      cantidad: cantidadSumar,
      categoria: producto.categoria || "escolares",
      imagen: producto.imagen || "imagenes/materiales.jfif",
    });
  }
  renderTablero();
}

function obtenerResumenTextoBandeja() {
  if (tablero.pedido.length === 0) return "";
  const lineas = tablero.pedido.map(
    i => `- ${i.cantidad}x ${i.nombre} (Bs ${(i.precio * i.cantidad).toFixed(2)})`
  );
  const totalBs = tablero.pedido.reduce((acc, i) => acc + i.precio * i.cantidad, 0);
  return `Pedido de varios productos:\n${lineas.join("\n")}\nTotal estimado: Bs ${totalBs.toFixed(2)}`;
}

// ── 1. PINTAR EL TABLERO ────────────────────────────────────────────────
// El mismo patrón render() del Día 8: vaciar, recorrer, insertar.
function renderTablero() {
  // 1A. Pintar barra deslizable de productos disponibles (con fotos pequeñas)
  const colDisponibles = document.querySelector('[data-columna="disponibles"]');
  if (colDisponibles) {
    const listaDisp = colDisponibles.querySelector(".lista-columna");
    listaDisp.innerHTML = "";

    const filtrados = tablero.disponibles.filter(item =>
      item.nombre.toLowerCase().includes(textoFiltroDisponibles.toLowerCase())
    );

    filtrados.forEach((item) => {
      const indiceReal = tablero.disponibles.indexOf(item);
      const li = document.createElement("li");
      li.className = "ficha ficha-disponible";

      // draggable="true" es TODO lo que hace falta para que se pueda
      // arrastrar. Sin este atributo, los eventos de arrastre no existen.
      li.draggable = true;

      // El elemento recuerda de dónde viene y cuál es. Es lo que después
      // permite moverlo: sin esto habría que adivinar.
      li.dataset.columna = "disponibles";
      li.dataset.indice = indiceReal;

      const enBandeja = tablero.pedido.find(p => p.nombre === item.nombre);
      const badgeCant = enBandeja
        ? `<span class="ficha-en-carrito" title="En tu bandeja">${enBandeja.cantidad} en bandeja</span>`
        : "";

      li.innerHTML = `
        <img src="${item.imagen}" alt="${item.nombre}" class="ficha-miniatura" loading="lazy" onerror="this.src='imagenes/materiales.jfif'">
        <div class="ficha-datos">
          <span class="ficha-titulo">${item.nombre}</span>
          <span class="ficha-sub">Bs ${item.precio.toFixed(2)} ${badgeCant}</span>
        </div>
        <button type="button" class="btn-ficha-accion btn-ficha-mas" data-accion="agregar" title="Agregar a la bandeja">+</button>
      `;
      listaDisp.append(li);
    });

    const nDisp = filtrados.length;
    colDisponibles.querySelector(".total").textContent =
      `${nDisp} ${nDisp === 1 ? "producto disponible" : "productos disponibles"} · Arrastra a la bandeja →`;
  }

  // 1B. Pintar cuadro de pedidos / Bandeja de compra
  const colPedido = document.querySelector('[data-columna="pedido"]');
  if (colPedido) {
    const listaPed = colPedido.querySelector(".lista-columna");
    listaPed.innerHTML = "";

    if (tablero.pedido.length === 0) {
      const vacio = document.createElement("li");
      vacio.className = "bandeja-vacia-msg";
      vacio.innerHTML = `
        <span class="bandeja-vacia-icono">🛒</span>
        <p>Tu bandeja de compras está vacía.</p>
        <small>Arrastra aquí los productos desde la barra del lado izquierdo (o pulsa el botón <strong>+</strong>) para armar un pedido de varios productos.</small>
      `;
      listaPed.append(vacio);
    } else {
      tablero.pedido.forEach((item, indice) => {
        const li = document.createElement("li");
        li.className = "ficha ficha-carrito";
        li.draggable = true;
        li.dataset.columna = "pedido";
        li.dataset.indice = indice;

        const subtotal = item.precio * item.cantidad;

        li.innerHTML = `
          <img src="${item.imagen}" alt="${item.nombre}" class="ficha-miniatura" loading="lazy" onerror="this.src='imagenes/materiales.jfif'">
          <div class="ficha-datos">
            <span class="ficha-titulo">${item.nombre}</span>
            <span class="ficha-sub">Bs ${item.precio.toFixed(2)} c/u · <strong>Subtotal: Bs ${subtotal.toFixed(2)}</strong></span>
          </div>
          <div class="ficha-controles-cantidad">
            <button type="button" class="btn-ficha-accion" data-accion="restar" title="Reducir cantidad">−</button>
            <span class="ficha-cant-num">${item.cantidad}</span>
            <button type="button" class="btn-ficha-accion" data-accion="sumar" title="Aumentar cantidad">+</button>
            <button type="button" class="btn-ficha-accion btn-ficha-quitar" data-accion="quitar" title="Quitar de la bandeja">&times;</button>
          </div>
        `;
        listaPed.append(li);
      });
    }

    const totalUnidades = tablero.pedido.reduce((suma, i) => suma + i.cantidad, 0);
    const totalBs = tablero.pedido.reduce((suma, i) => suma + i.precio * i.cantidad, 0);
    // Concordancia: "1 producto", no "1 productos". Es un detalle, pero se ve.
    const n = tablero.pedido.length;
    colPedido.querySelector(".total").innerHTML =
      `<strong>${n}</strong> ${n === 1 ? "producto" : "productos"} (<strong>${totalUnidades}</strong> ${totalUnidades === 1 ? "unidad" : "unidades"}) · Total: <strong class="total-monto-bs">Bs ${totalBs.toFixed(2)}</strong>`;
  }

  // Actualizar la opción del formulario principal con el conteo de la bandeja
  const opcionBandeja = document.querySelector("#opcion-bandeja");
  if (opcionBandeja) {
    const totalUnidades = tablero.pedido.reduce((suma, i) => suma + i.cantidad, 0);
    const totalBs = tablero.pedido.reduce((suma, i) => suma + i.precio * i.cantidad, 0);
    if (tablero.pedido.length > 0) {
      opcionBandeja.textContent = `🛒 Pedido de varios productos: ${tablero.pedido.length} art. (${totalUnidades} u.) - Bs ${totalBs.toFixed(2)}`;
    } else {
      opcionBandeja.textContent = `🛒 Pedido de varios productos (según Bandeja de Compras)`;
    }
  }

  dibujarGrafico();
}

// ── 2. DRAG & DROP: LOS EVENTOS, EN ORDEN ───────────────────────────────
// dragstart  -> al empezar a arrastrar, sobre el elemento que se arrastra
// dragover   -> mientras se pasa por encima de un destino posible
// drop       -> al soltar sobre un destino válido
// dragend    -> al terminar, pase lo que pase
//
// Se usa DELEGACIÓN, igual que el Día 9: los listeners van en el tablero, no
// en cada ficha, porque las fichas se vuelven a crear en cada render.

const elTablero = document.querySelector("#tablero");

if (elTablero) {
  elTablero.addEventListener("dragstart", (event) => {
    const ficha = event.target.closest(".ficha");
    if (!ficha) return;

    // dataTransfer es el "bolsillo" del arrastre: lo que se guarde aquí es lo
    // que llega al soltar. SOLO GUARDA TEXTO, igual que localStorage, así que
    // un objeto va como JSON.
    event.dataTransfer.setData("text/plain", JSON.stringify({
      columna: ficha.dataset.columna,
      indice: Number(ficha.dataset.indice),
    }));

    event.dataTransfer.effectAllowed = "move";
    ficha.classList.add("arrastrando");
  });

  elTablero.addEventListener("dragend", (event) => {
    const ficha = event.target.closest(".ficha");
    if (ficha) ficha.classList.remove("arrastrando");
    document.querySelectorAll(".columna").forEach(c => c.classList.remove("encima"));
  });

  // ⚠️ EL BUG GARANTIZADO DEL DÍA
  // Por defecto, la mayoría de los elementos NO aceptan que se suelte nada
  // encima. preventDefault() en dragover es lo que dice "aquí sí se puede
  // soltar".
  //
  // SIN ESTA LÍNEA, el evento drop NUNCA se dispara. Y no hay ningún error en
  // consola: simplemente no pasa nada, que es peor. Todo el mundo pierde diez
  // minutos con esto la primera vez.
  elTablero.addEventListener("dragover", (event) => {
    const columna = event.target.closest(".columna");
    if (!columna) return;

    event.preventDefault();                 // <- sin esto, drop no ocurre
    event.dataTransfer.dropEffect = "move";
    columna.classList.add("encima");        // feedback visual: dónde va a caer
  });

  elTablero.addEventListener("dragleave", (event) => {
    const columna = event.target.closest(".columna");
    if (columna && !columna.contains(event.relatedTarget)) {
      columna.classList.remove("encima");
    }
  });

  elTablero.addEventListener("drop", (event) => {
    const columna = event.target.closest(".columna");
    if (!columna) return;

    event.preventDefault();                 // también aquí: evita que el
                                            // navegador intente abrir el dato
    columna.classList.remove("encima");

    const datoTexto = event.dataTransfer.getData("text/plain");
    if (!datoTexto) return;

    let origen;
    try {
      origen = JSON.parse(datoTexto);
    } catch {
      return;
    }

    const destino = columna.dataset.columna;
    if (origen.columna === destino) return; // soltar donde ya estaba: nada

    // Se modifica el ESTADO, y después se vuelve a pintar todo. No se mueve el
    // elemento del DOM a mano: eso desincroniza el estado de lo que se ve.
    if (origen.columna === "disponibles" && destino === "pedido") {
      const prod = tablero.disponibles[origen.indice];
      if (prod) agregarProductoABandeja(prod, 1);
    } else if (origen.columna === "pedido" && destino === "disponibles") {
      tablero.pedido.splice(origen.indice, 1);
      renderTablero();
    }
  });

  // Controles por clic (+ / - / quitar) para ajustar cantidades y soporte móvil
  elTablero.addEventListener("click", (event) => {
    const boton = event.target.closest("[data-accion]");
    if (!boton) return;

    const ficha = boton.closest(".ficha");
    if (!ficha) return;

    const accion = boton.dataset.accion;
    const indice = Number(ficha.dataset.indice);

    if (accion === "agregar") {
      const prod = tablero.disponibles[indice];
      if (prod) agregarProductoABandeja(prod, 1);
    } else if (accion === "sumar") {
      if (tablero.pedido[indice]) {
        tablero.pedido[indice].cantidad += 1;
        renderTablero();
      }
    } else if (accion === "restar") {
      if (tablero.pedido[indice]) {
        tablero.pedido[indice].cantidad -= 1;
        if (tablero.pedido[indice].cantidad <= 0) {
          tablero.pedido.splice(indice, 1);
        }
        renderTablero();
      }
    } else if (accion === "quitar") {
      tablero.pedido.splice(indice, 1);
      renderTablero();
    }
  });
}

// Buscador rápido dentro de la barra deslizable de productos disponibles
const inputFiltroDisp = document.querySelector("#filtro-disponibles");
if (inputFiltroDisp) {
  inputFiltroDisp.addEventListener("input", (e) => {
    textoFiltroDisponibles = e.target.value;
    renderTablero();
  });
}

// Botón para vaciar la bandeja
const btnVaciar = document.querySelector("#vaciar-bandeja");
if (btnVaciar) {
  btnVaciar.addEventListener("click", () => {
    tablero.pedido = [];
    renderTablero();
  });
}

// Botón para llevar los productos de la bandeja al formulario de pedidos
const btnConfirmarBandeja = document.querySelector("#confirmar-bandeja");
if (btnConfirmarBandeja) {
  btnConfirmarBandeja.addEventListener("click", () => {
    if (tablero.pedido.length === 0) {
      alert("Tu bandeja está vacía. Arrastra o agrega al menos un producto para armar tu pedido.");
      return;
    }

    const selector = document.querySelector("#producto-pedido");
    const inputCantidad = document.querySelector("#cantidad");
    const textareaNotas = document.querySelector("#notas");
    const seccionPedidos = document.querySelector("#Pedidos");

    const totalUnidades = tablero.pedido.reduce((s, i) => s + i.cantidad, 0);

    if (selector) {
      selector.value = "Pedido de varios productos (Bandeja)";
    }
    if (inputCantidad) {
      inputCantidad.value = totalUnidades;
    }
    if (textareaNotas) {
      textareaNotas.value = obtenerResumenTextoBandeja();
    }
    if (seccionPedidos) {
      seccionPedidos.scrollIntoView({ behavior: "smooth" });
      document.querySelector("#nombre")?.focus();
    }
  });
}

// Botón para pedir directamente los productos de la bandeja por WhatsApp
const btnWspBandeja = document.querySelector("#whatsapp-bandeja");
if (btnWspBandeja) {
  btnWspBandeja.addEventListener("click", () => {
    if (tablero.pedido.length === 0) {
      alert("Tu bandeja está vacía. Arrastra o agrega productos antes de enviar el pedido.");
      return;
    }
    const totalBs = tablero.pedido.reduce((s, i) => s + i.precio * i.cantidad, 0);
    const detalle = tablero.pedido
      .map(i => `• ${i.cantidad}x ${i.nombre} (Bs ${(i.precio * i.cantidad).toFixed(2)})`)
      .join("\n");
    const msg = `¡Hola Level Up Store! Quisiera realizar el siguiente pedido de varios productos:\n\n${detalle}\n\nTotal estimado: Bs ${totalBs.toFixed(2)}`;
    window.open(`https://wa.me/59174090398?text=${encodeURIComponent(msg)}`, "_blank");
  });
}

// ── 3. CANVAS: EL TAMAÑO ────────────────────────────────────────────────
// EL ERROR NÚMERO UNO DE CANVAS, y hay que verlo una vez:
//
//   <canvas width="600" height="220">     el LIENZO mide 600x220 píxeles
//   canvas { width: 300px; }              y esa imagen se muestra a 300
//
// Los atributos definen cuántos píxeles tiene el lienzo de verdad. El CSS
// solo estira o encoge esa imagen, como haría con una foto. Si no coinciden,
// todo sale borroso o deformado.
//
// getContext("2d") devuelve el objeto con el que se dibuja. Todo pasa por él.
const canvas = document.querySelector("#grafico");
const ctx = canvas ? canvas.getContext("2d") : null;

// El sistema de coordenadas empieza arriba a la izquierda, y la Y crece hacia
// ABAJO. Es al revés de las matemáticas del colegio y confunde al principio.
//
//   (0,0) ────────────▶ x
//     │
//     │
//     ▼ y

// ── 4. DIBUJAR ──────────────────────────────────────────────────────────
function dibujarGrafico() {
  if (!canvas || !ctx) return;

  const totales = CATEGORIAS_GRAFICO.map(cat =>
    tablero.pedido
      .filter(i => i.categoria === cat.clave)
      .reduce((suma, i) => suma + i.cantidad, 0)
  );
  const subtotalesBs = CATEGORIAS_GRAFICO.map(cat =>
    tablero.pedido
      .filter(i => i.categoria === cat.clave)
      .reduce((suma, i) => suma + i.precio * i.cantidad, 0)
  );
  const maximo = Math.max(...totales, 1);      // el 1 evita dividir entre cero

  // clearRect borra un rectángulo. Sin esto, cada dibujo se superpone al
  // anterior y quedan las barras viejas debajo.
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const margen = 40;
  const anchoBarra = 95;
  const separacion = 45;
  const alturaUtil = canvas.height - margen * 2;

  // Los colores se leen del CSS, para que el gráfico siga al tema oscuro.
  // getComputedStyle da el valor final de una variable, ya resuelto.
  const estilo = getComputedStyle(document.body);
  const colorBarra = estilo.getPropertyValue("--color-principal").trim() || "#1a4a7a";
  const colorTexto = estilo.getPropertyValue("--color-texto").trim() || "#1f2933";

  CATEGORIAS_GRAFICO.forEach((cat, i) => {
    const x = margen + i * (anchoBarra + separacion);
    const alto = (totales[i] / maximo) * alturaUtil;
    const y = canvas.height - margen - alto;

    // fillStyle define el color de relleno; hay que ponerlo ANTES de dibujar.
    // Es un ajuste que queda puesto: afecta a todo lo que se dibuje después.
    ctx.fillStyle = colorBarra;
    ctx.fillRect(x, y, anchoBarra, alto);      // x, y, ancho, alto

    ctx.fillStyle = colorTexto;
    ctx.font = "13px system-ui, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(cat.etiqueta, x + anchoBarra / 2, canvas.height - margen + 20);
    ctx.fillText(`${totales[i]} u. (Bs ${subtotalesBs[i].toFixed(0)})`, x + anchoBarra / 2, y - 8);
  });

  // Una línea de base, para que las barras se apoyen en algo.
  // beginPath empieza un trazo nuevo: sin él, se acumula con los anteriores.
  ctx.beginPath();
  ctx.moveTo(margen - 10, canvas.height - margen);
  ctx.lineTo(canvas.width - margen + 10, canvas.height - margen);
  ctx.strokeStyle = colorTexto;
  ctx.lineWidth = 1;
  ctx.stroke();                                 // hasta aquí no se ve nada
}

// ── 5. ANIMAR: EL LOOP ──────────────────────────────────────────────────
// Un canvas animado siempre hace lo mismo, en este orden:
//
//     limpiar  ->  actualizar el estado  ->  dibujar  ->  pedir el siguiente
//
// requestAnimationFrame(fn) pide al navegador que llame a fn justo antes del
// próximo repintado. Es mejor que setInterval por dos razones:
//   - se sincroniza con la pantalla (60 veces por segundo, o lo que toque)
//   - se PAUSA solo cuando la pestaña no está visible, y no gasta batería
//
// Aquí no hace falta un loop permanente: el gráfico solo cambia al soltar una
// ficha. Animar algo que no se mueve es gastar batería para nada.
//
//     function loop() {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       actualizar();
//       dibujar();
//       requestAnimationFrame(loop);
//     }
//     requestAnimationFrame(loop);

// ── 6. LO QUE NO FUNCIONA EN MÓVIL ──────────────────────────────────────
// El drag & drop nativo de HTML5 NO responde a eventos táctiles. En un
// celular, arrastrar con el dedo no dispara dragstart.
//
// Las salidas, de menor a mayor esfuerzo:
//   1. dar una alternativa que no sea arrastrar: un botón "mover a...".
//      Es lo mejor, y además funciona con teclado y con lector de pantalla.
//   2. implementarlo con eventos touchstart/touchmove/touchend, a mano.
//   3. usar una librería que ya lo resuelva.
//
// Para el proyecto de este módulo, incluimos tanto los botones (+ / - / ×)
// como soporte táctil (touchstart/touchmove/touchend) para poder arrastrar
// también desde pantallas móviles.

let fichaTocada = null;
let clonTactil = null;
let inicioToque = { x: 0, y: 0 };

if (elTablero) {
  elTablero.addEventListener("touchstart", (event) => {
    if (event.target.closest("button") || event.target.closest("input")) return;
    const ficha = event.target.closest(".ficha");
    if (!ficha) return;

    const touch = event.touches[0];
    inicioToque = { x: touch.clientX, y: touch.clientY };
    fichaTocada = {
      elemento: ficha,
      columna: ficha.dataset.columna,
      indice: Number(ficha.dataset.indice),
      arrastrando: false,
    };
  }, { passive: true });

  elTablero.addEventListener("touchmove", (event) => {
    if (!fichaTocada) return;
    const touch = event.touches[0];
    const dist = Math.hypot(touch.clientX - inicioToque.x, touch.clientY - inicioToque.y);

    if (!fichaTocada.arrastrando && dist > 12) {
      fichaTocada.arrastrando = true;
      fichaTocada.elemento.classList.add("arrastrando");

      clonTactil = fichaTocada.elemento.cloneNode(true);
      clonTactil.className = "ficha ficha-clon-tactil";
      document.body.appendChild(clonTactil);
    }

    if (fichaTocada.arrastrando && clonTactil) {
      if (event.cancelable) event.preventDefault();
      clonTactil.style.left = `${touch.clientX}px`;
      clonTactil.style.top = `${touch.clientY}px`;

      clonTactil.style.display = "none";
      const debajo = document.elementFromPoint(touch.clientX, touch.clientY);
      clonTactil.style.display = "";

      document.querySelectorAll(".columna").forEach(c => c.classList.remove("encima"));
      const colDestino = debajo ? debajo.closest(".columna") : null;
      if (colDestino && colDestino.dataset.columna !== fichaTocada.columna) {
        colDestino.classList.add("encima");
      }
    }
  }, { passive: false });

  elTablero.addEventListener("touchend", (event) => {
    if (!fichaTocada) return;
    if (fichaTocada.arrastrando) {
      const touch = event.changedTouches[0];
      if (clonTactil) clonTactil.style.display = "none";
      const debajo = document.elementFromPoint(touch.clientX, touch.clientY);
      const colDestino = debajo ? debajo.closest(".columna") : null;

      if (colDestino) {
        const destino = colDestino.dataset.columna;
        if (fichaTocada.columna === "disponibles" && destino === "pedido") {
          const prod = tablero.disponibles[fichaTocada.indice];
          if (prod) agregarProductoABandeja(prod, 1);
        } else if (fichaTocada.columna === "pedido" && destino === "disponibles") {
          tablero.pedido.splice(fichaTocada.indice, 1);
          renderTablero();
        }
      }
    }

    if (fichaTocada.elemento) fichaTocada.elemento.classList.remove("arrastrando");
    if (clonTactil) {
      clonTactil.remove();
      clonTactil = null;
    }
    document.querySelectorAll(".columna").forEach(c => c.classList.remove("encima"));
    fichaTocada = null;
  });
}

renderTablero();
