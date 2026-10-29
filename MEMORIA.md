# Memoria Técnica del Proyecto: Level Up Store

**Proyecto:** Sitio Web Comercial e Interactivo "Level Up Store"  
**Estudiante / Desarrollador:** Guido Fernandez Ajno  
**Clientes:** Bragin Quispe Mamani y Lucy Gladys Fernandez Ajno  
**Ubicación:** Colquencha, La Paz - Bolivia  
**Fecha de Actualización:** 27 de Octubre de 2026 (Cierre de jornada)  
**Versión:** 2.2 (Carga Remota con Fetch/jQuery, Redes Sociales y Reorganización de Imágenes)  

---

## 1. Introducción y Justificación

### 1.1 Contexto
"Level Up Store" es un emprendimiento comercial local ubicado en el municipio de Colquencha, enfocado en satisfacer tres necesidades centrales de la comunidad, en especial de estudiantes, familias y jóvenes:
1. **Librería y papelería escolar:** Útiles escolares, material de escritorio, carpetas, fotocopias, impresiones, anillados y plastificados.
2. **Centro de Internet y Gaming:** Computadoras de alta velocidad para investigación estudiantil, impresiones en línea, práctica de dactilografía y videojuegos en red.
3. **Tienda de Regalos y Cosméticos:** Peluches de varios tamaños, portafotos, collares dúo, relojes decorativos, accesorios, perfumes y artículos de maquillaje.

### 1.2 Problema que resuelve
El negocio requería una plataforma web moderna para:
* Publicar de forma clara su catálogo de productos y precios actualizados en bolivianos (Bs).
* Difundir sus promociones exclusivas (por ejemplo, el *Viernes 2x1 en internet* y la *Promo Cumpleaños*).
* Permitir a los clientes buscar artículos, filtrar por categoría y realizar pedidos anticipados sin tener que desplazarse físicamente hasta la tienda para cotizar.

---

## 2. Objetivos del Proyecto

* **Objetivo General:** Desarrollar una solución web responsive, interactiva, visualmente atractiva y fácil de usar para "Level Up Store".
* **Objetivos Específicos Cumplidos:**
  * Estructuración semántica en HTML5 accesible y ordenada.
  * Implementación de una interfaz moderna y tecnológica (estética *Cyber / Librería Digital*).
  * Renderizado reactivo del catálogo de productos a partir de datos estructurados en JavaScript.
  * Búsqueda en tiempo real y filtrado interactivo por categorías mediante delegación de eventos.
  * Formulario de pedidos con validación de fechas en el navegador.
  * Integración de componentes dinámicos con jQuery (menú móvil, acordeón desplegable y avisos animados escalonados).

---

## 3. Bitácora de Trabajo Realizado Hoy (26 de Octubre de 2026)

Durante la sesión de trabajo de hoy se realizaron importantes avances técnicos y visuales para transformar el prototipo inicial en una plataforma completamente funcional:

### 3.1 Auditoría, Depuración y Limpieza de Código
* **Corrección de errores críticos en `app.js`:**
  * Se solucionó el `ReferenceError` provocado por variables no declaradas (`promocionDelDia` y `telefono`), vinculándolas correctamente con `promoViernes2x1` y `Celular`.
  * Se corrigió la sintaxis de declaración `let oso;`.
* **Retiro de código innecesario:**
  * Se descartó el archivo `jquery-comparado.js` y la sección comparativa experimental que no aportaban valor al usuario final de la tienda.
* **Eliminación de residuos de plantillas ajenas:**
  * En `datos.js` y `funciones.js`, se reemplazaron los datos de ejemplo del curso (panes, pasteles, alfajores, categoría "dulces") por artículos e inventario real de Level Up Store (cuadernos anillados, marcadores Sabonis, peluches, cosméticos y horas de internet).
* **Corrección en `index.html`:**
  * Se removieron etiquetas duplicadas accidentales (`</main>`, `<aside>`, `<footer>` pertenecientes a una plantilla externa).
  * Se corrigió el duplicado de ID en el formulario, renombrando el selector a `id="producto-pedido"`.
  * Se arregló el atributo de viewport (`initial-scale=1.0`).

