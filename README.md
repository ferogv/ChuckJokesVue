# 😂 ChuckJokesVue
### Minimal Vue 3 + Vite app — Responsive Chuck Norris jokes grid

Proyecto académico desarrollado en el curso **Activity 12 / Homework 10**.  
La aplicación muestra una lista de chistes de Chuck Norris como tarjetas responsivas, usando componentes Vue y un tema oscuro.

---

## ✨ Descripción

El sistema permite:
- Almacenar el arreglo `chuck` en `App.vue` con objetos `{ icon_url, value }`.  
- Renderizar chistes como tarjetas responsivas mediante el componente reutilizable `ChuckCard.vue`.  
- Layout adaptable: 3 tarjetas por fila en pantallas grandes, 2 en medianas, 1 en pequeñas.  
- Tarjetas con tamaño uniforme, botón de copiar y estilos en tema oscuro (`src/assets/styles.css`).  

---

## 🛠️ Tecnologías utilizadas

- **Frontend:** Vue 3, Vite  
- **Estilos:** Bootstrap (CDN), CSS personalizado (dark theme)  
- **Herramientas:** npm, Node.js (20.x o 22.x)  

---

## 📂 Estructura del proyecto

```
index.html              # Entrada Vite, incluye Bootstrap y estilos
src/
 ├── main.js            # Monta la app
 ├── App.vue            # Vista principal, provee datos y renderiza grid
 ├── components/
 │    └── ChuckCard.vue # Componente tarjeta (props: icon_url, value)
 └── assets/styles.css  # Estilos globales y tema oscuro
public/                 # Assets estáticos (ej. avatar opcional)
package.json, vite.config.js, README.md
```

---

## ⚙️ Instalación y ejecución local

### Prerrequisitos
- Node.js 20.x o 22.x  
- npm

### Pasos

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
# o en PowerShell (Windows)
.\node_modules\.bin\vite.cmd
```

Abrir la URL local que imprime Vite (por defecto `http://localhost:5173/`).

**Notas:**
- Si colocas avatares en `public/`, usa rutas como `/chuck-norris.png`.  
- Asegúrate de importar `./assets/styles.css` en `src/main.js` para cargar el tema.  

---

## 📦 Build / Preview

```bash
npm run build
npm run preview
```

---

## 📈 Homework 10 / Task10 summary

- Creación de `src/components/ChuckCard.vue` con props `icon_url` y `value`.  
- Actualización de `src/App.vue` para renderizar el grid responsivo (`col-12 col-md-6 col-lg-4 d-flex`).  
- Inclusión de Bootstrap CSS vía CDN en `index.html`.  
- Estilos flex en `ChuckCard.vue` y overrides en `src/assets/styles.css` para tamaño uniforme.  
- Implementación de botón Copy to Clipboard en cada tarjeta.  

---

## 👨‍💻 Autor

**Fernando Gorostieta Vargas**  
Proyecto académico — Universidad Tecmilenio, Cancún, México  

---

## 📄 Licencia

MIT
