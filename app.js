/* ═════════════════════════════════════════════════════════════════════════
   DEMO DEL DÍA 5 - Primer contacto con JavaScript (sin cambios hoy)
   ═════════════════════════════════════════════════════════════════════════ */


const negocio = "Level Up Store";
const anioFundacion = 2016;

// ── 2. VARIABLES ────────────────────────────────────────────────────────

let MarcadoresSabonis = 40;
MarcadoresSabonis = 35;                   

let ColoresFabelCastel = 20;
MarcadoresSabonis = 17; 

let BoligrafosAzulesSabonis = 50;
BoligrafosAzulesSabonis = 35; 

let BoligrafosAzulesMonami = 50;
BoligrafosAzulesMonami = 20; 

let BoligrafosRojosSabonis = 50;
BoligrafosRojosSabonis = 49; 

let oso;

// ── 3. TIPOS ────────────────────────────────────────────────────────────

const precioColoresFabelCastel = 10;                // number
const precioMarcadoresSabonis = 25;                 // number
const precioBoligrafosAzulesSabonis = 1.5;          // number
const precioBoligrafosRojosSabonis = 1.5;           // number
const precioBoligrafosAzulesMonami = 1.5;           // number
const abiertoHoy = true;                            // boolean
const promoViernes2x1 = null;                       // vacío a propósito
let Celular;                                        // undefined: declarada, todavía sin valor

console.log("tipos:", typeof negocio, typeof precioColoresFabelCastel, typeof precioMarcadoresSabonis, 
typeof precioBoligrafosAzulesSabonis, typeof precioBoligrafosRojosSabonis, typeof precioBoligrafosAzulesMonami, 
typeof abiertoHoy);
console.log("null es", promoViernes2x1, "| sin asignar es", Celular);

// ── 4. TEMPLATE LITERAL ─────────────────────────────────────────────────

const resumen = `${negocio} abrió en ${anioFundacion}, hoy quedan ${MarcadoresSabonis} Marcadores Sabonis. tambien
${ColoresFabelCastel} Colores Fabel Castel. tambien: ${BoligrafosAzulesSabonis} Boligrafos azules SABONIS. tambien
${BoligrafosAzulesMonami} Boligrafos azules MONAMI. como tambien ${BoligrafosRojosSabonis} Boligrafos Rojos MONAMI.`;
console.log(resumen);

// ── 5. COMPARACIÓN ──────────────────────────────────────────────────────

console.log("40" == MarcadoresSabonis);
console.log("25" == ColoresFabelCastel); 
console.log("1.5" == BoligrafosAzulesSabonis); 
console.log("1.5" == BoligrafosAzulesMonami);
console.log("1.5" == BoligrafosRojosSabonis);  

console.log("40" === MarcadoresSabonis);
console.log("25" === ColoresFabelCastel); 
console.log("1.5" === BoligrafosAzulesSabonis); 
console.log("1.5" === BoligrafosAzulesMonami);
console.log("1.5" === BoligrafosRojosSabonis);   

// ── 6. PRIMER CAMBIO EN LA PÁGINA ───────────────────────────────────────

const subtitulo = document.querySelector("header p");
if (subtitulo) {
  subtitulo.textContent = `Libreria, internet y tienda de regalos en Colquencha - ¡Disponibles ${BoligrafosRojosSabonis} boligrafos rojos y más útiles!`;
}

// ── LA PREGUNTA DEL DÍA ─────────────────────────────────────────────────
// Un texto cambiado desde la consola desaparece al recargar: se tocó la
// copia en memoria, no index.html. El de la línea 72 vuelve porque app.js
// corre otra vez en cada carga. Guardar de verdad llega el Día 13.

