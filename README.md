# README del Frontend

## Descripción

Este es un proyecto frontend que consume el endpoint `/futbolista` y muestra los datos en una tabla.

## Imagenes del Proyecto

![Interfaz 1](https://raw.githubusercontent.com/AngelOU20/pb-frontend-civa/main/public/capturas/Captura1.png)

![Interfaz 2](https://raw.githubusercontent.com/AngelOU20/pb-frontend-civa/main/public/capturas/Captura2.png)

![Interfaz 3](https://raw.githubusercontent.com/AngelOU20/pb-frontend-civa/main/public/capturas/Captura3.png)

## Requisitos Obligatorios

- **Manejo de Estado**: Se utiliza `useState` para gestionar el estado de la aplicación.
- **Obtención de Datos**: Se implementa la función `fetch` junto con `useEffect` para obtener datos del backend.
- **Repositorio Remoto**: Los cambios se suben a un repositorio remoto.

## Requisitos Opcionales

- **Detalle de Futbolista**: Se puede consumir el endpoint `/futbolista/{id}` para mostrar los datos en un alerta u otra pestaña.
- **Uso de TypeScript**: El proyecto utiliza TypeScript para un mejor manejo de tipos.

## Instrucciones

1. Clonar el repositorio: `git clone <url_del_repositorio>`
2. Instalar dependencias: `npm install`
3. Ejecutar la aplicación: `npm start`

## Estructura del Proyecto

- **src/**
  - **components/**: Componentes reutilizables de la aplicación.
  - **hooks/**: Hooks personalizados para la lógica de la aplicación.
  - **pages/**: Páginas principales de la aplicación.
  - **services/**: Funciones para interactuar con el backend.
  - **assets/**: Archivos estáticos como imágenes y estilos.
  - **App.tsx**: Componente principal de la aplicación.
  - **index.tsx**: Punto de entrada de la aplicación.
  - **...**: Otros archivos y directorios según sea necesario.

## Recursos Adicionales

- Documentación de React: [Documentación de React](https://es.reactjs.org/docs/getting-started.html)
- Documentación de TypeScript: [Documentación de TypeScript](https://www.typescriptlang.org/docs/)
- Tutorial de Fetch API: [MDN Web Docs](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)
