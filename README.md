# Trabajo Final Seminario Angular 2025

---

## Estudiante

- Agustina Quinteros   
- 43.056.949  
- 21agustinaa@gmail.com  
- Tandil

---

## Tematica del proyecto

El proyecto consiste en el desarrollo de una aplicación web de **indumentaria**. El objetivo es mostrar un catálogo de productos, permitir la interacción mediante formularios y consumir datos de una API externa.

- **Ruteo:** Dos secciones principales con rutas distintas, catálogo de productos (/productos) y contacto(/about).
- **Componentes:** Cada página está compuesta por múltiples componentes para modularizar la aplicación.
- **Directivas:** Se emplean directivas estructurales `*ngFor` y `*ngIf` para controlar la visualización dinámica de listas y condicionales.
- **Comunicación entre componentes:** Implementada a través de servicios compartidos y también mediante `@Input` y `@Output`.
- **Carrito de Compras:** Se implementó un carrito que permite agregar productos desde el catálogo. El carrito mantiene el estado de los productos seleccionados y los muestra al usuario. Los productos se obtienen mediante un `GET` consumiendo la API externa.
- **Consumo de API externa:** Tanto la obtención de productos (`GET`) como el envío del formulario de contacto (`POST`) utilizan una API externa simulada mediante MockAPI.
- **Formulario Reactivo:** El formulario de contacto cuenta con validaciones en tiempo real, implementado con Reactive Forms.



