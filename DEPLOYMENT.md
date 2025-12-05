# Guía de Despliegue

Esta guía te ayudará a publicar tu proyecto "Z RedDecoHome" en internet.

## Opción 1: GitHub Pages (Recomendada)

Esta opción es ideal si ya tienes tu código en GitHub.

1.  **Instalar dependencia**:
    Abre una terminal en la carpeta del proyecto y ejecuta:
    ```bash
    npm install gh-pages --save-dev
    ```

2.  **Configurar repositorio**:
    Asegúrate de que tu proyecto esté conectado a un repositorio de GitHub.

3.  **Desplegar**:
    Ejecuta el siguiente comando:
    ```bash
    npm run deploy
    ```
    Esto creará una rama `gh-pages` en tu repositorio y subirá los archivos de la carpeta `dist`.

4.  **Verificar**:
    Ve a la configuración de tu repositorio en GitHub -> Pages. Deberías ver que tu sitio está publicado en `https://<tu-usuario>.github.io/z-reddecohome`.

## Opción 2: Netlify

1.  Ve a [Netlify](https://www.netlify.com/) e inicia sesión.
2.  Haz clic en "Add new site" -> "Import an existing project".
3.  Conecta con GitHub y selecciona tu repositorio.
4.  Configura los ajustes de construcción:
    *   **Build command**: `npm run build`
    *   **Publish directory**: `dist`
5.  Haz clic en "Deploy site".

## Opción 3: Vercel

1.  Ve a [Vercel](https://vercel.com/) e inicia sesión.
2.  Haz clic en "Add New..." -> "Project".
3.  Importa tu repositorio de GitHub.
4.  Vercel detectará automáticamente que es un proyecto Vite.
5.  Haz clic en "Deploy".

## Verificación Local

Antes de desplegar, siempre es bueno probar la versión de producción localmente:

```bash
npm run build
npm run preview
```
