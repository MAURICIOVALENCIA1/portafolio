# Portafolio de Harold Valencia

Portafolio personal en React, Vite y Tailwind CSS, preparado para ejecutarse
localmente y publicarse en Vercel. El sitio funciona sin backend y ofrece modo
claro y oscuro.

## Requisitos

- Node.js 20 o posterior.
- npm.

## Ejecutar en local

1. Abra una terminal en la carpeta `portafolio-harold-valencia`.
2. Instale las dependencias:

   ```bash
   npm install
   ```

3. Inicie el servidor de desarrollo:

   ```bash
   npm run dev
   ```

4. Abra en el navegador la dirección local que muestra Vite.

Antes de publicar, revise los campos `[PENDIENTE]`, en especial las fechas de
experiencia, años o instituciones que falten, tecnologías de cada repositorio y
el enlace de LinkedIn.

## Cómo editar el contenido

- `src/data/perfil.js`: nombre, ciudad, titular, correo y enlaces personales.
- `src/data/proyectos.js`: descripciones, tecnologías, enlaces y estado
  destacado de cada proyecto. Cambie `destacado` a `true` para mostrar una
  tarjeta entre los primeros proyectos.
- `src/data/experiencia.js`: fechas, funciones y logros.
- `src/data/habilidades.js`: elementos de “Uso a diario” y “En aprendizaje”.
- `src/data/certificados.js`: formación, institución, año, horas y enlace
  opcional a una verificación pública.
- `src/locales/es.js`: textos de la interfaz en español. Se puede añadir otro
  archivo de idioma aquí en el futuro.

Los certificados se presentan como texto; no agregue diplomas escaneados,
códigos de verificación ni datos personales a las tarjetas.

## Cómo reemplazar las capturas

1. Guarde una imagen propia optimizada en `public/images/proyectos/`.
2. Abra `src/data/proyectos.js`.
3. En el proyecto correspondiente, actualice `imagen` con la ruta pública,
   por ejemplo `/images/proyectos/volscan.webp`.
4. Cambie `alt` por una descripción breve y útil de la captura.

La imagen provisional `public/images/proyectos/captura-pendiente.svg` es una
maqueta genérica, no una captura real de los proyectos.

## Construir y revisar

```bash
npm run build
npm run preview
```

La salida optimizada queda en `dist/`. La configuración de Vercel está en
`vercel.json`.

## Subir a GitHub

1. Cree en GitHub un repositorio vacío para el portafolio.
2. Abra una terminal dentro de `portafolio-harold-valencia`.
3. Inicialice Git y suba la rama principal:

   ```bash
   git init
   git add .
   git commit -m "Crear portafolio de Harold Valencia"
   git branch -M main
   git remote add origin https://github.com/USUARIO/REPOSITORIO.git
   git push -u origin main
   ```

4. Reemplace `USUARIO/REPOSITORIO` por la ruta del repositorio que creó.

## Publicar en Vercel

1. Inicie sesión en [Vercel](https://vercel.com/) y seleccione **Add New
   Project**.
2. Importe el repositorio de GitHub del portafolio.
3. Confirme el preset **Vite**. Vercel detectará `npm install` y
   `npm run build`; la carpeta de salida es `dist`.
4. Seleccione **Deploy** y espere a que termine la compilación.
5. Abra la URL generada y revise la versión móvil, los enlaces y los dos temas.

También puede desplegar desde la terminal con Vercel CLI, pero la importación
del repositorio es suficiente para este sitio estático.
