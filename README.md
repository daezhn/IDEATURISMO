# IDEA Turismo - Delicias, Chihuahua

Plataforma web informativa de tours para el Instituto de Desarrollo Económico y Agropecuario (IDEA) de Delicias, Chihuahua.

## Descripción

Este sitio web presenta los tours y atractivos turísticos de Delicias, Chihuahua, permitiendo a los visitantes explorar y conocer las opciones disponibles de manera fácil e intuitiva.

## Características

### 🌐 Multilingüe
- Soporte para Español e Inglés
- Cambio de idioma dinámico
- Preferencia de idioma guardada localmente

### 🎯 Sistema de Tours
- 8 tours diversos en múltiples categorías:
  - Históricos
  - Gastronómicos
  - Culturales
  - Naturales
  - Aventura
- Filtrado avanzado por categoría, duración y precio
- Búsqueda por palabra clave
- Detalles completos de cada tour con:
  - Itinerario detallado
  - Horarios y precios
  - Calificaciones y testimonios
  - Información de inclusiones

### 📱 Diseño Responsivo
- Optimizado para dispositivos móviles, tabletas y escritorio
- Interfaz amigable e intuitiva
- Navegación fluida

### ✨ Componentes Interactivos
- Carrusel de imágenes en la página principal
- Modales de detalle de tours
- Acordeón de preguntas frecuentes
- Formulario de contacto
- Calendario de disponibilidad
- Sección de promociones especiales

## Estructura del Proyecto

```
IDEATURISMO/
├── index.html              # Página principal
├── css/
│   └── styles.css         # Estilos CSS
├── js/
│   ├── script.js          # Funcionalidad principal
│   ├── translations.js    # Traducciones ES/EN
│   └── tours-data.js      # Base de datos de tours
├── images/                # Imágenes (agregar según necesidad)
└── data/                  # Datos adicionales
```

## Cómo Usar

### Desarrollo Local

1. Clonar el repositorio:
```bash
git clone https://github.com/daezhn/IDEATURISMO.git
cd IDEATURISMO
```

2. Abrir con un servidor HTTP local:
```bash
# Opción 1: Python
python3 -m http.server 8080

# Opción 2: Node.js
npx http-server -p 8080

# Opción 3: PHP
php -S localhost:8080
```

3. Abrir en el navegador: `http://localhost:8080`

### Despliegue

El sitio es 100% estático y puede desplegarse en:
- GitHub Pages
- Netlify
- Vercel
- Cualquier servidor web estático

## Personalización

### Agregar Nuevos Tours

Editar el archivo `js/tours-data.js` y agregar nuevos objetos al array `toursData`:

```javascript
{
    id: 9,
    title: {
        es: "Nombre del Tour",
        en: "Tour Name"
    },
    category: "categoria",
    description: {
        es: "Descripción en español",
        en: "Description in English"
    },
    duration: 180, // minutos
    price: 250,
    rating: 4.8,
    reviews: 50,
    // ... más campos
}
```

### Modificar Traducciones

Editar el archivo `js/translations.js` para agregar o modificar traducciones.

### Cambiar Estilos

Editar el archivo `css/styles.css`. Las variables CSS principales están definidas en `:root`:

```css
:root {
    --primary-color: #2c5f2d;
    --secondary-color: #97bc62;
    --accent-color: #f39c12;
    /* ... más variables */
}
```

## Tecnologías Utilizadas

- HTML5
- CSS3 (Variables CSS, Flexbox, Grid)
- JavaScript Vanilla (ES6+)
- Sin dependencias externas

## Navegadores Soportados

- Chrome/Edge (últimas 2 versiones)
- Firefox (últimas 2 versiones)
- Safari (últimas 2 versiones)
- Opera (últimas 2 versiones)

## Contacto

Para más información sobre el IDEA:
- Ubicación: Delicias, Chihuahua, México
- Instituto de Desarrollo Económico y Agropecuario

## Licencia

© 2024 IDEA - Instituto de Desarrollo Económico y Agropecuario. Todos los derechos reservados.
