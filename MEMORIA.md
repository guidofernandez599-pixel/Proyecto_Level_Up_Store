# Memoria Técnica del Proyecto: Level Up Store

**Proyecto:** Sitio Web Comercial e Interactivo "Level Up Store"  
**Estudiante / Desarrollador:** Guido Fernandez Ajno  
**Clientes:** Bragin Quispe Mamani y Lucy Gladys Fernandez Ajno  
**Ubicación:** Colquencha, La Paz - Bolivia  
**Fecha de Actualización:** 26 de Octubre de 2026 (Cierre de jornada)  
**Versión:** 2.1 (Integración Dinámica, Rediseño Digital y Recursos Multimedia)  

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
| [`index.html`](file:///c:/Users/Personal/Documents/proyecto_tienda/index.html) | **100% Operativo** | Estructura semántica, controles de filtrado, catálogo, panel y formulario. |
| [`estilos.css`](file:///c:/Users/Personal/Documents/proyecto_tienda/estilos.css) | **100% Operativo** | Diseño oscuro tecnológico, variables CSS, efectos glow, Grid y Flexbox. |
| [`datos.js`](file:///c:/Users/Personal/Documents/proyecto_tienda/datos.js) | **100% Operativo** | Base de datos de productos con precios, stock, imágenes y métodos ES6. |
| [`render.js`](file:///c:/Users/Personal/Documents/proyecto_tienda/render.js) | **100% Operativo** | Generación dinámica de tarjetas HTML en `#lista-productos`. |
| [`eventos.js`](file:///c:/Users/Personal/Documents/proyecto_tienda/eventos.js) | **100% Operativo** | Búsqueda en vivo, filtrado de categorías y validación de formulario. |
| [`jquery-panel.js`](file:///c:/Users/Personal/Documents/proyecto_tienda/jquery-panel.js) | **100% Operativo** | Acordeón de FAQ, menú desplegable para móviles y avisos escalonados. |
| [`jquery-3.7.1.min.js`](file:///c:/Users/Personal/Documents/proyecto_tienda/jquery-3.7.1.min.js) | **100% Operativo** | Librería jQuery local para ejecución sin necesidad de conexión externa. |
| [`app.js`](file:///c:/Users/Personal/Documents/proyecto_tienda/app.js) | **100% Operativo** | Prácticas iniciales de variables y manipulación del DOM sin errores. |
| [`funciones.js`](file:///c:/Users/Personal/Documents/proyecto_tienda/funciones.js) | **100% Operativo** | Funciones de cálculo, flecha, coerción y cierres léxicos (closures). |
| [`MEMORIA.md`](file:///c:/Users/Personal/Documents/proyecto_tienda/MEMORIA.md) | **Actualizado** | Memoria técnica completa y bitácora de seguimiento. |

---

## 5. Plan de Trabajo para la Próxima Sesión (Mañana)

Para retomar el proyecto el día de mañana, se establecen las siguientes prioridades de desarrollo:

### Prioridad 1: Integración con WhatsApp para Confirmación de Pedidos
* Al enviar el formulario de pedidos, generar un enlace directo a la API de WhatsApp (`https://wa.me/59174090398?text=...`) con el mensaje preformateado (nombre del cliente, producto elegido, cantidad y fecha de entrega).
* Permitir que el cliente confirme su compra de manera inmediata desde su teléfono.

### Prioridad 2: Carrito de Compras Básico con `localStorage`
* Añadir un botón *"Agregar al pedido"* en cada tarjeta del catálogo.
* Almacenar los productos seleccionados en `localStorage` para que la lista no se pierda al recargar la página.
* Mostrar un resumen del total a pagar en Bs antes de enviar el formulario.

### Prioridad 3: Verificación de Rendimiento y Pruebas en Pantallas Móviles
* Inspeccionar el comportamiento en resolución móvil (375px y 412px) verificando que el botón del menú `#menu-toggle` y la galería de regalos se visualicen de forma óptima.
* Comprobar la carga de imágenes para garantizar velocidad y fluidez.

### Prioridad 4: Preparación para Despliegue en Línea
* Crear o actualizar el repositorio en GitHub y habilitar **GitHub Pages** para que el sitio cuente con su URL pública accesible desde cualquier lugar.

---

## 6. Instrucciones para Continuar Mañana

1. **Abrir el proyecto:** Abrir la carpeta `c:\Users\Personal\Documents\proyecto_tienda` en el editor.
2. **Visualizar la página:** Abrir el archivo `index.html` en el navegador (haciendo doble clic o utilizando la extensión *Live Server*).
3. **Comprobar la consola:** Presionar `F12` en el navegador para verificar que la pestaña *Console* no reporte ningún error rojo.
4. **Comenzar con la Prioridad 1:** Implementar el enlace a WhatsApp en la función de submit de `eventos.js`.

---
*Fin del registro de actividades del 26 de Octubre de 2026. Proyecto listo para continuar mañana.*
