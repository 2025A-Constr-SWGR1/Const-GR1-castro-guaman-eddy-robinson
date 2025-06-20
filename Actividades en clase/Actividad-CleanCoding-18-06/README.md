
# Conversor de Moneda 💱

## Descripción

Este aplicativo permite convertir entre monedas (USD, EUR, GBP)
usando tasas de cambio fijas. 

## Nombre de los Estudiantes:
**Eddy Castro**.
**Daniel Macias**.

## 📁 Estructura del Proyecto

```

Actividad-CleanCoding-18-06/
│
├── data/
│   └── tasas.js          
│
├── src/
│   ├── conversor.js      
│   ├── interfaz.js       
│   └── index.js          
│
├── index.html            
└── README.md             

````



## 🧼 Buenas prácticas aplicadas

### ✅ Nombres significativos y pronunciables  
**Archivo:** `conversor.js`, `interfaz.js`  
Se usaron nombres descriptivos como `convertirMoneda`, `cantidad`, `monedaOrigen`, en lugar de abreviaciones poco claras como `x`, `val`, `src`.


### ✅ Funciones con una sola responsabilidad  
**Archivo:** `conversor.js`  
La función `convertirMoneda` se enfoca exclusivamente en la conversión matemática y validación. No se encarga de mostrar nada ni interactuar con el usuario.

---

### ✅ Separación de abstracciones  
**Archivo:** `interfaz.js`  
La función `inicializarInterfaz()` se encarga únicamente del manejo del DOM. Toda la lógica de cálculo está separada.

---

### ✅ Uso de objetos como argumentos  
**Archivo:** `conversor.js`  
Para mejorar la legibilidad, `convertirMoneda` recibe un objeto con propiedades desestructuradas:
```js
convertirMoneda({ cantidad, origen, destino })
````

---

### ✅ Evitar código duplicado

**Archivo:** `tasas.js`
Las tasas de cambio se centralizaron en un solo objeto para evitar duplicaciones y facilitar futuras modificaciones.

---

### ✅ Manejo explícito de errores

**Archivo:** `conversor.js`
En caso de que no exista una tasa de cambio válida, se lanza un error controlado:

```js
if (!tasa) {
  throw new Error(`No hay tasa para convertir de ${origen} a ${destino}`);
}
```

---

### ✅ Evitar efectos secundarios innecesarios

**Archivo:** `convertirMoneda`
La función no modifica ningún estado global ni externo, solo devuelve un nuevo valor calculado.

---

### ✅ Comentarios mínimos y útiles

**Archivo:** `interfaz.js`
Se usan comentarios solo cuando el propósito no es evidente a simple vista (por ejemplo, control de errores en el DOM).



## 🚀 Cómo ejecutarlo

Ejecutar el archivo `index.html` en algún navegador como servidor local.

---
