## IDEA Turismo · Delicias, Chihuahua

Frontend de la nueva plataforma turística del Instituto de Desarrollo Económico y Agropecuario (IDEA) de Delicias. La experiencia se inspira en el estilo editorial de [discoverlosangeles.com](https://www.discoverlosangeles.com/) e incorpora secciones personalizadas para el destino chihuahuense.

### Características principales
- **Hero inmersivo** con búsqueda rápida, chips temáticos y CTA para planificar el viaje.
- **Experiencias curadas** con tarjetas dinámicas y enlaces a itinerarios.
- **Agenda de eventos** con carrusel de tarjetas que destacan categoría, fecha y ubicación.
- **Barrios y zonas clave**, planificador con recomendaciones oficiales y un bloque teaser para el mapa interactivo.
- **Formulario de newsletter/contacto** y pie institucional alineado con la identidad del municipio.

### Stack técnico
- [Next.js 14 (App Router)](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [framer-motion](https://www.framer.com/motion/) para animaciones fluidas en cliente
- [lucide-react](https://lucide.dev/) para iconografía

### Scripts disponibles

```bash
npm run dev    # levanta el servidor en http://localhost:3000
npm run build  # genera la versión listada para producción
npm run start  # ejecuta la build en modo producción
npm run lint   # corre ESLint sobre el proyecto
```

### Estructura relevante

- `src/app/page.tsx`: Landing principal con todas las secciones y datos mock.
- `src/app/layout.tsx`: Metadatos globales y setup de fuentes.
- `src/app/globals.css`: Tokens globales, tipografías y ajustes base.
- `public/`: Espacio para futuros assets locales (logos, fotos oficiales, etc.).

### Próximos pasos sugeridos
1. Reemplazar imágenes de Unsplash por fotografías oficiales y configurar dominios adicionales en `next.config.ts`.
2. Conectar el formulario de newsletter al CRM/correo institucional.
3. Sustituir contenido estático por datos provenientes de un CMS o API municipal.
4. Implementar el mapa interactivo planeado (Leaflet/Mapbox + datos GeoJSON).

### Despliegue en Vercel
1. Asegúrate de tener una cuenta en [Vercel](https://vercel.com/).
2. Importa este repositorio y deja “Framework Preset: **Next.js**”.
3. Variables de entorno: no se requieren por ahora.
4. Continuos deploys: cada push a `main` (o la rama configurada) disparará un nuevo build.

---

¿Dudas o ideas adicionales? Escríbelas en los issues del repo o contacta al equipo de IDEA Turismo para priorizarlas.