### 3.2 Unificación del Motor de Renderizado e Interactividad
* **Refactorización de `render.js`:**
  * Se eliminó la duplicación de la función constructora.
  * Se definió la función unificada `render(lista)` y `crearTarjetaProducto(producto)` con soporte para imágenes, cálculo de stock y marcado de artículos agotados (`.agotado`).
* **Interactividad en `eventos.js`:**
  * Conexión del buscador en vivo `#buscador` al catálogo para filtrar por texto instantáneamente.
  * Filtro interactivo de botones `#filtros` con delegación de eventos (`event.target.closest("button")`), permitiendo ver *Todos*, *Escolares*, *Regalos* y *Cosméticos*.
  * Contador reactivo que informa la cantidad de productos visibles en pantalla.
  * Validación de la fecha de entrega en el formulario para evitar fechas pasadas.
* **Componentes con jQuery en `jquery-panel.js`:**
  * Encapsulado en `$(function () { ... })` para ejecución segura tras la carga del DOM.
  * Menú móvil deslizante (`#menu-toggle` / `#menu-movil`) con atributos de accesibilidad `aria-expanded`.
  * Acordeón interactivo de preguntas y servicios (`#acordeon`) con cierre automático de secciones inactivas.
  * Tablón de avisos (`#mostrar-avisos` / `#avisos`) con animación escalonada con retraso (`delay()`) y desvanecimiento (`fadeIn()` / `fadeOut()`).

### 3.3 Rediseño Visual Completo (Ambiente Moderno y Digital)
* **Transformación de `estilos.css`:**
  * Se reemplazó la paleta original en tonos mostaza/marrón por una paleta tecnológica y moderna, adecuada para una tienda de internet, computadoras y librería:
    * **Fondo Principal:** `#0a0e17` con gradientes radiales oscuros tecnológicos.
    * **Superficies y Tarjetas:** `#131b2e` con bordes `#22324e` y sombras difuminadas (`box-shadow`).
    * **Color Primario (Cyan Digital):** `#00e5ff` con efectos de resplandor neón (*glow*).
    * **Color Acento (Violeta Gamer):** `#a855f7` para estados hover y avisos.
    * **Tipografía:** Textos en blanco suave `#f1f5f9` y gris `#94a3b8` con alto contraste legible.
  * Estilización de tarjetas con efecto hover interactivo (elevación y borde iluminado).
  * Adaptación del diseño responsive con CSS Grid y Flexbox.

### 3.4 Creación e Integración de Recursos Fotográficos Reales
Se incorporaron 5 imágenes fotográficas en alta resolución representativas del negocio:
1. `utiles_escolares.jpg`: Cuadernos, resaltadores, estuche y marcadores Sabonis.
2. `peluche_regalo.jpg`: Peluche tierno y caja de regalo para la sección de obsequios.
3. `collares_portafotos.jpg`: Collares dúo y marco portafotos elegante.
4. `cosmeticos_perfumes.jpg`: Perfumes y paleta de maquillaje.
5. `internet_gaming.jpg`: Centro de computadoras de internet de alta velocidad y videojuegos en red con iluminación RGB.

Todas las imágenes se asociaron en el arreglo de datos `datos.js` y se integraron en las secciones de *Catálogo*, *Regalos*, *Promociones* y *Horarios* de `index.html`.

---

## 4. Estado Actual de los Archivos del Proyecto

| Archivo | Estado | Responsabilidad Principal |
| :--- | :---: | :--- |
### 3.5 Integración de Inventario Real y Categorización Completa (27 de Octubre de 2026)
* **Incorporación del listado oficial de inventario:**
  * Se procesó el inventario provisto por los clientes y se estructuró en 4 áreas fundamentales:
    1. **Materiales Escolares y Papelería:** Cuadernos empastados (carta/oficio/normal), bolígrafos (Sabonis, Faber-Castell, Monami, Pilot, Orion), marcadores al agua/alcohol/doble punta/resaltadores, hojas bond (carta/oficio), hojas de color, hojas de carpeta Líder/ABC, hojas Trapper, archivadores, pegamentos (UHU, Isocola, Merleto, Carpicola), tijeras, gomas, tajadores, correctores Radex y papeles especiales (lustroso, mosaico, 3D, estañado).
    2. **Tienda de Regalos y Novedades:** Peluches temáticos (Stitch, Snoopy clásico, Capibaras con mochila, Emojis), osos de peluche gigantes (1m) y medianos, portafotos de madera/vidrio, tazas decoradas, tomatodos, adornos, billeteras, relojes y bolas de cristal con nieve y música.
    3. **Cosméticos y Belleza:** Paletas de maquillaje, delineadores, brillos labiales, perfumes importados, aretes, collares, collares dúo magnéticos de pareja y accesorios de cabello (winchas, ligas).
    4. **Internet y Servicios Digitales:** 1 hora de internet de alta velocidad (Bs 2.00), PC Gamer en red (Bs 3.00), impresiones a color (Bs 2.00) y blanco/negro (Bs 1.00), fotocopias (Bs 0.50 / 1.50 color), transcripciones (Bs 4.00 x hoja) y anillados/plastificados.
