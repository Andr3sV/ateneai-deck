"use client";

import React, { createContext, useContext } from "react";

/**
 * Cuando estás en la deck de Mango (/en/b/mango, /es/b/mango), las imágenes
 * se cargan desde public/images/mango/ usando el mismo nombre de archivo.
 * Así puedes sustituir solo las imágenes de Mango sin afectar al resto de presentaciones.
 */
const MangoImagesContext = createContext<string | null>(null);

export function MangoImagesProvider({ children }: { children: React.ReactNode }) {
  return (
    <MangoImagesContext.Provider value="/images/mango">
      {children}
    </MangoImagesContext.Provider>
  );
}

/**
 * En Mango devuelve /images/mango/<nombre_archivo>; si no, la ruta original.
 * Coloca tus imágenes en public/images/mango/ con el mismo nombre (ver MANGO-IMAGES.md).
 */
export function useMangoImageSrc(originalPath: string): string {
  const base = useContext(MangoImagesContext);
  if (!base) return originalPath;
  const filename = originalPath.split("/").pop() ?? originalPath;
  return `${base}/${filename}`;
}
