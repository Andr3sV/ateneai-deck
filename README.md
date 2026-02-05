# AteneAI Deck

Presentación estilo Canva para AteneAI. Cada sección de la landing (inspiration) es una slide, con transiciones suaves y barra de controles tipo Canva.

## Tech stack

- **Next.js** (App Router)
- **Tailwind CSS**
- **Shadcn** (Badge, utilidades)
- **Framer Motion** (transiciones entre slides, estilo [React Bits](https://reactbits.dev/))
- **Lucide React** (iconos)

## Cómo levantar en local (puerto 3005)

```bash
npm install
npm run dev
```

Abre [http://localhost:3005](http://localhost:3005).

- **Flechas** o **espacio**: siguiente slide  
- **Flecha izquierda**: anterior slide  
- Barra inferior: navegación, indicador de progreso (1/9) y controles (grid, zoom, full screen)

No hay header ni footer; solo el contenido de cada slide y la barra de controles abajo.