* **Motor de renderizado categorizado ([`render.js`](file:///c:/Users/Personal/Documents/proyecto_tienda/render.js)):**
  * El catálogo ahora divide automáticamente los artículos en bloques temáticos (`.bloque-categoria`) con cabeceras que incluyen iconos, descripción y conteo dinámico de artículos.
  * Cada tarjeta incorpora indicador de disponibilidad (`En stock` / `Agotado`), unidad de medida y botón interactivo `🛒 Pedir este artículo` que traslada al cliente directamente al formulario y preselecciona el producto.
* **Confirmación por WhatsApp en [`eventos.js`](file:///c:/Users/Personal/Documents/proyecto_tienda/eventos.js):**
  * Al enviar el formulario de pedidos, se genera un enlace directo a la API de WhatsApp (`https://wa.me/59174090398`) con el detalle del cliente, producto, cantidad y fecha.
* **Incorporación de imagen real temática:**
  * Se agregó la fotografía [`peluches_stitch_capibara.jpg`](file:///c:/Users/Personal/Documents/proyecto_tienda/peluches_stitch_capibara.jpg) destacando los peluches de Stitch, Snoopy y Capibaras.
* **Actualización del catálogo remoto ([`datos.json`](file:///c:/Users/Personal/Documents/proyecto_tienda/datos.json)):**
  * El archivo JSON sincroniza los 37 productos y servicios oficiales para pruebas con `fetch` y `jQuery`.

---

## 4. Bitácora de Trabajo Realizado Hoy (27 de Octubre de 2026)

Durante la jornada de hoy se completaron todas las prioridades planificadas en la sesión anterior y se añadieron mejoras adicionales de calidad:

### 4.1 Creación del Módulo de Carga Remota ([`remoto.js`](file:///c:/Users/Personal/Documents/proyecto_tienda/remoto.js))
* **Nuevo archivo `remoto.js`** implementado desde cero, incluyendo:
  * **Gestión de los tres estados de petición**: `cargando`, `ok` y `error` mediante la función `mostrarEstado(texto, tipo)` que actualiza visualmente el elemento `#estado`.
  * **Carga asíncrona con Fetch nativo** (`async/await`): La función `cargarConFetch(url)` solicita `datos.json` al servidor, gestiona errores HTTP y renderiza las tarjetas del catálogo remoto en `#lista-remota`.
  * **Carga asíncrona con jQuery** (`$.getJSON`): Implementación alternativa con `.done()`, `.fail()` y `.always()` conectada al botón `#cargar-jquery`.
  * **Botón de error intencional** (`#cargar-roto`): Solicita `no-existe.json` para demostrar y practicar el manejo del estado de error (HTTP 404).
  * **Función `pintarRemoto(productos)`**: Renderiza cada artículo del catálogo remoto con imagen, precio, categoría, stock y proveedor. Gestiona rutas relativas de imágenes con prefijo automático `imagenes/`.
  * **Comentarios didácticos** sobre el ciclo de vida de las Promesas (Pending / Fulfilled / Rejected) y cómo inspeccionar peticiones en la pestaña Network de las DevTools.

### 4.2 Creación del Catálogo Remoto ([`datos.json`](file:///c:/Users/Personal/Documents/proyecto_tienda/datos.json))
* **Nuevo archivo `datos.json`** que replica el inventario oficial de Level Up Store en formato JSON estándar, incluyendo:
  * Metadatos del negocio: nombre, teléfono, ubicación y descripción.
  * 37 productos y servicios organizados en las 4 categorías oficiales: *Escolares*, *Regalos*, *Cosméticos* e *Internet/Servicios*.
  * Campos por artículo: `nombre`, `precio`, `unidad`, `categoria`, `disponible`, `stock`, `imagen` y `proveedor`.

### 4.3 Reorganización de la Carpeta de Imágenes
* **Todas las imágenes del proyecto se movieron a la subcarpeta `imagenes/`** para un mejor orden estructural:
  * `imagenes/Captura-LevelUp.png`
  * `imagenes/collares_portafotos.jpg`
  * `imagenes/cosmeticos_perfumes.jpg`
  * `imagenes/internet_gaming.jpg`
  * `imagenes/materiales.jfif`
  * `imagenes/peluche_regalo.jpg`
  * `imagenes/peluches_stitch_capibara.jpg` *(nueva, agregada hoy)*
  * `imagenes/utiles_escolares.jpg`
* Todas las referencias a imágenes en `index.html`, `render.js` y `remoto.js` fueron actualizadas con el prefijo `imagenes/`.

### 4.4 Sección de Redes Sociales en el Footer ([`index.html`](file:///c:/Users/Personal/Documents/proyecto_tienda/index.html))
* **Rediseño completo del `<footer id="Contactos">`** con una estructura en grid de 3 columnas:
  1. **Datos de contacto**: dirección, teléfono con enlace `tel:`, y horarios.
  2. **Redes Sociales** (nueva sección): botones interactivos con SVG inline para **WhatsApp**, **Facebook**, **Instagram** y **TikTok**, con atributos `aria-label` para accesibilidad y `rel="noopener"` por seguridad.
  3. **Servicios rápidos**: lista resumida de los 6 servicios principales de la tienda.
* Se añadió el enlace directo a WhatsApp `https://wa.me/59174090398` en el botón de la red social.
* Nota informativa para personalizar los enlaces reales de Facebook, Instagram y TikTok cuando se disponga de las URLs definitivas.

### 4.5 Nuevos Productos en el Catálogo ([`datos.js`](file:///c:/Users/Personal/Documents/proyecto_tienda/datos.js))
* **Incorporación de nuevos artículos** al inventario principal `datos.js`, ampliando la base de datos con productos adicionales identificados con los clientes.
* El catálogo actualizado en `datos.js` ahora supera los **55 artículos** organizados por las 4 categorías.

### 4.6 Actualización de Estilos ([`estilos.css`](file:///c:/Users/Personal/Documents/proyecto_tienda/estilos.css))
* Incorporación de estilos para el nuevo footer con grid de 3 columnas (`.footer-grid`, `.footer-bloque`).
* Estilos para los botones de redes sociales (`.redes-sociales`, `.red-social`) con colores de marca específicos: verde WhatsApp, azul Facebook, gradiente Instagram y negro TikTok.
* Estilos para la sección de carga remota (`#estado`, `#lista-remota`), incluyendo las clases de estado `.cargando`, `.ok` y `.error` con indicadores visuales diferenciados.

---

## 5. Estado Actual de los Archivos del Proyecto

| Archivo | Estado | Responsabilidad Principal |
| :--- | :---: | :--- |
| [`index.html`](file:///c:/Users/Personal/Documents/proyecto_tienda/index.html) | **100% Operativo** | Estructura semántica, controles de filtrado por 4 categorías, catálogo, tabla de precios, formulario, sección de carga remota y footer con redes sociales. |
| [`estilos.css`](file:///c:/Users/Personal/Documents/proyecto_tienda/estilos.css) | **100% Operativo** | Diseño oscuro tecnológico, bloques por categoría, tarjetas interactivas, badges, botones de pedido, estados de carga y footer con redes. |
| [`datos.js`](file:///c:/Users/Personal/Documents/proyecto_tienda/datos.js) | **100% Operativo** | Base de datos principal con más de 55 artículos organizados por categoría, stock y precios reales. |
| [`datos.json`](file:///c:/Users/Personal/Documents/proyecto_tienda/datos.json) | **100% Operativo** | Catálogo de 37 artículos en formato JSON para pruebas de carga remota con Fetch y jQuery. |
| [`render.js`](file:///c:/Users/Personal/Documents/proyecto_tienda/render.js) | **100% Operativo** | Renderizado del catálogo agrupado por categorías con cabeceras y selección de pedidos. |
| [`eventos.js`](file:///c:/Users/Personal/Documents/proyecto_tienda/eventos.js) | **100% Operativo** | Búsqueda en vivo, filtrado de 4 categorías y confirmación de pedidos vía WhatsApp. |
| [`remoto.js`](file:///c:/Users/Personal/Documents/proyecto_tienda/remoto.js) | **100% Operativo** | Carga asíncrona con Fetch y jQuery (`$.getJSON`), gestión de 3 estados y pintado de tarjetas remotas. |
| [`jquery-panel.js`](file:///c:/Users/Personal/Documents/proyecto_tienda/jquery-panel.js) | **100% Operativo** | Acordeón de FAQ, menú desplegable para móviles y avisos escalonados. |
| [`jquery-3.7.1.min.js`](file:///c:/Users/Personal/Documents/proyecto_tienda/jquery-3.7.1.min.js) | **100% Operativo** | Librería jQuery local para ejecución sin conexión externa. |
| [`app.js`](file:///c:/Users/Personal/Documents/proyecto_tienda/app.js) | **100% Operativo** | Prácticas iniciales de variables y manipulación del DOM sin errores. |
| [`funciones.js`](file:///c:/Users/Personal/Documents/proyecto_tienda/funciones.js) | **100% Operativo** | Funciones de cálculo, flecha, coerción y cierres léxicos (closures). |
| [`imagenes/`](file:///c:/Users/Personal/Documents/proyecto_tienda/imagenes/) | **Reorganizado** | Carpeta unificada con todas las imágenes del proyecto (8 archivos). |
| [`MEMORIA.md`](file:///c:/Users/Personal/Documents/proyecto_tienda/MEMORIA.md) | **Actualizado** | Memoria técnica completa y bitácora de seguimiento al día. |

---

## 6. Plan de Trabajo para la Próxima Sesión

Para retomar el proyecto el día siguiente, se establecen las siguientes prioridades de desarrollo:

### Prioridad 1: Carrito de Compras Básico con `localStorage`
* Añadir un botón *"Agregar al carrito"* en cada tarjeta del catálogo local (además del ya existente *"Pedir este artículo"*).
* Almacenar los productos seleccionados en `localStorage` para que la lista no se pierda al recargar la página.
* Mostrar un icono de carrito flotante con contador de artículos en el header.
* Mostrar un resumen del total acumulado en Bs antes de enviar el formulario.

### Prioridad 2: Personalización de las Redes Sociales
* Reemplazar los enlaces genéricos de Facebook, Instagram y TikTok con las URLs reales de la tienda una vez que los clientes las proporcionen.
* Verificar que el botón de WhatsApp dirige correctamente al número `+591 740 903 98`.

### Prioridad 3: Verificación de Rendimiento y Pruebas en Pantallas Móviles
* Inspeccionar el comportamiento en resolución móvil (375px y 412px) verificando que el botón del menú `#menu-toggle`, la galería de regalos y el nuevo footer con redes sociales se visualicen de forma óptima.
* Comprobar la carga de imágenes desde `imagenes/` para garantizar velocidad y fluidez.

### Prioridad 4: Preparación para Despliegue en Línea
* Crear o actualizar el repositorio en GitHub y habilitar **GitHub Pages** para que el sitio cuente con su URL pública accesible desde cualquier lugar.
* Verificar que `datos.json` se sirva correctamente como recurso estático en el servidor de GitHub Pages (Content-Type: application/json).

---

## 7. Instrucciones para Continuar

1. **Abrir el proyecto:** Abrir la carpeta `c:\Users\Personal\Documents\proyecto_tienda` en el editor.
2. **Visualizar la página:** Abrir el archivo `index.html` con la extensión *Live Server* (necesario para que `fetch` funcione correctamente con `datos.json`).
3. **Comprobar la consola:** Presionar `F12` → pestaña *Console* → verificar que no aparezcan errores rojos.
4. **Probar la carga remota:** En la sección *Catálogo Remoto*, presionar los botones *"Cargar con Fetch"* y *"Cargar con jQuery"* y observar los tres estados en la pestaña *Network*.
5. **Comenzar con la Prioridad 1:** Implementar el carrito básico con `localStorage` en `eventos.js` y `render.js`.

---
*Fin del registro de actividades del 27 de Octubre de 2026. Proyecto listo para continuar mañana.*
