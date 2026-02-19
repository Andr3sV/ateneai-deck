# Imágenes de la presentación Mango

En **Mango** (`/en/b/mango`, `/es/b/mango`) las imágenes se cargan desde `public/images/mango/` cuando existen ahí. Así puedes usar imágenes distintas solo para Mango sin afectar al resto de presentaciones (marketing, exec, etc.).

## Cómo usarlo

1. Crea la carpeta `public/images/mango/` si no existe.
2. Copia o crea los archivos con **exactamente** estos nombres dentro de `public/images/mango/`:

## Listado de archivos (rutas dentro de `public/images/mango/`)

| Archivo | Slide donde se usa | Ruta original (resto de presentaciones) |
|---------|--------------------|-----------------------------------------|
| `bat.png` | Share of Voice | `/bat.png` |
| `bat2.png` | Share of Voice | `/bat2.png` |
| `citations.png` | Citation Tracking | `/citations.png` |
| `sentiment-analysis.png` | Sentiment Analysis | `/images/dashboard/sentiment-analysis.png` |
| `platform.png` | Platform Performance | `/platform.png` |
| `executive-overview.png` | Executive Overview | `/images/dashboard/executive-overview.png` |
| `op.png` | Citation Evidence | `/op.png` |

(El logo AteneAI `logoateneaip.svg` es común a todas las presentaciones y no se sustituye en Mango.)

## Hero de Mango (solo Mango)

La primera slide de Mango usa además:

| Archivo | Ubicación actual |
|---------|------------------|
| `mango-logo.svg` | `public/images/mango/mango-logo.svg` |

Este logo ya está en la carpeta Mango; puedes sustituirlo ahí.

## Resumen de rutas absolutas

Para sustituir imágenes solo en Mango, coloca tus archivos en:

```
public/images/mango/bat.png
public/images/mango/bat2.png
public/images/mango/citations.png
public/images/mango/sentiment-analysis.png
public/images/mango/platform.png
public/images/mango/executive-overview.png
public/images/mango/op.png
public/images/mango/mango-logo.svg
```

Si un archivo no existe en `public/images/mango/`, se usará la imagen original de la ruta global (el resto de presentaciones no cambia).
