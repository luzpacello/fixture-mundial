# 🏆 Fixture Mundial 2026

Aplicación web interactiva, responsiva y ultra fluida diseñada para gestionar y predecir los resultados de las fases de eliminación directa del mundial (Fase de 32, Octavos, Cuartos, Semifinales, Tercer Puesto y la Gran Final). 

Desarrollado con una estética moderna basada en *Glassmorphism* sobre un esquema oscuro de alta fidelidad visual.

---

## ✨ Características Principales

*   **🌐 Buscador de Países Interactivo:** Filtra y selecciona selecciones nacionales en tiempo real mediante un menú desplegable dinámico conectado a la API de banderas de [Flagcdn](https://flagcdn.com/).
*   **💾 Persistencia Local (LocalStorage):** No pierdas tus predicciones. Los equipos seleccionados, sus respectivas banderas y los goles anotados se guardan automáticamente en tiempo real mientras escribes, manteniendo tus datos intactos incluso al recargar la página.
*   **🎨 Interfaz de Alta Prioridad Visual (Smart Z-Index):** Sistema inteligente mediante JavaScript que eleva dinámicamente la tarjeta del partido que estás editando para que los menús flotantes se muestren siempre por encima de las grillas inferiores sin superposiciones molestas.
*   **📱 Diseño 100% Responsivo:** Estructurado mediante CSS Grid (`repeat(auto-fit, minmax(300px, 1fr))`) para adaptarse con total naturalidad desde pantallas de escritorio hasta dispositivos móviles.
*   **🧼 Coherencia en Arquitectura de Datos:** Identificación unificada de llaves eliminatorias utilizando nomenclatura técnica pura (Equipo 1 y Equipo 2) aislando por completo la lógica obsoleta de local/visitante.

---

## 🛠️ Tecnologías Utilizadas

*   **HTML5** - Estructura semántica avanzada con contenedores dinámicos integrados en el DOM.
*   **CSS3** - Diseño basado en Grid Layout, Flexbox, variables personalizadas y efectos de desenfoque de fondo (*backdrop-filter: blur*).
*   **JavaScript (Vanilla)** - Lógica del negocio pura basada en delegación de eventos globales, manipulación dinámica del DOM y persistencia de estado.

---

## 🚀 Instalación y Uso Local

Si querés probar o seguir desarrollando este proyecto en tu computadora, seguí estos sencillos pasos:

1. **Clona el repositorio:**
```bash
   git clone [https://github.com/luzpacello/fixture-mundial.git](https://github.com/luzpacello/fixture-mundial.git)
```
2. **Ingresa a la carpeta del proyecto:**

```Bash
   cd fixture-mundial
```
3. **Ejecuta la aplicación:**
> Al ser desarrollo frontend puro con JavaScript de navegador, no necesitas configurar servidores pesados. Basta con abrir el archivo index.html en tu navegador o levantar un servidor local rápido utilizando extensiones como Live Server en VS Code.
